import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { SearchFilter } from './searchfilter.pipe';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AirlineDataService } from 'src/app/shared/service/airline-data.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let flightService: AirlineDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientTestingModule ],
      declarations: [ SearchComponent, SearchFilter ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load fine', () => {
    expect(component).toBeDefined();
  });

  it('should call getData()', () => {
    spyOn(component, 'getData').and.callThrough();
    component.getData();
    expect(component.getData).toHaveBeenCalled();
  });

  it('flight data should be empty by default', () => {
    const ele = fixture.debugElement.nativeElement.querySelector('.flightData');
    expect(ele.innerHTML.trim()).toBe('<!--bindings={}-->');
  });

  it('populated when a search button is clicked ', () => {
    const ele = fixture.debugElement.nativeElement.querySelector('#searchFlight');
    ele.click();
    fixture.detectChanges();
    const div = fixture.debugElement.nativeElement.querySelector('.flightData');
    console.log(div);
    expect(div.innerHTML.trim()).toBe('<!--bindings={}-->');
  });
});
