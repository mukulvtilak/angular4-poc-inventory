import { Component, ElementRef, ViewChild } from '@angular/core';

// third party imports
// const pdf = new jspdf('p','pt','a4');
// const pdf = new jspdf();
import * as pdf from 'jspdf';
// import * as html2canvas from 'html2canvas';
const docExtension: string = '.pdf';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-invoice',
    templateUrl: 'invoice.component.html',
    styleUrls: ['invoice.component.css']
})
export class InvoiceComponent {
    toPrint: object;
    docName: string = 'Invoice'
    printDoc() {
        debugger;
        //https://github.com/MrRio/jsPDF/blob/master/jspdf.js#L59
        this.toPrint = document.getElementById('invoice-content');
        // pdf.setFont('Roboto');
        var options = {
            margin: {
                right: 100,
                bottom: 100
            },
            pagesplit: true
        }
        pdf.addHTML(this.toPrint,options, () => {
            pdf.save(this.docName + docExtension);
        });
    }

}
