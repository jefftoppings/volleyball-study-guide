import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Observable, take } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { QuestionService } from './question/question.service';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
import { ReviewModeService } from './question/review-mode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AsyncPipe,
    RouterModule,
    MatMenuModule,
    MatCheckboxModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  router: Router = inject(Router);
  questionId$: Observable<number> = inject(QuestionService).questionId$;
  maxQuestionId: number = QuestionService.maxQuestionId;
  reviewModeService: ReviewModeService = inject(ReviewModeService);
  reviewMode$: Observable<boolean> = this.reviewModeService.reviewMode$;

  handleNavBack(): void {
    this.questionId$.pipe(take(1)).subscribe((questionId) => {
      this.router.navigate(['question'], {
        queryParams: { questionId: questionId - 1 },
      });
    });
  }

  handleNavForward(): void {
    this.questionId$.pipe(take(1)).subscribe((questionId) => {
      this.router.navigate(['question'], {
        queryParams: { questionId: questionId + 1 },
      });
    });
  }

  handleReviewModeChange(event: MatCheckboxChange): void {
    this.reviewModeService.reviewMode = event.checked;
  }
}
