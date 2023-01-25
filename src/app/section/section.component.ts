import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  present ='welcome'; 

  commandText

  constructor() { }


  startTime($event){
    this.present = $event;
  }

  ngOnInit() {
  }

}