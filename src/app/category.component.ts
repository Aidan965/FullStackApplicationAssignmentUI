import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WebService } from "./web.service";

@Component({
    selector: 'category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent {
    constructor(public webService: WebService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {          
            this.prizes_list = this.webService.getCategory(this.route.snapshot.params['category'], this.page);   
        })
        
    }

    previousPage() {
        if (this.page > 1) {
            this.page = this.page - 1;
            sessionStorage['page'] = this.page;
            this.prizes_list = this.webService.getCategory(this.route.snapshot.params['category'], this.page);
        }
    }

    nextPage() {
        this.page = this.page + 1;
        sessionStorage['page'] = this.page;
        this.prizes_list = this.webService.getCategory(this.route.snapshot.params['category'], this.page);
    }

    goToPage(pageNumber: any) {
        this.page = pageNumber;
        sessionStorage['page'] = this.page;
        this.prizes_list = this.webService.getCategory(this.route.snapshot.params['category'], this.page);
    }

    firstPage() {
        this.page = 1;
        sessionStorage['page'] = this.page;
        this.prizes_list = this.webService.getCategory(this.route.snapshot.params['category'], this.page);
    }



    prizes_list: any = [];
    page: number = 1;
}