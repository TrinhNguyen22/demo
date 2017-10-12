import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-content-2',
  templateUrl: './content-2.component.html',
  styleUrls: ['./content-2.component.css']
})
export class Content2Component implements OnInit {
  ngOnInit(): void {
  }
  public modalRef: BsModalRef;
  wasClicked = false;
  constructor(private modalService: BsModalService){}

  public openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
    this.wasClicked = !this.wasClicked;
  }

}
