import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/ticket.model';
//import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from '../ticket.service';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-acc',
  standalone : true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './acc.component.html',
  styleUrl: './acc.component.css'
})
export class AccComponent implements OnInit {
  tickets! : Ticket[];
  constructor(private tS:TicketService, private router : Router){}
  ngOnInit(): void {
      this.tS.getTikD().subscribe(res=>{this.tickets=res});
  }
  allerVersTicket(idT : string){
    this.router.navigate(['/ticket/id',idT])
  }

}
