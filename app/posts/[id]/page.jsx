import { notFound } from "next/navigation";
import sleep from "sleep-promise";

async function fetchPost (id) {
    const post = await fetch(`http://localhost:3001/posts/${id}`)
    if(post.ok) {
        await sleep(2500)
        return post.json()

    } else { 
        if(post.status == 404) {
            return notFound()
        }
        console.log(post);
        throw new Error("sorry Bro")
        
    }
}

export default async function PostId({params}) {
    const { id } = await params;
    const post = await fetchPost(id)
  return (
    <>
      <h1>Post </h1>

        <ul>
            <li>{post.title} : {post.body}</li>
        </ul>
    </>
  );
}
