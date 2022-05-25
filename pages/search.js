import {useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import {Flex, Box, Text, Icon} from "@chakra-ui/react";
import {BsFilter} from "react-icons/bs";

const Search = ()=>{
    const [searchFilters, setSearchFilters] = useState(false); // for filtering the properties visible to the client
    const router = useRouter();  //returning it as a hook

    return (
      <Box>
        <Flex cursor="pointer"
        bg="#e3bdba"
        borderBottom="1px"
        p="2"
        borderColor="black.300"
        justifyContent="center"
        alignItems="center"
        fontWeight="bold"
        fontSize="2xl"
        >
            <Text>
                Search the Rental Properies by Filters
            </Text>
            <Icon paddingLeft="2" w="8" as={BsFilter} />
        </Flex>
      </Box>
    );
}

export default Search;