
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { environment} from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = environment.apiUrl;

  constructor(private snackbar: MatSnackBar, private http: HttpClient) {

  }

  showMessage(msg: string): void {
    this.snackbar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: 'bottom'
    })
  }

  create(product: Product) : Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

}



