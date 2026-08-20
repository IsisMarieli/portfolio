import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [ Header, Home , Footer ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
