import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WebService } from "./web.service";

@Component({
    selector: 'country',
    templateUrl: './country.component.html',
    styleUrls: []
})
export class CountryComponent {
    constructor(public webService: WebService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.countries_list = this.webService.getMostDecoratedCountries();
    }

    countries_list: any = [];
    page: number = 1;
}