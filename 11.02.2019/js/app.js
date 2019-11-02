const chat=document.getElementById('chat')
const iconClose=document.querySelector('iconClose')
const chatMini=document.getElementById('chat-mini')

chatMini.addEventListener('click',function(){
    chat.classList.remove('active')
})
iconClose.addEventListener('click',function(){
    chat.classList.add('active')
})