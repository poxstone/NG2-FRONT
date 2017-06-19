import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MessagesService } from '../services/messages.service';

import { Message } from '../models/message';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tenant:string;
  items:Message[];
  
  constructor(
    private route: ActivatedRoute,
    private listService: MessagesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.tenant = params['tenant'];
    });
    this.getList() 
  }

  getList() {
    this.listService.getItems().subscribe(
      items => this.items = items
    )
  }

}
