import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(view: "users" | "repositories") {
    if (!view) return;

    switch (view) {
      case "users": {
        this.router.navigate(['/users'], { preserveQueryParams: true })
        break;
      }
      case "repositories": {
        this.router.navigate(['/repositories'], { preserveQueryParams: true })
        break;
      }
    }
  }


  testPipe(){
    return of(['asdasdasdasda','asdas','asdasd'])
  }
}
