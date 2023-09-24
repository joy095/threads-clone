import UserHeader from "../componsnts/UserHeader";
import UserPost from "../componsnts/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={102}
        replies={37}
        postImg="/img/post1.png"
        postTitle="Let's talk about threads."
      />
      <UserPost
        likes={1032}
        replies={327}
        postImg="/img/post3.png"
        postTitle="Hello everyone."
      />
      <UserPost
        likes={182}
        replies={97}
        postImg="/img/post3.png"
        postTitle="Let's talk about threads."
      />
      <UserPost
        likes={202}
        replies={147}
        postImg="/img/post1.png"
        postTitle="Let's talk about threads."
      />
    </>
  );
};

export default UserPage;
