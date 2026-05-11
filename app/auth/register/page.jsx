"use client";

import { register } from "@/app/actions/auth";
import SubmitButton from "@/components/SubmitButton";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

export default function Register() {
    const router = useRouter();
  const [state, newAction] = useActionState(register, {});

useEffect(() => {
    if (state?.error) {
        toast.error(state.error);
    } else if (state?.success) {
        toast.success("Registration successful!");
        router.push("/")
    }
}, [state]);

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="register-form-box">
          <form action={newAction} className="register-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input name="name" type="text" className="form-input" id="name" />
            </div>
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
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                type="password"
                className="form-input"
                id="confirmPassword"
              />
            </div>
            <SubmitButton title="register" />
          </form>
        </div>
      </div>
    </div>
  );
}
