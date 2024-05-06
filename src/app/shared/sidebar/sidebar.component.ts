import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  _gifHistory: string[] = [];

  constructor(private gifsService: GifsService){
    this._gifHistory = gifsService.tagsHistory;
  }

  get gifHistory():string[]{
    return this.gifsService.tagsHistory;
  }

  loadImagesFromSidebar(tag: string):void{
    this.gifsService.searchTag(tag);
  }
}
