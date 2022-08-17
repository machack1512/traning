function Fun()
{
    let sum = 0;
    while(1)
    {
        let num = prompt("Enter the number: ");
        if(num >= 0)
            sum = sum + Number(num);
        else
        {
            document.getElementById("demo").innerHTML = "SUM OF ALL NUMBER: " + sum;
            break;
        }  
    }
}
function Fun1()
{
    let y = Math.floor((Math.random() * 10) + 1);
    let i = 0;
    while(i<3)
    {
        let x = parseInt(prompt("Enter the number: "));
   if(x == y)
   {    
       alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT ");
       break;
   }
   else if(x > y) 
   {    
       alert("OOPS SORRY!! TRY A SMALLER NUMBER");
   }
   else
   {
       alert("OOPS SORRY!! TRY A GREATER NUMBER")
   }
   i++;
    }
}
function Fun2()
{
    const person = {
        name: " ",
        age: " ",
        address: {
            city: " ",
            state: " ",
            pin: " "
        },
        hobbies: " ",
        display: function() {
            return this.name + " " + this.age + " " + this.address.city +
             " " + this.address.state + " " + this.address.pin + " " + this.hobbies;
          } 
      };
      person.name = prompt("Enter name: ");
      person.age = prompt("Enter age: ");
      person.address.city = prompt("Enter city: ");
      person.address.state = prompt("Enter state: ");
      person.address.pin = prompt("Enter pin: ");
      person.hobbies = prompt("Enter hobbies: ");
  
      

      document.getElementById("demo").innerHTML = person.display();
}