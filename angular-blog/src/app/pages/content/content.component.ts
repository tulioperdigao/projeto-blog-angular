import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  imageCover:string = 'https://rollingstone.com.br/media/uploads/2025/05/por-que-yoda-fala-ao-contrario-em-star-wars-george-lucas-finalmente-explica.jpg';
  contentTitle:string = 'EXEMPLO BEM LEGAL';
  contentDescription:string = 'akshfjkagsfkjagfjksaf';

  constructor() { }

  ngOnInit(): void {
  }

}
