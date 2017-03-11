import { Component , OnInit } from '@angular/core';
import { Hero } from './hero';
import { Router } from '@angular/router';

import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit{
  heroes : Hero[];
  selectedHero: Hero;

  constructor( private heroService: HeroService, private router: Router ) {}

  getHeroes(): void {
    this.heroService.getHeroes().then(
      heroes => this.heroes = heroes
    );
  //  this.heroService.getHeroesSlowly().then(
  //    heroes => this.heroes = heroes
    // );
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}