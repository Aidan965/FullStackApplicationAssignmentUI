import { i18nMetaToJSDoc } from "@angular/compiler/src/render3/view/i18n/meta";
import { Component } from "@angular/core";
import { WebService } from "./web.service";

@Component({
    selector: 'laureates',
    templateUrl: './laureates.component.html',
    styleUrls: ['./laureates.component.css']
})
export class LaureatesComponent {
    constructor(public webService: WebService) {}

    ngOnInit() {
        if (sessionStorage['page']) {
            this.page = Number(sessionStorage['page']);
        }
        this.laureates_list = this.webService.getLaureates(this.page);       
    }

    previousPage() {
        if (this.page > 1) {
            this.page = this.page - 1;
            sessionStorage['page'] = this.page;
            this.laureates_list = this.webService.getLaureates(this.page);
        }
    }

    nextPage() {
        this.page = this.page + 1;
        sessionStorage['page'] = this.page;
        this.laureates_list = this.webService.getLaureates(this.page);
    }

    laureates_list: any = [];
    page: number = 1;
}