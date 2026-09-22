let v= prompt("what is the song volume?(1-10)");

let d= prompt("what is the distance from the portal?(in meters)");

function escapeVecna(v, d){

if (v>=7 && d<=50){
     alert("max escapes vecna!")
 }
else if(v>=7 && d> 50){
    while(d>50){
        d-=10;
        
    }
    alert("New distance="+d);
}
else if(v<7){
    alert("turn it up vecna is coming!")
}
}

const result= escapeVecna(v, d);