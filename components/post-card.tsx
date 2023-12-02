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
import { cn } from "@/lib/utils"
import { Button } from "./ui/button";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Share } from "next/font/google";
import ShareButtons from "./share-buttons";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Copy } from "lucide-react";

interface PostCardProps {
  className?: string;
  data: {
    title: string;
    content: string;
    id: string;
  }
  username: string;
  onClick?: () => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  className,
  data,
  username,
  onClick
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  })

  if (!isMounted) return null

  return (
    <Card onClick={onClick} className={cn("w-[350px] select-none", className)}>
        <CardHeader>
          <CardTitle className="font-bold tracking-tight">{data.title}</CardTitle>
          <CardDescription>by @{username}</CardDescription>
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

        <CardFooter className="grid grid-cols-2 gap-4">
          <Button variant={"outline"} onClick={() => router.push(`/feed/${data.id}`)}>Read More</Button>
          <Dialog>
            <DialogTrigger>
              <Button className="w-full">Share</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Share This Post</DialogTitle>
                <DialogDescription>Anyone with the post link will be able to view this post.</DialogDescription>
              </DialogHeader>
              <br />
              <h2>Social media</h2>
              <Separator />
              <div className="flex gap-2">
                <ShareButtons urlFacebook={`${window.location}/${data.id}`} urlReddit={`${window.location}/${data.id}`} />
              </div>
              <br />
              <h2>Link</h2>
              <Input
                defaultValue={`${window.location}/${data.id}`}
                readOnly
              />
              <Button onClick={() => {navigator.clipboard.writeText(`${window.location}/${data.id}`); setIsCopied(true)}} size="sm" className="px-3">
                {!isCopied ? <Copy size={20} /> : "Copied!"}
              </Button>
            </DialogContent>
          </Dialog> 
        </CardFooter>
    </Card>
  )
}