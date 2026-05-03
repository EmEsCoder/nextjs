"use client";

import { useFormStatus } from "react-dom";
import { addPost } from "@/actions/FormAction";


const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "sending to SV" : "done"}
    </button>
  );
};

export default function Form() {
  return (
    <form action={addPost}>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" />
      <br />
      <label htmlFor="body">Body</label>
      <input type="text" name="body" />
      <br />
      <Submit />
    </form>
  );
}
