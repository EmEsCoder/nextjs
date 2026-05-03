import Form from "@/components/Form";
import sleep from "sleep-promise";

async function fetchPosts () {
    const posts = await fetch("http://localhost:3001/posts")
    if(posts.ok) {
        await sleep(2500)
        return posts.json()

    } else {
        throw new Error("sorry Bro")
    }
}

export default async function Posts() {
    const posts = await fetchPosts()
  return (
    <>
      <h1>Posts Lists</h1>
      <br />
      <Form />
      <br />
      <hr />

      <ul>
        {posts.map((evo) => {
            return (
                <li key={evo.id}>{evo.title} : {evo.body}</li>
            )
        })}
      </ul>
    </>
  );
}