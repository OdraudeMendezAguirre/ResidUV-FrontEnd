import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecentroComponent } from './pagecentro.component';

describe('PagecentroComponent', () => {
  let component: PagecentroComponent;
  let fixture: ComponentFixture<PagecentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagecentroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagecentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
