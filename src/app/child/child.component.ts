import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component ,DoCheck,Input ,OnChanges,OnDestroy,OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input() inputValue :string ="Tirupathi Rao";


  // constructor is not part of angular life cycle hook method, it is javascript feature
  // and input properties are not updated
  constructor(){
    console.log("Constructor  is called !")
    console.log(this.inputValue); // o.p : Tirupathi Rao
  }
  //in order to use ngOnChanges we have to implement OnChanges Interface
  // when a component's input property changes ngOnChanges is called
  // it is not called when no change is detected from previous and current value of changes object
  ngOnChanges(changes: SimpleChanges) {
    console.log(" ngOnChanges  is called !");
    console.log(changes);
  }

  //in order to use ngOnit we have to implement OnInit Interface
  // it is called when angular initializes the component first time
  // and input properties are  updated
  // perfect place to add any initialization logic for your component
  ngOnInit() {
    console.log(" ngOnInit  is called !");
    console.log(this.inputValue); // o.p : ''(empty string)
  }
  //in order to use ngDoCheck we have to implement DoCheck Interface
  // invokes this event during every change detection cycle and called even no change in input properties
  // used to implement a custom change detection,whenever angular fails to detect 
  ngDoCheck() {
    console.log(" ngDoCheck  is called !");
  }
   //in order to use ngAfterContentInit we have to implement AfterContentInit Interface
   // called after projected content is fully initialized
  ngAfterContentInit(){
    console.log(" ngAfterContentInit  is called !");
  }

  //in order to use ngAfterContentChecked we have to implement AfterContentChecked Interface
  // called during every change detection cycle After angular finishes checking of component projected content
  // also called when projected content is changed
  // similar to  ngAfterContentInit ,Both are called after the content is initialized,checked and updated
  // only difference b/w ngAfterContentChecked & ng AfterContentInt is 
  // ngAfterContentChecked called for everychange detection cycle
  //ngAfterContentInt is called for 1st change detection cycle
  ngAfterContentChecked() {
    console.log(" ngAfterContentChecked  is called !");
  }
  // it is called whenever View is changed
  ngAfterViewInit(): void {
    console.log(" ngAfterViewInit  is called !");
  }

  ngAfterViewChecked(): void {
    console.log(" ngAfterViewChecked  is called !");
  }
  ngOnDestroy(): void {
    console.log(" ngOnDestroy  is called !");
  }
}
