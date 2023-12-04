import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CadastrarUsuarioComponent } from "./cadastrar-usuario.component";


describe('cadastrar Usuario', () => {
  let component: CadastrarUsuarioComponent;
  let fixture: ComponentFixture<CadastrarUsuarioComponent>;

 beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarUsuarioComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(CadastrarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain app-nav element', () => {
    const appNavElement = fixture.debugElement.nativeElement.querySelector('app-nav');
    expect(appNavElement).toBeTruthy();
  });
  
  it('should contain body element with specific class', () => {
    const bodyElement = fixture.debugElement.nativeElement.querySelector('body');
    expect(bodyElement).toBeTruthy();
    expect(bodyElement.classList.contains('w-full')).toBeTruthy();
    expect(bodyElement.classList.contains('bg-slate-50')).toBeTruthy();
  });
  
  it('should contain input elements for user details', () => {
    const inputElements = fixture.debugElement.nativeElement.querySelectorAll('input');
    expect(inputElements.length).toBeGreaterThanOrEqual(6); // Adjust the count based on your actual input fields
    // Add more specific checks if necessary
  });
  
  it('should contain button elements for navigation', () => {
    const buttonElements = fixture.debugElement.nativeElement.querySelectorAll('button');
    expect(buttonElements.length).toBeGreaterThanOrEqual(2); // Adjust the count based on your actual buttons
    // Add more specific checks if necessary
  });


it('should bind primeiroNome input correctly', () => {
  const primeiroNomeInput = fixture.debugElement.nativeElement.querySelector('[name="primeiroNome"]');
  expect(primeiroNomeInput).toBeTruthy();
  primeiroNomeInput.value = 'John';
  primeiroNomeInput.dispatchEvent(new Event('input'));
  fixture.detectChanges();
  expect(component.usuario.primeiroNome).toEqual('John');
});

it('should bind sobrenome input correctly', () => {
  const sobrenomeInput = fixture.debugElement.nativeElement.querySelector('[name="sobrenome"]');
  expect(sobrenomeInput).toBeTruthy();
  sobrenomeInput.value = 'Doe';
  sobrenomeInput.dispatchEvent(new Event('input'));
  fixture.detectChanges();
  expect(component.usuario.sobrenome).toEqual('Doe');
});

});
