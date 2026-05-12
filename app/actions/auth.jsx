"use server";

import { cookies } from "next/headers";

async function register(state, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (!name || !email || !password) {
    return { error: "name, email and password is required" };
  }

  if (password !== confirmPassword) {
    return { error: "Passwords do not match!" };
  }

  const res = await fetch("http://localhost:8000/api/register", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      c_password: confirmPassword,
    }),
  });
  const data = await res.json();
  if (res.ok) {
    return {
      success: true,
    };
  } else {
    const allErrors = Object.values(data).flat();
    const errorMessage = allErrors.join("\n");
    return {
      error: errorMessage,
    };
  }
}

// login function

async function LoginF(state, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: " email and password is required" };
  }

  const res = await fetch("http://localhost:8000/api/login", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const data = await res.json();
  if (res.ok) {
    (await cookies()).set({
      name: "token",
      value: data.token,
      sameSite: "strict",
      httpOnly: true,
    });
    return {
      success: true,
      user: data.user,
    };
  } else {
    const allErrors = Object.values(data).flat();
    const errorMessage = allErrors.join("\n");
    return {
      error: errorMessage,
    };
  }
}

//  async function me() {
//   const token = await cookies().get('token');
//   console.log(token);
  
// }

export { register, LoginF };
