import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  describe(`should render the various sections of the component with default values'`, () => {

    it('should render the backdrop and set it to the default picture'), () => {
      var fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#backdrop')).toBeTruthy;
      expect(compiled.querySelector('#backdrop img').attributes('src')).toContain('assets/img/backdrop.default');
    };

    it('should render the poster and set it to the default picture'), () => {
      var fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#poster')).toBeTruthy;
      expect(compiled.querySelector('#poster img').attributes('src')).toContain('assets/img/poster.default');
    };

    it('should render the progress bar and set it to the default width'), () => {
      var fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#progress-bar')).toBeTruthy;
      expect(compiled.querySelector('#progress-bar').attributes('width')).toContain('60%');
    };

    it('should render the title in an h1 tag', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Untitled');
    });

  });


});
