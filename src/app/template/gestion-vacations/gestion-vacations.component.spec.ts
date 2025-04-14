import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVacationsComponent } from './gestion-vacations.component';

describe('GestionVacationComponent', () => {
  let component: GestionVacationsComponent;
  let fixture: ComponentFixture<GestionVacationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionVacationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionVacationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
