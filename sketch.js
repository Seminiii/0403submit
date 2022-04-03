let cam;
let rearSetting;

let canvas;
let state=0
let miliSeconds1 = 0;
let miliSeconds2 = 0;
let seconds1 = 0;
let seconds2 = 0;
let minutes1 = 0;
let minutes2 = 0;
let hours1 = 0;
let hours2 = 0;

function setup() {
  
  rearSetting = {
    audio: false,
    video: {
      facingMode: {
        exact: "environment"  //rear
      }
    }
  }                                                  //후면카메라 
  
  createCanvas(844, 390);
  cam = createCapture(rearSetting);
  //cam = createCapture(VIDEO);
  cam.size(644,390);
  cam.position(0,0);
  cam.hide();
}


function draw() {
  background(200);
  
  image(cam,0,0,644,390);

//background_RIGHT_BK
  fill(0);
  rect(644,0,200,390);
  
  
//grey textbox
  fill(55,68,73);
  noStroke();
  rect(652,42,110,20,5);
  rect(652,70,110,20,5);
  rect(652,98,110,20,5);
  
  let current = 'Current time';
  let recordtime = 'Recording time';
  let passengers = 'Passengers';
  
  textSize(14);
  fill(255);
  text(current,656,46,120,25);
  text(recordtime,656,74,120,25);
  text(passengers,656,102,120,25);
  
  let yr = year();
  let mon = month();
  let dd = day();
  let hr = hour();
  let mm = minute();
  let sc = second();
  
  
  fill(255);
  noStroke();
  text (hr + ':' + mm + ':' + sc, 770,46,120,25); //인터페이스 CURRENT TIME
  textSize(16);
  text (yr +'.' + mon + '.'+ dd + ' ' + hr + ':' + mm + ':' + sc, 20,354,180,20); //왼쪽하단시계

  
//in cam_recording time 
  
  fill(55,68,73,50);
  rect(272,10,100,30,5);  
  
//countup timer_상단중앙
  
  noStroke();
  

  textSize(14);
  fill(255);
  text(hours1,282,30);
  text(hours2,292,30);
  text(":",306,29)
  text(minutes1,314,30);
  text(minutes2,324,30);
  text(":",336,29)
  text(seconds1,344,30);
  text(seconds2,354,30);      //상단중앙
  

  textSize(14);
  text(hours1,772,74,100,25);
  text(hours2,780,74,100,25);
  text(":",788,73,100,25)
  text(minutes1,792,74,100,25);
  text(minutes2,800,74,100,25);
  text(":",808,74,100,25)
  text(seconds1,812,74,100,25);
  text(seconds2,820,74,100,25);     //우측
  
  ///////////////// state = 0 //////////////////////////////////////////
  
  if (state==0){
    
    //start button 
    ellipseMode(CENTER);
  
    fill(255);
    noStroke();
    ellipse(744,308,72);  //outer white
 
    fill(10);
    noStroke();
    ellipse(744,308,66);  //inner black
 
    fill(232,53,113);
    noStroke();
    ellipse(744,308,60);  //inner pink
    
    noStroke();
    

    textSize(14);
    fill(255);
    text(hours1,282,30);
    text(hours2,292,30);
    text(":",306,29)
    text(minutes1,314,30);
    text(minutes2,324,30);
    text(":",336,29)
    text(seconds1,344,30);
    text(seconds2,354,30); 
    
  }
  ///////////////// state = 1 //////////////////////////////////////////
  if (state==1){
    fill(232,53,113);        //위에핑크
    rect(272,10,100,30,5); 
    
        noStroke();
    
    textSize(14);
    fill(255);
    text(hours1,282,30);
    text(hours2,292,30);
    text(":",306,29)
    text(minutes1,314,30);
    text(minutes2,324,30);
    text(":",336,29)
    text(seconds1,344,30);
    text(seconds2,354,30); 
    
        //start button 
    ellipseMode(CENTER);
    
//PAUSED BUTTON
    fill(55,68,73);
    noStroke();
    ellipse(711,312,72);  // _ outer grey
 
    fill(10);
    noStroke();
    ellipse(711,312,66);  //inner black
    
    stroke(232,53,113);
    strokeWeight(6);
    ellipse(711,312,60);
    noStroke();            //?!!!!dashed line?!!!
    
    fill(232,53,113);
    rect(705,304,4,16); 
    rect(713,304,4,16);//inner pink
    
//STOP BUTTON
    fill(55,68,73);
    noStroke();
    ellipse(790,312,48);  // _ outer grey
    
    fill(10);
    noStroke();
    ellipse(790,312,44);  //inner black
    
    stroke(232,53,113);
    strokeWeight(3);
    ellipse(790,312,40);
    noStroke();
    
    fill(232,53,113);
    noStroke();
    rect(782,304,16);
    
    
    miliSeconds2 = frameCount%10;
    if(frameCount % 6 == 0 && miliSeconds1 >= 0){
      miliSeconds1++;
      if(miliSeconds1 == 10){
        miliSeconds1=0;
        seconds2+=1;
        if(seconds2==10){
          seconds2=0;
          seconds1+=1;
          if(seconds1==6){
            seconds1=0;
            seconds2=0;
            minutes2+=1;
            if(minutes2==10){
             seconds2=0;
             seconds1=0;
             minutes2=0;
             minutes1+=1;
            if(minutes1==6){
              seconds2=0;
              seconds1=0;
              minutes2=0;
              minutes1=0;
              hours2+=1;
              if(hours2==10){
                seconds2=0;
                seconds1=0;
                minutes2=0;
                minutes1=0;
                hours2=0;
                hours1+=1;
              }   
            } 
          } 
        }
      } 
    }

    }
  }
  else if(state==2){
    
    //PAUSED BUTTON
    fill(55,68,73);
    noStroke();
    ellipse(711,312,72);  // _ outer grey
 
    fill(10);
    noStroke();
    ellipse(711,312,66);  //inner black
    
    stroke(165);
    strokeWeight(6);
    ellipse(711,312,60);
    noStroke();            //?!!!!dashed line?!!!
    
    fill(165);
    rect(705,304,4,16); 
    rect(713,304,4,16);//grey 2rect
    
    //STOP BUTTON
    fill(55,68,73);
    noStroke();
    ellipse(790,312,48);  // _ outer grey
    
    fill(10);
    noStroke();
    ellipse(790,312,44);  //inner black
    
    stroke(232,53,113);
    strokeWeight(3);
    ellipse(790,312,40);
    noStroke();           //pink
      
    fill(232,53,113);
    noStroke();
    rect(782,304,16);
    
  }

  }
  ///////////////// state = 3 //////////////////////////////////////////
  ///////////////// state = 4 //////////////////////////////////////////


function mouseClicked(){
  
  if (state==0){
    if(mouseX > 714 && mouseX < 774 && mouseY > 278 && mouseY < 338){
      state=1;
    } 
  }
  else if(state==1){
    if(mouseX > 681 && mouseX <741 && mouseY > 282 && mouseY < 342){
      state=2;
    }
  }
  else if(state==2){
    if (mouseX > 681 && mouseX <741 && mouseY > 282 && mouseY < 342){
    state=1;
    }
    else if (mouseX > 770 && mouseX <830 && mouseY > 292 && mouseY <332){
      state=0;
    }
  }
    
  
///// STOPBUTTON///////////
  
    if (mouseX > 770 && mouseX <830 && mouseY > 292 && mouseY <332){
    state=0;
    miliSeconds1 = 0;
    miliSeconds2 = 0;
    seconds1 = 0;
    seconds2 = 0;
    minutes1 = 0;
    minutes2 = 0;
    hours1 = 0;
    hours2 = 0;
  }

}