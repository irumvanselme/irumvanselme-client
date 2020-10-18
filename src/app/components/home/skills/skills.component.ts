import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      name: 'Php',
      icon: 'mdi-language-php',
      category: 'Full stack, Web',
      level: 'expert'
    },
    {
      name: 'Angular',
      icon: 'mdi-angular',
      category: 'Front end',
      level: 'intermediate'
    },
    {
      name: 'Javascript',
      icon: 'mdi-language-javascript',
      category: 'Web development',
      level: 'expert'
    },
    {
      name: 'React Native',
      icon: 'mdi-react',
      category: 'Mobile Development',
      level: 'expert'
    },
    {
      name: 'Vue JS',
      icon: 'mdi-vuejs',
      category: 'Web development',
      level: 'expert'
    },
    {
      name: 'React',
      icon: 'mdi-react',
      category: 'Web development',
      level: 'expert'
    },
    {
      name: 'Mongo DB',
      category: 'Database Managment',
      level: 'expert'
    },
    {
      name: 'Laravel',
      icon: 'mdi-laravel',
      category: 'Web development',
      level: 'expert'
    },
    {
      name: 'Node JS',
      icon: 'mdi-nodejs',
      category: 'Back end',
      level: 'expert'
    },
    {
      name: 'Express JS',
      category: 'Web development',
      level: 'intermediate'
    },
    {
      name: 'Mysql',
      category: 'Database Managment',
      level: 'expert'
    },
    {
      name: 'CSS',
      icon: 'mdi-language-css3',
      category: 'Web development',
      level: 'expert'
    },
    {
      name: 'Java',
      icon: 'mdi-language-java',
      category: 'System Development',
      level: 'intermediate'
    },
    {
      name: 'C',
      icon: 'mdi-language-c',
      category: 'System Development',
      level: 'intermediate'
    },
    {
      name: 'Python',
      icon: 'mdi-language-python',
      category: 'AI and Robotics',
      level: 'intermediate'
    },
    {
      name: 'C++',
      icon: 'mdi-language-cpp',
      category: 'System Development',
      level: 'intermediate'
    },
    {
      name: 'TensorFlow',
      category: 'Machine Learning',
      level: 'beginner'
    },
    {
      name: 'Django',
      category: 'Web Development',
      level: 'beginner'
    },
    {
      name: 'Figma',
      category: 'Web Designing',
      level: 'intermediate'
    },
    {
      name: 'Adobe XD',
      category: 'Web Designing',
      level: 'expert'
    },
    {
      name: 'HTML',
      icon: 'mdi-language-html5',
      category: 'Web Development',
      level: 'expert'
    },
    {
      name: 'Adobe Photoshop',
      category: 'Web Desingning',
      level: 'beginner'
    },
    {
      name: 'Adobe illustrator',
      category: 'Web Desingnig',
      level: 'beginner'
    },
    {
      name: 'Bootsrtap',
      icon: 'mdi-bootstrap',
      category: 'Web Development',
      level: 'expert'
    },
  ];

  get_class_name(level): string {
    if (level === 'expert') {
      return 'text-success';
    }else if (level === 'intermediate'){
      return 'text-primary';
    }else{
      return 'text-danger';
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
