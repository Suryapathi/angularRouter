import { Component, OnInit } from '@angular/core';
import { Overallresults } from './overallresults';
@Component({
  selector: 'app-link1',
  templateUrl: './link1.component.html',
  styleUrls: ['./link1.component.css']
})
export class Link1Component implements OnInit {

  constructor(){  }
  
  ngOnInit() {}

  value:String="hello";
  myarray: String[] = [];
  
  catstr: String;
  newstr: String;

  name = 'Angular 6';
 
      fullquestionlist:Overallresults[]=[
    {
      qid: "01" ,
      question:"what is the value of 1000*0.1",
      anslist:["100","1000","10000","15000"],
      answer:"100"
    },
     {
      qid: "02" ,
      question:"what is the value of 1000*1",
      anslist:["100","1000","10000","15000"],
      answer:"1000"
    }, {
      qid: "03" ,
      question:"what is the value of 1000*10",
      anslist:["100","1000","10000","15000"],
      answer:"10000"
    },
    { qid: "04" ,
      question:"what is the value of 1000*10",
      anslist:["100","1000","10000","15000"],
      answer:"10000"
    },

    
  ];
   i: number = 0;
  
  question:String = this.fullquestionlist[0].question;
  option :any[]=this.fullquestionlist[0].anslist;


  quizlength: number=this.fullquestionlist.length;
  next() {
     
    ++this.i;
    this.question = this.fullquestionlist[this.i].question;
    this.option = this.fullquestionlist[this.i].anslist;
  }
  previous() {
    --this.i;
    this.question = this.fullquestionlist[this.i].question;
    this.option = this.fullquestionlist[this.i].anslist;

  }

    answerkey: AnswerKey[] = [];
   check(e, str: String, answer: String) {

    if (e.target.checked) {
   
      this.answerkey.push(new AnswerKey(str, answer));
    }
    else {

      this.answerkey.splice(0, 1);
    }
    console.log(this.answerkey);
    this.recursivecheck();
  }
    marks: number = 0;
  generatemark() {
    for (var i = 0; i < this.answerkey.length; i++) {
      if (this.answerkey[i].choosen == this.fullquestionlist[i].answer) this.marks++;
    }
    // alert("your score is "+JSON.stringify(this.marks));
    document.writeln("your score is " + this.marks);
  }

  ///////////////////////////////////

  recursivecheck() {
    var result1 = this.fullquestionlist;
    var result2 = this.answerkey;

    var props = ['id', 'answer'];

    var result = result1.filter(function (o1) {
      // filter out (!) items in result2
      return result2.some(function (o2) {
        return o1.answer === o2.answer;
        // assumes unique id
      });

    }).map(function (o) {

      // use reduce to make objects with only the required properties
      // and map to apply this to the filtered array as a whole
      return props.reduce(function (newo, ans) {
        newo[ans] = o[ans];
        return newo;
      }, {});
    });
    console.log("result:" + JSON.stringify(result));
  }

}
export class AnswerKey {
 
  choosen: String;
  answer: String;
  constructor(choosen: String, answer: String) {
    this.choosen = choosen;
    this.answer = answer;
}  
}
