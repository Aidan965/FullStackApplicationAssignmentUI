import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "@auth0/auth0-angular";
import { WebService } from "./web.service";

@Component({
    selector: 'prize',
    templateUrl: './prize.component.html',
    styleUrls: ['./prize.component.css']
})
export class PrizeComponent {
    constructor(public webService: WebService, private route: ActivatedRoute, public authService: AuthService) {}

    ngOnInit() {
        this.prizes_list = this.webService.getPrize(this.route.snapshot.params['id']);   
    }

    deletePrize(prizeID: string) {
        this.webService.deletePrize(prizeID).subscribe((response: any) => {
            this.prizes_list = this.webService.getPrize(this.route.snapshot.params['id']);              
        });
    }

    prizes_list: any = [];
}