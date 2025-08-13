import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import ChatInterface from '../components/chatInterface'
import { useChatContext } from '../contexts/chatContext'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  const { setCurrentPage } = useChatContext()

  useEffect(() => {
    setCurrentPage('home')
  }, [setCurrentPage])

  const {
    inputValue,
    setInputValue,
    handleSubmit,
    handleKeyPress,
    messages
  } = useChatContext()

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mainArea}>
            {/* Main content area - matches Figma layout */}
          </div>
        </div>
        {/* Messages Container with Figma content - Rendered directly on home page */}
        <div className={styles.homeMessagesContainer}>
          <div className={styles.messagesList}>
            {messages.map((message, index) => (
              <div key={index} className={`${styles.messageBlock} ${message.sender === 'user' ? styles.userMessage : styles.aiMessage}`}>
                <p>{message.text}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Input Area matching Figma - Rendered directly on home page */}
        <div className={styles.homeInputArea}>
          <form className={styles.inputContainer} onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Please type your message"
              className={styles.messageInput}
            />
            
            <div className={styles.actionButtons}>
              <div className={styles.selectOptionsContainer}> 
                <Image src = "/User_Square.png" alt = "user" width={28} height={28}/>
                <select className={styles.selectBtn}>
                  <option>Select Option 1</option>
                </select>
                <Image src = "/Suitcase.png" alt = "user" width={28} height={28}/>
                <select className={styles.selectBtn}>
                  <option>Select Option 2</option>
                </select>
                <Image src = "/Map_Pin.png" alt = "user" width={28} height={28}/>
                <select className={styles.selectBtn}>
                  <option>Select Option 3</option>
                </select>
                <Image src = "/User_Card_ID.png" alt = "user" width={28} height={28}/>
                <select className={styles.selectBtn}>
                  <option>Select Option 4</option>
                </select>
              </div>
              
              <div className={styles.sendActions}>
                <button type="button" className={styles.actionBtn}>
                    <Image
                        src="/File_Upload.png"
                        alt="upload"
                        width={28} // Set the appropriate width for your image
                        height={28} // Set the appropriate height for your image
                    /></button>
                <button type="button" className={styles.actionBtn}><Image
                        src="/mic-on.png"
                        alt="mic"
                        width={28} // Set the appropriate width for your image
                        height={28} // Set the appropriate height for your image
                    /></button>
                <button type="submit" className={styles.sendBtn}><Image
                        src="/Paper_Plane.png"
                        alt="send"
                        width={28} // Set the appropriate width for your image
                        height={28} // Set the appropriate height for your image
                    /></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}