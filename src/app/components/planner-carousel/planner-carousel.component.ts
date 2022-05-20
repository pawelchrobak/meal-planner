import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { addDays, format } from 'date-fns';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ComponentChanges, DayPlanModel } from 'src/app/models';
import { arrayToObjByKey } from 'src/app/utils/array.utils';

@Component({
  selector: 'app-planner-carousel',
  templateUrl: './planner-carousel.component.html',
  styleUrls: ['./planner-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // TODO: find better solution
  encapsulation: ViewEncapsulation.None,
})
export class PlannerCarouselComponent implements OnChanges, AfterViewInit {
  public daysList: number[] = [];

  @Input() public dayPlans!: DayPlanModel[];

  public dayPlansDateIndexed: { [date: number]: DayPlanModel } = {};

  private startingDay = -7;
  private endingDay = 14;
  private DAYS_INC = 7;
  public ELEMENT_WIDTH = 200;

  private currentIndex = 0;

  @ViewChild(CdkVirtualScrollViewport) viewPort!: CdkVirtualScrollViewport;

  constructor() {
    this.fillDays();
  }

  ngOnChanges(changes: ComponentChanges<PlannerCarouselComponent>): void {
    if (changes.dayPlans) {
      this.dayPlansDateIndexed = arrayToObjByKey<DayPlanModel>(
        changes.dayPlans.currentValue,
        'date'
      );
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.viewPort.scrollToIndex(7, 'auto');
    }, 0);
  }

  public fillDays(): void {
    for (let d = this.startingDay; d < this.endingDay; d++) {
      this.daysList.push(parseInt(format(addDays(new Date(), d), 'yyyyMMdd')));
    }
  }

  public expandNext(): void {
    const nextDays = Array(this.DAYS_INC)
      .fill('')
      .map((_, i) =>
        parseInt(format(addDays(new Date(), this.endingDay + i), 'yyyyMMdd'))
      );

    this.daysList = [...this.daysList, ...nextDays];
    this.endingDay = this.endingDay + this.DAYS_INC;
  }

  public expandPrevious(): void {
    const previousDays = Array(this.DAYS_INC)
      .fill('')
      .map((_, i) =>
        parseInt(
          format(
            addDays(new Date(), this.startingDay - this.DAYS_INC + i),
            'yyyyMMdd'
          )
        )
      );

    this.daysList = [...previousDays, ...this.daysList];
    this.startingDay = this.startingDay - this.DAYS_INC;
  }

  public setIndex(index: number) {
    this.currentIndex = index;
  }

  public scrollToNext(): void {
    this.viewPort.scrollToIndex(this.currentIndex + 1, 'smooth');
  }

  public scrollToPrev(): void {
    this.viewPort.scrollToIndex(this.currentIndex - 1, 'smooth');
  }
}
