import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assi2',
  templateUrl: './assi2.component.html',
  styleUrls: ['./assi2.component.css']
})
export class Assi2Component implements OnInit {

  showSecret = false;
  log = [] as any;
  constructor() { }

  ngOnInit(): void {
  }
  onDetail(){
    this.showSecret = !this.showSecret;
    this.log.push(new Date);

  }
}
