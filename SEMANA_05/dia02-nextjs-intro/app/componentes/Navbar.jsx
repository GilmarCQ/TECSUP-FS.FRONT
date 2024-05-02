import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex gap-2">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/profile">Profile</Link>
      </nav>
    </>
  )
}

export default Navbar;
