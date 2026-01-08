import { Calendar, House, Table, User } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";

export const Sidebar = () => {
  const navLinks = [
    { href: "/", icon: <House />, label: "HOME" },
    { href: "/events", icon: <Calendar />, label: "EVENTOS" },
    { href: "/users", icon: <User />, label: "USUÁRIOS" },
    { href: "/", icon: <Table />, label: "PERFIL" },
    { href: "/", icon: <House />, label: "CONFIGURAÇÃO" },
    { href: "/", icon: <Table />, label: "AJUDA" },
  ];

  return (
    <aside className="row-start-1 row-end-3 col-start-1 col-end-2 bg-[#1d1d2f] text-white">
      <nav className="flex flex-col items-center justify-center gap-10 text-xs mt-10">
        {navLinks.map((link, index) => (
          <NavLink href={link.href} key={index}>
            {link.icon} {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

const NavLink = ({ href, children }: PropsWithChildren & { href: string }) => {
  return (
    <Link href={href} className="flex flex-col items-center gap-1">
      {children}
    </Link>
  );
};
