import express from 'express'
import routes from '../routes/index'

const app = express()
const port = 3000

app.use('/api', routes)

app.listen(port, () => {
  console.log(`srever start at http://localhost:${port}`)
})

export default app
