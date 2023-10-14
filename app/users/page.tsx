import React from 'react'
import getAllUsers from '@/lib/getAllUsers'
import Link from 'next/link'
import styles from './styles.module.css'

export default async function User() {
    const usersData: Promise<User[]> = getAllUsers()
    
    const users = await usersData

    const content = (
        <section>
            <h1 className={styles.userh1}>NAMES</h1>
            <br></br>
            {users.map(user => {
                return (
                    <>
                    <p key={user.id} className={styles.user}>
                        <Link href={`/users/${user.id}`}>{user.id} - {user.name}</Link>
                    </p>
                    <br></br>
                    </>
                )
            })}
        </section>
    )
  return (
    content
  )
}
