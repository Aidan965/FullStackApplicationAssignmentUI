import { Component, Inject } from "@angular/core";
import { WebService } from "./web.service";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "@auth0/auth0-angular";
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'laureate',
    templateUrl: './laureate.component.html',
    styleUrls: ['./laureate.component.css']
})
export class LaureateComponent {

    laureateForm: any;
    editLaureateForm: any;
    laureates_list: any = [];
    page: any;

    constructor(private webService: WebService, private route: ActivatedRoute, private formBuilder: FormBuilder, public authService: AuthService,
                private dialog: MatDialog) {}

    onSubmit() {
        console.log(this.laureateForm.value);
        this.webService.postPrize(this.laureateForm.value)
            .subscribe((response: any) => {
                this.laureateForm.reset();
                this.laureates_list = this.webService.getLaureate(this.route.snapshot.params["id"]);
            });      
    }

    editLaureate() {
        return this.webService.editLaureate(this.editLaureateForm.value).subscribe((response: any) => {
            this.laureates_list = this.webService.getLaureate(this.route.snapshot.params["id"]);
        });
    }

    deleteLaureate(laureateID: string) {
        this.webService.deleteLaureate(laureateID).subscribe((response: any) => {
            return this.laureates_list = this.webService.getLaureates(this.page);
        });
    }

    isIncomplete() {
        return this.isInvalid('profileImage') || this.isUntouched();
    }

    isUntouched() {
        return this.laureateForm.controls.profileImage.pristine;
    }

    isInvalid(control: any) {
        return this.laureateForm.controls[control].invalid && this.laureateForm.controls[control].touched;           
    }

    ngOnInit() {
        this.laureates_list = this.webService.getLaureate(this.route.snapshot.params['id']);

        this.laureates_list.forEach((element: any) => {
            this.laureateForm = this.formBuilder.group({
                firstname: element[0].firstname,
                surname: element[0].surname,
                year: ['', Validators.required],
                category: 'Peace',
                motivation: ['', Validators.required],
                name: ['', Validators.required],
                city: ['', Validators.required],
                country: ['', Validators.required],
                share: 1,
                profileImage: ''
            })
        });

        this.laureates_list.forEach((element: any) => {
            this.editLaureateForm = this.formBuilder.group({
                firstname: [element[0].firstname, Validators.required],
                surname: [element[0].surname, Validators.required],
                born: [element[0].born, Validators.required],
                died: [element[0].died, Validators.required],
                bornCountry: [element[0].bornCountry, Validators.required],
                bornCountryCode: [element[0].bornCountryCode, Validators.required],
                profileImage: [element[0].profileImage, Validators.required]
            });    
        });  
    }
}