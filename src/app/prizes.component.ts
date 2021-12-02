import { Component } from "@angular/core";
import { WebService } from "./web.service";
import { AuthService } from "@auth0/auth0-angular";

@Component({
    selector: 'prizes',
    templateUrl: './prizes.component.html',
    styleUrls: ['./prizes.component.css']
})
export class PrizesComponent {
    constructor(public webService: WebService, public authService: AuthService) {}

    ngOnInit() {
        if (sessionStorage['page']) {
            this.page = Number(sessionStorage['page']);
        }
        this.prizes_list = this.webService.getPrizes(this.page);       
    }

    deletePrize(prizeID: string) {
        this.webService.deletePrize(prizeID).subscribe((response: any) => {
            return this.prizes_list = this.webService.getPrizes(this.page);
        });
    }

    previousPage() {
        if (this.page > 1) {
            this.page = this.page - 1;
            sessionStorage['page'] = this.page;
            this.prizes_list = this.webService.getPrizes(this.page);
        }
    }

    nextPage() {
        this.page = this.page + 1;
        sessionStorage['page'] = this.page;
        this.prizes_list = this.webService.getPrizes(this.page);
    }

    prizes_list: any = [];
    page: number = 1;
}