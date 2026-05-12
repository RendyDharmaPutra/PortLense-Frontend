import { Network, RotateCw } from "lucide-react"
import { Button } from "../ui/button"

export const PortHeader = () => {
  return (
    <header className="flex w-full flex-col justify-between space-y-3 border-b bg-accent px-3 py-2 lg:flex-row lg:items-center">
      {/* Title */}
      <div className="flex h-fit flex-row items-center space-x-2">
        <Network className="h-5 w-5 md:h-6 md:w-6" />
        <h1 className="scroll-m-20 text-xl font-semibold tracking-tight md:text-2xl">
          Active Port Listener
        </h1>
      </div>

      {/* Action */}
      <div className="flex h-fit w-full flex-row items-center lg:w-fit">
        <Button className="w-full rounded">
          <RotateCw />
          Refresh
        </Button>
      </div>
    </header>
  )
}
