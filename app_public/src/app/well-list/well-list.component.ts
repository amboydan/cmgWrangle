import { Component, OnInit } from '@angular/core';
import { WellDataService } from '../well-data.service';

export class WellName {
  Well: string;
  API: string;
}

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})
export class WellListComponent implements OnInit {

  constructor(private wellDataService: WellDataService) { }

  public wellNames: WellName[];
  private getWells(): void {
    this.wellDataService
      .getWells()
      .then(foundWells => {
        const check = foundWells.map(e => e.API)
        console.log(check);
        this.wellNames = foundWells;
      });
  };

  ngOnInit(): void {
    this.getWells();
  }

}
