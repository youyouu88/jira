import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketService } from '../ticket.service';

import { Ticket } from '../models/ticket.model';
import { department } from '../models/dep.model';
import { Employee } from '../models/employee.model';

import {  FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aj-tic',
  standalone : true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './aj-tic.component.html',
  styleUrl: './aj-tic.component.css'
})

export class AjTicComponent  implements OnInit{
  today = new Date();

  ticket!:Ticket;
  departments:department[]=[];
  employees!: Employee[];
  dept!: department ; //will be used to get emps 

  
  constructor(private tkS:TicketService,
    private router: Router
  ){
    this.ticket={idT:'',title: '', description: '', assignedBy : '',
      assignedTo: '' ,created:new Date(),
      dueTo: new Date(),status:'Open'}
  };
  

  ngOnInit(): void {
    this.abandon();
    this.tkS.getDeps().subscribe(res=>{this.departments=res})
  }

  getE(d : department){
    this.tkS.getEmps(d).subscribe(res=>{this.employees=res})
  }

  sendT(){
    if (this.isFormValid()) {

      let a =Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      this.ticket.idT= String(a);
      this.ticket.created=new Date();

      this.tkS.sendTicket(this.ticket).subscribe({
      next:(res)=>{
        alert('Ticket created successfully!');
        this.router.navigate(['/acc']);
      },
       error: (error) => {
        console.error('Error creating ticket:', error);
      }
      });
    }
    else{
      alert('Please check all the inputs; all data is required ! ');
    }

  }

  isFormValid(){
    return this.ticket && this.ticket.title.trim()!=='' && this.ticket.description.trim()!==''
    && this.ticket.assignedTo.trim()!=='' 
  }
  abandon() {
    this.ticket = { idT:'',title: '', description: '', assignedTo: '',assignedBy :'' ,created:new Date(),dueTo: new Date(),status:'open'};
    alert('Ticket abandoned.');
  }

}
