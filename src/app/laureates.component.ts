import { Component } from "@angular/core";
import { WebService } from "./web.service";
import { AuthService } from "@auth0/auth0-angular";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'laureates',
    templateUrl: './laureates.component.html',
    styleUrls: ['./laureates.component.css']
})
export class LaureatesComponent {
    constructor(public webService: WebService, public authService: AuthService, private formBuilder: FormBuilder) {}

    ngOnInit() {
        if (sessionStorage['page']) {
            this.page = Number(sessionStorage['page']);
        }

        this.laureateForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            surname: ['', Validators.required],
            born: ['', Validators.required],
            died: ['', Validators.required],
            bornCountry: ['', Validators.required],
            bornCountryCode: ['', Validators.required],
            bornCity: ['', Validators.required],
            gender: ['', Validators.required],
            profileImage: ['', Validators.required]
        })

        this.laureates_list = this.webService.getLaureates(this.page);       
    }

    onSubmit() {
        this.webService.postLaureate(this.laureateForm.value)
            .subscribe((response: any) => {
                this.laureateForm.reset();
                this.laureates_list = this.webService.getLaureates(this.page);
            });     
    }

    deleteLaureate(laureateID: string) {
        this.webService.deleteLaureate(laureateID).subscribe((response: any) => {
            return this.laureates_list = this.webService.getLaureates(this.page);
        });   
    }
    
    isUntouched() {
        return this.laureateForm.controls.profileImage.pristine;
    }

    isIncomplete() {
        return this.isInvalid('profileImage') || this.isUntouched();
    }

    isInvalid(control: any) {
        return this.laureateForm.controls[control].invalid && this.laureateForm.controls[control].touched;           
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

    goToPage(pageNumber: any) {
        this.page = pageNumber;
        sessionStorage['page'] = this.page;
        this.laureates_list = this.webService.getLaureates(this.page);
    }

    firstPage() {
        this.page = 1;
        sessionStorage['page'] = this.page;
        this.laureates_list = this.webService.getLaureates(this.page);
    }

    laureates_list: any = [];
    page: number = 1;
    laureateForm: any;
}