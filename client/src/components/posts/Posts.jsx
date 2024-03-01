import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";

const Posts = () => {
  const { isLoading, error, data } = useQuery({
    queryKey:["post"], queryFn: async() => {
      const res = await fetch("http://localhost:8800/api/posts/")
      return res.json();
    }
  });

  return (
    <div className="posts">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id_post} />)}
    </div>
  );
};

export default Posts;