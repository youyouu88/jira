import { Component } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acc',
  imports: [CommonModule],
  templateUrl: './acc.component.html',
  styleUrl: './acc.component.css'
})
export class AccComponent {
  tickets! : Ticket[];

}
