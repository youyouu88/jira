import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../ticket.service';
@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent implements OnInit {
  
  ticket!: Ticket;
  constructor(private route:ActivatedRoute, private tKS : TicketService){}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params=>{
        const id = params.get('idT');
        this.tKS.getTicket(id).subscribe(res=>{this.ticket=res});
      });
  }


}
