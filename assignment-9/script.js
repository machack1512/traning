function Fun()
{ 
   const args = [];
   let size = parseInt(prompt("Enter the no of arguments: "));
   let sum = 0;
   for(let i=0;i<size;i++)
   {
     args[i] = parseInt(prompt("Enter the value: "));
   }
   for (let j = 0; j < args.length; j++)
   {
     sum += args[j];
   }
   document.getElementById("demo").innerHTML = "SUM : " + sum;
}
function Fun1()
{
    let a = parseInt(prompt("Enter the value: "));
    let b = parseInt(prompt("Enter the value: "));
    document.getElementById("demo").innerHTML = "RETURN 1 : " + (a+b);
    document.getElementById("demo1").innerHTML = "RETURN 2 : " + (a-b);
}
function Fun2()
{
    console.log("hello this is the content of function!")
    document.getElementById("demo").innerHTML = String(Fun2);
}
function Fun3()
{
    let str = prompt("Enter the String: ");
    let part = str.split(" ");
    if (part[0] == 'New!')
    {
        document.getElementById("demo1").innerHTML = str.slice(5);
    }
    else
    {
        let tab = "New! " + str;
        document.getElementById("demo").innerHTML = tab;
    }
}
function Fun4()
{
    let str = prompt("Enter the String: ");
    let first = str.slice(0,3);
    let last = str.slice(str.length-3);
    if(str.length < 3){
    document.getElementById("demo").innerHTML = "NORMAL STRING: " + str;}
    else{
    document.getElementById("demo").innerHTML = "3 CHAR FROM FIRST + 3 CHAR FORM LAST: " + first + last;}
}