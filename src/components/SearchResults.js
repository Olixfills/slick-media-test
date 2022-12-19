import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import ImageCard from './ImageCard'

const SearchResults = ({data}) => {
  return (<Box>
        <Text mb="18px">Search Results</Text>
<Box overflowY="hidden" overflowX="scroll" whiteSpace="nowrap" h={{base: "200px", md: "350px"}} my="auto">
        {data?.map((res)=>(
            <ImageCard title={res.Title} image={res.Poster} />
        ))}
    </Box>
  </Box>
    
  )
}

export default SearchResults