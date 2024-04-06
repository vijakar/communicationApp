import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-parent',
  templateUrl: './calculator-parent.component.html',
  styleUrls: ['./calculator-parent.component.css']
})
export class CalculatorParentComponent {

  public a:number=0;
  public b:number=0;
  public result:number=0;

  catch(value:any){
this.result = value
  }
}
