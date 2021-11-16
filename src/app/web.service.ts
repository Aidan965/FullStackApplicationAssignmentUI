import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
    constructor(private http: HttpClient) {}

    getLaureates() {
        return this.http.get("http://localhost:5000/api/v1/laureates").toPromise();
    }

    getLaureate(id: any) {
        return this.http.get("http://localhost:5000/api/v1/laureates/" + id).toPromise();
    }
}