import { Component, OnInit } from '@angular/core';
import { service } from 'src/app/service/service.service';

@Component({
  selector: 'app-category-nav-bar',
  templateUrl: './category-nav-bar.component.html',
  styleUrls: ['./category-nav-bar.component.scss']
})
export class CategoryNavBarComponent implements OnInit {

 

 

  constructor(public _service: service) { }
  showCategory(tag : string){
    
   this._service._category = tag;
   console.log( this._service._category);
   
    
  }
  ngOnInit(): void {
  }

}
