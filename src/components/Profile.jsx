import React from 'react'
import Name from './Name/Name'
import Email from './Email/Email'
import Address from './Address/Address'
import PersonalInfo from './PersonalInfo/PersonalInfo'

const Profile = () => {
  return (
    <>
      <Name name="Leman" />
      <Email email="lamaner@code.edu.az" />
      <Address address="Baku, Azerbaijan" />
      <PersonalInfo info="19 years old" />
    </>
  )
}

export default Profile