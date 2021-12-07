import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
    constructor(private http: HttpClient) {}

    laureates_list: any;
    private laureateID: any;
    prizes_list: any;
    highly_decorated_list: any;

    getLaureates(page: number) {
        return this.http.get("http://localhost:5000/api/v1/laureates?pn=" + page);
    }

    getLaureate(id: any) {
        this.laureateID = id;
        return this.http.get("http://localhost:5000/api/v1/laureates/" + id);
    }

    getPrizes(page: number) {
        return this.http.get("http://localhost:5000/api/v1/prizes?pn=" + page)
    }

    getPrize(id: any) {
        return this.http.get("http://localhost:5000/api/v1/prizes/" + id);
    }

    getCategory(category: string, page: number) {
        return this.http.get("http://localhost:5000/api/v1/prizes/category/" + category + "?pn=" + page);
    }

    getCategoryAndYear(category: string, year: number) {
        return this.http.get("http://localhost:5000/api/v1/prizes/" + category + "/" + year);
    }

    getMostDecorated() {
        return this.http.get("http://localhost:5000/api/v1/laureates/highly_decorated");
    }

    getMostDecoratedUniversities() {
        return this.http.get("http://localhost:5000/api/v1/laureates/universities/top20");
    }

    getLaureatesByAffiliatedUniversity(university: string) {
        return this.http.get("http://localhost:5000/api/v1/laureates/universities/" + university);
    }

    getMostDecoratedCountries() {
        return this.http.get("http://localhost:5000/api/v1/laureates/countries/top30");
    }

    getLaureatesByCountryCode(countryCode: string) {
        return this.http.get("http://localhost:5000/api/v1/laureates/countries/" + countryCode);
    }

    searchLaureate(searchTerm: string) {
        return this.http.get("http://localhost:5000/api/v1/laureates/search/" + searchTerm);
    }

    editLaureate(laureate: any) {
        let putData = new FormData();
        putData.append("firstname", laureate.firstname);
        putData.append("surname", laureate.surname);
        putData.append("born", laureate.born);
        putData.append("died", laureate.died);
        putData.append("bornCountry", laureate.bornCountry);
        putData.append("bornCountryCode", laureate.bornCountryCode);
        putData.append("profileImage", laureate.profileImage);

        return this.http.put("http://localhost:5000/api/v1/laureates/" + this.laureateID, putData);
    }

    postPrize(prize: any) {
        let postData = new FormData();
        postData.append("firstname", prize.firstname);
        postData.append("surname", prize.surname);
        postData.append("year", prize.year);
        postData.append("category", prize.category);
        postData.append("motivation", prize.motivation);
        postData.append("name", prize.name);
        postData.append("city", prize.city);
        postData.append("country", prize.country);
        postData.append("share", prize.share);
        postData.append("image", prize.image);

        return this.http.post("http://localhost:5000/api/v1/prizes/" + this.laureateID, postData);
    }

    postLaureate(laureate: any) {
        let postData = new FormData();
        postData.append("firstname", laureate.firstname);
        postData.append("surname", laureate.surname);
        postData.append("born", laureate.born);
        postData.append("died", laureate.died);
        postData.append("bornCountry", laureate.bornCountry);
        postData.append("bornCountryCode", laureate.bornCountryCode);
        postData.append("bornCity", laureate.bornCity);
        postData.append("gender", laureate.gender);
        postData.append("profileImage", laureate.profileImage);

        return this.http.post("http://localhost:5000/api/v1/laureates", postData);
    }

    deletePrize(id: string) {
        return this.http.delete("http://localhost:5000/api/v1/prizes/" + id);
    }

    deleteLaureate(id: string) {
        return this.http.delete("http://localhost:5000/api/v1/laureates/" + id);
    }
}