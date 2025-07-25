import { UserCircle2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-gray-100 shadow-sm">
      <div className="flex items-center gap-2 text-xl font-semibold">
        <img
          src="./src/assets/logo.png" 
          alt=""
          className="h-8"
        />
      </div>
      <a href="/login">
      <button className="cursor-pointer flex items-center gap-2 bg-white hover:bg-gray-200 transition text-sm px-4 py-2 rounded-full border border-gray-300 font-medium">
        {/* <UserCircle2 className="h-5 w-5" /> */}
        log in
      </button>
      </a>
      <a href="/signup">
      <button className="cursor-pointer flex items-center gap-2 bg-white hover:bg-gray-200 transition text-sm px-4 py-2 rounded-full border border-gray-300 font-medium">
        <UserCircle2 className="h-5 w-5" />
        Sign up
      </button>
      </a>
    </nav>
  );
};

export default Navbar;