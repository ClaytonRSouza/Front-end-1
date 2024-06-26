import { Box, Text } from "@chakra-ui/react";

const Header = ({ title }) => {
    return (
        <Box bg="#09090B" w="100%" padding={4} >
            <Text color="white" fontSize="24px">{title}</Text>
        </Box>
    );
}

export default Header;