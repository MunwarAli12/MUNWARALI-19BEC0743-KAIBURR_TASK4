import { Component, OnInit } from '@angular/core';
import { ServerDataService } from '../server-data.service';

@Component({
  selector: 'app-search-server',
  templateUrl: './search-server.component.html',
  styleUrls: ['./search-server.component.css']
})
export class SearchServerComponent implements OnInit {
  serverName!:string;
  resultData!:any;
  constructor(private serverService: ServerDataService) { }

  ngOnInit(): void {
  }
  searchServerByName(){
    this.serverService.getServerByName(this.serverName).subscribe((servers)=>{
      this.resultData=servers;

    })
  }

}
