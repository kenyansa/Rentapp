import {useContext} from "react";
import Image from "next/image";
import {Box, Icon, Flex} from "@chakra-ui/react";
import {ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa"; //react-icons from font awesome

const LeftArrow = () => {
    const {scrollPrev} = useContext (VisibilityContext);

    return(
        <Flex justifyContent="center" marginRight="1" alignItems="center">
            <Icon 
            as={FaArrowAltCircleLeft}
            cursor="pointer"
            onClick={()=>scrollPrev()}
            fontSize="2xl"
             />
        </Flex>
    )
}

const RightArrow = () => {
    const {scrollNext} = useContext (VisibilityContext);

    return(
        <Flex justifyContent="center" marginRight="1" alignItems="center">
            <Icon 
            as={FaArrowAltCircleRight}
            cursor="pointer"
            onClick= {() => scrollNext()}
            fontSize="2xl"
             />
        </Flex>
    )
}

const ImageScrollbar = ({data}) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: 'hidden'}}>
        {data.map((item)=>(
            <Box width="910px" itemId={item.id} p="1" overflow="hidden">
                <Image 
                placeholder="blur" 
                blurDataURL={item.url} 
                src={item.url} 
                width={1000} 
                height={500}
                alt="property image"
                //making the image to fit all kinds of screens neatly
                sizes="(max-width:500px) 100px, (max-width): 1023px 400px, 1000px" 
                />
            </Box> 
        ))}
    </ScrollMenu>
)

export default ImageScrollbar;