import React from 'react'
// eslint-disable-next-line 
import classes from './MyButton.module.css'

export default function MyButton({children, bootsrtap_classes, ...props}) {
  return (
    <button {...props} className={bootsrtap_classes}>
        {children}
    </button>
  )
}
