import React from 'react'
import { Svg, Image } from '.';

const Icon = ({width, height, source, isLeft, isRight}) => {
  return (
    <Svg width={width} height={height} {...{isLeft}} {...{isRight}}>
        <Image href={source} />
    </Svg>
  )
}

export default Icon