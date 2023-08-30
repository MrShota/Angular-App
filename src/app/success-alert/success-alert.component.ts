import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent {
  serverId: number = 12;
  serverStatus: string = 'on line'

  allowNewServer = false;
  serverAdded = 'Add Server';
  updateServerName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateStatus() {
    this.serverAdded = 'server added';

  }
  onUpdateServerName(event) {
    console.log(event.target.value)
    this.updateServerName = event.target.value;
  }

}
