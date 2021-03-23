"use strict";
exports.__esModule = true;
var Operaciones = /** @class */ (function () {
    function Operaciones(num1, num2, operaciones) {
        this.num1 = num1;
        this.num2 = num2;
        this.operaciones = operaciones;
    }
    Operaciones.prototype.resultado = function () {
        switch (this.operaciones) {
            case 'suma':
                return this.num1 + this.num2;
                break;
            case 'resta':
                return this.num1 - this.num2;
                break;
            case 'multiplicacion':
                return this.num1 * this.num2;
                break;
            case 'division':
                return this.num1 / this.num2;
                break;
            default:
                console.log("No entend\u00ED la operaci\u00F3n " + this.operaciones);
                break;
        }
    };
    return Operaciones;
}());
exports["default"] = Operaciones;
