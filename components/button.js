import React from 'react'
import cn from 'classnames'

import style from './button.module.css'

function Button({ children, className, ...props }) {
  return (
    <button type="button" className={cn(style.button, className)} {...props}>
      {children}
    </button>
  )
}

export default Button
