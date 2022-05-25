import Link from "next/link";
import Image from "next/image";
import {Flex, Box, Text, Button} from "@chakra-ui/react";

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, LinkName, imageUrl}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="blue.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3"  color="blue.700">{desc1}<br /> {desc2}
      </Text>
      <Button fontSize="xl">
        <Link href={LinkName}>{buttonText}</Link>

      </Button>
    </Box>
  </Flex>
);
export default function Home() {
  return (
    <Box>
      <Banner
        purpose="RENT A HOME/SPACE"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villa, Homes"
        desc2="and more"
        buttonText="Explore Renting Here"
        LinkName="/search?purpose=for-rent"
        imageUrl="https://ap.rdcpix.com/406134584/b088764768ade37f3766d169079fb126l-m0xd-w480_h480_q80.jpg"
      />
      <Flex flexWrap="wrap">
        {/* fetching API properties and mapping over them. */}
      </Flex>
      <Banner
        purpose="BUY A HOME/SPACE"
        title1="Find, Buy and Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villa, Homes"
        desc2="and more"
        buttonText="Explore Buying Here"
        LinkName="/search?purpose=for-sale"
        imageUrl="https://ap.rdcpix.com/2062405879/642bca386732d79c6fff329322df786al-m0xd-w480_h480_q80.jpg"
      />
      {/* fetching API properties and mapping over them. */}
    </Box>
  );
}
