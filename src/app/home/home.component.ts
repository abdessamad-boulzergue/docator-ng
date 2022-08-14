import { Component, OnInit } from '@angular/core';
export interface Section {
  title: string;
  note: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  cv_hard_skills: Section[] = [
    {  title : "JAVA 8/11",  note: 90  },
    {  title : "VUE JS",  note: 80  },
    {  title : "Angular",  note: 50  },
    { title :"SGBD	: SQLServer, MySQL", note:80},
    { title :"CI/CD	: Docker, Maven, Git, Gerrit", note:80}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
