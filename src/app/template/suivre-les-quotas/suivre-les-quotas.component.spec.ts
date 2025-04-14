import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivreLesQuotasComponent } from './suivre-les-quotas.component';

describe('SuivreLesQuotasComponent', () => {
  let component: SuivreLesQuotasComponent;
  let fixture: ComponentFixture<SuivreLesQuotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuivreLesQuotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuivreLesQuotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
