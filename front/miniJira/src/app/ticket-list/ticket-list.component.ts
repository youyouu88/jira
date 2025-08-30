import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Ticket } from '../models/ticket.model';
import { CommonModule } from '@angular/common';
import { TicketService } from '../ticket.service';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-ticket-list',
  standalone:true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit{
  constructor(private ticS:TicketService,private route: ActivatedRoute,private router: Router){}
  Tickets!: Ticket[];
  st : string|null='';
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const status = params.get('status');
      this.st=status;

      if (status) {
        this.ticS.getTiks(status).subscribe(res => this.Tickets = res);
      }
      else{
        alert('No tickets with that status !');
      }
    });
  }

  allerVersTicket(idT : string){
    this.router.navigate(['/ticket/id',idT])
  }
}
