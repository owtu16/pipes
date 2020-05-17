import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  Paymentdate: string;
  amount: number;
  height: number;
  miles: number;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000

  }

  onNameChange(value:string){
    this.name = value;
  }
  onDateChange(value:string){
    this.Paymentdate = value;
  }

  onAmountChange(value:string){
    const parsedValue = parseFloat(value);

    if(!isNaN(parsedValue)){
      this.amount = parsedValue;
    }

  }

  onHeightChange(value: string){
    this.height = parseFloat(value);
  }

  onMilesChange(value: string){
    this.miles = parseFloat(value);
  }
}
