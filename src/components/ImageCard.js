import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const ImageCard = ({ image, title="" }) => {
    return (
        <Box
            w={{ base: '200px', md: '300px' }}
            h={{ base: '200px', md: '300px' }}
            bg="#000f1f" display="inline-flex"
            mx="6.5px" bgImage={image}
            bgSize="cover"
            bgPosition="center"
            borderRadius="12px"
            mt={0}
            whiteSpace="normal">
            <Text
                fontSize={{ base: '18px', md: '24px' }}
                textAlign="center" color="#fff"
                bg="rgba(0,0,0,0.1)"
                w={{ base: '180px', md: '280px' }}
                h={{ base: '180px', md: '280px' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                ml="auto"
                mr="auto"
                mt="auto"
                mb="auto"
                borderRadius="12px"
            >{title.slice(0,20)}</Text>
        </Box>
    )
}

export default ImageCard