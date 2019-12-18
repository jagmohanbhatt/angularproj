import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFilter } from './search/searchfilter.pipe';

@NgModule({
    declarations: [
        SearchComponent,
        SearchFilter
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
    ],
    exports: [
        SearchComponent
    ]
})
export class OperationModule { }
