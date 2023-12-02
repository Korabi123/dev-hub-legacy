"use client";

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
import { Skeleton } from "@/components/ui/skeleton";

import { useUser } from "@clerk/nextjs";
import { Edit } from "lucide-react";
import Link from "next/link";

const ProfilePage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className="h-full">
      <div className="flex py-20 md:items-center justify-center md:h-full">
        <Card className="w-[350px] select-none">
          <CardHeader>
            <CardTitle className="font-bold tracking-tight">
              <div className="flex w-full justify-between">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    src={user.imageUrl}
                    alt={`${user.username}'s profile image`}
                  />
                  <AvatarFallback>
                    <Skeleton className="w-[100px] h-[20px] rounded-full" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-3xl md:text-xl xl:text-2xl">{user.fullName}</p>
                  <p className="md:text-lg text-zinc-400">
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
              {/* @ts-ignore */}
              {user.unsafeMetadata.bio}
            </CardDescription>
          </CardHeader>
          <CardContent>Hello</CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
