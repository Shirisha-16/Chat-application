import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion'
import { useChatContext } from '../contexts/chatContext'
import styles from '../styles/ChatInterface.module.css'

const ChatInterface = () => {
  const {
    inputValue,
    setInputValue,
    addMessage,
    isMinimized,
    toggleMinimized,
    currentPage,
    isAnimating,
    setIsAnimating,
    chatContainerRef,
    messages,
    handleSubmit,
    handleKeyPress
  } = useChatContext()

  // Animation variants based on Figma designs
  const containerVariants = {
    home: {
      position: 'fixed',
      bottom: '-100%', // Move off-screen
      left: '50%',
      x: '-50%',
      width: '900px',
      height: '480px',
      borderRadius: '8px 8px 0 0',
      opacity: 0, // Make it invisible
      pointerEvents: 'none', // Disable interactions
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    secondary: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      x: '0%',
      width: '720px', /* Increased width by 20px */
      height: '600px',
      borderRadius: '8px',
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    minimized: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      x: '0%',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const contentVariants = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, delay: 0.1 }
    }
  }

  const getContainerVariant = () => {
    if (isMinimized) return 'minimized'
    return currentPage
  }

  const showContent = !isMinimized && !isAnimating

  return (
    <motion.div
      ref={chatContainerRef}
      className={styles.chatContainer}
      layout
      variants={containerVariants}
      animate={getContainerVariant()}
      onAnimationComplete={() => setIsAnimating(false)}
    >
      <AnimatePresence>
        {isMinimized && (
          <motion.div
            key = "minimized-icon"
            className={styles.minimizedIcon}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={toggleMinimized}
          >
          <Image src = "/chat-icon.png" alt = "chat" width = {70} height = {70}/>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && currentPage === 'secondary' && ( /* Only show content on secondary page */
          <motion.div
            key = "chat-content"
            className={styles.chatContent}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Chat Header with X button for secondary page */}
            <div className={styles.chatHeader}>
              <button className={styles.closeBtn} onClick={toggleMinimized}>
                ×
              </button>
            </div>

            {/* Messages Container with Figma content */}
            <div className={styles.messagesContainer}>
              <div className={styles.messagesList}>
                {messages.map((message, index) => (
                  <div key={index} className={`${styles.messageBlock} ${message.sender === 'user' ? styles.userMessage : styles.aiMessage}`}>
                    <p>{message.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Input Area matching Figma */}
            <div className={styles.inputArea}>
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ChatInterface