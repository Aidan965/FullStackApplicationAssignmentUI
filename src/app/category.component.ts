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

    onSubmit() {

    }

    isIncomplete() {
        return this.isInvalid('motivation');
    }

    isInvalid(control: any) {
        return this.categoryForm.controls[control].invalid && this.categoryForm.controls[control].touched;           
    }

    prizes_list: any = [];
    page: number = 1;
    categoryForm: any;
}