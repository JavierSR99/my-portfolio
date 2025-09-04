import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';
import { BehaviorSubject } from 'rxjs';


// Creamos un mock para TranslateService
class MockTranslateService {
  defaultLang = '';
  getBrowserLang = jasmine.createSpy().and.returnValue('en');
  addLangs = jasmine.createSpy();
  setDefaultLang = jasmine.createSpy().and.callFake((lang: string) => {
    this.defaultLang = lang;
  });
}

describe('LanguageService', () => {
  let service: LanguageService;
  let translate: MockTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: TranslateService, useClass: MockTranslateService }]
    });

    service = TestBed.inject(LanguageService);
    translate = TestBed.inject(TranslateService) as any;

    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add supported languages and set browser language if no storage value exists', () => {
    // Simulamos que el navegador devuelve "en"
    translate.getBrowserLang.and.returnValue('en');

    service.setInitialLanguage();

    // Comprobamos que se añadieron los idiomas soportados
    expect(translate.addLangs).toHaveBeenCalledWith(['es', 'en']);

    // Se debería haber establecido el idioma por defecto como "en"
    expect(translate.setDefaultLang).toHaveBeenCalledWith('en');

    // Y el observable activeLanguage$ debería emitir "en"
    expect(service.activeLanguage$.getValue()).toBe('en');
  });

  it('should prioritize localStorage value over browser language', () => {
    localStorage.setItem('lang', 'es');
    service.setInitialLanguage();

    // Aunque el navegador devuelva "en", debería usar el del LocalStorage
    expect(translate.setDefaultLang).toHaveBeenCalledWith('es');

    expect(service.activeLanguage$.getValue()).toBe('es');
  });

  it('should set active language and update localStorage', () => {
    service.setActiveLang('en');

    expect(service.activeLanguage$.getValue()).toBe('en');
    expect(localStorage.getItem('lang')).toBe('en');
  });

  it('should fallback to Spanish when setting an unsupported language', () => {
    service.setActiveLang('fr');

    expect(service.activeLanguage$.getValue()).toBe('es');
    expect(localStorage.getItem('lang')).toBe('es');
  });


});