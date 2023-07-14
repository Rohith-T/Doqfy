import { Component, OnInit } from '@angular/core';
import { freqData } from './frequent.model';

@Component({
  selector: 'app-frequent',
  templateUrl: './frequent.component.html',
  styleUrls: ['./frequent.component.scss']
})
export class FrequentComponent implements OnInit{

freqData = freqData
ngOnInit(): void {
  
}
}
