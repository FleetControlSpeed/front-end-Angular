import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CadastrarMultaComponent } from "./cadastrar-multa.component";

describe('cadastrarMulta', () => {
  let component: CadastrarMultaComponent;
  let fixture: ComponentFixture<CadastrarMultaComponent>;

 beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarMultaComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(CadastrarMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
