import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const VoiceAI = () =>{

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const Recognition = new SpeechRecognition()
    if(!Recognition){
        console.log("Not Supported...");
    }

    const navigate = useNavigate()

    const speak = (message) =>{
        let utterence = new SpeechSynthesisUtterance(message)
        window.speechSynthesis.speak(utterence)
    }

    Recognition.onresult = (e) =>{
        const transcript = e.results[0][0].transcript.trim()
        if(transcript.toLowerCase().includes("collection") || transcript.toLowerCase().includes("collections") || transcript.toLowerCase().includes("product") || transcript.toLowerCase().includes("products") || transcript.toLowerCase().includes("collection page") || transcript.toLowerCase().includes("listed products")){
            speak("opening collection page")
            navigate("/collection")
        }

        else if(transcript.toLowerCase().includes("home") || transcript.toLowerCase().includes("home page") || transcript.toLowerCase().includes("business")){
            speak("opening home page")
            navigate("/home")
        }

        else if(transcript.toLowerCase().includes("contact us") || transcript.toLowerCase().includes("contact page") || transcript.toLowerCase().includes("phone number") || transcript.toLowerCase().includes("contact") || transcript.toLowerCase().includes("return")){
            speak("opening contact page")
            navigate("/contact")
        }

        else if(transcript.toLowerCase().includes("cart") || transcript.toLowerCase().includes("my cart") || transcript.toLowerCase().includes("cart page") || transcript.toLowerCase().includes("kaat") || transcript.toLowerCase().includes("caat")){
            speak("opening cart")
            navigate("/cart")
        }

        else if(transcript.toLowerCase().includes("my order") || transcript.toLowerCase().includes("my orders") || transcript.toLowerCase().includes("my orders page") || transcript.toLowerCase().includes("orders") || transcript.toLowerCase().includes("ordered") || transcript.toLowerCase().includes("my ordered products")){
            speak("opening my order page")
            navigate("/myorder")
        }

        else{
            toast.error("Apply Again")
        }
    }

    return(
        <div className="fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%]" onClick={()=>Recognition.start()}>
            <img src ="https://forgefwd.com/wp-content/uploads/2020/12/png-clipart-call-center-agent-logo-virtual-assistant-computer-icons-personal-assistant-business-management-support-blue-company.png" alt = "AI" className="w-[56px] cursor-pointer"></img>
        </div>
    )
}

export default VoiceAI