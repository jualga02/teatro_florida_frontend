import { Component } from '@angular/core';
import { TeatroApiService } from '../../services/teatro-api.service';
import { CatApiService } from '../../services/cat-api.service';

@Component({
  selector: 'app-taquilla',
  imports: [],
  templateUrl: './taquilla.component.html',
  styleUrl: './taquilla.component.css'
})
export class TaquillaComponent {
  public constructor(public service: TeatroApiService /*, public servicecat: CatApiService*/ ){}


  public ngOnInit(): void {
    this.service.getResponse().subscribe(response => {
      console.log(response);
    });
  }
  /*public getResponse2(): void {
    this.servicecat.getResponse2().subscribe((responsecat) => {
      console.log(responsecat);
    });
  }*/

  /*public ngOnInit(): void {
    this.servicecat.getResponse2().subscribe(responsecat => {
      console.log(responsecat);
    })
  }*/
}

