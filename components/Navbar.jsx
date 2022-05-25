import Link from "next/link";
import {Menu, MenuList, MenuButton, MenuItem, IconButton, Flex, Box, Spacer} from "@chakra-ui/react";
import {FcMenu, FcHome, FcAbout} from "react-icons/fc"; //flat color icons for react
import {BsSearch} from "react-icons/bs"; //bootstrap icons for react
import {FiKey} from "react-icons/fi"; //feathericons for react
// import Image from "next/image";
// import logo from "../assets/images/mplogo.png"

const Navbar = ()=>(
    <Flex p="2" borderbottom="1px" borderColor="yellow.100" bg="#e8dddc" >
        {/* <Image src={logo} alt="logo"/> */}
        <Box fontSize="4xl" justifyContent="center" marginLeft="40%" fontWeight="bold" color="blue.300">
            <Link href="/" paddingLeft="3">Magnum Properties</Link>
        </Box>
        {/* the spacer pushes the menu icons to the flush right */}
        <Spacer /> 
        <Menu>
            <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
            <MenuList>
                <Link href="/" passHref>
                    <MenuItem icon={<FcHome />}>Home</MenuItem>
                </Link>
                <Link href="/search" passHref>
                    <MenuItem icon={<BsSearch />}>Search</MenuItem>
                </Link>
                 <Link href="/search?purpose=for-sale" passHref>
                    <MenuItem icon={<FcAbout />}>Buy Space</MenuItem>
                </Link>
                <Link href="/search?purpose=for-rent" passHref>
                    <MenuItem icon={<FiKey />}>Rent Space</MenuItem>
                </Link>
            </MenuList>
        </Menu>

    </Flex>
)

export default Navbar;