import { Flex, Heading, Text, Image } from "@chakra-ui/react";

interface Props {
  name: string;
  description: string;
  logoUrl: string;
}

export default function Sidebar({ name, description, logoUrl }: Props) {
  return (
    <Flex
      pos="fixed"
      w="25%"
      h="100vh"
      flexDir="column"
      alignItems="center"
      bg="#fff"
      borderLeft="1px solid #e8e8e8"
    >
      <Flex flexDir="column" alignItems="center" py={75}>
        <Image boxSize={125} src={logoUrl} alt="logo" />
        <Heading mt="15px" as="h1">
          {name}
        </Heading>
        <Text color="#757575" mt="10px">
          {description}
        </Text>
      </Flex>
    </Flex>
  );
}
