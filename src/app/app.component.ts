import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectService } from './project.service';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'Arya-Resume';

  subscription: Subscription;

  constructor(private router: Router, private projectService: ProjectService) {
    this.subscription = router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {  // AFTER BROWSER REFRESH
          browserRefresh = !router.navigated;
          console.log("Refreshed");
        }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
