import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { QuestionService } from '../question/question.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  min = 1;
  max = QuestionService.maxQuestionId;
  router: Router = inject(Router);

  handleStart(startingQuestion: string): void {
    this.router.navigate(['question'], {
      queryParams: { questionId: startingQuestion },
    });
  }
}
