import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    exports: [
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule
{
}
