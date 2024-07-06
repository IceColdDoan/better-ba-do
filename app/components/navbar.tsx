import Link from "next/link";
import React from 'react'
import Image from "next/image";
import logo from "/public/images/LOGO.png";
import { UserAuth } from "@/app/lib/context";

export default function Navbar() {
    // const { user, username } = UserAuth();
    const user = null;
    const username = null;

    console.log(user, username)
    return (
        <nav className="flex flex-row justify-evenly align-center p-2 shadow-lg divide-x-2">
            <ul className="flex flex-row gap-3 justify-center items-center" >
                <Link className="hover:opacity-70 " href="/">
                    <Image src={logo} width={60} height={0} alt="BA-DO Logo" priority={true} />
                </Link>
                <Link className="hover:opacity-70"href="/aboutCreator">
                    <button>
                        About The Creator
                    </button>
                </Link>
            </ul>
            <ul className="flex flex-row justify-center align-center items-center">
                <Link className="justify-center items-center hover:opacity-70" href="/">
                    <button>
                        Home
                    </button>
                </Link>
            </ul>
            <ul className="flex flex-row justify-center items-center">
                {username && (
                    <>
                        <li>
                            {/* This will be the view stats and all that page and how much the person did */}
                            <Link className="hover:opacity-70" href="/login">
                                <button>
                                    My Profile
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`}>
                                <img src={user?.photoURL!} alt="user_profile"></img>
                            </Link>
                        </li>
                    </>
                )}

                {!username && (
                    <>
                        <li>
                            <Link className="hover:opacity-70" href="/login">
                                <button>
                                    Login
                                </button>
                            </Link>
                        </li>
                    </>
                )}
            </ul>


        </nav>
    )
}
