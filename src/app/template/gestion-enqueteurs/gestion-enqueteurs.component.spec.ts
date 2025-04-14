import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEnqueteursComponent } from './gestion-enqueteurs.component';

describe('GestionEnqueteursComponent', () => {
  let component: GestionEnqueteursComponent;
  let fixture: ComponentFixture<GestionEnqueteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionEnqueteursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionEnqueteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
