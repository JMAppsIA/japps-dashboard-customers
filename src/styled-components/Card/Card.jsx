import React from 'react'
import { CardContainer, CardTitle, CardDescription } from '.'
import Colors from '../../constants/Colors'
import { Text } from '../Text'

const Card = ({title, description}) => {
  return (
    <CardContainer>
        <CardTitle><Text align='center' regular>{title}</Text></CardTitle>
        <CardDescription><Text color={Colors.white} h3 regular>{description}</Text></CardDescription>
    </CardContainer>
  )
}

export default Card