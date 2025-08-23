import { Routes } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { HeaderComponent } from './header/header.component';
import { AccComponent } from './acc/acc.component';

export const routes: Routes = [
    {path:'',component:AccComponent},
    {path:'ticket-list/:status',component:TicketListComponent},
    {path: '**', redirectTo: ''}
];
