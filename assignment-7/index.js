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
            document.getElementById("demo").innerHTML = sum;
            break;
        }  
    }
}
function Fun1()
{
    let x = Math.floor((Math.random() * 10) + 1);
    for(let i = 0; i < 3; i++)
    {
        let num = prompt("Enter the number: ");
        if(num == x)
            document.getElementById("demo").innerHTML = "USER WON";
        else
        {
            continue;}
    }
    document.getElementById("demo").innerHTML = "NUMBER: " + x;
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