import {useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import {Flex, Box, Text, Icon} from "@chakra-ui/react";
import {BsFilter} from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import nores from "../assets/images/nores.png"
import { fetchApi, baseUrl } from "../utilities/fetchApi";

const Search = ({properties})=>{
    const [searchFilters, setSearchFilters] = useState(false); // for filtering the properties visible to the client
    const router = useRouter();  //returning it as a hook

    return (
      <Box>
        <Flex
          cursor="pointer"
          bg="gray.300"
          borderBottom="1px"
          p="2"
          borderColor="black.300"
          justifyContent="center"
          alignItems="center"
          fontWeight="bold"
          fontSize="2xl"
          onClick={() => setSearchFilters(!searchFilters)} //toggling the previous filters on/off
        >
          <Text>Search the Rental Properies by Filters</Text>
          <Icon paddingLeft="2" w="8" as={BsFilter} />
        </Flex>
        {/* if there are searchFilters, render the searchfilter component */}
        {searchFilters && <SearchFilters />}
        <Text fontSize="2xl" p="4" fontWeight="bold">
          Properties {router.query.purpose}
        </Text>
        <Flex flexWrap="wrap">
          {/* we are mapping over all our properties to be fetched and displaying a property component for each of the property */}
          {properties.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
        {/* if there are no properties, it will display the image of no results */}
        {properties.length === 0 && (
          <Flex
            justifyContent="center"
            marginTop="5"
            marginBottom="5"
            flexDir="column"
          >
            <Image alt="no result" src={nores} />
            <Text fontSize="2xl" marginTop="3">
              Pole, No Results Found!!!
            </Text>
          </Flex>
        )}
      </Box>
    );  
}

export default Search;
//use getServeriSideProps for SSR to allow us get the query and dynamically change the data once the client changes the filters 
export async function getServerSideProps({query}){
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  //passing all the properties to the query API request, one by one.
  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );
//sending the data through props
  return {
    props: {
      properties: data?.hits,
      
    },
  };
}