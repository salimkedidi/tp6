import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent implements OnInit {
  lesProduits =[ 
    {id:15, libelle:'montre'}, 
    {id:32, libelle:'cartable'}, 
    {id:45, libelle:'cahier'}, 
    {id:96, libelle:'tablier'} ];
    identifiant:number;
    constructor(private activatedRoute:ActivatedRoute) { }
  ngOnInit() {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
  }
  
}


