import Link from "next/link";
import Users from "./users";

const Header = (): JSX.Element => {
    return (
        <header>
            <nav className="flex justify-between  p-5 text-sm sm:text-lg text-gray-700">
                <ul className="link-parent">
                    <li className="link">
                        <Link href={`https://about.google/`}>About</Link>
                    </li>
                    <li className="link">
                        <Link href={`https://store.google.com/`}>Store</Link>
                    </li>
                </ul>
                <ul className="link-parent">
                    <li className="link">
                        <Link href={`https://mail.google.com`}>Gmail</Link>
                    </li>
                    <li className="link">
                        <Link href={`/search?term=google&searchType=image`}>
                            Images
                        </Link>
                    </li>
                    <li>
                        <Users className="" />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
