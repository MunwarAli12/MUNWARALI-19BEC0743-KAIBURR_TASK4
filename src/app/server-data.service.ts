import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerDataService {
  apiUrl='http://localhost:8080/';
  constructor(private httpClient:HttpClient) { }

  getAllServersData(){
    return this.httpClient.get(`${this.apiUrl}findAllServers`);
  }

  getServerByName(servereName:string){
    return this.httpClient.get(`${this.apiUrl}findServerByName/${servereName}`); 
  }

  postServer(data:any){
    return this.httpClient.post(`${this.apiUrl}addServer`,data);
  }

  deleteServer(id:any){
    return this.httpClient.delete(`${this.apiUrl}deleteServer/${id}`);
  }
}
