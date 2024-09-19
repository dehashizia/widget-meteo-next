import Link from "next/link";

function Menu() {
  return (
    <nav className="bg-blue-300 p-6">
      <Link href="/" className="mr-6 hover:bg-blue-600 hover:font-bold">
        Acceuil
      </Link>
      <Link href="/about" className="mr-6  hover:bg-blue-600 hover:font-bold">
        About Us
      </Link>
    </nav>
  );
}

export default Menu;
