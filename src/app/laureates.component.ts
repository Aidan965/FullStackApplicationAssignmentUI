import { Component } from "@angular/core";
import { WebService } from "./web.service";

@Component({
    selector: 'laureates',
    templateUrl: './laureates.component.html',
    styleUrls: ['./laureates.component.css']
})
export class LaureatesComponent {
    constructor(private webService: WebService) {}

    async ngOnInit() {
        var response = await this.webService.getLaureates();
        this.laureates_list = response;
    }

    laureates_list: any;
}