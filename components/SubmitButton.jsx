import { useFormStatus } from "react-dom";

export default function SubmitButton({title}) {

    const {pending} = useFormStatus()
  return (
    <>
      <button type="submit" disabled={pending} className="btn-register-submit">
        {title}
      </button>
    </>
  );
}
