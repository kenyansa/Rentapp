import {useEffect, useState} from "react";
import {Flex, Select, Box, Text, Input, Spinner, Icon, Button} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {MdCancel} from "react-icons/md"; //material design icons from react, for cancelling
import Image from "next/image";

const SearchFilters = () =>{
    const [fitlers, setFilters] = useState({}); 
    return(
        <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">

        </Flex>
    )
}

export default SearchFilters;