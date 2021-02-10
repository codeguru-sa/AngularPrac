import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus ='No server was Created';
  serverCreated = false;
  serverName: string ='';


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true}
      ,2000);
  }

  ngOnInit(): void {
  }

  onCreateNewServer(){
    this.serverCreated = true;
    this.serverCreationStatus='server was created and the name is ' + this.serverName;
  }

}
