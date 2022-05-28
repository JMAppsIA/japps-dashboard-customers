import React from 'react'
import IconButton from '../IconButton/IconButton';
import { Input, InputContainer } from './index';

function TextInput({hasIconButton, icon, onClick, ...props}) {
  return (
    <InputContainer>
        <Input {...props}/>
        {
            hasIconButton && (
                <IconButton image={icon} onClick={onClick}/>
            )
        }
    </InputContainer>
  )
}

export default TextInput