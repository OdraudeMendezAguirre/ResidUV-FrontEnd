import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetipsComponent } from './pagetips.component';

describe('PagetipsComponent', () => {
  let component: PagetipsComponent;
  let fixture: ComponentFixture<PagetipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagetipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagetipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
