import React from 'react'
import ImageCard from './ImageCard'
import { Box, Text } from '@chakra-ui/react'

const SeriesCategory = ({data}) => {
    return (<Box>
        <Text mb="18px">Series</Text>
<Box overflowY="hidden" overflowX="scroll" whiteSpace="nowrap" h={{base: "250px", md: "350px"}} justifyContent="center" alignItems="center" >
        {data?.map((res)=>(
            <ImageCard title={res.Title} image={res.Poster} />
        ))}
    </Box>
  </Box>
    
  )
}

export default SeriesCategory