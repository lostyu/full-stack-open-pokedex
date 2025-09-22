const express = require('express')
const app = express()
const path = require('path')

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'dist')))

// app.listen(PORT, () => {
//   console.log(`server started on port ${PORT}`)
// })
app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
  })
}

module.exports = app
