import { Component } from "@angular/core";
import { WebService } from "./web.service";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'laureate',
    templateUrl: './laureate.component.html',
    styleUrls: ['./laureate.component.css']
})
export class LaureateComponent {

    laureateForm: any;

    constructor(private webService: WebService, private route: ActivatedRoute, private formBuilder: FormBuilder) {}

    onSubmit() {
        this.webService.postPrize(this.laureateForm.value)
            .subscribe((response: any) => {
                this.laureateForm.reset();
                this.laureates_list = this.webService.getLaureate(this.route.snapshot.params["id"]);
            });      
    }

    isUntouched() {
        return this.laureateForm.controls.motivation.pristine;
    }

    isIncomplete() {
        return this.isInvalid('motivation') || this.isUntouched();
    }

    isInvalid(control: any) {
        return this.laureateForm.controls[control].invalid && this.laureateForm.controls[control].touched;           
    }

    ngOnInit() {

        this.laureateForm = this.formBuilder.group({
            year: '',
            category: 'Peace',
            motivation: ['', Validators.required],
            share: 1
        })

        this.laureates_list = this.webService.getLaureate(this.route.snapshot.params['id']);
    }

    laureates_list: any = [];
}