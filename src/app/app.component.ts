import {
  Component, HostListener
} from '@angular/core';
import {
  renderFlagCheckIfStmt
} from '@angular/compiler/src/render3/view/template';
declare const bubble: any;
declare const selection: any;
declare const merge: any;
declare const quick: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sorting';
  generate = 0;
  arr = [];
  x = 0;
  h=0;
  speed=0;
  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.ngOnInit()
  }
  
  ngOnInit() {
    
    if(window.matchMedia("(max-width: 480px)").matches){
      this.x=81;
      this.h=500;
      this.speed=4;
    }
    else{
      this.x=277;
      this.h=670;
      this.speed=3;
    }
    console.log(this.x)
    this.RandomNum();
    //this.render()
  }

  RandomNum() {
    this.arr = [];
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //277
    for (var i = 0; i < this.x; i++) {
      this.generate = getRandomInt(5, this.h);
      this.arr.push(this.generate);
    }
    this.render();
  }
  render() {
    var string = ""
    for (var i = 0; i < this.arr.length; i++) {
      string += "<div id='" + i.toString() + "' class='bars' style='height: " + this.arr[i].toString() + "px;'></div>"
    }
    var element = document.getElementById('Container');
    element.innerHTML = string;
    //console.log(this.arr);
  }

  DisableButton(){
    document.getElementById('generate').setAttribute("disabled","disabled");
    document.getElementById('quicksort').setAttribute("disabled","disabled");
    document.getElementById('mergesort').setAttribute("disabled","disabled");
    document.getElementById('selectionsort').setAttribute("disabled","disabled");
    document.getElementById('bubblesort').setAttribute("disabled","disabled");
  }

  EnableButton(){
    document.getElementById("generate").removeAttribute("disabled");
    document.getElementById("quicksort").removeAttribute("disabled");
    document.getElementById("mergesort").removeAttribute("disabled");
    document.getElementById("selectionsort").removeAttribute("disabled");
    document.getElementById("bubblesort").removeAttribute("disabled");
  }

  QuickSort(){
    const animations = quick(this.arr);
    this.DisableButton();
    //console.log(animations)
    for(var i=0;i<animations.length;i++){
      //console.log("aya")
      if(animations[i][2]==-2){
        const barcolor = document.getElementById(animations[i][1].toString()).style;
        const barcolor1 = document.getElementById(animations[i][0].toString()).style;
        const color = "red";
        setTimeout(() => {
          barcolor.backgroundColor = color;
          barcolor1.backgroundColor = color;
        }, i * this.speed);
      }else if(animations[i][2]==-3){
        const barcolor = document.getElementById(animations[i][1].toString()).style;
        const barcolor1 = document.getElementById(animations[i][0].toString()).style;
        const color = "#00ffff";
        setTimeout(() => {
          barcolor.backgroundColor = color;
          barcolor1.backgroundColor = color;
        }, i * this.speed);
      }else if(animations[i][2]==-1){
        const barheight = document.getElementById(animations[i][1].toString()).style;
        const barheight1 = document.getElementById(animations[i][0].toString()).style;
        setTimeout(() => {
          var temp = barheight.height;
          barheight.height = barheight1.height;
          barheight1.height = temp;
        }, i * this.speed);
      }
      if(i==animations.length-1){
        setTimeout(() => {
          this.EnableButton();
        }, i*this.speed);
      }
    }
  }

  MergeSort(){
    const animations = merge(this.arr);
    this.DisableButton();
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = document.getElementById(barOneIdx.toString()).style;
        const barTwoStyle = document.getElementById(barTwoIdx.toString()).style;
        const color = i % 3 === 0 ? 'red' : '#00ffff';
        
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle =document.getElementById(barOneIdx.toString()).style;
          barOneStyle.height = newHeight.toString()+'px';
        }, i * this.speed);
      }
      if(i==animations.length-1){
        setTimeout(() => {
          this.EnableButton();
        }, i*this.speed);
      }
    }
    
  }

  SelectionSort(){
    const animations = selection(this.arr);
    this.DisableButton();
    for(let i = 0;i < animations.length; i++){
      if(animations[i][1]==-1){
        const barcolor = document.getElementById(animations[i][2].toString()).style;
        const barcolor1 = document.getElementById(animations[i][0].toString()).style;
        const color = "red";
        let color2= "#00ffff";
        if(i==0){
           color2= "red"
        }else if(animations[i][0]==animations[i-1][0]){
          color2="#00ffff"
        }
        setTimeout(() => {
          barcolor.backgroundColor = color;
          barcolor1.backgroundColor = color2;
        }, i * (this.speed-2));
      }
      else if(animations[i][1]==-2){
        const barcolor = document.getElementById(animations[i][0].toString()).style;
        const color = "red";
        setTimeout(() => {
          barcolor.backgroundColor = color;
        }, i * (this.speed-2));
      }
      else if(animations[i][1]==-3){
        const barcolor = document.getElementById(animations[i][0].toString()).style;
        const color = "#00ffff";
        setTimeout(() => {
          barcolor.backgroundColor = color;
        }, i * (this.speed-2));
      }
      else{
        setTimeout(() => {
          const [barOneIdx, newHeight, ignore] = animations[i];
          if(barOneIdx==newHeight){
            //console.log("same")
            var temp = document.getElementById(barOneIdx.toString()).style.height;
            document.getElementById(barOneIdx.toString()).style.height=document.getElementById(newHeight.toString()).style.height;
            document.getElementById(newHeight.toString()).style.height=temp;
            document.getElementById(barOneIdx.toString()).style.backgroundColor="#00ffff";
            document.getElementById(newHeight.toString()).style.backgroundColor="#00ffff";

          }else{
            var temp = document.getElementById(barOneIdx.toString()).style.height;
            document.getElementById(barOneIdx.toString()).style.height=document.getElementById(newHeight.toString()).style.height;
            document.getElementById(newHeight.toString()).style.height=temp;
            document.getElementById(animations[i][1].toString()).style.backgroundColor="#00ffff";
            document.getElementById(animations[i][0].toString()).style.backgroundColor="#00ffff";
          }
        }, i * (this.speed-2));
      }
      if(i==animations.length-1){
        setTimeout(() => {
          this.EnableButton();
        }, i*(this.speed-2));
      }
    }
  }

  BubbleSort() {
    const animations = bubble(this.arr);
    this.DisableButton();
    for(let i =0; i<animations.length;i++){
      const isColorChange = i%3 !==2;
      if(isColorChange){
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = document.getElementById(barOneIdx.toString()).style;
        const barTwoStyle = document.getElementById(barTwoIdx.toString()).style;
        const color = i % 3 === 0 ? 'red' : '#00ffff';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * (this.speed-2));
      }else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          var temp = document.getElementById(barOneIdx.toString()).style.height;
          document.getElementById(barOneIdx.toString()).style.height=document.getElementById(newHeight.toString()).style.height;
          document.getElementById(newHeight.toString()).style.height=temp;
        }, i * (this.speed-2));
      }
      if(i==animations.length-1){
        setTimeout(() => {
          this.EnableButton();
        }, i*(this.speed-2));
      }
    }
  }
}