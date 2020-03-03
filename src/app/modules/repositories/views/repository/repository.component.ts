import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-repository-view',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryViewComponent implements OnInit {

  public repository;
  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(
      tap((data) => {
        this.repository = data.repository;
      })).subscribe()
  }

  onNavigate(name) {
    switch (name) {
      case 'repositories': {
        window.history.back();
        break;
      }
      case 'home': {
        this.router.navigate(['/'])
        break;
      }

      default:
        break;
    }
  }
}
