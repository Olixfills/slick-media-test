import React from 'react';
import {
  Box,
  ChakraProvider,
  Input,
  Text,
  theme,
} from '@chakra-ui/react';
import Header from './components/Header';
import MovieCategory from './components/MovieCategory';
import SeriesCategory from './components/SeriesCategory';
import SearchResults from './components/SearchResults';
import { Oval } from 'react-loader-spinner';

function App() {
  const [searchText, setSearchText] = React.useState('');
  const [searchData, setSearchData] = React.useState([])
  const [movieData, setMovieData] = React.useState([])
  const [seriesData, setSeriesData] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const getMovieRequest = async (searchText) => {
    setLoading(true)
    const url = `https://www.omdbapi.com/?s=${searchText}&apikey=fbb9ad67`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setSearchData(responseJson.Search);
      setLoading(false)
    }
  };

  const getMovies = async () => {
    setLoading(true)
    const url = `https://www.omdbapi.com/?s=inte&apikey=fbb9ad67`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovieData(responseJson.Search);
      setLoading(false)
    }
  };

  const getSeries = async () => {
    setLoading(true)
    const url = `https://www.omdbapi.com/?s=legend&apikey=fbb9ad67`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setSeriesData(responseJson.Search);
      setLoading(false)
    }
  };

  React.useEffect(() => {

    getMovieRequest(searchText);
    if (searchText === '') {
      setSearchData([])
      setLoading(false)
    }
  }, [searchText]);

  React.useEffect(() => {
    getMovies()
  }, [])
  React.useEffect(() => {
    getSeries()
  }, [])


  return (
    <ChakraProvider theme={theme} >
      <Box pb={4}>
        <Header />
        <Box bgImage="url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')"
          h={{ base: '257px', md: "550px" }}
          w="100%"
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          display="flex" justifyContent={{ base: "center", lg: "flex-start" }} alignItems="center"
        >
          <Text fontSize={{ base: "28px", md: "72px" }} w={{ base: '273px', md: "490px" }} fontWeight="700" color="#fff" textAlign={{ base: "center", lg: "start" }} mx={{ lg: '77px' }}>Watch something incredible.</Text>
        </Box>
        <Box mt={{ base: "56px", md: "63px" }} px={{ base: '28px', md: '77px' }} mb={{ base: '33px', md: '48px' }}>
          <Text fontSize={{ base: "16px", md: "24px" }} mb="4px">Search</Text>
          <Input placeholder='Search' h={{ base: '34px', md: '54px' }} borderColor="#000000" borderRadius={0}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Box>
        {loading ? <Box display="flex" alignItems="center" justifyContent="center">
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}

          />
        </Box> : <Box pl={{ base: '28px', md: '77px' }}>

          {searchData.length > 1 ? <SearchResults data={searchData} /> : <Box>
            <MovieCategory data={movieData} />
            <SeriesCategory data={seriesData} />
          </Box>
          }
        </Box>}
      </Box>
    </ChakraProvider>
  );
}

export default App;
