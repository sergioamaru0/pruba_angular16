import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  isMenuOpen = false; // Estado para controlar la apertura/cierre del menú

  // Función para alternar el menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Cerrar el menú cuando se hace clic en un enlace
  closeMenu() {
    this.isMenuOpen = false;
  }
}
