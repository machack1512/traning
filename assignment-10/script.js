function Fun()
{
    const person = {
        fullName: function(city, country) {
          return this.firstName + " " + this.lastName + "," + city + "," + country;
        }
      }
      const person1 = {
        firstName: prompt("(caps on)Enter your first-name: "),
        lastName: prompt("(caps on)Enter your last-name: ")
      }
      document.getElementById("demo").innerHTML = "INFORMATION(call()): " + person.fullName.call(person1, "NODIA", "INDIA");
      document.getElementById("demo1").innerHTML = "INFORMATION(apply()): " + person.fullName.apply(person1, ["NODIA", "INDIA"]);
}
function Fun1()
{
    let arr = [];
    let size = parseInt(prompt("Enter the size of array: "));
    for(var i=0;i<size;i++)
        arr[i] = parseInt(prompt("Enter the value: "));
    let cube = (arr)=> {
        for ( var i = 0; i<size;i++) {
            arr[i] = arr[i]*arr[i]*arr[i];
         }
         return arr;
    } 
    document.getElementById("demo").innerHTML = "CUBE ARRAY: [" + cube(arr) + "]";
}
function Fun2()
{
    const element = document.getElementById("demo");
    setInterval(function() {element.innerHTML += "Hello"}, 2000);
}
function Fun3()
{
    const people = [
        { name: "Ashish", age: 23 },
        { name: "Ajay", age: 21 },
        { name: "Arvind", age: 26 },
        { name: "Mahesh", age: 28 },
        { name: "Jay", age: 19 }
      ];
    people.map(getFullName);
    document.getElementById("demo").innerHTML = people.map(getFullName) + "\n";

      function getFullName(item) {
        return [item.name,item.age].join(" ");
      }
      
}
function Fun4()
{
  let arr = [];
  let size = parseInt(prompt("Enter the size of array: "));
  for(var i=0;i<size;i++)
      arr[i] = parseInt(prompt("Enter the value: "));
  const result = arr.filter(checkAdult);

  function checkAdult(age){
    return age >= 25;}
  result.sort();
  result.reverse();
  document.getElementById("demo").innerHTML = "AGES IN DESC. ORDER: [" + result + "]";

}
