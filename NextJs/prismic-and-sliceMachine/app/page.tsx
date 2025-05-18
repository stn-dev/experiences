import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import '@/app/globals.css'
export default async function Home() {
  const client = createClient()
  const page = await client.getSingle('homepage')
  console.log(page)
  return (
    <div>
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}
