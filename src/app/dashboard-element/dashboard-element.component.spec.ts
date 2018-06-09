
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardElementComponent } from './dashboard-element.component';

describe('DashboardElementComponent', () => {
  let component: DashboardElementComponent;
  let fixture: ComponentFixture<DashboardElementComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
