import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVeiculoComponent } from './listar-veiculo.component';

describe('ListarVeiculoComponent', () => {
  let component: ListarVeiculoComponent;
  let fixture: ComponentFixture<ListarVeiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarVeiculoComponent]
    });
    fixture = TestBed.createComponent(ListarVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
