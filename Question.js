class Questions{

    constructor(){
          
        

        this.title = createElement("h1");

        this.Question=createElement("h2");

        this.Option1=createElement("h3");

        this.Option2=createElement("h3");

        this.Option3=createElement("h3");

        this.Info=createElement("h3");

       

        this.result=createElement("h1");



    }
    setElementsPosition(){
        this.title.position(400,-50);
        this.Question.position(200,-150);
        this.Option1.position(300,-180);
        this.Option2.position(300,-210);
        this.Option3.position(300,-240);
        this.Info.position(300,-270);
        this.InputBox.position(400,-380);
        this.button.position(400,-450);
        this.result.position(600,-150);

    }
    hide(){
      this.title.class("afterAnswering");

        this.Question.class("afterAnswering");
        this.Option1.class("afterAnswering");

        this.Option2.class("afterAnswering");

        this.Option3.class("afterAnswering");

        this.Info.class("afterAnswering");

       this.InputBox.class("afterAnswering");

      this.button.class("afterAnswering");

     
    }
    setStyle(){

        this.title.class("title");
        this.Question.class("question");
        this.Option1.class("question");
        this.Option2.class("question");
        this.Option3.class("question");
        this.Info.class("question");
        this.InputBox.class("input");
        this.button.class("button");
        this.result.class("question");


    }

    display(){

        

          var rand= Math.round(random(1,10));

          switch(rand){
            case 1: 
            this.title.html("QUIZ TIME!!!");
            this.Question.html("What function is used to clear the screen? ")

            this.Option1.html("A.  clear()");

            this.Option2.html("B.  invisible()");

            this.Option3.html("C.  disappear()");
            this.InputBox= createInput("").attribute("placeholder","type your answer")

            this.button =createButton("Submit");

            this.Info.html("Type your option here");
            //this.InputBox= createInput("").attribute("placeholder","type your answer")
            
           this.handleMousePress("A")
 


            break;

    case 2: 
    this.title.html("QUIZ TIME!!!");
            this.Question.html("Which command allows you to draw sprites? ")

            this.Option1.html("A.  drawSprites()");

            this.Option2.html("B.  writeSprites()");

            this.Option3.html("C.  spritesDraw()");

            this.Info.html("Type your option here");
            this.InputBox= createInput("").attribute("placeholder","type your answer")

            this.button =createButton("Submit");

           // this.InputBox= createInput("").attribute("placeholder","type your answer")
            this.handleMousePress("A")



            break;

    case 3: 
    this.title.html("QUIZ TIME!!!");
    this.Question.html("What is a bug in coding? ")

          this.Option1.html("A. Some type of coding function ");

          this.Option2.html("B. An error, flaw or glitch  in computer programme ");

          this.Option3.html("C. A tiny  particle that has gotten into the computer system which requires a code to solve ");

          this.Info.html("Type your option here");
          this.InputBox= createInput("").attribute("placeholder","type your answer")

          this.button =createButton("Submit");

         // this.InputBox= createInput("").attribute("placeholder","type your answer");

          this.handleMousePress("B")



          break;


    case 4:
      this.title.html("QUIZ TIME!!!");  
    this.Question.html(" What is the long-form of HTML?  ")

    this.Option1.html("A.  Hyper technology media language ");

    this.Option2.html("B.  Hyper terminology malware language ");

    this.Option3.html("C.  Hyper text Markup Language ");
    this.InputBox= createInput("").attribute("placeholder","type your answer")

    this.button =createButton("Submit");

    this.Info.html("Type your option here");
    //this.InputBox= createInput("").attribute("placeholder","type your answer")
    this.handleMousePress("C")




    break;

    case 5:
      this.title.html("QUIZ TIME!!!");
      this.Question.html("How can we make a comment in Javascript?  ")

            this.Option1.html("A.  //");

            this.Option2.html("B. && ");

            this.Option3.html("C.  %% ");

            this.Info.html("Type your option here");
            this.InputBox= createInput("").attribute("placeholder","type your answer")

            this.button =createButton("Submit");
           // this.InputBox= createInput("").attribute("placeholder","type your answer")
          this.handleMousePress("A")

            break;

        default: break;

    

    


    }
}



handleMousePress(ans){
  this.button.mousePressed(
    ()=>{
     
   answer = this.InputBox.value();
    // this.title.hide();
    // this.button.hide();
    // this.InputBox.hide();
    // this.Question.hide();
    // this.Option1.hide();
    // this.Option2.hide();
    // this.Option3.hide();
    // this.Info.hide();
    
   

    
    // console.log(this.InputBox.value())
  
    var correctAnswer = ans;
    if(answer === correctAnswer){
      score =score + 10;
      
      this.result.html("your answer is correct");
      setTimeout(
       function (){
          this.hide();
          this.result.class("afterAnswering");
        },5000
     )

      clear();
 
  
    }else{
      life =life - 1;
      this.result.html("Ops! your answer is incorrect");
    setTimeout(
        ()=>{
          this.hide();
          this.result.class("afterAnswering");
        },5000
     )
     

      clear();
     
    }
  })
}




















}