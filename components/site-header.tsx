import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/75 supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
      <div className="max-w-8xl mx-auto">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={siteConfig.mainNav} />
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <ModeToggle />
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
