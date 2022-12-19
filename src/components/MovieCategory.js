import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ImageCard from './ImageCard'

const MovieCategory = ({data}) => {
    return (<Box>
        <Text mb="18px">Movies</Text>
<Box overflowY="hidden" overflowX="scroll" whiteSpace="nowrap" h={{base: "250px", md: "350px"}}>
        {data?.map((res)=>(
            <ImageCard title={res.Title} image={res.Poster} />
        ))}
    </Box>
  </Box>
    
  )
}

export default MovieCategory