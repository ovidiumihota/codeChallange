import { map, tap, switchMapTo } from 'rxjs/operators';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { BehaviorSubject, of } from 'rxjs';
import { Router } from '@angular/router';

const DEFAULT_QUERY = {
  q: "",
  sort: "stars",
  order: "desc",
  page: "1"
}

const CHUNK_SIZE = 30;

@Component({
  selector: 'app-repositories-view',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesViewComponent implements OnInit {
  public repositoriesCount: number;
  public repositories;
  public query = DEFAULT_QUERY;
  public isLoading = true;

  private searchInputBounce;
  private _repositoriesView: ElementRef
  @ViewChild('repositoriesView')
  set repositoriesViewChange(element: ElementRef) {
    this._repositoriesView = element;
  }
  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchRepositories().subscribe();
  }


  fetchRepositories() {
    if (!this.query || (this.query && !this.query.q)) {
      return of([])
    };
    this.isLoading = true;
    return this.apiService.search(this.query).pipe(
      tap((response) => {
        this.repositoriesCount = response.total_count
        this.repositories = response.items
        this.isLoading = false;
      })
    )
  }

  onSelectRepository(repository) {
    if (!repository) return;

    this.router.navigate(['/repositories' + '/' + repository.full_name])
  }

  onSearchKeydown(event) {
    // if (this.searchInputBounce) {
    //   clearTimeout(this.searchInputBounce)
    // }
    if (event.which === 13) {
      this.fetchRepositories().subscribe();
      return;
    }
    // setTimeout(() => {
    //   this.fetchRepositories().subscribe();
    // }, 300);
  }

  onChangePage(direction: "next" | "previous") {
    if (!direction) return;
    let currentPage = parseInt(this.query.page);
    switch (direction) {
      case "next": {
        if (currentPage < this.repositoriesCount / CHUNK_SIZE) {
          this.query.page = JSON.stringify(currentPage + 1)
        }
        break;
      }
      case "previous": {
        if (currentPage > 1) {
          this.query.page = JSON.stringify(currentPage - 1)
        }
        break;
      }
    }
    this.fetchRepositories().subscribe(() => {
      window.scroll(0, 0);
    });
  }

  onNavigate(name) {
    switch (name) {
      case 'home': {
        this.router.navigate(['/'])
        break;
      }

      default:
        break;
    }
  }

}
