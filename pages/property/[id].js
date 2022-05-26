import {Box, Flex, Spacer, Text, Avatar} from "@chakra-ui/react";
import {FaBed, FaBath} from "react-icons/fa"; //react icons from font awesome
import {BsGridFill} from "react-icons/bs" //react icons from bootsrap
import {GoVerified} from"react-icons/go"; //react icons: verified icons
import {millify} from "millify"; //millify is an npm for coverting long nos to human-readable strings
import { baseUrl, fetchApi } from "../../utilities/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";

//destructing the properties we need
const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => (
  <Box maxWidth="1000px" margin="auto" p="4">
    {photos && <ImageScrollbar data={photos} />}
    <Box w="full" p="6">
      <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Box paddingRight="3" color="violet.400">
            {isVerified && <GoVerified />}
          </Box>
          <Text fontWeight="bold" fontSize="sm">
            KES{millify(price)}
            {rentFrequency && `/${rentFrequency}`}
          </Text>
          <Box>
            <Avatar size="sm" src={agency?.url} />
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          p="3"
          justifyContent="space-between"
          w="250px"
          color="violet.400"
        >
          {rooms} <FaBed />| {baths}
          <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Text fontSize="sm">
          {/* displays the title of the photo is all characters are less than 50, else, it trancates the first 50 characters. */}
          {title.length > 50 ? `${title.substring(0, 50)}...` : title}
        </Text>
      </Flex>
    </Box>
  </Box>
);

export default PropertyDetails;



export async function getServerSideProps ({params: {id}}){
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`); 

    return {
        props: {
            propertyDetails: data
        }
    }
}