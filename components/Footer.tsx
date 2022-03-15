import { FaGithub } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Flex padding="50px 0px">
      <Link href="https://github.com/amirMohammadTaati/">
        <FaGithub size={22} cursor="pointer" />
      </Link>
    </Flex>
  );
}
