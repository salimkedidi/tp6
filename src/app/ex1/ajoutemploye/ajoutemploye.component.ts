import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-ajoutemploye',
  templateUrl: './ajoutemploye.component.html',
  styleUrls: ['./ajoutemploye.component.css']
})
export class AjoutemployeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onAccueil() { 
    this.router.navigate(['/liste employes']); }

}
