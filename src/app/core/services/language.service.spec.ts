import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';
import { BehaviorSubject } from 'rxjs';


// Creamos un mock para TranslateService
class MockTrranslateService {
  langs: string[] = [];
}
