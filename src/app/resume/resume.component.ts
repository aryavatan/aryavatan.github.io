import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

    pdfWidth: number = 640;
    pdfHeight: number = 700;

    screenWidth: number;
    screenHeight: number;

    constructor() { }

    ngOnInit() {
        this.UpdatePDFSize();
    }

    // Called everytime the screen is resized
    @HostListener('window:resize', ['$event'])
    async onResize(event) {
        // Small delay for mobile devices to recognize new screen width        
        await new Promise(f => setTimeout(f, 100));

        this.UpdatePDFSize();
    }

    // Called everytime the screen orientation is changed
    @HostListener('window:orientationchange', ['$event'])
    async onOrientationChange(event) {
        // Small delay for mobile devices to recognize new screen width        
        await new Promise(f => setTimeout(f, 100));
        
        this.UpdatePDFSize();
    }

    // Updates the PDF size based on the screen size
    UpdatePDFSize() {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;

        let widthMargin = 0.5;
        if (this.screenWidth <= 1150) {
            widthMargin = 0.8;
        }

        let heightRatio = 11/8.5;

        this.pdfWidth = this.screenWidth * widthMargin;
        this.pdfHeight = this.pdfWidth * heightRatio;
    }

}
