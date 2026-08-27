import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Project } from './components/project/project';
import { Experience } from './components/experience/experience'; 

@Component({
  selector: 'app-root',
  imports: [ Header, Home , Footer, About, Project, Experience ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
