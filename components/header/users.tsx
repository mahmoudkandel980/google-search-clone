import Image from "next/image";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

import { UserProps } from "../../models/interfaces";

function Users(props: UserProps): JSX.Element {
    const router = useRouter();
    const { data: session } = useSession();

    const { className } = props;

    const SigninHandler = () => {
        router.push("/auth/signin");
    };

    const signoutHandler = () => {
        signOut();
    };

    if (session) {
        return (
            <div
                className={`flex hover:bg-gray-200 p-1 rounded-full ${className}`}
            >
                <Image
                    src={session.user?.image!}
                    alt={session.user?.name!}
                    referrerPolicy="no-referrer"
                    width={"50"}
                    height={"50"}
                    className="rounded-full cursor-pointer "
                    onClick={signoutHandler}
                />
            </div>
        );
    }

    return (
        <>
            <button
                onClick={SigninHandler}
                className={`p-5 py-1 bg-blue-500 text-white font-medium rounded-lg hover:shadow-2xl hover:bg-blue-600 duration-300  ${className} `}
            >
                Sign In
            </button>
        </>
    );
}

export default Users;
