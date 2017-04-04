import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { StartComponent } from './start/start.component';
import { Forward1Component } from './forward-1/forward-1.component';
import { Forward1WinComponent } from './forward-1-win/forward-1-win.component';
import { CharacterListComponent } from './character-list/character-list.component';

const appRoutes: Routes = [
  {
  path: '',
  component: HomeComponent
  },
  {
  path: 'character',
  component: CharacterComponent
  },
  {
  path: 'start/:id',
  component: StartComponent
  },
  {
  path: 'forward-1/:id',
  component: Forward1Component
  },
  {
  path: 'forward-1-win/:id',
  component: Forward1WinComponent
  },
  {
    path: 'character-list',
    component: CharacterListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
