import Link from "next/link";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-[#0F4C3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-white hover:opacity-90 transition-opacity">
              Parsley Health
            </Link>
            <nav className="flex space-x-8">
              <Link
                href="/conditions"
                className="text-white/90 hover:text-white transition-colors font-medium"
              >
                Conditions
              </Link>
              <Link
                href="/blog"
                className="text-white/90 hover:text-white transition-colors font-medium"
              >
                Blog
              </Link>
              <Link
                href="/labs"
                className="text-white/90 hover:text-white transition-colors font-medium"
              >
                Labs
              </Link>
              <Link
                href="/care"
                className="text-white/90 hover:text-white transition-colors font-medium"
              >
                Care
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
      <footer className="bg-[#0F4C3A] text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-sm text-white/80">
            Parsley Health IA Prototype
          </p>
        </div>
      </footer>
    </div>
  );
}

