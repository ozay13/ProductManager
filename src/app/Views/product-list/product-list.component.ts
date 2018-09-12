import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from '../../Dtos/product';
import { IProductService } from '../../Services/interface/product.interface';
import { ProductService } from '../../Services/implement/product.service';

/*
Author ozaytunctan
Computer Engineer
version:1.0
09.09.2018
*/
@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit, OnDestroy {
  productList: string = "Ürün Listesi";
  filter: string = "Ürün adina göre filtrele";
  imageHide: any = false;
  imageW: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  private _listFilter: string = "";
  products: IProduct[];
  filteredProductList: IProduct[];
  private errorMessage: string;

  private _productService: ProductService;
  //yapıcı injection veya get set inject te yapılabilir.
  constructor(private productService: ProductService) {
    this._productService = productService;
  }
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProductList = this._listFilter ? this.performFilter(this._listFilter) : this.products;
  }

  ngOnInit() {
    this._productService.getProducts().subscribe(
      product => {
      this.products = product,
        this.filteredProductList = this.products
      },
      error => this.errorMessage = <any>error
    );
    console.error(this.errorMessage);

  }
  toogleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnDestroy(): void {
    this.products = [];
    console.log("ngOnDestroy() metod call");
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  //iç template tarafından gönderilecek data string emit edilecek
  onRatingClicked(message: string): void {
    this.productList = message;
    console.log("message");
  }

}
