import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  providers: [DecimalPipe]  
})
export class AppComponent {
  displayValue: string = '';

  constructor(private decimalPipe: DecimalPipe) {}  

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
    try {
      const result = eval(this.displayValue); 
      this.displayValue = this.decimalPipe.transform(result, '1.0-0') || '';
    } catch (error) {
      this.displayValue = 'Error';
    }
  }
}
