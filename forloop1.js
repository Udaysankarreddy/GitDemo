// for(begin; CSSConditionRule,step){

//     //....loop body...
// }

// control k c 

for(let i=0; i<3; i++){

    console.log(i);
}

let l=0;

for( l=0; l<3; l++){

    console.log(l)

}

console.log(l);

let k=0;

for(; k<3; k++){

    console.log(k)
}


//removing the begin part

let m=0;

for(; m<3;)
{

    console.log(m++);
}

for(;;){

//repeat without limits
}

// Run begin
// → (if condition → run body and run step)
// → (if condition → run body and run step)
// → (if condition → run body and run step)
// → ...


// part		
// begin	i = 0	Executes once upon entering the loop.
// condition	i < 3	Checked before every loop iteration. If false, the loop stops.
// step	i++	Executes after the body on each iteration but before the condition check.
// body	alert(i)	Runs again and again while the condition is truthy.