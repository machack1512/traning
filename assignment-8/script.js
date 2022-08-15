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
	let sum = 0;
	let stu = prompt("Enter the no. of Student: ")
	for(var j=0;j<stu;j++){
	for(var i=0;i<5;i++){
		marks[i] = prompt("Enter the marks: " + (i+1));}
	}
	for(var j in marks)
		sum += marks[j];
	let percent = sum / 5;
	if (percent>=35)
	{
		document.getElementById("demo").innerHTML = "PASSED";
		document.getElementById("demo1").innerHTML = "PERCENTAGE";
		document.getElementById("demo2").innerHTML = percent;
	}
	else{
		document.getElementById("demo").innerHTML = "FAILED";
		document.getElementById("demo1").innerHTML = "PERCENTAGE";
		document.getElementById("demo2").innerHTML = percent;
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
