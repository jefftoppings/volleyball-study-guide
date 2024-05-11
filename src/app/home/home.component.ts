import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
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
  max = QuestionService.maxQuestionId

}
