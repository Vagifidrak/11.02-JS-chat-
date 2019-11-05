const chatMini = document.getElementById('chat-mini')
const chat = document.getElementById('chat')
const icoClose = document.querySelector(".upperAwesom")
const chatText = document.getElementById('chat-input')

chatMini.addEventListener("click", function () {
    chat.classList.remove('active')
})
icoClose.addEventListener("click", function () {
    chat.classList.add('active')
})
chatText.addEventListener('keyup', function (e) {

    if(e.keyCode == 13) {
        let text = this.value.trim()

        if(chatText.value !=0){
            if(text[0].toUpperCase()==text[0]){
                AddMessage('support',text)

            }
            else{
                AddMessage('users', text)
            }
        }
        
    }
})
function AddMessage(classname, yasin){
    let div = document.createElement('div');
    div.className = 'message '+ classname
    let ptext = document.createElement('p')
    ptext.innerText = yasin;
    let now = new Date();
    let ptime = document.createElement('p')
    ptime.className = 'times'
    ptime.innerText = now.getHours() + ':' + now.getMinutes()
    div.appendChild(ptext)
    div.appendChild(ptime)
    document.querySelector('main').appendChild(div)
    chatText.value = ''
    div.scrollIntoView()
}