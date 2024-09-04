import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jav-modal-layout',
  templateUrl: './modal-layout.component.html',
  styleUrls: ['./modal-layout.component.scss']
})
export class ModalLayoutComponent implements OnInit {

  @Input() wrapperWidth: string = "fit-content";

  constructor() { }

  ngOnInit(): void {
  }

}
