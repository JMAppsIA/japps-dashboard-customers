import React from 'react'
import { Button } from "./index";

function IconButton({image, width, height, ...props}) {
  return (
    <Button {...props}>
        {image}
    </Button>
  )
}

export default IconButton