const express =require('express')
const app = express()
const PORT = 3000

app.get('/',(req, res) =>
        res.send('Hello World!-7376221CS306'))

app.listen(PORT, () => console.log(
    'Example app listening at http://localhost:${PORT}'))