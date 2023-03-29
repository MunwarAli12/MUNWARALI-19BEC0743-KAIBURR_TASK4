import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ServerDataService } from '../server-data.service';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {

  addServerForm!:FormGroup; 
  constructor(private serverService:ServerDataService) { }

  ngOnInit(): void {
    this.addServerForm=new FormGroup({
      id: new FormControl(null,Validators.required),
      name: new FormControl(null,Validators.required), 
      language: new FormControl(null, Validators.required), 
      framework: new FormControl(null, Validators.required)
    })
    
  }
  onSubmit(){ 
    this.serverService.postServer(this.addServerForm.value).subscribe();
    this.addServerForm.reset();
  }

}
