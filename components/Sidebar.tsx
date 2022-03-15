import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import Footer from "./Footer";
import Link from "next/link";

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
      justifyContent="space-between"
      bg="#fff"
      borderLeft="1px solid #e8e8e8"
      display={["none", "none", "none", "flex"]}
    >
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        padding="75px 35px"
      >
        <Image boxSize={125} src={logoUrl} alt="logo" />

        <Link href="https://blog.amirmtaati.ir">
          <Heading
            mt="15px"
            as="h1"
            cursor="pointer"
            fontSize={["sm", "md", "lg", "xl"]}
          >
            {name}
          </Heading>
        </Link>
        <Text color="#757575" mt="10px" fontSize={["sm", "sm", "sm", "sm"]}>
          {description}
        </Text>
      </Flex>

      <Footer />
    </Flex>
  );
}
