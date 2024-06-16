import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  name: string = 'sun';
  age: number = 25;

  product = {
    mname: 'oneplus',
    price: '40000'
  }

  onChange() {
    this.name = 'arun';
  }

  onChangeSecondExample(event: any) {
    console.log('event', event);
    // output => we get inputevent object - target - value 
    console.log(event.target.value)
    this.name = event.target.value;
  }

  addtoCart: number = 10;
  stock: number = 15;
  isAddToCartDisabled: boolean = false;
  increment(event: any) {
    if (this.addtoCart < this.stock) {
      this.addtoCart++;
      this.isAddToCartDisabled = this.addtoCart === this.stock;
      this.isDecrementDisabled = false;
    }
  }
  isDecrementDisabled: boolean = false;
  decrement(event: any) {
    if (this.addtoCart > 0) {
      this.addtoCart--;
      this.isDecrementDisabled = this.addtoCart === 0;
      this.isAddToCartDisabled = false;
    }
  }
}
