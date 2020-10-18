import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions = [
    {
      name: 'Where can I see Your work ?',
      answer: 'I use many platforms like dribble and behance for designing and github for development. If you are not satsfied you many emain me and I give more according to your need'
    },
    {
      name: 'Where can I see Your work ?',
      answer: 'I use many platforms like dribble and behance for designing and github for development. If you are not satsfied you many emain me and I give more according to your need'
    },
    {
      name: 'How much do you charge ?',
      answer: 'I use many platforms like dribble and behance for designing and github for development. If you are not satsfied you many emain me and I give more according to your need'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
