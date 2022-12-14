import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Component() {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-xl">Signed in as {session.user.email}</div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-10"
          onClick={() => router.push("api/auth/signout")}
        >
          Sign out
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-10"
          onClick={() => router.push("/upload")}
        >
          Upload
        </button>
      </div>
    );
  }
  return (
    // <div className="">
    //   <div className="">
    //     <div className="flex flex-col justify-center items-center h-screen">
    //       <div className="text-xl ">Not signed in</div>
    // <button
    //   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-10"
    //   onClick={() => router.push("api/auth/signin")}
    // >
    //   Sign in
    // </button>
    //     </div>
    //   </div>
    // </div>
    <div className="flex justify-center pt-10">
      <div className="form-control w-full max-w-xs">
        <div className="text-3xl font-bold">Login</div>
        <label className="label">
          <span className="label-text">ID</span>
        </label>
        <input
          type="text"
          placeholder="ID"
          className="input input-bordered w-full max-w-xs "
        />
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="text"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary border-0 normal-case text-xl text-neutral mt-4">
          Login
        </button>
        <div className="flex justify-end mt-2">
          <div className="mr-2">Not a member yet?</div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-10"
          onClick={() => router.push("api/auth/signin")}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
