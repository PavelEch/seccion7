import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyimage',
  templateUrl: './lazyimage.component.html',
  styleUrl: './lazyimage.component.css'
})
export class LazyimageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = "";

  ngOnInit(): void {

    if(!this.url){
      throw new Error('Url property is missing');
    }
  }

  public hasLoaded:boolean = false;

  onLoad(){

    setTimeout(() =>{
      this.hasLoaded= true;

    },500);


    console.log("Image loaded");

  }


}
