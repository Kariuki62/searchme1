import { Injectable } from "@angular/core";
import { Http, Headers} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  private username: String;
  private clientid: String = 'fff19b0b3b7efb0d955a';
  private clientsecret: String = '89d01a204024beadd8e2184ef6adcd6416b110e7';

  constructor(private http: Http) {
    console.log ("service is now ready");

    this.username = "Kariuki62" ;
  }

  getUserInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
   .map(res => res.json());
  }
  getReposInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());
  }

  updateProfile(username:String){
    this.username= username;
  }


}
