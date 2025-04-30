import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return(
  <div className="flex min-h-[70vh] flex-col items-center justify-center">
    <SignIn routing="hash" />
  </div>);
}
