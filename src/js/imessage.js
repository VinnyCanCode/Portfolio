const chatbox = document.querySelector('.contact__imessage')

// Check if Chatbox is on screen before running 
// Leaving this running even on mobile in case of resizing
if (chatbox) {

    const imessages = document.querySelectorAll('[data-imessage]') // Get all imessages nodeList 
    const notificationCount = document.querySelector('.contact__notification') // Get notification to be dynamically changed later
    const imessagesArr = Array.from(imessages) // Turn imesssages node list into array to succinctly use array methods below

    const typing = imessagesArr.filter((i) => i.dataset.imessage === 'typing') // Return the typing html element
    const messages = imessagesArr.filter((i) => i.dataset.imessage !== 'typing') // Return all imessages excluding the typing bubble one

    // wait 2 seconds before showing the typing effect
    setTimeout(function () {
        typing[0].style.display = 'block'
    }, 2000)

    // Set i to keep track of state outside of setInterval
    // Every 8 seconds, send an imeessage 
    // Once the last imessage is sent, make typing bubble display none and clearInterval 
    let i = 0
    setInterval(() => {
        if (i < messages.length){
            messages[i].style.display = 'block'
            notificationCount.innerText = [i + 1]
            notificationCount.style.display = 'flex'
            chatbox.scrollTop = chatbox.scrollHeight
            i++
        } else {
            typing[0].style.display = 'none'
            clearInterval()
        }
    }, 8000);

}
