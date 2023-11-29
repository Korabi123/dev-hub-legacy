"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowBigUp } from "lucide-react";
import { useState } from "react";

interface PostCardProps {
  className?: string;
}

export const PostCard: React.FC<PostCardProps> = ({
  className
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const onLike = () => {
    setIsLiked(true);
    setLikes(likes + 1)

    onDislike();
  }

  const onDislike = () => {
    if (isLiked === true) {
      setIsLiked(false);
      setLikes(likes - 1);
    }
  }

  return (
    <Card className={cn("w-[350px] cursor-pointer select-none hover:border-black/30 dark:hover:border-zinc-400 transition", className)}>
      <CardHeader>
        <CardDescription>Post Author</CardDescription>
        <CardTitle className="font-bold tracking-tight">Post Title</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video relative">
        <Image 
          src="https://images.unsplash.com/photo-1682686578289-cf9c8c472c9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
          fill
          alt="Post Image"
          className="rounded-lg"
        />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center space-x-4">
          <Button onClick={onLike} size="icon" variant="outline"><ArrowBigUp className={cn("", isLiked ? "fill-green-400 outline-none" : "")} /></Button>
          <CardDescription className="text-md">
            {likes === 0 ? "No likes." : `${likes}`}
          </CardDescription>
        </div>
        <Button>Share</Button>
      </CardFooter>
    </Card>
  )
}