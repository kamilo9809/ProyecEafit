import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunityPaginationComponent } from './oportunity-pagination.component';

describe('OportunityPaginationComponent', () => {
  let component: OportunityPaginationComponent;
  let fixture: ComponentFixture<OportunityPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OportunityPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OportunityPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
