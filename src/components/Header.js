import { Box } from '@chakra-ui/react'
import React from 'react'

import {ReactComponent as Logo} from '../assets/Logo.svg'
import {ReactComponent as Logo2} from '../assets/Logo2.svg'

const Header = () => {
  return (
    <Box h={{base: "67px", md: "140px"}} bg="#292929" py="40px" display="flex" justifyContent={{base: "center", lg: "flex-start"}} alignItems="center">
        <Box mx={{lg: '77px'}} display={{base: "none", md: "block"}}>
            <Logo />
        </Box>
        <Box display={{md: 'none'}}>
            <Logo2 />
        </Box>
    </Box>
  )
}

export default Header