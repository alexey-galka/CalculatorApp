import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CalculatorService {
  private result: string = '0';
  private finalResult: string = '0';
  private stringBehaviorSubject$: BehaviorSubject<string> = new BehaviorSubject<string>('0');
  private finalResultBehavior$: BehaviorSubject<string> = new BehaviorSubject<string>('0')

  public getStringOfNumbers(number: string): string {
    if (this.result === '0') {
      this.result = number;
    } else {
      this.result += number;
    }
    return this.result;
  }

  public getPercent(): string {
    return this.finalResult = ((+this.result * 0.01).toFixed(5)).toString();
  }

  public clearMath(): string {
    this.result = '0';
    return this.finalResult = '0';
  }

  public calculate(): string {
    try {
      return this.finalResult = new Function('return ' + this.result)();
    } catch (error) {
      return this.finalResult = 'Wrong expr';
    }
  }

  public getSqrt(): string {
    return this.finalResult = ((Math.sqrt(+this.result)).toFixed(5)).toString();
  }

  public sendStringOfNumbers(): void {
    this.stringBehaviorSubject$.next(this.result);
  }

  public sendFinalResult(): void {
    this.finalResultBehavior$.next(this.finalResult);
  }

  public receiveStringOfNumbers(): Observable<string> {
    return this.stringBehaviorSubject$.asObservable();
  }

  public receiveFinalResult(): Observable<string> {
    return this.finalResultBehavior$.asObservable();
  }

}
