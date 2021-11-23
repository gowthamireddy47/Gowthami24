import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsecondaryComponent } from './tenantsecondary.component';

describe('TenantsecondaryComponent', () => {
  let component: TenantsecondaryComponent;
  let fixture: ComponentFixture<TenantsecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantsecondaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantsecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
