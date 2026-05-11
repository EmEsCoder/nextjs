"use server";

async function register(state, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");


    if (!name || !email || !password) {
      return { error: "name, email and password is required" }
  }

  if (password !== confirmPassword) {
      return { error: "Passwords do not match!" }
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
  const data =  await res.json();
  if(res.ok) {
    return {
        success : true
    }
    
  }else  {
    console.log(data);
    const allErrors = Object.values(data).flat();
    const errorMessage = allErrors.join('\n');
        return {
                error : errorMessage
    }

  }
  


}
export { register };
