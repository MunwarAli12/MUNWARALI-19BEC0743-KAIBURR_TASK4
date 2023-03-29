import { Component, OnInit } from '@angular/core';
import { ServerDataService } from '../server-data.service';

@Component({
  selector: 'app-list-all-servers',
  templateUrl: './list-all-servers.component.html',
  styleUrls: ['./list-all-servers.component.css']
})
export class ListAllServersComponent implements OnInit {
  servers:any;

  constructor(private serverService: ServerDataService) { }

  ngOnInit(): void {
    this.serverService.getAllServersData().subscribe((servers)=>{
      console.log(servers); 
      this.servers=servers;
    })
  }

  deleteServer(id: any){
    this.serverService.deleteServer(id).subscribe();
  }

}
