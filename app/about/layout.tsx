import React from 'react'
import styles from './styles.module.css'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About Page',
}

function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <main className={styles.main}>
        {children}
    </main>
  )
}

export default AboutLayout