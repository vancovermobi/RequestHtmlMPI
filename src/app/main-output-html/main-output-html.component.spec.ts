import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOutputHtmlComponent } from './main-output-html.component';

describe('MainOutputHtmlComponent', () => {
  let component: MainOutputHtmlComponent;
  let fixture: ComponentFixture<MainOutputHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainOutputHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainOutputHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
