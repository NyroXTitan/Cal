import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { CalculationService } from './calculation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  providers: [DecimalPipe]
})
 export class AppComponent {
  displayValue: string = '';

  constructor(
    private decimalPipe: DecimalPipe,
    private calcService: CalculationService
  ) {}

  onButtonClick(value: string) {
    this.displayValue += value;

    this.formatExpression();
  }

  onDelete() {
    
    this.displayValue = this.displayValue.slice(0, -1);

    this.formatExpression();
  }

  onReset() {
    this.displayValue = '';
  }

  onCalculate() {
    const expression = this.displayValue.replace(/,/g, '');
    const result = this.calcService.calculate(expression);

    if (result !== 'Error') {
      this.displayValue = this.decimalPipe.transform(result, '1.0-0') || '';
    } else {
      this.displayValue = 'Error';
    }
  }

  private formatExpression() {
    const parts = this.displayValue.split(/([+\-*/])/);
    this.displayValue = parts.map(part => {
      if (!isNaN(Number(part.replace(/,/g, '')))) {
        return this.decimalPipe.transform(part.replace(/,/g, ''), '1.0-0') || '';
      }
      return part;
    }).join('');
  }
}
