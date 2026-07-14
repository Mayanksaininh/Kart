import React from "react";

const Contact = () =>{
    return (
      
    <div className="min-h-screen bg-grey-900 px-4 sm:px-8 md:px-16 py-16">

      <div className="text-center mb-14">
        <span className="inline-block text-xs uppercase tracking-widest text-blue-400 border border-blue-400/30 bg-blue-400/10 rounded-full px-4 py-1 mb-4">
          Contact Us
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4">
          We're Here to Help
        </h1>
        <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
         If you have any specific requirements or need quick assistance, or if you’re facing any order-related issue, feel free to connect with our team on WhatsApp or email us. We’re here to help!

        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-14">
        {[
          { emoji: "📩", label: "Email Us", value: "@gmail.com" },
          { emoji: "📞", label: "Only WhatsApp", value: "+91 ----------" },
          { emoji: "🕐", label: "Working Hours", value: "Mon–Sat, 9AM–7PM IST" },
          { emoji: "📍", label: "Our Office", value: "12, MG Road, Delhi" },
        ].map(({ emoji, label, value }) => (
          <div key={label} className="bg-gray-800/60 border border-gray-700 rounded-xl p-5 text-center hover:border-purple-400 transition-all duration-300">
            <div className="text-3xl mb-3">{emoji}</div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">{label}</p>
            <p className="text-gray-200 text-sm font-medium">{value}</p>
          </div>
        ))}
      </div>

     
        

        <div className="flex flex-col gap-6">
          <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 sm:p-8">
            <h2 className="text-white text-xl font-semibold mb-5">FAQs</h2>
            <div className="flex flex-col gap-4">
              {[
                { q: "How long does delivery take?", a: "Standard delivery takes 3–7 business days." },
                { q: "How do I return a product?", a: "You can initiate a return within 7 days of delivery by contacting us on WhatsApp." },
                { q: "Is my payment information secure?", a: "Yes, all transactions are 256-bit SSL encrypted through trusted payment gateways." },
                
              ].map(({ q, a }) => (
                <div key={q} className="border-b border-gray-700 pb-4 last:border-0 last:pb-0">
                  <p className="text-gray-200 text-sm font-medium mb-1">{q}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 sm:p-8">
            <h2 className="text-white text-xl font-semibold mb-2">Follow Us</h2>
            <p className="text-gray-400 text-sm mb-5">Stay connected for offers, updates and support.</p>
            <div className="flex gap-3 flex-wrap">
              {[
                { label: "Instagram", color: "from-pink-500 to-purple-500" },
                
                { label: "Facebook", color: "from-blue-600 to-blue-400" },
                { label: "YouTube", color: "from-red-500 to-red-400" },
              ].map(({ label, color }) => (
                <button key={label} className={`px-4 py-2 rounded-lg bg-gradient-to-r ${color} text-white text-xs font-medium hover:opacity-90 transition-opacity duration-200`}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    
    )
}

export default Contact  