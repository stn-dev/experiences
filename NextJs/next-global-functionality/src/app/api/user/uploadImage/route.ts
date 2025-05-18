import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import fs from "node:fs/promises";
import {v4 as uuidv4} from 'uuid'

export const POST = async (req : Request) => {

    const url = new URL(req.url)
    const searchParams = new URLSearchParams(url.search)

    const fileName = searchParams.get("fileName")
    const lastFileName = searchParams.get('lastFileName')

    console.log(`the fileName is => ${fileName} and the last file name is =< ${lastFileName}`)


    try {

        const formData = req.formData()
        const file = (await formData).get('file') as File

        if(file.name) {
            const arrayBuffer = await file.arrayBuffer();
            const buffer = new Uint8Array(arrayBuffer);
            if(lastFileName) {
                await fs.unlink(`./public/uploads/${lastFileName}`);
            }
            await fs.writeFile(`./public/uploads/${fileName}`, buffer);

            revalidatePath("/");
    
            return NextResponse.json(
                {
                    ok : true,
                    message : "image posted"
                } ,
                {status : 200}
            );

        } else {
            return NextResponse.json(
                {
                    ok : true,
                    message : "no image posted"
                } ,
                {status : 203}
            )
        }

    } catch (e) {
        console.error(e);

        return NextResponse.json(
            {
                ok : false,
                message : "image not posted"
            } ,
            {status : 500}
        );

    }

}


export const DELETE = async (req : Request) => {

    const url = new URL(req.url)

    const searchParams = new URLSearchParams(url.search)

    const fileName = searchParams.get("fileName")

    console.log(`the fileName is => ${fileName}`)


    try {

            await fs.unlink(`./public/uploads/${fileName}`)

            revalidatePath("/");
    
            return NextResponse.json(
                {
                    ok : true,
                    message : "image deleted"
                } ,
                {status : 200}
            );


    } catch (e) {
        console.error(e);

        return NextResponse.json(
            {
                ok : false,
                message : "image not posted"
            } ,
            {status : 500}
        );

    }
}