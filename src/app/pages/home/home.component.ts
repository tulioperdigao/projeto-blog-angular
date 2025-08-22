import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';
import CardData from 'src/app/data/dataModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    './home.mobile.component.css'
  ]
})
export class HomeComponent implements OnInit {
  data:CardData[] = dataFake

  constructor() {

  }

  ngOnInit(): void {

  }

}
