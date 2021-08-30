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
        // Get screen width and height
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;

        // Calculate width factor of pdf
        let widthMargin = 0.5;
        if (this.screenWidth <= 1150) {
            widthMargin = 0.8;
        }

        // Calculate width to height ration
        let heightRatio = 11/8.5;

        // Set the PDF width (with ceiling of 800px)
        let width = this.screenWidth * widthMargin;
        if (width > 800) width = 800;
        this.pdfWidth = width;

        // Set the PDF height
        this.pdfHeight = this.pdfWidth * heightRatio;
    }

}
