import React from "react";

const VoiceAI = () =>{

    const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition
    const Recognition = new SpeechRecognition()

    Recognition.onresult = (e) =>{
        console.log(e);
    }

    return(
        <div className="fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%]" onClick={()=>Recognition.start()}>
            <img src ="https://forgefwd.com/wp-content/uploads/2020/12/png-clipart-call-center-agent-logo-virtual-assistant-computer-icons-personal-assistant-business-management-support-blue-company.png" alt = "AI" className="w-[56px] cursor-pointer"></img>
        </div>
    )
}

export default VoiceAI