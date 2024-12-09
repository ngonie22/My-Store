import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
products = [
  {
    name: 'Phone XL',
    Description: 'A large phone with one of the best screens',
  },
  {
    name:  'Phone Mini',
    Description: 'A great phone with one of the cameras',

  },
  {
    name: 'Phone Standard',
    Description: 'product.description',
  },

  ]


  share(){}
}
