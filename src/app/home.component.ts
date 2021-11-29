import { Component } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";
import { WebService } from "./web.service";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(private route: ActivatedRoute, private webService: WebService, private formBuilder: FormBuilder, public authService: AuthService) {}

    ngOnInit() {
        this.categoryForm = this.formBuilder.group({
            year: '2021',
            category: 'peace'
        })

        this.laureates_list = this.webService.getCategoryAndYear(this.categoryForm.value.category, this.categoryForm.value.year);
        // Get random Nobel laureate and display on homescreen
    }

    onSubmit() {        
        this.webService.getCategoryAndYear(this.categoryForm.value.category, this.categoryForm.value.year)
                                            .subscribe((response: any) => {                                               
                                                this.laureates_list = this.webService.getCategoryAndYear(this.categoryForm.value.category, this.categoryForm.value.year);
                                            });
    }

    categoryForm: any;
    laureates_list: any = []; 
}