import React, { ReactNode } from 'react'

import CustomGridItemSmall from './CustomGridItemSmall'
import CustomGridItemBig from './CustomGridItemBig'
import customGridSchema from '../schemas/custom-grid-schema'

type Props = {
  gridType: number
  children: [ReactNode, ReactNode, ReactNode, ReactNode, ReactNode]
}

const CustomGrid = ({ gridType = 1, children }: Props) => {
  const gridTypeClass = `grid__${gridType}`

  return (
    <div>
      <CustomGridItemBig element={children[0]} />
      <CustomGridItemSmall elementOne={children[1]} elementTwo={children[3]} />
      <CustomGridItemSmall elementOne={children[2]} elementTwo={children[4]} />
    </div>
  )
}

CustomGrid.schema = customGridSchema

export default CustomGrid
