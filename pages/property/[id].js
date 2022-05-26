import {Box, Flex, Spacer, Text, Avatar} from "@chakra-ui/react";
import {FaBed, FaBath} from "react-icons/fa"; //react icons from font awesome
import {BsGridFill} from "react-icons/bs" //react icons from bootsrap
import {GoVerified} from"react-icons/go"; //react icons: verified icons
import {millify} from "millify"; //millify is an npm for coverting long nos to human-readable strings
import { baseUrl, fetchApi } from "../../utilities/fetchApi";

//destructing the properties we need
const PropertyDetails = ({propertyDetails: {price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos }}) => (
    <Box maxWidth="1000px" margin="auto" p="4">
       {photos && <ImageScrollbar data={photos} />} 
    </Box>
)

export default PropertyDetails;



export async function getServerSideProps ({params: {id}}){
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`); 

    return {
        props: {
            propertyDetails: data
        }
    }
}