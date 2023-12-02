"use client";

import { useUser } from "@clerk/nextjs";

import { PostCard } from "@/components/post-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

import { Edit } from "lucide-react";
import Link from "next/link";

const ProfileCard = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className="flex sm:ml-72 py-20 items-center justify-center">
      <Card className="lg:w-[800px] md:w-[500px] select-none">
        <CardHeader>
          <CardTitle className="font-bold tracking-tight">
            <div className="flex w-full justify-between">
              <Avatar className="lg:h-40 lg:w-40 h-20 w-20">
                <AvatarImage
                  src={user.imageUrl}
                  alt={`${user.username}'s profile image`}
                />
                <AvatarFallback>
                  <Skeleton className="lg:h-40 lg:w-40 w-20 h-20 rounded-full" />
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  {user.fullName}
                </p>
                <p className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-zinc-400">
                  @{user.username}
                </p>
                <Link href="/profile/edit">
                  <Button variant={"outline"} className="mt-4">
                    <Edit size={15} />{" "}
                    <span className="ml-2">Edit Profile</span>
                  </Button>
                </Link>
              </div>
            </div>
          </CardTitle>
          <CardDescription>
            <p className="mt-8 scroll-m-20 md:text-2xl text-lg font-semibold tracking-tight text-black">
              {/* @ts-ignore */}
              {user.unsafeMetadata.bio}
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Posts
          </p>
          <Separator className="mt-2 mb-6" />
          <div className="grid lg:grid-cols-2 md:grid-cols-1 place-items-center">
            <PostCard className="mb-10" />
            <PostCard className="mb-10" />
            <PostCard className="mb-10" />
            <PostCard className="mb-10" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </div>
  );
};

export default ProfileCard;
