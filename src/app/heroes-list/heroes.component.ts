import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
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
  displayedColumns: string[] = ['idHero', 'name', 'actions'];
  heroes: Hero[] = [];
  heroPagination: HeroPagination;


  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.listHeroes();
  }

  listHeroes(event?: PageEvent): void {
    const pageIndex = event ? event.pageIndex +1 : 1;
    const pageSize = event ? event.pageSize : 10;


    this.heroService
      .getHeroes(pageIndex, pageSize)
      .subscribe((heroes: HeroPagination) => {
        console.log(heroes.items);

        this.heroes = heroes.items;
        this.heroPagination = heroes;
        this.paginator.length = this.heroPagination.maxFound;
        this.paginator.pageSize = pageSize

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
