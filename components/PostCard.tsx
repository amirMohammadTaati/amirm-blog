import { Flex, Heading, Text, Box, Image } from "@chakra-ui/react";
import { Post } from "../lib/types";

export default function PostCard({ title, description, image }: Post) {
  return (
    <Flex
      w="100%"
      h="40%"
      margin="75px 0"
      bg="#fff"
      shadow="xs"
      justify="space-between"
    >
      {image?.url !== undefined ? (
        <Box flex={3}>
          <Image src={image.url} w="100%" h="100%" />
        </Box>
      ) : null}
      <Flex
        flex={6}
        padding="50px"
        textAlign="center"
        flexDir="column"
        justifyContent="space-around"
      >
        <Heading> {title} </Heading>
        <Text color="#757575" lineHeight={2}>
          {description}
        </Text>
      </Flex>
    </Flex>
  );
}
