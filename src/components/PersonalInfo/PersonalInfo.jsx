import React from 'react'
import styles from "./PersonalInfo.module.css"

const PersonalInfo = (props) => {
  return (
    <div className={styles.container}>PersonalInfo: {props.info}</div>
  )
}

export default PersonalInfo