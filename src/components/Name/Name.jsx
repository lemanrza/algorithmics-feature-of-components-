import React from 'react'
import styles from "./Name.module.css"

const Name = (props) => {
  return (
    <div className={styles.container}>Name: {props.name}</div>
  )
}

export default Name
