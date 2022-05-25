import Link from "next/link";
import Image from "next/image";
import {Flex, Box, Text, Button} from "@chakra-ui/react";
import Property from "../components/Property";
import {baseUrl, fetchApi} from "../utilities/fetchApi"

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, LinkName, imageUrl}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="20">
    <Image src={imageUrl} width={500} height={280} alt="banner" />
    <Box p="5">
      <Text color="blue.400" fontSize="2xl" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="lg" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="2"  color="blue.300">{desc1}<br /> {desc2}
      </Text>
      <Button fontSize="xl">
        <Link href={LinkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);
export default function Home({propertiesForSale, propertiesForRent}) { 
  return (
    <Box>
      <Banner //the banner is the static photo of the renting section
        purpose="RENT A HOME/SPACE"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villa, Homes"
        desc2="and more"
        buttonText="Explore Renting Here"
        LinkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/180245179/262dac16806b47b6989a42a689a22552"
      />
      {/* fetching API properties and mapping over them. */}
      <Flex flexWrap="wrap" justifyContent="center">
        {propertiesForSale.map((property)=><Property property={property} key={property.id} />)}
      </Flex>

      <Banner //the banner is the static photo that marks the beinning of the buying section
        purpose="BUY A HOME/SPACE"
        title1="Find, Buy and Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villa, Homes"
        desc2="and more"
        buttonText="Explore Buying Here"
        LinkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/183545387/7a5d077081d34c428f0ecbf064b85d53"
      />
      {/* fetching API properties and mapping over them. */}
      <Flex flexWrap="wrap" justifyContent="center">
      {propertiesForRent.map((property)=><Property property={property} key={property.id} />)}
      </Flex>
    </Box>
  );
}

export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=8`)
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=8`
  );
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}