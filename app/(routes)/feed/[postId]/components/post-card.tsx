"use client";

import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ShareButtons from "@/components/share-buttons";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Copy } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface PostCardProps {
  className?: string;
  data: {
    title: string;
    content: string;
    id: string;
    userId: string;
  };
  authorImage: string;
  username: string;
  onClick?: () => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  className,
  data,
  username,
  onClick,
  authorImage,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex py-20 items-center justify-center">
      <Card
        onClick={onClick}
        className={cn("lg:w-[650px] md:w-[500px] select-none", className)}
      >
        <CardHeader>
          <CardTitle className="font-bold tracking-tight">
            {data.title}
          </CardTitle>
          <div className="flex items-center space-x-2">
            <CardDescription>
              <div className="mt-4 flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage 
                    src={authorImage}
                  />
                </Avatar>
                @{username}
                <Link href={`/profile/${data.userId}`} className="ml-4">
                  <p className="hover:underline text-zinc-400 transition">View Profile</p>
                </Link>
              </div>
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg">{data.content}</p>
          <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1682687219573-3fd75f982217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8)", backgroundPosition: 'center' }} className="mt-4 relative aspect-video rounded-lg overflow-hidden bg-cover" />
        </CardContent>

        <CardFooter className="w-full">
          <Dialog>
            <DialogTrigger className="w-full">
              <Button className="w-full">Share</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Share This Post</DialogTitle>
                <DialogDescription>
                  Anyone with the post link will be able to view this post.
                </DialogDescription>
              </DialogHeader>
              <br />
              <h2>Social media</h2>
              <Separator />
              <div className="flex gap-2">
                <ShareButtons
                  urlFacebook={`${window.location}/${data.id}`}
                  urlReddit={`${window.location}/${data.id}`}
                />
              </div>
              <br />
              <h2>Link</h2>
              <Input defaultValue={`${window.location}/${data.id}`} readOnly />
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location}/${data.id}`
                  );
                  setIsCopied(true);
                }}
                size="sm"
                className="px-3"
              >
                {!isCopied ? <Copy size={20} /> : "Copied!"}
              </Button>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};
