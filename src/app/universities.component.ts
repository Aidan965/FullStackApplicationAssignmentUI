import { Component } from "@angular/core";
import { WebService } from "./web.service";

@Component({
    selector: 'universities',
    templateUrl: './universities.component.html',
    styleUrls: []
})
export class UniversitiesComponent {
    constructor(public webService: WebService) {}

    ngOnInit() {
        this.universities_list = this.webService.getMostDecoratedUniversities();      
    }

    universities_list: any = [];
    page: number = 1;
}