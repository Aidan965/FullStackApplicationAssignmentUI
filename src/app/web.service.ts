import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
    constructor(private http: HttpClient) {}

    laureates_list: any;

    getLaureates(page: number) {
        return this.http.get("http://localhost:5000/api/v1/laureates?pn=" + page);
    }

    getLaureate(id: any) {
         return this.http.get("http://localhost:5000/api/v1/laureates/" + id);
    }
}