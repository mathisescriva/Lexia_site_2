import { Separator } from "@/components/ui/separator"
import { Logo } from "./Logo"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Pioneering speech technology for enterprise systems.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-normal">Company</h3>
              <a 
                href="#about" 
                className="text-sm text-muted-foreground transition-opacity hover:opacity-60"
              >
                About
              </a>
              <a 
                href="#research" 
                className="text-sm text-muted-foreground transition-opacity hover:opacity-60"
              >
                Research
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-normal">Solutions</h3>
              <a 
                href="#usecases" 
                className="text-sm text-muted-foreground transition-opacity hover:opacity-60"
              >
                Use Cases
              </a>
              <a 
                href="#solutions" 
                className="text-sm text-muted-foreground transition-opacity hover:opacity-60"
              >
                Enterprise
              </a>
              <a 
                href="#contact" 
                className="text-sm text-muted-foreground transition-opacity hover:opacity-60"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <Separator className="my-12" />
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lexia. All rights reserved.
        </p>
      </div>
    </footer>
  )
}