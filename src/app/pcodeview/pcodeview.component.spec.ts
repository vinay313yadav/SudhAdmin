import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcodeviewComponent } from './pcodeview.component';

describe('PcodeviewComponent', () => {
  let component: PcodeviewComponent;
  let fixture: ComponentFixture<PcodeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcodeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcodeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
