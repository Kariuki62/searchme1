import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  private username: String;
  private clientid: String = 'fff19b0b3b7efb0d955a';
  private clientsecret: String = '89d01a204024beadd8e2184ef6adcd6416b110e7';

  constructor() {}
}
