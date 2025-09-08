import { TestBed } from '@angular/core/testing';
import { AppOverflowService } from './app-overflow.service';

describe('AppOverflowService', () => {
    let service: AppOverflowService;

    // Helpers DOM
    function createContainer(): HTMLElement {
        const el = document.createElement('div');
        el.id = 'jav-app-container';
        document.body.appendChild(el);

        return el;
    }

    function removeContainer(): void {
        const el = document.getElementById('jav-app-container');
        if (el && el.parentNode) el.parentNode.removeChild(el);
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AppOverflowService]
        });
        service = TestBed.inject(AppOverflowService);
        removeContainer();
    });

    afterEach(() => {
        removeContainer();
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('setMobileOverflow: should do nothing without container', () => {
        expect(() => service.setMobileOverflow()).not.toThrow();
    });

    it('setMobileOverflow: should apply overflow and padding when window width < 576 ', () => {
        const el = createContainer();

        spyOnProperty(window, 'innerWidth', 'get').and.returnValue(375);

        service.setMobileOverflow();

        expect(el.style.overflowY).toBe('auto');
        expect(el.style.paddingBottom).toBe('16px');
    });

    it('setMobileOverflow: should not apply styles when window width >= 576', () => {
        const el = createContainer();

        spyOnProperty(window, 'innerWidth', 'get').and.returnValue(1024);

        service.setMobileOverflow();

        expect(el.style.overflowY).toBe('');
        expect(el.style.paddingBottom).toBe('');
    });

    it('cleanMobileStyles: should reset styles', () => {
        const el = createContainer();

        el.style.overflowY = 'auto';
        el.style.paddingBottom = '16px';

        service.cleanMobileStyles();

        expect(el.style.overflowY).toBe('');
        expect(el.style.paddingBottom).toBe('');
    });

    it('cleanMobileStyles: should not throw when containers does not exist', () => {
        expect(() => service.cleanMobileStyles()).not.toThrow();
    });

    it('setMobileOverflow: idempotent if it is called several times in mobile', () => {
        const el = createContainer();
        spyOnProperty(window, 'innerWidth', 'get').and.returnValue(420);

        service.setMobileOverflow();
        service.setMobileOverflow();

        expect(el.style.overflowY).toBe('auto');
        expect(el.style.paddingBottom).toBe('16px');
    });
});