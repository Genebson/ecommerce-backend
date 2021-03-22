export class Operaciones {
  private num1: number;
  private num2: number;
  private operaciones: string;

  constructor(num1: number, num2: number, operaciones: string) {
    this.num1 = num1;
    this.num2 = num2;
    this.operaciones = operaciones;
  }

  resultado() {
    switch (this.operaciones) {
      case 'suma':
        return this.num1 + this.num2
        break;
      case 'resta':
        return this.num1 - this.num2
        break;
      case 'multiplicacion':
        return this.num1 * this.num2
        break;
      case 'division':
        return this.num1 / this.num2
        break
      default:
        console.log(`No entendí la operación ${this.operaciones}`);
        break;
    }
  }
}