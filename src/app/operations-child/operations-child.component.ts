import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-operations-child',
  templateUrl: './operations-child.component.html',
  styleUrls: ['./operations-child.component.css']
})
export class OperationsChildComponent {

  @Input() public Ac:number=0;
  @Input() public Bc:number=0;

  

  @Output() public calcutateEvent:EventEmitter<any>=new EventEmitter();

  sum(){
    let result = this.Ac+this.Bc
    this.calcutateEvent.emit(result)
  }
  sub(){
    let result = this.Ac-this.Bc
    this.calcutateEvent.emit(result)
  }
  mul(){
    let result = this.Ac*this.Bc
    this.calcutateEvent.emit(result)
  }
}
