import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Injectable({
  providedIn: 'root',
})
export class RotaguardGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loginService.getToken() == null) {
      this.router.navigate(['/login']);
      return false;
    }

    const userRole = this.loginService.getUserRole();
    const expectedRole = route.data['expectedRole'] as string; // Assegura TypeScript sobre a propriedade 'expectedRole'

    if (userRole !== expectedRole) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
