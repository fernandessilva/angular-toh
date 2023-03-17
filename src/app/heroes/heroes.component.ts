import { Component, OnInit } from '@angular/core';
import { Hero, HeroPagination } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  displayedColumns: string[] = ['idHero', 'name', 'actions'];
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes: HeroPagination) => {

      console.log(heroes.items)
      this.heroes = heroes.items;
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
          // this.heroes = this.heroes.filter((hero) => hero.idHero !== id);
          Swal.fire('Deleted!', 'Your hero has been deleted.', 'success');
        });
      }
      console.log(result);
    });
  }
}
