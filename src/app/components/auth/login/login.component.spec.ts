import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Login } from 'src/app/model/Login';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(()=>{
    let login = new Login();
    login.password = '1234';
    login.username = 'admin';
    component.login = login;
    fixture.detectChanges();
  })

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('Teste @Input - Interpolação1 ', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="exampleInputText1"]'));
    expect(elemento.nativeElement.ngModel).toEqual('admin');
  });

  it('Teste @Input - Interpolação1 null', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="exampleInputText1"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });
  it('Teste @Input - Interpolação2 ', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="exampleInputPassword1"]'));
    expect(elemento.nativeElement.ngModel).toEqual('1234');
  });
  it('Teste @Input - Interpolação2 null', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="exampleInputPassword1"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });
  it('deve renderizar o formulário corretamente', () => {
    const debugElement = fixture.debugElement; // DebugElement
    const formElement = debugElement.query(By.css('#formId')); // Converter para o tipo esperado pelo queryByCss
    expect(formElement).toBeTruthy();
  });
  it('should contain a button on the screen', () => {
    const buttonElement = fixture.debugElement.nativeElement.querySelector('button');
    expect(buttonElement).toBeTruthy();
  });

  
});