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
  }

  onDelete() {
    this.displayValue = this.displayValue.slice(0, -1);
  }

  onReset() {
    this.displayValue = '';
  }

  onCalculate() {

    const result = this.calcService.calculate(this.displayValue);
    if (result !== 'Error') {
      this.displayValue = this.decimalPipe.transform(result, '1.0-0') || '';
    } else {
      this.displayValue = 'Error';
    }
  }
}
