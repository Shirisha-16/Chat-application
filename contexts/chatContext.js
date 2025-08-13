import React, { createContext, useContext, useState, useRef } from 'react'

const ChatContext = createContext()

export const useChatContext = () => {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider')
  }
  return context
}

export const ChatProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('')
  const [isMinimized, setIsMinimized] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [isAnimating, setIsAnimating] = useState(false)
  
  const [messages, setMessages] = useState([
    { text: "Here are your matches for the day!", sender: 'ai' },
    { text: "As you can see, all of these were posted just over a few days ago and they fit your strengths perfectly! SpaceX has been hiring pretty frequently so do be on the look out for their new opportunities.", sender: 'ai'},
    { text: "Let me know if you'd like for me to do anything else for you, or would you like me to direct you to your assigned career counselor if you need any further help?", sender: 'ai'},
    { text: "Hey Felix, thank you so much for getting me these matches. I have a few questions about them. From my resume, can you please tell me which of these matches really fit the skills that I have, particularly when it comes to developing software for ONC controllers? I'd also really appreciate it if you could break down those descriptions for me and summarize them!", sender: 'user'},
    { text: "Definitely!", sender: 'ai' },
    { text: "Your resume mentions you using Python and Matlab to design control systems for GNC and attitude controls for launch vehicles. You have also mentioned doing projects where you've used Monte Carlo simulation methods to generate random wind data and conducting course correction.", sender: 'ai'},
    { text: "From these particular skills, jobs posted by SpaceX fit the most. They have also been hiring quite actively for multiple ongoing projects.", sender: 'ai'},
    { text: "There are also roles from Protingent that fit your skills very well. Let me break these down for you.", sender: 'ai'}
  ]) /* Initialize with predefined messages */

  const chatContainerRef = useRef(null)

  const addMessage = (text, sender = 'user') => {
    if (text.trim()) {
      setMessages((prevMessages) => [...prevMessages, { text, sender }])
      setInputValue('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addMessage(inputValue)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      addMessage(inputValue)
    }
  }

  const toggleMinimized = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <ChatContext.Provider value={{
      inputValue,
      setInputValue,
      addMessage,
      isMinimized,
      setIsMinimized,
      toggleMinimized,
      currentPage,
      setCurrentPage,
      isAnimating,
      setIsAnimating,
      chatContainerRef,
      handleSubmit,
      handleKeyPress,
      messages /* Export messages */
    }}>
      {children}
    </ChatContext.Provider>
  )
}
