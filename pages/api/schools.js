import { Client } from 'pg'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async (req, res) => {
  const pg = new Client({
    // TODO: fill out connection info with connection string provided
    connectionString: process.env.dbconnection
  })

  await pg.connect()
  // const {bbox} = JSON.parse(req.body)
  // TODO: query for schools in the bounding box
  const { rows } = await pg.query('SELECT *, ST_X(geom) as long, ST_Y(geom) as lat FROM schools LIMIT 30')
  res.send(rows)
  await pg.end()
}
