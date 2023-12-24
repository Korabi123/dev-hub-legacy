import Navbar from "@/components/navbar";

import { TextTypingEffect } from "@/components/text-typewriter";
import { ButtonFlickeringLight } from "@/components/special-button";
import { ChevronsLeftRight, Globe, LockIcon } from "lucide-react";
import { CardSpotlight } from "@/components/card-spotlight";

export default function Home() {
  const priorities = [
    {
      title: "Focused Security",
      description: "A spotlight on security, because the safety of your data is our priority",
      icon: <LockIcon className="h-8 w-8 text-center" />,
      id: 1,
    },
    {
      title: "Share with the world",
      description: "Turn your posts into valuable resources for others. Share your expertise with the world.",
      icon: <Globe className="h-8 w-8 text-center" />,
      id: 2,
    },
    {
      title: "Developer Profiles",
      description: "Comprehensive profiles showcasing skills, projects, and contributions.",
      icon: <ChevronsLeftRight className="h-8 w-8 text-center" />,
      id: 2,
    },
  ]

  return (
    <>
      <Navbar />

      <main className="xl:px-96 lg:px-60 md:px-36 px-6 py-32">
        <section className="mt-20" id="landing">
          <div className="text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-6xl">
              Your Ultimate
            </h1>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-6xl bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text animate-gradient">
              Dev Connection.
            </h1>
            <p className="leading-7 md:text-xl [&:not(:first-child)]:mt-6">
              <TextTypingEffect />
            </p>
            <div className="mt-10">
              <ButtonFlickeringLight />
            </div>
          </div>
        </section>

        <section id="about" className="mt-36">
          <div className="text-center">
            <h2 className="scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight first:mt-0">
              What we offer
            </h2>
            <p className="leading-7 text-xl [&:not(:first-child)]:mt-3 text-zinc-400">
              List of features we offer and our priorities.
            </p>
            <div className="grid mt-20 place-items-center gap-x-10 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 mb-4">
              {priorities.map((priority) => (
                <CardSpotlight title={priority.title} icon={priority.icon} description={priority.description} key={priority.id} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
