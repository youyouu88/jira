import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  router! : Router;
  importerTickets(status:string){
    this.router.navigate(['/tickets',status])
  }
  seep(){
    this.router.navigate(['/userProfile'])
  }
}
