async function sendMessage() {
    var response="";
    var userInput = document.getElementById("user-input").value;
    await fetch('http://20.2.216.184/webhooks/rest/webhook', {
    method: 'POST',
    headers: {  
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "sender": "adil", "message": userInput }),
}).then((response) => {return response.json()})
.then((json) =>{ 
    length = json.length
    for(i=0; i<length ;i++){
        response += json[i]["text"]+"\n"
        console.log(response)
        // response = response.join("")
    }});


    if (userInput.trim() !== "") {
        addUserMessage(userInput);
        document.getElementById("user-input").value = "";
        setTimeout(addBotMessage(response), 500);
    }
}


function addUserMessage(message) {
    var chatContainer = document.getElementById("chat-container");
    var newMessage = document.createElement("div");
    newMessage.className = "message user-message";
    newMessage.innerHTML = message;
    chatContainer.appendChild(newMessage);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function addBotMessage(message) {
    var chatContainer = document.getElementById("chat-container");
    var newMessage = document.createElement("div");
    newMessage.className = "message bot-message";
    console.log("NEW ONE" + message)
    newMessage.innerHTML = message;
    chatContainer.appendChild(newMessage);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Initial bot greeting
// setTimeout(function() {
//     addBotMessage("Hello! How can I help you?");
// }, 1000);


// async function handleClick() {
// var name = document.getElementById("name").value
// var msg = document.getElementById("user-input").value
// console.log(name,msg)
// var res = await fetch('http://localhost:5005/webhooks/rest/webhook', {
//     method: 'POST',
//     headers: {  
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ "sender": "adil", "message": msg }),
// }).then((response) => {return response.json()})
// .then((json) =>{ 
//     length = json.length
//     console.log(length)
//     for(i=0; i<length ;i++){
//         console.log(json[i]["text"])      
//     }

// }
//     );
// }
