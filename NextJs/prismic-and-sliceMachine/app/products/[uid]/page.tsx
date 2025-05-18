

import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'
// import { promises } from 'dns'
// import { useParams } from 'next/navigation'
import React from 'react'

type Props = {
  params: Promise<{
    uid: string
  }>
}

async function Page(proos: Props) {
  const { uid } = await proos.params
  const client = createClient()
  // const { id } = await params

  console.log(uid)

  const page = await client.getByUID("productID", uid)
  console.log(page)
  return (
    <SliceZone slices={page.data.slices} components={components} />
  )
}

export default Page