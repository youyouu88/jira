import { Routes } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { AccComponent } from './acc/acc.component';
import { AjTicComponent } from './aj-tic/aj-tic.component';
import { TicketComponent } from './ticket/ticket.component';

export const routes: Routes = [
    {path:'acceuil/soon',component:AccComponent},
    {path:'ticket/status/:status',component:TicketListComponent},
    {path:'ticket/id/:id',component:TicketComponent},
    {path :'addT', component:AjTicComponent},
    {path: '**', redirectTo: ''}
];
