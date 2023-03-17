/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  // ! or "| undefined
  hero: Hero | undefined;

  form = this.fb.group({
    idHero: [{ value: '', disabled: true }],
    name: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.heroService.getHero(id).subscribe((hero) => {
      this.hero = hero;
      this.form.controls['idHero'].setValue(`${hero.idHero}`);
      this.form.controls['name'].setValue(hero.name);
    });
  }

  update(): void {
    Swal.fire('Are you sure you want to update the hero?', 'question').then(
      (result) => {
        if (result.isConfirmed && this.hero) {

          this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
        }
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
