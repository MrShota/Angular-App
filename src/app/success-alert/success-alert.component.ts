import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent {
 
  userName: string = '';
  btnDelete: string = 'Clear'
  activateBtn: boolean = true;

  clearInput() {
    this.userName = '';
  }

}
