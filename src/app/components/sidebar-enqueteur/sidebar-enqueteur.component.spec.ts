import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEnqueteurComponent } from './sidebar-enqueteur.component';

describe('SidebarEnqueteurComponent', () => {
  let component: SidebarEnqueteurComponent;
  let fixture: ComponentFixture<SidebarEnqueteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarEnqueteurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarEnqueteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
