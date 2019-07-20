import { Component, OnInit } from '@angular/core';
import { ImageViewComponent } from '../imageview/imageview.component';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  qty: any;
  dialog: any;
  data: any;
  shareService: any;

  constructor(dialog: MatDialog) {
    this. data = {'title': 'extrusion filter', 'url': '/assets/extrusion.jpg'};
    this.dialog = dialog;
    this.qty = [10, 20, 30, 40, 50, 100];
    this.shareService = shareService;
    this.form = {'id': this.data.id, 'title': this.data.title, 'qty': 10}
  }

  ngOnInit() {
  }

  openDialog(){
      const dialogRef = this.dialog.open(ImageviewComponent, {
        width: '500px';
    data: this.data
      });
  }

}
