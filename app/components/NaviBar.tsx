import Link from "next/link";
import React from "react";

const NaviBar = () => {
  return (
    <div className="flex bg-slate-200 p-5">
      <Link href="/" className="btn btn-ghost normal-case text-xl">
        Home
      </Link>
      <Link href="/users" className="btn btn-ghost normal-case text-xl">
        Users
      </Link>
    </div>
  );
};

export default NaviBar;
