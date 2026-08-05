import Link from "next/link";
import LogoutButton from "@/components/admin/LogoutButton";

export default function AdminNav() {
  return (
    <header className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-6 py-4">
        <Link href="/admin" className="font-playfair text-lg font-semibold text-ink">
          Painel do blog
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/blog"
            target="_blank"
            className="font-lato text-sm font-semibold text-ink transition-colors hover:text-gold-bright"
          >
            Ver blog
          </Link>
          <Link
            href="/admin/posts/new"
            className="hover-float inline-flex items-center rounded-tl-[10px] rounded-br-[10px] bg-gold-bright px-5 py-2 font-lato text-sm uppercase tracking-[1px] text-white transition-colors duration-300 hover:bg-gold"
          >
            Novo post
          </Link>
          <LogoutButton />
        </nav>
      </div>
    </header>
  );
}
