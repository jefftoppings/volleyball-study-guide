import { Injectable, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, startWith, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  static readonly maxQuestionId = 10;
  readonly questionId$: Observable<number> = inject(
    ActivatedRoute
  ).queryParams.pipe(
    map((queryParams) => queryParams['questionId']),
    map((id) => parseInt(id || '0', 10))
  );

  constructor() {}

  // Add your service methods here
}
