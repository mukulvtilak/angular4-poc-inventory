import { Component } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {
  oldData: string;
  constructor(dataService: NameListService) {
    dataService.getOldJson().subscribe(data => {
      this.oldData = JSON.stringify(data, null, '\t');
    });
  }

}
