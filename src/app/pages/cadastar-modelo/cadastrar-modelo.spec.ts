import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CadastarModeloComponent } from "./cadastar-modelo.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";

describe('cadastrarModelo', () => {
  let component: CadastarModeloComponent;
  let fixture: ComponentFixture<CadastarModeloComponent>;

 beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastarModeloComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(CadastarModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
