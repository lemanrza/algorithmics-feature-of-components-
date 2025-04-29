import React from 'react'
import styles from "./Address.module.css"

const Address = (props) => {
  return (
    <div className={styles.container}>Address: {props.address}</div>
  )
}

export default Address