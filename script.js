function sendRequest(webhookUrl, messageContent, botName) {
    var data = {
        "content": messageContent
    };

    if (botName) {
        data.username = botName; // Add the bot name if available
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", webhookUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 204) {
                console.log("Message sent successfully!");
            } else {
                console.error("Failed to send message to Discord webhook. Status code:", xhr.status);
            }
        }
    };
    xhr.send(JSON.stringify(data));
}

function generateRandomName() {
    var botNames = [
        "AI", "Assistant", "Chat", "Helper", 
        "Automator", "VirtualAssistant", "Messenger", "SupportBot", 
        "Guide", "Advisor", "Companion", "Counselor",
        "Expert", "Guru", "Wizard", "Coach",
        "Mentor", "Navigator", "Sage", "Instructor",
        "Conversationalist", "Communicator", "Facilitator", "Analyst",
        "ProblemSolver", "Strategist", "Administrator", "Coordinator",
        "Agent", "Advocate", "Moderator", "Technician",
        "Specialist", "Ambassador", "Facilitator", "Coordinator",
        "Liaison", "Representative", "Director", "Manager"
    ];

    return botNames[Math.floor(Math.random() * botNames.length)];
}

function sendMessage() {
    var webhookUrl = document.getElementById("webhookUrl").value;
    var rounds = parseInt(document.getElementById("rounds").value);
    var messageContent = document.getElementById("messageContent").value;
    var randomNameEnabled = document.getElementById("randomNameEnabled").checked;

    if (!webhookUrl.trim()) {
        alert("Please enter a valid Discord Webhook URL.");
        return;
    }

    if (!messageContent.trim()) {
        alert("Please enter message content.");
        return;
    }

    for (var i = 0; i < rounds; i++) {
        var botName = randomNameEnabled ? generateRandomName() : null; // Generate random bot name if enabled
        sendRequest(webhookUrl, messageContent, botName); // Send the request with the generated bot name
    }
}
