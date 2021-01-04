import { Client } from 'pg'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async (req, res) => {
  const pg = new Client({
    // TODO: fill out connection info with connection string provided
  })

  await pg.connect()
  const {bbox} = JSON.parse(req.body)
  await pg.connect()
  // TODO: query for schools in the bounding box
  await pg.end()
}
