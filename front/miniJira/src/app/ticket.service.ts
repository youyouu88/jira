import { Injectable } from '@angular/core';
import { Ticket } from './models/ticket.model';
import { department } from './models/dep.model';
import { HttpClient } from '@angular/common/http';
import { Employee } from './models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService  {
  public url= 'https://localhost:8080'
  constructor (public HttpClient:HttpClient) { }

  getDeps(){ //ok
    return this.HttpClient.get<department[]>(`${this.url}/dep`)
  }

  getTicket(id:string|null){  //need something else 
    return this.HttpClient.get<Ticket>(`${this.url}/ticket/id/:${id}`)
  }

  getTiks(status:string){ //ok
    return this.HttpClient.get<Ticket[]>(`${this.url}/ticket/status/:${status}`)
  }

  getTikD(){ //due date //ok
    return this.HttpClient.get<Ticket[]>(`${this.url}/acceuil/soon`)
  }

  sendTicket(t:Ticket){   //ok
    return this.HttpClient.post(`${this.url}/ticket`,t)
  }

  getEmps(d:department){  //ok
    return this.HttpClient.get<Employee[]>(`${this.url}/employee/department/:${d}`)
  }
}
