import { ModeToggle } from "../theme-toggle"
import { Button } from "../ui/button"

export const Navbar = () => {
    return <nav className="fixed top-4 left-0 z-50 w-full text-center px-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 rounded-2xl border border-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] ">
            <div>
                manyfest
            </div>
            <div className="flex gap-5">
                <Button size={"default"} variant={"default"}>Get Started</Button>
                <ModeToggle />
            </div>
        </div>
    </nav>
}