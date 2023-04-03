import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Hero } from '../core/models/hero.model';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent {
  heroes: Hero[] = [];

  form = this.fb.group({
    name: ['', Validators.required],

  });

  constructor(
    private fb: FormBuilder,
    private heroService: HeroService,
    private route: Router
  ) {}

  addHero(): void {
    const { valid, value } = this.form;

    if (valid) {
      this.heroService.addHero(value as Hero).subscribe(() => {
        Swal.fire('Congrats!', 'You have added a hero', 'success').then(() => {
          this.goBack();
        });
      });
    }
  }

  goBack(): void {
    this.route.navigate([`heroes`]);
  }
}
