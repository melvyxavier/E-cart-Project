import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  //model form for add
  addFormModel = this.fb.group({
    id: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    productName: ['', [Validators.required, Validators.pattern("[a-zA-Z '-]+")]],
    categoryId: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    price: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    image: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z:/._-]+')]],
    review: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z ]+')]]
  })


  constructor(private fb: FormBuilder, private ds: DataService, private rout: Router) { }

  ngOnInit(): void {



  }

  addNewProduct() {

    const path = this.addFormModel.value

    let productData = {
      id: path.id,
      productName: path.productName,
      categoryId: path.categoryId,
      price: path.price,
      image: path.image,
      review: path.review
    }

    if (this.addFormModel.valid) {

      this.ds.addProduct(productData).subscribe({
        next: (result: any) => {
          alert("New Product added!")
          this.rout.navigateByUrl("")

        }
      })

    }
    else {
      alert('Please fill all the fields!')
    }
  }

}
