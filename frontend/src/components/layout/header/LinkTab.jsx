import { Tab } from '@mui/material'
import React from 'react'

export const LinkTab = (props) => {
  return (
    <Tab LinkComponent={'a'} onClick={(event) => {
        event.preventDefault()
    }} {...props}/>
  )
}
