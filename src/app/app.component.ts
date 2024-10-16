import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayValue: string = '';

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
      this.displayValue = eval(this.displayValue);
    } catch (error) {
      this.displayValue = 'Error';
    }
  }
}
