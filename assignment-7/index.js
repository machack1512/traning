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
            console.log(sum);
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
            console.log("User Won");
        else
        {
            continue;}
    }
    console.log("Number: " + x);
}
function Fun2()
{
    const person = {
        name: "SHAHRIN KHAN",
        age: 20,
        address: {
            city: "JAIPUR",
            state: "RAJASTHAN",
            pin: 302012
        },
        hobbies: "CRICKET AND READING",
        display: function() {
            return this.name + " " + this.age + " " + this.address.city +
             " " + this.address.state + " " + this.address.pin + " " + this.hobbies;
          } 
      };
      console.log(person.display());
}