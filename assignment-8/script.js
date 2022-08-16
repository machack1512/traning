function Fun()
{
   let str = prompt("Enter the String with extra white spaces: ");
   let result = str.trim();
   document.getElementById("demo").innerHTML = result;
}
function Fun1()
{
	var arr = [];
	let text = [];
	var size = prompt("Enter the size: ");
    for(var i=0; i<size; i++)
    	arr[i] = prompt("Enter the element: " + (i+1));
    arr.forEach(myFunction);
    document.getElementById("demo").innerHTML = "OLD ARRAY";
    document.getElementById("demo1").innerHTML = arr;
    document.getElementById("demo2").innerHTML = "NEW ARRAY";
    document.getElementById("demo3").innerHTML = text
    function myFunction(item, index) 
    {
        text += item + ", "; 
    }
}
function Fun2()
{
   let marks = [];
   let stu = parseInt(prompt("Enter no. of Student: "));
   for(var i =0;i<stu;i++)
   {
   	marks[i] = parseInt(prompt("Enter the marks: "));
   }
   for(var j=1;j<stu;j++)
   {
   	if(marks[j]>175){
        if (marks[j-1]>175)
   		document.getElementById("demo").innerHTML = "ALL PASSED";
    }
   	else
   		document.getElementById("demo").innerHTML = "NOT EVERYONE IS PASSED";
   }

}
function Fun3()
{
	var arr = [];
	var size = prompt("Enter the size: ");
    for(var i=0; i<size; i++)
    	arr[i] = prompt("Enter the element: " + (i+1));
    document.getElementById("demo").innerHTML = "OLD ARRAY";
    document.getElementById("demo1").innerHTML = arr;
    var t = prompt("Enter the new element: ");
    arr.push(t);
    document.getElementById("demo2").innerHTML = "NEW ARRAY";
    document.getElementById("demo3").innerHTML = arr;
}
function Fun4()
{
	var arr = [];
	var size = prompt("Enter the size: ");
    for(var i=0; i<size; i++)
    	arr[i] = prompt("Enter the element: " + (i+1));
    document.getElementById("demo").innerHTML = "OLD ARRAY";
    document.getElementById("demo1").innerHTML = arr;
    arr.sort();
    arr.reverse();
    document.getElementById("demo2").innerHTML = "NEW ARRAY";
    document.getElementById("demo3").innerHTML = arr;
}
