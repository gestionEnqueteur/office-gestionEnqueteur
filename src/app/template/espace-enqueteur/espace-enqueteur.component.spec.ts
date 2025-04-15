import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceEnqueteurComponent } from './espace-enqueteur.component';

describe('EspaceEnqueteurComponent', () => {
  let component: EspaceEnqueteurComponent;
  let fixture: ComponentFixture<EspaceEnqueteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspaceEnqueteurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceEnqueteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
