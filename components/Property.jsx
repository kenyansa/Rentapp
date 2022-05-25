import next from "next";
import Link from "next/link";
import Image from "next/image";
import{Box, Flex, Text, Avatar} from "@chakra-ui/react";
import {FaBed, FaBath} from "react-icons/fa"; //react icons from font awesome
import {BsGridFill} from "react-icons/bs" //react icons from bootsrap
import {millify} from "millify"; //millify is an npm for coverting long nos to human-readable strings

//we'll destructure all the properties we need from the API
const Property = ({property: coverPhoto, rentFrequency, rooms, price, title, baths, area, agency, isVerified, externalID}) =>(
    <Link href={`/property/${externalID}`} passHref>
        {title}
    </Link>
)

export default Property;