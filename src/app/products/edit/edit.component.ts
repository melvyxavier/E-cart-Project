import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  pid: any = ""
  pdata: any = {}

  constructor(private ar: ActivatedRoute, private ds: DataService, private rout: Router) { }

  ngOnInit(): void {

    this.ar.params.subscribe(data => {

      this.pid = data["id"]
    })

    this.ds.getProduct(this.pid).subscribe({
      next: (result: any) => {
        this.pdata = result
        console.log(this.pdata);
      }
    })
  }

  updateData() {
    this.ds.updateProduct(this.pid, this.pdata).subscribe({
      next: (result: any) => {
        alert("Product Details Updated")
        this.rout.navigateByUrl(`products/view-product/${this.pid}`)
      }
    })
  }

}
