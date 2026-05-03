"use server";
const { revalidatePath } = require("next/cache");

const addPost = async (formData) => {
  const title = formData.get("title");
  const body = formData.get("body");
  const res = await fetch("http://localhost:3001/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      body: body,
    }),
  });
  const data = res.json();
  if (res.ok) {
    revalidatePath("/posts");
  } else {
    throw new Error(res.status);
  }
};

export {addPost}
