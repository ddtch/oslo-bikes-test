import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluralizePipe } from './pluralize.pipe';

@NgModule({
  declarations: [
    PluralizePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PluralizePipe
  ]
})
export class PipesModule { }
