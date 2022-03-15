import { Flex, Heading, Text, Box, Image } from "@chakra-ui/react";
import { Post } from "../lib/types";
import Link from "next/link";

export default function PostCard({
  title,
  description,
  slug,
  _id,
  createdAt,
}: {
  title: string;
  description: string;
  slug: string;
  _id: string;
  createdAt: string;
}) {
  return (
    <Flex
      w="100%"
      h="40%"
      margin="75px 0"
      bg="#fff"
      shadow="xs"
      justify="space-between"
    >
      <Flex
        flex={6}
        padding="50px"
        textAlign="center"
        flexDir="column"
        justifyContent="space-around"
      >
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <Heading cursor="pointer"> {title} </Heading>
        </Link>

        <Text
          color="#757575"
          fontSize={["sm", "md", "lg", "xl"]}
          lineHeight={2}
          mt="10px"
        >
          {description}
        </Text>

        <Text mt="15px">
          {new Intl.DateTimeFormat("fa-IR", {
            dateStyle: "long",
          }).format(new Date(createdAt))}
        </Text>
      </Flex>
    </Flex>
  );
}
