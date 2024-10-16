import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalChartComponent } from './statistical-chart.component';

describe('StatisticalChartComponent', () => {
  let component: StatisticalChartComponent;
  let fixture: ComponentFixture<StatisticalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticalChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
