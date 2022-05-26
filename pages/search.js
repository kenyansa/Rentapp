import {useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import {Flex, Box, Text, Icon} from "@chakra-ui/react";
import {BsFilter} from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import nores from "../assets/images/nores.png"

const Search = ()=>{
    const [searchFilters, setSearchFilters] = useState(false); // for filtering the properties visible to the client
    const router = useRouter();  //returning it as a hook

    return (
      <Box>
        <Flex cursor="pointer"
        bg="gray.300"
        borderBottom="1px"
        p="2"
        borderColor="black.300"
        justifyContent="center"
        alignItems="center"
        fontWeight="bold"
        fontSize="2xl"
        onClick={()=>setSearchFilters ((prevFilters)=>!prevFilters)} //toggling the previous filters on/off
        >
            <Text>
                Search the Rental Properies by Filters
            </Text>
            <Icon paddingLeft="2" w="8" as={BsFilter} />
        </Flex>
        {/* if there are searchFilters, render the searchfilter component */}
        {searchFilters && < SearchFilters/>} 
        <Text fontSize="2xl" p="4" fontWeight="bold">
            Properties {router.query.purpose}
        </Text>
        <Flex flexWrap="wrap">
            {/* we are mapping over all our properties to be fetched and displaying a property component for each of the property */}
            {[].map((property)=><Property property={property} key={property.id} />)} 
        </Flex>
        {/* if there are no properties, it will display the image of no results */}
        {[].length === 0 && (
            <Flex justifyContent="center" marginTop="5" marginBottom="5" flexDirection="column">
                <Image alt="no result" src={nores} />
                <Text fontSize="2xl" marginTop="3">Pole, No Results Found!!!</Text>
            </Flex>
        )}
      </Box>
    );
}

export default Search;