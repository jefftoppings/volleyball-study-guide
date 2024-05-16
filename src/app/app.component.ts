import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import {
  BrowserModule,
  HammerModule,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
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
import { HammerConfig } from '../hammer.config';

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
    HammerModule,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig,
    },
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  router: Router = inject(Router);
  questionId$: Observable<number> = inject(QuestionService).questionId$;
  maxQuestionId: number = QuestionService.maxQuestionId;
  reviewModeService: ReviewModeService = inject(ReviewModeService);
  reviewMode$: Observable<boolean> = this.reviewModeService.reviewMode$;

  ngOnInit(): void {
    document.addEventListener('keydown', this.onKeydown.bind(this));
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.onKeydown.bind(this));
  }

  onKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        this.handleNavBack();
        break;
      case 'ArrowRight':
        this.handleNavForward();
        break;
    }
  }

  @HostListener('swipeleft', ['$event'])
  onSwipeLeft(_event: any): void {
    this.handleNavBack();
  }

  @HostListener('swiperight', ['$event'])
  onSwipeRight(_event: any): void {
    this.handleNavForward();
  }

  handleNavBack(): void {
    this.questionId$.pipe(take(1)).subscribe((questionId) => {
      this.router.navigate(['question'], {
        queryParams: {
          questionId: questionId === 1 ? this.maxQuestionId : questionId - 1,
        },
      });
    });
  }

  handleNavForward(): void {
    this.questionId$.pipe(take(1)).subscribe((questionId) => {
      this.router.navigate(['question'], {
        queryParams: {
          questionId: questionId === this.maxQuestionId ? 1 : questionId + 1,
        },
      });
    });
  }

  handleReviewModeChange(event: MatCheckboxChange): void {
    this.reviewModeService.reviewMode = event.checked;
  }
}
