import { Component, ElementRef, ViewChild } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';

// third party imports
// import * as jspdf from 'jspdf';

//const element = document.getElementById('print-content');
// const pdf = new jspdf('p', 'pt','a4');
const pdf = new jspdf();
const docExtension: string = '.pdf';

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
  newData: string;
  toPrint: object;
  indentWith: string = '  '; // add \t if tab will be used for indentation, currently set to 2 whitespaces
  docName: string = 'SampleDoc';
  constructor(dataService: NameListService) {
    dataService.getOldJson().subscribe(data => {
      this.oldData = JSON.stringify(data, null, this.indentWith);
    });
    dataService.getNewJson().subscribe(data => {
      this.newData = JSON.stringify(data, null, this.indentWith);
    });
  }

  printDoc(){
    this.toPrint = document.getElementById('print-content');
    pdf.addHTML(this.toPrint, () => {
      pdf.save(this.docName + docExtension);
    });
  }

}
