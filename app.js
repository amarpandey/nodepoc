console.log('Welcome to the world of async and non-blocking');
console.log('exec 2');
console.log('exec 3');

for(var i=0; i<=10; i++){
   console.log('here is IIII '+ i);
}

for(var i=0; i<=10; i++){
    setTimeout(function(){
        console.log('here is JJJJJJ '+ i);
    }, 3000);
}

for(var i=0; i<=10; i++){
    setTimeout(function(){
        console.log('here is KKKKKKKK '+ i);
    }, 1000);
}


console.log('exec 4');
console.log('exec 5');
