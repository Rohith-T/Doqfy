import { Component, OnInit } from '@angular/core';
import { orders } from '../app/pages/common/order.model';
import { counts } from '../app/pages/common/count.model';
import { freqData } from './pages/common/frequent.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  userName:string = 'Michael';
  currentDate:Date = new Date();
  walletBalance:number = 25000;
  items:any
  selectedDate: Date = new Date();
  branches:Array<string> = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"
  ];

  orders = orders;
  counts = counts;
  freqData = freqData
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




