// for loop

for(let i = 1; i <= 10; i++){
    console.log(i);
}

// print table using loop

let num = 5

for(let i= 1; i <= 10 ; i++){
    console.log(`${num} X ${i} = ${num * i}`);
}

// break and continue in for loop

for (let i = 1; i <= 10; i++){
    if(i === 5){
        break
    }
    console.log(`Value is ${i}`);
}
for (let i = 1; i <= 10; i++){
    if(i === 5){
        continue
    }
    console.log(`Value is ${i}`);
}