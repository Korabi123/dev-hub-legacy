import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-2 border-b w-full">
      <div className="flex w-full justify-center">
        <div className="text-xl font-bold select-none tracking-tighter">
          <Link href="/">
            <span>DevHub</span>
          </Link>{" "}
          /{" "}
          <Link href="/feed">
            <span className="text-zinc-400 font-normal hover:text-black dark:hover:text-white transition-all">Feed</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;