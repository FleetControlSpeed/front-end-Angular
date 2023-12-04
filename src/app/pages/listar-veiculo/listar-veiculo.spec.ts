import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListarVeiculoComponent } from "./listar-veiculo.component";
import { VeiculoService } from "src/app/service/Veiculo/veiculo.service";


describe('listar veiculos', () => {
  let component: ListarVeiculoComponent;
  let fixture: ComponentFixture<ListarVeiculoComponent>;

 beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarVeiculoComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(ListarVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 /* it('should list the veiculos', () => {
    const component = new ListarVeiculoComponent();
    component.listarVeiculos();
    expect(component.veiculo).toBeTruthy();
    expect(component.veiculo.length).toBeGreaterThan(0);
  });
  */


    
});
