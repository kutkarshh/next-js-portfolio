"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const Nav = () => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const transClass = isOpen ? "flex" : "hidden";

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  const isDropdownOpen = () => {
    setIsOpen((old) => !old);
  };

  const userLogOut = () => {
    setTimeout(() => {
      router.push("/");
      signOut();
    }, 2000);
  };

  return (
    <nav className="nav flex-between w-full mb-10 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logoai.svg"
          alt="Promptizer Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptizer</p>
      </Link>

      {/* Desktop Navigation*/}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/posts" className="black_btn">
              Posts
            </Link>
            <Link href="/prompts" className="black_btn">
              Prompts
            </Link>

            <div className="relative user_img">
              <Image
                id="profile_img"
                src={session?.user.image}
                width={37}
                height={37}
                onMouseEnter={isDropdownOpen}
                className="rounded-full"
                alt="profile"
              />

              <div
                className={`absolute top-12 right-2 z-30 w-[180px] h-auto gap-2 flex flex-col p-2 bg-gray-100/20 rounded-md ${transClass}`}
                onMouseLeave={isDropdownOpen}
              >
                {pathName !== "/profile" ? (
                  <div>
                    <Link href="/profile" className="black_btn">
                      My Profile
                    </Link>
                  </div>
                ) : (
                  <div className="white_btn">My Profile</div>
                )}
                <div>
                  <Link href="/create-prompt" className="black_btn">
                    Create Prompt
                  </Link>
                </div>
                <div>
                  <Link href="/create-post" className="black_btn">
                    Create Post
                  </Link>
                </div>
                <div>
                  <Link href="/create-post" className="black_btn">
                    Create Post
                  </Link>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={userLogOut}
                    className="black_btn"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation*/}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link href="/posts" className="dropdown_link">
                  Posts
                </Link>
                <Link href="/prompts" className="dropdown_link">
                  Prompts
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <Link
                  href="/create-post"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Post
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-2 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
