 var x = 6;
 let y = 7;
 const z = 10;

 console.log('before function: x: ' + x);
 console.log('before function: y: ' + y);
 console.log('before function: z: ' + z);

 function myFunc(x) {
    console.log('beginning of function: x: ' + x);
    console.log('beginning of function: y: ' + y);
    console.log('beginning of function: z: ' + z);
    let y = 1;
    const z = 2;

    console.log('end of function: x: ' + x);
    console.log('end of function: y: ' + y);
    console.log('end of function: z: ' + z);
 }
