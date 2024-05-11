import { Injectable, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { QUESTIONS, Question } from '../data/questions';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  static readonly maxQuestionId = QUESTIONS.length;

  /* One more than the index */
  readonly questionId$: Observable<number> = inject(
    ActivatedRoute
  ).queryParams.pipe(
    map((queryParams) => queryParams['questionId']),
    map((id) => parseInt(id || '0', 10))
  );

  readonly currentQuestion$: Observable<Question> = this.questionId$.pipe(
    map((questionId) => QUESTIONS[questionId - 1])
  );
}
