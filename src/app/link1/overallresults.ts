export class Overallresults {

    qid: String;
    question: String;
    anslist: String[];
    answer: String;
  
    constructor(qid: String,  question: String,
      anslist: String[], answer: String) {
      this.qid = qid;
      this.anslist = anslist;
      this.answer = answer;
    }
  
  }
  