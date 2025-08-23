import { Component, input, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../models/ticket.model';
import { InputFunction } from '@angular/core';
import 


@Component({
  selector: 'app-aj-tic',
  standalone : true,
  imports: [],
  templateUrl: './aj-tic.component.html',
  styleUrl: './aj-tic.component.css'
})
export class AjTicComponent  implements OnInit{
  ticket!:Ticket;

  constructor(private tkS:TicketService){};

  ngOnInit(): void {
    @input titre
      
  }
  abandon() {
    let a =Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;
    this.ticket = { idT:String(a),title: '', desc: '', assignedTo: '' ,assignedBy:'',creationD:new Date('2005-04-21'),status:'open'};
    alert('Ticket abandoned.');
  }


  

}
