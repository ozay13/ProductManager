import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {tap,catchError} from "rxjs/operators";
import { IProductService } from "../interface/product.interface";
import { IProduct } from "../../Dtos/product";
/*
Author ozaytunctan
Computer Engineer
version:1.0
09.09.2018
*/
@Injectable({
    providedIn: 'root'
})
export class ProductService implements IProductService{

    private productWebServiceUrl = '/api/products';

    constructor(private http: HttpClient) {

    }
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