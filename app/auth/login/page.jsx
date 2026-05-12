"use client"



import { LoginF } from "@/app/actions/auth";
import { context } from "@/app/context/authContext";
import SubmitButton from "@/components/SubmitButton";
import { useRouter } from "next/navigation";
import { useActionState, useContext, useEffect } from "react";
import { toast } from "react-toastify";

export default function Login() {
    
    const {settingName} = useContext(context)
    const [state, newAction] = useActionState(LoginF,{})
    const router = useRouter();

    useEffect(() => {
        if (state?.error) {
            toast.error(state.error);
        } else if (state?.success) {
            toast.success("Registration successful!");
            settingName(state.user)
            router.push("/")
        }
    }, [state]);
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-form-container">
          <form action={newAction}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="form-input"
                id="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="form-input"
                id="password"
              />
            </div>
            <SubmitButton title="login" />
          </form>
        </div>
      </div>
    </div>
  );
}
