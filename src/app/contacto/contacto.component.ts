import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  links = ["https://everis.inacap.cl/", "https://angular.io/"];
  constructor() { }

  ngOnInit(): void {
  }

}
