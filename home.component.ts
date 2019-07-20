import { Component, OnInit} from '@angular/core';
import { UsstateService } from '../../services/usstate.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usStateService: any;
  states: any;
  errors: any;

  constructor(usStateService: UsstateService) {
    this.states = this.usStateService.getUSState();
    this.usStateService = usStateService;
  }

  ngOnInit() {
  }

  submit(){
      if(!this.form.fullname) {
        this.erros.fullname='error';
      }


      if(!this.form.email) {
      this.erros.email='error';
    }

    if(!this.form.comment) {
      this.erros.comment='error';
    }
  }

}
