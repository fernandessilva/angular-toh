import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Hero, HeroPagination } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    if (!this.dataSource.sort) {
        this.dataSource.sort = sort;
    }
}

  displayedColumns: string[] = ['idHero', 'name', 'actions'];
  dataSource: MatTableDataSource<Hero> = new MatTableDataSource<Hero>();
  heroPagination: HeroPagination;
  searchWord: string

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.listHeroes();
    this.dataSource.sort = this.sort;


  }

  listHeroes(event?: PageEvent): void {
    const pageIndex = event ? event.pageIndex + 1 : 1;
    const pageSize = event ? event.pageSize : 10;

    this.heroService
      .getHeroes(pageIndex, pageSize)
      .subscribe((heroes: HeroPagination) => {
        console.log(heroes.items);

        this.dataSource.data = heroes.items;

        this.heroPagination = heroes;
        this.paginator.length = this.heroPagination.maxFound;
        this.paginator.pageSize = pageSize;

      });
  }

  deleteHero(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.heroService.deleteHero(id).subscribe(() => {
          Swal.fire('Deleted!', 'Your hero has been deleted.', 'success');
          // Refresh the list of heroes after deletion
          this.listHeroes();
        });
      }
      console.log(result);
    });
  }
}
