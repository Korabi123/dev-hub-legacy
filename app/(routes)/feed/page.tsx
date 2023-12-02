"use client";

import { PostCard } from "@/components/post-card";
import Sidebar from "@/components/sidebar";

import { useUser } from "@clerk/nextjs";

const FeedPage = () => {
  const { user } = useUser();

  if (!user) {
    return null
  }
  
  return (
    <div className="h-full">
      <Sidebar />
      
      <div className="sm:ml-72 pt-20 flex justify-center items-center">  
        <div className="grid place-items-center gap-x-10 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 mb-4">
          <PostCard className="mb-10" />
          <PostCard className="mb-10" />
          <PostCard className="mb-10" />
          <PostCard className="mb-10" />
          <PostCard className="mb-10" />
          <PostCard className="mb-10" />
          <PostCard className="mb-10" />
          <PostCard className="mb-10" />
          <PostCard className="mb-10" />
        </div>
      </div>
    </div>
  );
}
 
export default FeedPage;