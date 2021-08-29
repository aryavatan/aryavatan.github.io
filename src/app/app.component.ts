import { Component, OnDestroy, Inject, HostListener } from '@angular/core';
import { NavigationStart, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';

export let browserRefresh = false;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
	title = 'Arya-Resume';

	subscription: Subscription;
	sidenavWidth: any;
	scrollElement: any;
    topBtnClass = 'hide'

	constructor(private router: Router, @Inject(DOCUMENT) document) {
		this.subscription = router.events.subscribe((event) => {
			if (event instanceof NavigationStart) {  // START Navigation
				browserRefresh = !router.navigated;
				window.scrollTo(0, 0);
			}

			if (event instanceof NavigationEnd) {  // AFTER Navigation
				// console.log('nav over')
				if (this.scrollElement != null) {
					this.scrollToElement(this.scrollElement);
					this.scrollElement = null;
				}
			}
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	openNav() {
		this.sidenavWidth = "220px";
	}

	closeNav() {
		this.sidenavWidth = 0;
	}

	scrollToElement(id): void {
		let element = document.getElementById(id);

		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "center" });
		}
		else {
			this.scrollElement = id;
		}
	}

	// When the user clicks on the button, scroll to the top of the document
	topFunction() {
		document.documentElement.scrollIntoView({ behavior: "smooth", block: "start" })
		document.body.scrollTop = 0; // For Safari
	}

    // Called as the user scrolls
    @HostListener('window:scroll', ['$event']) onScrollEvent($event){
        if (window.scrollY > 150) {
            this.topBtnClass = '';
        }
        else {
            this.topBtnClass = 'hide';
        }
    }
}
