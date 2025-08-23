import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../models/ticket.model';
import { CommonModule } from '@angular/common';
import { TicketService } from '../ticket.service';


@Component({
  selector: 'app-ticket-list',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {
  Tickets!: Ticket[];
  ticket!: Ticket;
  router!: Router;
  ticS:TicketService;
  
  importerTickets(status:string){
    this
    
  }

  allerVersTicket(idT : string){
    this.router.navigate(['/ticket',idT])
  }
}
