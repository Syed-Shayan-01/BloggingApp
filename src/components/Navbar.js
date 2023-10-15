
import { AiFillCloseCircle, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import Logo from "./logo/Logo";
import Button from "./button/Button";
import List from "./list/List";

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex shadow-xl items-center justify-between flex-wrap p-6">
      <div className="flex items-center mr-6 lg:mr-72">
        <Logo text={"Blogger.Com"} />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <ol>
            <li>
              <AiOutlineMenu
                className={` text-black font-semibold text-lg hover:text-blue-400 ${
                  isOpen ? "hidden" : "block"
                }`}
              />
            </li>
            <li>
              <AiFillCloseCircle
                className={` text-black font-semibold text-lg hover:text-blue-400 ${
                  isOpen ? "block" : "hidden"
                }`}
              />
            </li>
          </ol>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex  max-md:flex-col lg:flex-grow">
          <Link href={"/"}>
            <List itemText={"Dashboard"} />{" "}
          </Link>
          <Link href={"/allPages/allBlog/"}>
            <List itemText={"All Blogs"} />
          </Link>
          <Link href={"/allPages/contactUs/contactUs"}>
            <List itemText={"Contact us"} />
          </Link>
        </div>

        {/* Login Button */}
        {!session && (
          <span>
            <Button text={"Login"} />
          </span>
        )}

        {/* Logout Button */}
        {session && (
          <span onClick={() => signOut()}>
            <Button text={"Logout"} />
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
