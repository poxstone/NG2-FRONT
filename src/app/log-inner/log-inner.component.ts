import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-log-inner',
  templateUrl: './log-inner.component.html',
  styleUrls: ['./log-inner.component.css']
})
export class LogInnerComponent implements OnInit {
  tenant:string;
  query:string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.tenant = params['tenant'];
      this.query = params['query'];
    });
  }

}
