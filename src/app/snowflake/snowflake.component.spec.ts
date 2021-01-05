import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowflakeComponent } from './snowflake.component';

describe('SnowflakeComponent', () => {
  let component: SnowflakeComponent;
  let fixture: ComponentFixture<SnowflakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnowflakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowflakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
