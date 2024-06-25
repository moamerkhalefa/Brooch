import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SupportService } from '../../services/support.service';
import { Support } from '../../interface/support';


interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-technical-support',
  templateUrl: './technical-support.component.html',
  styleUrls: ['./technical-support.component.scss']
})
export class TechnicalSupportComponent implements OnInit {
  products!: Support[];
  cols!: Column[];

  /* Star input File Upload */
  @ViewChild('fileInput')
  fileInputElement!: ElementRef;
  fileName = '';
  maxSize = 5 * 1024 * 1024; // 5MB in bytes
  /* End input File Upload */

  constructor(private _supportService: SupportService) {}

  ngOnInit() {
    /* Start Api End point Table */
    this._supportService.getProductsWithOrders().then((products) => (this.products = products));
    /* End Api End point Table */

  }

  /* Start map badge in data table  */
  getSeverity(status: string) {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warning';
        case 'OUTOFSTOCK':
            return 'danger';
        default :
          return ''
    }
  }
  /* End map badge in data table  */


    /* Star input File Upload */
  onFileSelected(event:any) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > this.maxSize) {
        alert('File is too large. Maximum size is 5MB.');
        return;
      }
      this.fileName = file.name;
    }
  }
  resetFileInput() {
    this.fileInputElement.nativeElement.value = '';
    this.fileName = '';
  }
  /* End input File Upload */
}
