import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthPietasComponent } from './health-pietas.component';

describe('HealthPietasComponent', () => {
  let component: HealthPietasComponent;
  let fixture: ComponentFixture<HealthPietasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthPietasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthPietasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
