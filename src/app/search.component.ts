import { Component, ElementRef } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { WebService } from "./web.service";

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: []
})
export class SearchComponent {
    constructor(public webService: WebService, public route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder) {}

    ngOnInit() {
        if (sessionStorage['page']) {
            this.page = Number(sessionStorage['page']);
        }
        
        this.searchForm = this.formBuilder.group({
           search: ['', Validators.required]
        });


        this.route.params.subscribe(params => {          
            this.laureates_list = this.webService.searchLaureate(this.route.snapshot.params['search']);
        });   
    }

    onSubmit() {
        this.searchTerm = this.searchForm.get("search").value.toString();

        if (this.searchTerm == "") {
            alert("Please enter a search term.");
            return;
        }

        this.router.navigate(['/laureates/search/' + this.searchTerm]);
    }

    isUntouched() {
        return this.searchForm.controls.motivation.pristine;
    }

    isIncomplete() {
        return this.isInvalid('search') || this.isUntouched();
    }

    isInvalid(control: any) {
        return this.searchForm.controls[control].invalid && this.searchForm.controls[control].touched;           
    }

    laureates_list: any = [];
    page: number = 1;
    searchForm: any;
    searchTerm: string = "";
}