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
        if (sessionStorage['prizes_page']) {
            this.page = Number(sessionStorage['prizes_page']);
        }
        this.prizes_list = this.webService.getPrizes(this.page);       
    }

    previousPage() {
        if (this.page > 1) {
            this.page = this.page - 1;
            sessionStorage['prizes_page'] = this.page;
            this.prizes_list = this.webService.getPrizes(this.page);
        }
    }

    nextPage() {
        this.page = this.page + 1;
        sessionStorage['prizes_page'] = this.page;
        this.prizes_list = this.webService.getPrizes(this.page);
    }

    goToPage(pageNumber: any) {
        this.page = pageNumber;
        sessionStorage['prizes_page'] = this.page;
        this.prizes_list = this.webService.getPrizes(this.page);
    }

    firstPage() {
        this.page = 1;
        sessionStorage['prizes_page'] = this.page;
        this.prizes_list = this.webService.getPrizes(this.page);
    }


    prizes_list: any = [];
    page: number = 1;
}