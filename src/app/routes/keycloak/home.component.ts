import { Component } from "@angular/core";
import { KeycloakService } from "keycloak-angular";
import { KeycloakProfile } from "keycloak-js";

@Component({
  selector: 'app-keycloak-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class KeycloakHomeComponent {
  isLoggedIn = false;
  userProfile: KeycloakProfile | null = null;

  constructor(private readonly keycloak: KeycloakService) { }

  async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
    }
  }

  login(): void {
    this.keycloak.login();
  }

  logout(): void {
    this.keycloak.logout();
  }
}