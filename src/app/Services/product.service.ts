import { Injectable } from "@angular/core";
import { IProduct } from "../Dtos/product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {tap,catchError} from "rxjs/operators";
/*
Author ozaytunctan
Computer Engineer
version:1.0
09.09.2018
*/
@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private productWebServiceUrl = '/api/products';

    constructor(private http: HttpClient) {

    }
    /* getProducts(): IProduct[] {
         return [
             {
                 "productId": 1,
                 "productCode": "SRG2-123",
                 "productName": "Cola",
                 "description": "test açıklama",
                 "price": 4,
                 "releaseDate": "11.2.2018 23:22",
                 "starRating": 6,
                 "piece": 2.3,
                 "imageUrl": "https://cdn.cimri.io/image/240x240/cocacolamlkutu_35420965.jpg"
             },
             {
                 "productId": 2,
                 "productCode": "S6T-345",
                 "productName": "Cay",
                 "description": "test açıklama",
                 "price": 2.5,
                 "releaseDate": "11.2.2018 23:22",
                 "starRating": 9,
                 "piece": 2.9,
                 "imageUrl": ''
             }
 
         ];
     }*/
    getProducts():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productWebServiceUrl)
        .pipe(
            tap(data=>console.log('All:'+JSON.stringify(data))),catchError(this.handleError)
        );
    }
    private handleError(err: HttpErrorResponse){
        let errorMessage='';
        if(err.error instanceof ErrorEvent){
            errorMessage=err.status.toString();
        }
        else{
            errorMessage=err.message;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }

}