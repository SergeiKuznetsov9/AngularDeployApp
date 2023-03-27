import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subject } from 'rxjs';
import { ICustomer } from '../../models/customer';
import { NormalizerService } from '../normalizer.service';

const URL =
  'https://trainingdeploy-app-crud-default-rtdb.firebaseio.com/customers';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class HttpCustomerService {
  customers: ICustomer[] = [];
  updateCustomersEmitter: Subject<string> = new Subject();

  constructor(
    private http: HttpClient,
    private normalizerService: NormalizerService
  ) {}

  getData(): void {
    this.http.get<any>(`${URL}.json`, httpOptions).subscribe({
      next: (res) =>
        (this.customers = this.normalizerService.normalizeResponse(res)),
      error: catchError(this.errorHandler<ICustomer[]>('GET')),
    });
  }

  createData(customer: ICustomer): void {
    this.http
      .post<{ name: string }>(`${URL}.json`, customer, httpOptions)
      .subscribe({
        next: (res) => {
          this.customers.push({ ...customer, key: res.name });
          this.updateCustomersEmitter.next('');
        },
        error: catchError(this.errorHandler<ICustomer>('POST')),
      });
  }

  updateData(): void {
    console.log('updateData');
  }

  deleteData(): void {
    console.log('deleteData');
  }

  private errorHandler<T>(operation: string, res?: any): any {
    return (err: any): Observable<T> => {
      console.error(`${operation} failed: ${err}`);
      return of(res as T);
    };
  }
}
