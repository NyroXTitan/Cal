import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {


  calculate(expression: string): string {
    try {
      const result = eval(expression);
      return result.toString();
    } catch (error) {
      return 'Error';
    }
  }
}
