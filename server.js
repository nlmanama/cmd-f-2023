const express = require('express')
const app = express()
const port = 3000
const cohere=require('cohere-ai')
cohere.init('M3RsLP1R5ACYUQM0qhMKdBx8qVK2JOBXxZ9dzCk3');
const cors=require('cors')
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.text())


app.post('/', async (req, res) =>  {
    console.log(req.body)
    const response = await cohere.summarize({
        text: req.body,
        length: "short",
    })
    let sum = response.body.summary;
    res.send(sum);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})