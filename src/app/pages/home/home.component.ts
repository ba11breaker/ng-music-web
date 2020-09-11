import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public banners = [];
  
  constructor(
    private _home: HomeService,
  ) { 

  }

  ngOnInit(): void {
    this._home.getBanners().subscribe(banners => {
      this.banners = banners;
    });
  }

}
