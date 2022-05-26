import {useEffect, useState} from "react";
import {Flex, Select, Box, Text, Input, Spinner, Icon, Button} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {MdCancel} from "react-icons/md"; //material design icons from react, for cancelling
import Image from "next/image";
import { filterData, getFilterValues } from "../utilities/filterData";

const SearchFilters = () =>{
    const [filters, setFilters] = useState(filterData);
    const router = useRouter(); 

    const searchProperties = (filterValues) =>{
        const path = router.pathname;
        const {query} = router;
        const values = getFilterValues(filterValues);
        values.forEach((item)=>{
            query[item.name] = item.value
        })
        router.push({pathname:path, query})
    }
    return(
        <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
            {filters.map((filter)=>(
                <Box key={filter.queryName}>
                    <Select 
                    placeholder={filter.placeholder}
                    w="fit=content"
                    p="3"
                    onChange={(e)=> searchProperties({[filter.queryName]: e.target.value})}>
                        {/* mapping over all the items and rendering options in each of the select elements. */}
                        {filter?.items?.map((items)=>(
                            <option value={items.value} key={items.value}
                            >{items.name}
                            </option>
                        ))}
                    </Select>
                </Box>
            )
            )}

        </Flex>
    )
}

export default SearchFilters;