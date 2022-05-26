import {Box, Flex, Spacer, Text, Avatar} from "@chakra-ui/react";
import {FaBed, FaBath} from "react-icons/fa"; //react icons from font awesome
import {BsGridFill} from "react-icons/bs" //react icons from bootsrap
import {GoVerified} from"react-icons/go"; //react icons: verified icons
import {millify} from "millify"; //millify is an npm for coverting long nos to human-readable strings
import { baseUrl, fetchApi } from "../../utilities/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";

//destructing the properties we need
const PropertyDetails = ({
  propertyDetails: {price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos
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
        <Flex alignItems="center" p="3" justifyContent="space-between" w="250px" color="violet.400">
          {rooms} <FaBed />| {baths}
          <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Box marginTop="2">
          <Text fontSize="lg" marginButtom="2" fontWeight="bold">
            {/* displays the full title of the photo */}
            {title} <br />
          </Text>
          <Text LineHeight="2" color="black.300">
            {description}
          </Text>
        </Box>
        <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between">
          <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="black.300" p="3">
            <Text>Type</Text>
            <Text fontWeight="bold">{type}</Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            w="400px"
            borderBottom="1px"
            borderColor="black.300"
            p="3"
          >
            <Text>Purpose</Text>
            <Text fontWeight="bold">{purpose}</Text>
          </Flex>
          {furnishingStatus && (
            <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="black.300" p="3">
              <Text>Furnishing Status</Text>
              <Text fontWeight="bold">{furnishingStatus}</Text>
            </Flex>
          )}
        </Flex>
      </Flex>
      <Box>
        {amenities.length && (
          <Text fontSize="2xl" fontWeight="black" marginTop="5">
            Amenities
          </Text>
        )}
        <Flex flexWrap="wrap">
          {amenities.map((item) =>
            item.amenities.map((amenity) => (
              <Text fontWeight="bold" color="pink" bg="black" borderRadius="5" margin="2" key={amenity.text}>
                {amenity.text}
              </Text>
            ))
          )}
        </Flex>
      </Box>
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