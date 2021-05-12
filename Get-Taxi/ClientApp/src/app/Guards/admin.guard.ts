import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  decodedToken?:any;

  constructor(private authServise:AuthService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let token = this.authServise.getToken();
    if(token == null || token == "" || token == undefined){
      this.router.navigate(['login']);
      return false;
    }else{
      this.decodedToken = this.authServise.decodeToken(token);
      console.log(this.decodedToken);

      if(this.decodedToken.UserRole !== "Admin" || Date.now() >= this.decodedToken.exp * 1000){
        this.router.navigate(['login']);
        return false;
      }
    }




  return true;

  }

}
