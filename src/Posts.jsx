import { use } from "react";
import Post from "./Post";

const Posts = ({postsPromise}) => {
    const posts = use(postsPromise);
  
    return (
        <div>
            <h3>Posts: {posts.length} </h3>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;