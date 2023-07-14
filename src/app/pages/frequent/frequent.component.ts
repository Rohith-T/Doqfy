import { Component, Input, OnInit } from '@angular/core';
import { freqData } from '../common/frequent.model';

@Component({
  selector: 'app-frequent',
  templateUrl: './frequent.component.html',
  styleUrls: ['./frequent.component.scss']
})
export class FrequentComponent implements OnInit{

freqData = freqData
@Input() title: string="";
@Input() description: string="";
ngOnInit(): void {
  
}
}
