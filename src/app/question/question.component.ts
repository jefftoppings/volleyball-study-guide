import { Component, inject } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Observable } from 'rxjs';
import { Question } from '../data/questions';
import { QuestionService } from './question.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [MatExpansionModule, AsyncPipe],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  currentQuestion$: Observable<Question> = inject(QuestionService).currentQuestion$;
}
