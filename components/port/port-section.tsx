import { PortHeader } from "./port-header"

// ? temporarily using green background color for debugging
export const PortSection = () => {
  return (
    <section className="flex h-fit min-h-96 w-full min-w-3/5 flex-col bg-green-500 md:w-fit md:rounded">
      <PortHeader />
    </section>
  )
}
