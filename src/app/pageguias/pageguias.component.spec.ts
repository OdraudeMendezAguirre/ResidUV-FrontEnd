import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageguiasComponent } from './pageguias.component';

describe('PageguiasComponent', () => {
  let component: PageguiasComponent;
  let fixture: ComponentFixture<PageguiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageguiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageguiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
