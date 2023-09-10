const arr=[ [1,1,1,1,1,1,0,0,0,0,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
            [1,0,0,0,0,1,1,1,1,0,1,0,0,0,1],
            [1,1,1,1,0,1,0,0,0,0,1,1,1,0,1],
            [1,0,0,0,0,1,0,0,1,0,0,0,0,0,1],
            [1,0,1,1,0,1,0,1,1,0,1,1,1,0,1],
            [1,0,0,1,0,1,0,0,1,0,0,0,1,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
        ];
var move=20,tops=50;

window.onload=function(){



    for(var i=0;i<=8;i++){
        for(var j=0;j<=14;j++){
            if(arr[i][j]==1){
                const wall = document.createElement("div");
                wall.className="wall";
                wall.style.backgroundColor="lightblue";
                wall.style.left=move+"px";
                wall.style.top=tops+"px";
                document.querySelector(".walls").appendChild(wall);

            move=move+20;
            }
            else{
                const wall = document.createElement("div");
                wall.className="wall";
                wall.style.backgroundColor="#28282B";
                wall.style.left=move+"px";
                wall.style.top=tops+"px";
                document.querySelector(".walls").appendChild(wall);

            move=move+20;

            }
        }
        tops=tops+15;
        move=20;
      
        
    }
  
}




// Ball Movement 

const ball=document.querySelector(".ball");

var btop=50,bleft=140,m=0,l=6;

addEventListener("keydown", (event) => {

   
    if(event.key=="ArrowUp"){
     
        m--;
        if(arr[m][l]==1){
            console.log("no entry :"+arr[m][l]);
            m++;
            return 0;
           }
        btop=btop-15;
    }else if(event.key=="ArrowDown"){
       
        m++;
       
        if(arr[m][l]==1){
            console.log("no entry :"+arr[m][l]);
            m--;
            return 0;
           }
        btop=btop+15;
    }
    else if(event.key=="ArrowRight"){
       
        l++;
        if(arr[m][l]==1){
            console.log("no entry :"+arr[m][l]+"l"+l);
            l--;
            return 0;
           }
        console.log("Move left:"+l);
        bleft=bleft+20;
    }
    else if(event.key=="ArrowLeft"){
      
        l--;
        if(arr[m][l]==1){
            console.log("no entry :"+arr[m][l]);
            l++;
            return 0;
           }
           bleft=bleft-20;
    }
 
    console.log("come out"+bleft);
    
       ball.style.top=btop+"px";
       ball.style.left=bleft+"px";

       if(m==7 && l==13){
        console.log("YOu Win"); /*################# WINNing Condition   ################*/
        alert("YOu Win");
        location.reload();
    }



});

