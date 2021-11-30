import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WebService } from "./web.service";

@Component({
    selector: 'country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.css']
})
export class CountryComponent {
    constructor(public webService: WebService, private route: ActivatedRoute) {}

    ngOnInit() {
        
        
    }

    previousPage() {
        if (this.page > 1) {
            this.page = this.page - 1;
            sessionStorage['page'] = this.page;
            //this.laureates_list = this.webService.getCategory(this.route.snapshot.params['category'], this.page);
        }
    }

    nextPage() {
        this.page = this.page + 1;
        sessionStorage['page'] = this.page;
        //this.laureates_list = this.webService.getCategory(this.route.snapshot.params['category'], this.page);
    }



    laureates_list: any = [];
    page: number = 1;
}