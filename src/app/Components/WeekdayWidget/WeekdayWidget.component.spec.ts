import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeekdayWidgetComponent } from './WeekdayWidget.component';

describe('WeekdayWidgetComponent', () => {
  let component: WeekdayWidgetComponent;
  let fixture: ComponentFixture<WeekdayWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekdayWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekdayWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
