import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssusedBookComponent } from './issused-book.component';

describe('IssusedBookComponent', () => {
  let component: IssusedBookComponent;
  let fixture: ComponentFixture<IssusedBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssusedBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssusedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
