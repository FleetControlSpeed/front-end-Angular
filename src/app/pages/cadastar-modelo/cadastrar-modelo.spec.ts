import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CadastarModeloComponent } from "./cadastar-modelo.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

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
  it('deve renderizar o formulário de cadastro de modelo corretamente', () => {
    const formElement = fixture.debugElement.query(By.css('form'));
    expect(formElement).toBeTruthy();
    expect(formElement.nativeElement.classList).toContain('w-3/4');
    expect(formElement.nativeElement.classList).toContain('flex');
    expect(formElement.nativeElement.classList).toContain('items-center');
    expect(formElement.nativeElement.classList).toContain('flex-col');
    expect(formElement.nativeElement.classList).toContain('mt-10');
    expect(formElement.nativeElement.classList).toContain('bg-white');
    expect(formElement.nativeElement.classList).toContain('rounded-lg');
  });
  
  it('deve exibir o título "Cadastrar Modelo"', () => {
    const titleElement = fixture.debugElement.query(By.css('p.text-4xl'));
    expect(titleElement.nativeElement.textContent).toBe('Cadastrar Modelo');
  });
  it('deve conter um campo para o nome do modelo', () => {
    const labelElement = fixture.debugElement.query(By.css('label[for="modelo"]'));
    expect(labelElement.nativeElement.textContent).toBe('NOME');
  
    const inputElement = fixture.debugElement.query(By.css('input[type="text"][placeholder="Digite o modelo"]'));
    expect(inputElement).toBeTruthy();
  });
  
  it('deve conter um campo para a marca do modelo', () => {
    const labelElement = fixture.debugElement.query(By.css('label[for="marca"]'));
    expect(labelElement.nativeElement.textContent).toBe('MARCA');
  
    const inputElement = fixture.debugElement.query(By.css('input[type="text"][placeholder="Digite a marca"]'));
    expect(inputElement).toBeTruthy();
  });
  
  it('deve conter um botão "Enviar"', () => {
    const buttonElement = fixture.debugElement.query(By.css('button:nth-child(2)'));
    expect(buttonElement.nativeElement.textContent).toBe('Enviar');
  });
  it('deve renderizar o formulário de cadastro de modelo corretamente', () => {
    const formElement = fixture.debugElement.query(By.css('form')); // Cobre a classe 'form'
    expect(formElement).toBeTruthy(); // Cobre a existência do elemento
  
    // Teste atributos individuais para aumentar cobertura
    expect(formElement.nativeElement.classList).toContain('w-3/4');
    expect(formElement.nativeElement.classList).toContain('flex');
    expect(formElement.nativeElement.classList).toContain('items-center');
    expect(formElement.nativeElement.classList).toContain('flex-col');
    expect(formElement.nativeElement.classList).toContain('mt-10');
    expect(formElement.nativeElement.classList).toContain('bg-white');
    expect(formElement.nativeElement.classList).toContain('rounded-lg');
  });
  
  // Teste o título separadamente para aumentar cobertura
  it('deve exibir o título "Cadastrar Modelo"', () => {
    const titleElement = fixture.debugElement.query(By.css('p.text-4xl')); // Cobre o texto 'Cadastrar Modelo'
    expect(titleElement.nativeElement.textContent).toBe('Cadastrar Modelo');
  });

});
