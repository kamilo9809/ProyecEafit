import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegisterRegistroComponent } from './page-register-registro.component';

describe('PageRegisterRegistroComponent', () => {
  let component: PageRegisterRegistroComponent;
  let fixture: ComponentFixture<PageRegisterRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageRegisterRegistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRegisterRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
