import { useLoaderData } from "react-router-dom";
import { getPosts } from "../httpService";

function Posts() {
    const posts = useLoaderData();
    return (
        <div className="section">
            <h2 className="section-header">Posts: Lazy loading</h2>
            {
                posts.length && posts.map(post => {
                    return (
                        <div className="post">
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export async function postsLoader() {
    try {
        const postsData = await getPosts();
        return postsData;
    } catch (err) {
        console.log(err);
    }
}

export default Posts;