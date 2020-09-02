import { Component } from '@angular/core';

@Component({
  selector: 'dev-alert-demo',
  templateUrl: 'alert-demo.component.html',
  styleUrls: ['alert-demo.component.scss'],
})
export class AlertDemoComponent {
  onClosed(e: any) {
    console.log(e);
  }
}