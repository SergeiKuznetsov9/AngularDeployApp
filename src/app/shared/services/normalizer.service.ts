import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NormalizerService {

  normalizeResponse(response: any) {
    return Object.keys(response).map((key) => ({ ...response[key], key }));
  }
}
