import { Injectable, OnInit } from '@angular/core';
import { Ticket } from './models/ticket.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService  {
  public url= 'https://localhost:8080/backend'
  constructor(public HttpClient:HttpClient) { }

  getDep(){
    return this.HttpClient.get(`${this.url}/routes/dep.js`)
  }

  getTicket(id:string){
    return this.HttpClient.get(`${this.url}/ticket/id/:${id}`)
  }
  getTiks(status:string){
    return this.HttpClient.get(`${this.url}/ticket/status/:${status}`)
  }
  
  setTicket(){
    return this.HttpClient.get(`${this.url}/ticket`)
  }
}
