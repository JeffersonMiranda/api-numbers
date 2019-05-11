import NumbersFull from './NumbersInFull'

export default class NumberService {

  constructor(number) {
    this.number = number
    this.numbersSplit = [...this.number].filter(caractere => this.isNumber(caractere)).reverse()
    this.numbersLength = this.numbersSplit.length
    this.positiveNumber = this.number < 0 ? this.number * -1 : this.number
    this.numberInFull = ''
  }

  setMilha(valor, contador) {
    if (contador == 3) {
      return valor == 'um' ? ' mil' : valor + ' mil'
    } else {
      return valor
    }
  }

  greaterThanZero(value) {
    return parseInt(value) > 0
  }

  isNumber(caractere) {
    return !isNaN(caractere)
  }

  parseToFull() {
    if (!(this.isNumber(this.number))) return false

    var ordem
    var digito
    var valor

    if (this.number == 0) {
      this.numberInFull = 'zero'
    } else if (this.positiveNumber == 100) {
      this.numberInFull = 'cem'
    } else if (this.positiveNumber <= 19) {
      this.numberInFull = NumbersFull[0][this.positiveNumber - 1]
    } else {
      for(let count = 0; count < this.numbersLength; count++) {
        if (count == 3) {
         ordem = 0
        } else if (count == 4) {
         ordem = 1
        } else {
         ordem = count
        }

        digito = this.numbersSplit[count];
        valor = this.greaterThanZero(digito) ? NumbersFull[ordem][digito - 1] : ' '
        valor = this.setMilha(valor, count)
        valor = this.greaterThanZero(digito) && (digito || this.numbersSplit[count + 1]) && count != this.numbersLength - 1 ? ' e ' + valor : valor

        this.numberInFull = valor + this.numberInFull
      }
    }

    this.numberInFull = this.number < 0 ? 'menos ' + this.numberInFull : this.numberInFull
    return this.numberInFull
  }
}
