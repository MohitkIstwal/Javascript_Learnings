// Strict equality === it gives true only if the value as well as data type is equal

// in == operator noly value is checked not th data type

const PI=3.14;

if(PI=="3.14"){
    console.log("YES");
}
else{
    console.log("NO");
}

if(PI==="3.14"){
    console.log("YES");
}
else{
    console.log("NO");
}