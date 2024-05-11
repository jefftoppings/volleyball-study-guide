import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Observable, take } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { QuestionService } from './question/question.service';
import { query } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AsyncPipe,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  router: Router = inject(Router);
  questionId$: Observable<number> = inject(QuestionService).questionId$;
  maxQuestionId: number = QuestionService.maxQuestionId;

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
}
