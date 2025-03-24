import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentWeatherPage } from './current-weather.page';

describe('CurrentWeatherPageComponent', () => {
  let component: CurrentWeatherPage;
  let fixture: ComponentFixture<CurrentWeatherPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentWeatherPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentWeatherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
