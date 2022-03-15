import { Flex, Box, Image, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar({
  title,
  logoUrl,
}: {
  title: string;
  logoUrl: string;
}) {
  return (
    <Flex
      display={["flex", "flex", "flex", "none"]}
      bgColor="#fff"
      justifyContent="space-between"
      alignItems="center"
      height="5%"
      padding="20px 50px"
    >
      <Flex>
        <Link href="https://blog.amirmtaati.ir">
          <Heading as="h1" cursor="pointer" fontSize={["sm", "md", "lg", "xl"]}>
            {title}
          </Heading>
        </Link>
      </Flex>

      <Box>
        <Image boxSize={50} src={logoUrl} alt="logo" />
      </Box>
    </Flex>
  );
}
