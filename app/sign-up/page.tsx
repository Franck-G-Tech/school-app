import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return(
   <div className="flex min-h-[70vh] flex-col items-center justify-center">
     <SignUp />
   </div>);
}
