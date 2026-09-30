import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast ,ToastContainer } from "react-toastify";

const VoiceAI = () =>{

    const [isListening, setIsListening] = useState(false)
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
            speak("opening my orders page")
            navigate("/myorder")
        }

        else{
            speak("Sorry, I did not understand. Please try again.")
            toast.error("Apply Again")
        }
    }

    Recognition.onend = () => {
        console.log("Recognition stopped")
    }

    // 👈 yahan add karo — return se pehle
    const startRecognition = () => {
        try {
            Recognition.start()
            setIsListening(true)
        } catch(error) {
            console.log("Already running")
        }
    }

    Recognition.onend = () => {
    setIsListening(false)  // 👈 end hone pe normal
}

    return(
         <div className="w-fit">
        <ToastContainer
            position="top-right"
            autoClose={3000}
            theme="light"
            style={{ marginTop: "64px" }}
        />
        <div className="fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%]" onClick={startRecognition}>
            <img src="https://forgefwd.com/wp-content/uploads/2020/12/png-clipart-call-center-agent-logo-virtual-assistant-computer-icons-personal-assistant-business-management-support-blue-company.png" alt="AI" className={`cursor-pointer object-contain transition-all duration-300
                    ${isListening ? "w-[75px] h-[75px]" : "w-[56px] h-[56px]"}`} />
        </div>
    </div>
    )
}

export default VoiceAI