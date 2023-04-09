const messages = document.querySelectorAll('.pane');

for (let i =0 ;i<messages.length;i++) {
    const message = messages[i];
    message.innerHTML += "<button class='remove-button'>[x]</button>";
    const closeButtons = document.querySelectorAll('.remove-button');
    const messageCloseButton = closeButtons[i]
    messageCloseButton.addEventListener('click',() => message.classList.toggle("hideMessage"));
}


