import { Component } from '@angular/core';
import { Iproducts } from '../interfaces/products';


@Component({
  selector: 'app-products-list',
  templateUrl:'./products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
title='quản lý sản phẩm'; 
products: Iproducts[]=[
  {_id: 1,name:"sản phẩm a",price:2000,img:"https://picsum.photos/200/200" },
  {_id: 2,name:"sản phẩm v",price:4000,img:"https://picsum.photos/200/200" },
]
}
