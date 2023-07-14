import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  @Input() count: number=0;
  @Input() title: string="";
  @Input() iconClass: string="";

}
