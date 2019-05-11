import express from 'express'
import NumberService from './src/NumberService'

var app = express();

app.get('/:id', (req, res) => {
  var service = new NumberService(req.params.id)
  var numeroExtenso = service.parseToFull()
  var response

  if (numeroExtenso == false) {
    response = 'Não é um número válido'
  } else {
    response = {
      extenso: numeroExtenso
    }
  }

  res.send(response)
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
