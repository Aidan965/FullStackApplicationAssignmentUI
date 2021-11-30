import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WebService } from "./web.service";

@Component({
    selector: 'affiliated',
    templateUrl: './affiliated.component.html',
    styleUrls: []
})
export class AffiliatedComponent {
    constructor(public webService: WebService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.laureates_list = this.webService.getLaureatesByAffiliatedUniversity(this.route.snapshot.params['university']);
    }

    laureates_list: any = [];
}