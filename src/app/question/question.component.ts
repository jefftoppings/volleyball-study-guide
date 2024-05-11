import { Component, inject } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Observable, combineLatest } from 'rxjs';
import { Question } from '../data/questions';
import { QuestionService } from './question.service';
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SubBulletPipe } from './sub-bullet.pipe';
import { ReviewModeService } from './review-mode.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [MatExpansionModule, AsyncPipe, SubBulletPipe],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  currentQuestion$: Observable<Question> =
    inject(QuestionService).currentQuestion$;
  expanded: boolean = false;
  reviewMode$: Observable<boolean> = inject(ReviewModeService).reviewMode$;

  constructor() {
    // close expansion panel if question changes
    combineLatest([this.currentQuestion$, this.reviewMode$])
      .pipe(takeUntilDestroyed())
      .subscribe(([, reviewMode]) => (this.expanded = reviewMode));
  }
}
