
import { FollowProvider } from "@/context/followContext";
import { getSession } from "@/lib/session";
import React from "react";
import BackgroundAnimation from "@/components/ui/background-animation";
 import Spinner from "@/components/utils/Spinner";
import PostsWrapper from "@/components/posts/PostsWrapper";
export const dynamic = "force-dynamic";

// Data fetching functions
export const POST_LIMIT = 2;

export default async function PostsPage() {
  const session = await getSession();

  return (
    <div className="relative min-h-screen">
      <BackgroundAnimation />
      <div className="container mx-auto mt-14 py-8 px-4 max-w-7xl relative z-10">
        <h1 className="text-3xl font-bold mb-8 text-center text-foreground animate-fade-in">
          Posts
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
             <PostsWrapper session={session} />
         </div>
      </div>
    </div>
  );
}
