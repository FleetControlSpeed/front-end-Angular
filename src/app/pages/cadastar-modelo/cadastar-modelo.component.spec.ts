import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastarModeloComponent } from './cadastar-modelo.component';

describe('CadastarModeloComponent', () => {
  let component: CadastarModeloComponent;
  let fixture: ComponentFixture<CadastarModeloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastarModeloComponent]
    });
    fixture = TestBed.createComponent(CadastarModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
