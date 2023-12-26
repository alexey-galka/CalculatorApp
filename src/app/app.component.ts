import {Component} from '@angular/core';
import {CalculatorComponent} from "./calculator/calculator.component";
import {CalculatorService} from "./calculator/calculator.service";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    CalculatorComponent
  ],
  providers: [CalculatorService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
