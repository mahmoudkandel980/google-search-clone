import Image from "next/image";
import { GetServerSideProps } from "next";
import { getProviders, signIn } from "next-auth/react";
import { Provider } from "../../models/interfaces";

const Signin = (props: { providers: Provider[] }) => {
    const { providers } = props;
    console.log(providers);

    const signinHandler = (provider: Provider) => {
        signIn(provider.id, { callbackUrl: "/" });
    };

    return (
        <div className="mx-auto w-1/2 text-center mt-52">
            {Object.values(providers).map((provider) => (
                <div key={provider.id}>
                    <Image
                        src={"/images/google-logo.png"}
                        width={"480"}
                        height={"150"}
                        alt={provider.name}
                        className="object-contain"
                    />
                    <p className="text-sm text-gray-500 my-10 select-none">
                        This website is created for learning purposes
                    </p>
                    <button
                        className="bg-red-400  p-6 py-3 text-white text-sm sm:text-md font-bold rounded-xl hover:bg-red-500 duration-300"
                        onClick={signinHandler.bind(null, provider)}
                    >
                        Sign In with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Signin;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { req } = context;
    const providers = await getProviders();
    return {
        props: { providers },
    };
};
