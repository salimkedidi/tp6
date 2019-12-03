import { Component, OnInit } from '@angular/core';
import { EmployesService } from '../employes.service';
import { Employe } from '../Employe';

@Component({
  selector: 'app-employslist',
  templateUrl: './employslist.component.html',
  styleUrls: ['./employslist.component.css']
})
export class EmployslistComponent implements OnInit {
  employes:Employe[];

  constructor(private employeService: EmployesService) { }

  ngOnInit() {
    this.employes= this.employeService.lesEmployes;

  }
  

}
