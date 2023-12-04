import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ListarMultasComponent } from "./listar-multas.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";



describe('listar multas', () => {
  let component: ListarMultasComponent;
  let fixture: ComponentFixture<ListarMultasComponent>;

 beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarMultasComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(ListarMultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
