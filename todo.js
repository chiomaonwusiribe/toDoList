function startRecognition(){
    const recognition = new (window.SpeechRecognition || webkitSpeechRecognition)()
    recognition.lang ='en-US'
    recognition.start()


    recognition.onresult = function(event){
        const transcript = event.results[0][0].transcript
        document.getElementById('result').textContent = "you said: " + transcript

        if(transcript === "Save."){
            save()
        }
    }

    recognition.onerror = function(event){
        document.getElementById('result').textContent = "Error occured" + event.error
    }
}
function startRecognition2(){
    const recognition = new (window.SpeechRecognition || webkitSpeechRecognition)()
    recognition.lang ='en-US'
    recognition.start()


    recognition.onresult = function(event){
        const transcript = event.results[0][0].transcript
        document.getElementById('result2').textContent = "you said: " + transcript

        if(transcript === "Save."){
            save()
        }
    }

    recognition.onerror = function(event){
        document.getElementById('result2').textContent = "Error occured" + event.error
    }
}