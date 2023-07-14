import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-actions',
  templateUrl: './pending-actions.component.html',
  styleUrls: ['./pending-actions.component.scss']
})
export class PendingActionsComponent  implements OnInit{

  items:any
  ngOnInit(): void {
  
    this.items = [
      {
        'title':'#trtttt',
        'description':'10 days left',
        'action':'2 files are waiting to upload'
      },
      {
        'title':'#rtyuhj',
        'description':'20 days left',
        'action':'2 files are waiting to upload'
      },
      {
        'title':'#ertyuio',
        'description':'10 days left',
        'action':'2 files are waiting to upload'
      }

    ]
  }
}
