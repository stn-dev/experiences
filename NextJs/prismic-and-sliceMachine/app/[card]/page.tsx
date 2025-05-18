import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'
import React from 'react'

interface Params {
  params: Promise<{ card: string }>
}

async function page({ params }: Params) {
  const { card } = await params
  const client = createClient()
  const page = await client.getByUID('blog', card)
  console.log(page)
  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  )
}

export default page