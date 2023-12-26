import {Component} from "@angular/core";
import {CalculatorDisplayComponent} from "./calculator-display/calculator-display.component";
import {CalculatorButtonsComponent} from "./calculator-buttons/calculator-buttons.component";

@Component({
  selector: 'calc-app',
  standalone: true,
  templateUrl: 'calculator.component.html',
  styleUrls: ['calculator.component.scss'],
  imports: [
    CalculatorDisplayComponent,
    CalculatorButtonsComponent
  ]
})

export class CalculatorComponent {
}
