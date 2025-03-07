import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListItem } from '../models/product-list-item';
import { ProductDetail } from '../models/product-detail';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
}) // singleton
export class ProductsService {
  private apiControllerUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  getList(): Observable<ProductListItem[]> {
    return this.http.get<ProductListItem[]>(this.apiControllerUrl);
  }

  getById(id: number): Observable<ProductDetail> {
    return this.http.get<ProductDetail>(`${this.apiControllerUrl}/${id}`);
  }
}
