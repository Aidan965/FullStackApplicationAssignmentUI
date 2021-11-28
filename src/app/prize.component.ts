import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WebService } from "./web.service";

@Component({
    selector: 'prize',
    templateUrl: './prize.component.html',
    styleUrls: ['./prize.component.css']
})
export class PrizeComponent {
    constructor(public webService: WebService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.prizes_list = this.webService.getPrize(this.route.snapshot.params['id']);   
        console.log(this.prizes_list);
    }

    prizes_list: any = [];
}