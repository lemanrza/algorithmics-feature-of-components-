import React from 'react'
import styles from "./Email.module.css"
const Email = (props) => {
  return (
    <div className={styles.container}>Email: {props.email}</div>
  )
}

export default Email