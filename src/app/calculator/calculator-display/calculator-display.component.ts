import {Component, OnInit} from "@angular/core";
import {CalculatorService} from "../calculator.service";
import {AsyncPipe} from "@angular/common";
import {Observable} from "rxjs";

@Component({
  selector: 'calc-display',
  standalone: true,
  templateUrl: "calculator-display.component.html",
  styleUrls: ["calculator-display.component.scss"],
  imports: [
    AsyncPipe
  ]
})


export class CalculatorDisplayComponent {
  constructor(public calcService: CalculatorService) {
  }

}
