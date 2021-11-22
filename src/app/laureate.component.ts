import { Component } from "@angular/core";
import { WebService } from "./web.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'laureate',
    templateUrl: './laureate.component.html',
    styleUrls: ['./laureate.component.css']
})
export class LaureateComponent {
    constructor(private webService: WebService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.laureates_list = this.webService.getLaureate(this.route.snapshot.params['id']);
    }

    laureates_list: any = [];
}