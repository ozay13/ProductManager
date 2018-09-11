import { Observable } from "rxjs";
import { IProduct } from "../../Dtos/product";



export interface IProductService{
    getProducts():Observable<IProduct[]>;
}