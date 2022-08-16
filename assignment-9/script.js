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
