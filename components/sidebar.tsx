"use client";

import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

import { DoorOpen, Edit, LogOut, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import { SignOutButton, UserButton, UserProfile } from "@clerk/nextjs";

const routes = [
  {
    name: "Settings",
    href: "/settings",
    icon: <Settings size={20} />,
  },
];

interface SidebarProps {
  username: string;
  imageUrl: string;
  fullName: string;
}

export const revalidate = 0;

const Sidebar: React.FC<SidebarProps> = ({ username, imageUrl, fullName }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Mobile */}

      <div className="md:hidden flex items-center pt-2 px-4">
        <div className="flex items-center justify-between w-full">
          <Sheet>
            <SheetTrigger>
              <Button className="items-center" variant="outline" size="icon">
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </Button>
            </SheetTrigger>

            <SheetContent side="left">
              <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                  <div className="flex w-full justify-between space-x-4 items-center select-none">
                    <Avatar>
                      <AvatarImage
                        src={imageUrl}
                        alt={`${username}'s profile image`}
                      />
                      <AvatarFallback>
                        <Skeleton className="w-[100px] h-[20px] rounded-full" />
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex space-x-2">
                      <Link href="/profile/edit">
                        <Button variant="outline">
                          <Edit size={15} />{" "}
                        </Button>
                      </Link>
                      <SignOutButton>
                        <Button variant="outline" size="icon">
                          <LogOut size={15} />
                        </Button>
                      </SignOutButton>
                    </div>
                  </div>
                  <div className="leading-3 select-none">
                    <p className="text-md md:text-lg">{fullName}</p>
                    <p className="text-sm md:text-md text-zinc-400">
                      @{username}
                    </p>
                  </div>

                  <div className="py-10">
                    {routes.map((route) => (
                      <div key={route.name} className="w-full">
                        <Link href={route.href}>
                          <Button
                            className="w-full flex items-center"
                            variant="outline"
                          >
                            {route.icon}
                            <p className="ml-2">{route.name}</p>
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop */}

      <aside className="fixed top-0 left-0 z-10 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-black/50">
          <ul className="space-y-2 font-medium">
            <div className="flex w-full justify-between space-x-4 items-center select-none">
              <Avatar>
                <AvatarImage
                  src={imageUrl}
                  alt={`${username}'s profile image`}
                />
                <AvatarFallback>
                  <Skeleton className="w-[100px] h-[20px] rounded-full" />
                </AvatarFallback>
              </Avatar>

              <div className="flex space-x-2">
                <Link href="/profile/edit">
                  <Button variant="outline">
                    <Edit size={15} />{" "}
                    <span className="ml-2">Edit Profile</span>
                  </Button>
                </Link>
                <SignOutButton>
                  <Button variant="outline" size="icon">
                    <LogOut size={15} />
                  </Button>
                </SignOutButton>
              </div>
            </div>
            <div className="leading-3 select-none">
              <p className="text-md md:text-lg">{fullName}</p>
              <p className="text-sm md:text-md text-zinc-400">@{username}</p>
            </div>

            <div className="py-10">
              {routes.map((route) => (
                <div key={route.name} className="w-full">
                  <Link href={route.href}>
                    <Button
                      className="w-full flex items-center"
                      variant="outline"
                    >
                      {route.icon}
                      <p className="ml-2">{route.name}</p>
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
