import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BaseUrls} from '../../../../assets/configs/configs';
import {SyliusAPIResponse} from './sylius-response';
import {BrowserStorageService} from '../browser-storage.service';
import {LoaderService} from '../loader.service';
import {catchError} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {Product} from "../../interfaces/collection.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  private baseUrls: BaseUrls;

  constructor(
    private http: HttpClient,
    private bs: BrowserStorageService,
    private loader: LoaderService) {
    this.baseUrls = new BaseUrls();
  }

  getURL(url) {
    return this.baseUrls.baseUrl + url;
  }

  get(url: string, params: any, header: any = []) {
    this.loader.addLoader();
    return this.http.get<SyliusAPIResponse>(this.getURL(url)).pipe(
      catchError(error => this.handleHttpError(error))
    );
  }

  private handleHttpError(error: HttpErrorResponse) {
    return throwError(error);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data/sylius-data.json').pipe(
      catchError(error => this.handleHttpError(error))
    );
  }
}
