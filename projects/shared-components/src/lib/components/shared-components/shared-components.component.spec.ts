import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedComponentsComponent } from './shared-components.component';

describe('SharedComponentsComponent', () => {
  let component: SharedComponentsComponent;
  let fixture: ComponentFixture<SharedComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
