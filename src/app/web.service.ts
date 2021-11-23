import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
    constructor(private http: HttpClient) {}

    laureates_list: any;
    private laureateID: any;

    getLaureates(page: number) {
        return this.http.get("http://localhost:5000/api/v1/laureates?pn=" + page);
    }

    getLaureate(id: any) {
        this.laureateID = id;
        return this.http.get("http://localhost:5000/api/v1/laureates/" + id);
    }

    postPrize(prize: any) {
        console.log(prize);
        console.log(this.laureateID);

        let postData = new FormData();
        postData.append("year", prize.year);
        postData.append("category", prize.category);
        postData.append("motivation", prize.motivation);
        postData.append("share", prize.share);

        return this.http.post("http://localhost:5000/api/v1/prizes/" + this.laureateID, postData);
    }
}