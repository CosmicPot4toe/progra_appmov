import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimPage } from './anim.page';

describe('AnimPage', () => {
  let component: AnimPage;
  let fixture: ComponentFixture<AnimPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
