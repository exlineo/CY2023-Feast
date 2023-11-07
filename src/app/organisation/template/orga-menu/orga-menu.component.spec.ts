import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgaMenuComponent } from './orga-menu.component';

describe('OrgaMenuComponent', () => {
  let component: OrgaMenuComponent;
  let fixture: ComponentFixture<OrgaMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgaMenuComponent]
    });
    fixture = TestBed.createComponent(OrgaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
