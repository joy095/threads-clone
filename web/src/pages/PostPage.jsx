import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../componsnts/Actions";
import { useState } from "react";
import Comment from "../componsnts/Comment";

const PostPage = () => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar
            src="/img/zuck-avatar.png"
            size={"md"}
            name="Mark Zuckerbarg"
          />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              markzukerbarg
            </Text>
            <Image src="/img/verified.png" w={4} h={4} ml={4} />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>
      <Text>Let&#39;s talk about Threads.</Text>
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src="/img/post1.png" w={"full"} />
      </Box>
      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>
      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          213 replies
        </Text>
        <Box w={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {200 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>
      <Divider my={4} />
      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app likes, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>
      <Divider my={4} />
      <Comment
        comment="Looks really good"
        createdAt="2d"
        likes={103}
        username="kentdodds"
        userAvatar="https://bit.ly/kent-c-dodds"
      />
      <Comment
        comment="Greate picture"
        createdAt="5d"
        likes={224}
        username="prosperotemuyiwa"
        userAvatar="https://bit.ly/prosper-baba"
      />
      <Comment
        comment="Nice"
        createdAt="9d"
        likes={93}
        username="christiannwamba"
        userAvatar="https://bit.ly/code-beast"
      />
    </>
  );
};

export default PostPage;
