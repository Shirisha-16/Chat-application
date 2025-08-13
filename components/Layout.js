import React from 'react'
import { useRouter } from 'next/router'
import { useChatContext } from '../contexts/chatContext'
import styles from '../styles/Layout.module.css'
import Image from 'next/image'

const Layout = ({ children }) => {
  const router = useRouter()
  const { setCurrentPage, setIsAnimating } = useChatContext()

  const handleNavigation = (href, pageName) => {
    if (router.pathname !== href) {
      setIsAnimating(true)
      setCurrentPage(pageName)
      
      setTimeout(() => {
        router.push(href)
      }, 50)
    }
  }

  return (
    <div className={styles.container}>
      {/* Left Sidebar Navigation */}
      <nav className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.navItems}>
            <button
              onClick={() => handleNavigation('/', 'home')}
              className={`${styles.navItem} ${router.pathname === '/' ? styles.active : ''}`}
            >
              <div className={styles.navIcon}><Image src = "/House_01.png" alt = "Home" width = {24} height = {24} /></div>
            </button>
            <button
              onClick={() => handleNavigation('/secondary', 'secondary')}
              className={`${styles.navItem} ${router.pathname === '/secondary' ? styles.active : ''}`}
            >
              <div className={styles.navIcon}><Image src="/Note_Search.png" alt = "Search" width={24} height ={24}/></div>
            </button>
          </div>
          
          <div className={styles.bottomNavItems}>
            <div className={styles.navItem}>
              <div className={styles.navIcon}><Image src="/Settings.png" alt = "Settings" width = {24} height = {24}/></div>
            </div>
            <div className={styles.navItem}>
              <div className={styles.navIcon}><Image src="/Help.png" alt = "Search" width={24} height ={24}/></div>
            </div>
            <div className={styles.navItem}>
              <div className={styles.navIcon}><Image src="/Mail.png" alt = "Search" width={24} height ={24}/></div>
            </div>
            <div className={styles.navItem}>
              <div className={styles.navIcon}><Image src="/Log_Out.png" alt = "Search" width={24} height ={24}/></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className={styles.main}>
        <div className={styles.topBar}>
          <div className={styles.topBarContent}>
            {router.pathname !== '/' && router.pathname !== '/secondary' && (
              <h1 className={styles.pageTitle}>
                {/* Heading removed for home and secondary pages */}
              </h1>
            )}
          </div>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout