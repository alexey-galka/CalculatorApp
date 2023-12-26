import {Component} from "@angular/core";
import {NgIf} from "@angular/common";
import {CalculatorService} from "../calculator.service";

@Component({
  selector: 'calc-buttons',
  standalone: true,
  templateUrl: "calculator-buttons.component.html",
  imports: [
    NgIf
  ],
  styleUrls: ["calculator-buttons.component.scss"]
})

export class CalculatorButtonsComponent {
  public stringOfMath: string = '';
  public finalResult: string = '';

  constructor(private calcService: CalculatorService) {
  }

  enterNumber(value: string): void {
    this.stringOfMath = this.calcService.getStringOfNumbers(value);
    this.calcService.sendStringOfNumbers();
  }

  clearMath(): void {
    this.stringOfMath = this.calcService.clearMath();
    this.finalResult = this.calcService.clearMath();
    this.calcService.sendStringOfNumbers();
    this.calcService.sendFinalResult();
  }

  getPercentage(): void {
    this.finalResult = this.calcService.getPercent();
    this.calcService.sendFinalResult();
  }

  getSqrt(): void {
    this.finalResult = this.calcService.getSqrt();
    this.calcService.sendFinalResult();
  }

  doMath(): void {
    this.finalResult = this.calcService.calculate();
    this.calcService.sendFinalResult();
  }

}
