

$(document).ready(()=>{
    $.get('users.json',(result)=>{
        const myUsers = result;
  
        // myUsers.forEach((elem)=>{ --------> gives error because its not a function
        //    const element = $('.userContainer')
        // })

       for(const elem in myUsers){
           const data = myUsers[elem];
           console.log(data);

           const name = document.createElement("h2");
           name.innerText = data.name;

           const hours = document.createElement("p");
           hours.innerText = data.hours;

           const email = document.createElement("p");
           email.innerText = data.email;

           const position = document.createElement("p");
           position.innerText = data.position;

           const div = $("<div></div>");
           div.append(name, hours, email, position);
           div.addClass("userdiv")
           $('.userContainer').append(div)

       }      
        

    })

  
    
})
