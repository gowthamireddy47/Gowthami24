import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantprimaryComponent } from './tenantprimary.component';

describe('TenantprimaryComponent', () => {
  let component: TenantprimaryComponent;
  let fixture: ComponentFixture<TenantprimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantprimaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantprimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
