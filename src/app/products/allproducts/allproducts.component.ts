import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  allProducts: any = []
  productCategories: any = []
  searchString: any = ""

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getAllProducts().subscribe({
      next: (result: any) => {
        this.allProducts = result
        // console.log(this.allProducts);
        this.productCategories = this.allProducts
        console.log(this.productCategories);

      }
    })

    this.ds.search.subscribe((data: any) => {
      this.searchString = data
    })
  }

  productCategory(catId: any) {

    this.productCategories = this.allProducts.filter((item: any) =>
      item["categoryId"] == catId || catId == "")

    console.log(this.productCategories);

  }


}
