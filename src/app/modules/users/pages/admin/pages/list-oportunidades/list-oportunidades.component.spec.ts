import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOportunidadesComponent } from './list-oportunidades.component';

describe('ListOportunidadesComponent', () => {
  let component: ListOportunidadesComponent;
  let fixture: ComponentFixture<ListOportunidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOportunidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOportunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
