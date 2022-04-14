import app from './app.js'
import {HOST , PORT} from './config.js'
import {connectToDB} from './utils/mongoose.js'

async function main() {

  const host = HOST
  const port = PORT
  
  app.listen(port , host => {
    console.log('Server is running on port', 4000)
  })
  await connectToDB()
  
}

main()