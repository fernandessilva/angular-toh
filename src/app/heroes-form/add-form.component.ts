import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Hero } from '../core/models/hero.model';
import { HeroService } from '../services/hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  @ViewChild('newHeroName') newHeroName: ElementRef;
  heroes: Hero[] = [];

  form = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private heroService: HeroService,
    private route: Router
  ) {}

  ngOnInit(): void {
    const formValue = localStorage.getItem('formValue');
    if (formValue) {
      this.newHeroName.nativeElement.value = formValue;
    }
  }

  addHero(): void {
    const { valid, value } = this.form;

    if (valid) {
      this.heroService.addHero(value as Hero).subscribe(() => {
        Swal.fire('Congrats!', 'You have added a hero', 'success').then(() => {
          this.goBack();
        });
      });

      localStorage.setItem('formValue', value.name);
    }
  }

  goBack(): void {
    this.route.navigate([`heroes`]);
  }
}
