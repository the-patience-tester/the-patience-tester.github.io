import { Component, type OnInit } from '@angular/core'
import { CalculatorIds } from './calculator.component.ids'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  Ids: CalculatorIds = new CalculatorIds()
  input: string = ''
  result: string = ''

  pressNum (num: string): void {
    // Do Not Allow . more than once
    if (num === '.') {
      if (this.input !== '') {
        const lastNum = this.getLastOperand()
        console.log(lastNum.lastIndexOf('.'))
        if (lastNum.lastIndexOf('.') >= 0) return
      }
    }

    // Do Not Allow 0 at beginning.
    // Javascript will throw Octal literals are not allowed in strict mode.
    if (num === '0') {
      if (this.input === '') {
        return
      }
      const PrevKey = this.input[this.input.length - 1]
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+') {
        return
      }
    }

    this.input = this.input + num
    this.calcAnswer()
  }

  getLastOperand (): string {
    let pos: number
    console.log(this.input)
    pos = this.input.toString().lastIndexOf('+')
    if (this.input.toString().lastIndexOf('-') > pos) pos = this.input.lastIndexOf('-')
    if (this.input.toString().lastIndexOf('*') > pos) pos = this.input.lastIndexOf('*')
    if (this.input.toString().lastIndexOf('/') > pos) pos = this.input.lastIndexOf('/')
    console.log('Last ' + this.input.substring(pos + 1))
    return this.input.substring(pos + 1)
  }

  pressOperator (op: string): void {
    // Do not allow operators more than once
    const lastKey = this.input[this.input.length - 1]
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {
      return
    }

    this.input = this.input + op
    this.calcAnswer()
  }

  clear (): void {
    if (this.input !== '') {
      this.input = this.input.substring(0, this.input.length - 1)
    }
  }

  allClear (): void {
    this.result = ''
    this.input = ''
  }

  calcAnswer (): any {
    let formula = this.input

    let lastKey = formula[formula.length - 1]

    if (lastKey === '.') {
      formula = formula.substring(0, formula.length - 1)
    }

    lastKey = formula[formula.length - 1]

    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.') {
      formula = formula.substring(0, formula.length - 1)
    }

    console.log('Formula ' + formula)
    // eslint-disable-next-line no-eval
    this.result = eval(formula)
  }

  getAnswer (): void {
    this.calcAnswer()
    this.input = this.result
    if (this.input === '0') this.input = ''
  }

  ngOnInit (): void {
  }
}
