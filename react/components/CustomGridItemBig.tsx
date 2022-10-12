import React, { ReactNode } from 'react'
import '../styles.css'

type Props = {
  element: ReactNode
}

const CustomGridItemBig = ({ element }: Props) => {
  return <div className="grid__itemBig">{element}</div>
}

export default CustomGridItemBig
