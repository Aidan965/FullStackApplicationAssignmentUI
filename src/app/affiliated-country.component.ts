import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WebService } from "./web.service";

@Component({
    selector: 'affiliated-country',
    templateUrl: './affiliated-country.component.html',
    styleUrls: []
})
export class AffiliatedCountryComponent {
    constructor(public webService: WebService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.laureates_list = this.webService.getLaureatesByCountryCode(this.route.snapshot.params['countryCode']);
    }

    laureates_list: any = [];
}