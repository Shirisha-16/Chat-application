import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import ChatInterface from '../components/chatInterface'
import { useChatContext } from '../contexts/chatContext'
import styles from '../styles/Secondary.module.css'

export default function Secondary() {
  const { setCurrentPage } = useChatContext()

  useEffect(() => {
    setCurrentPage('secondary')
  }, [setCurrentPage])

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mainArea}>
            {/* Expanded main content area */}
          </div>
        </div>
        <ChatInterface />
      </div>
    </Layout>
  )
}