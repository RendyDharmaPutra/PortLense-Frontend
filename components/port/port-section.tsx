import { PortFooter } from "./port-footer"
import { PortHeader } from "./port-header"
import { PortTable } from "./port-table"

// ? temporarily using green background color for debugging
export const PortSection = () => {
  return (
    <section className="flex h-fit w-full min-w-1/2 flex-col bg-green-500 lg:w-fit lg:rounded">
      <PortHeader />
      <PortTable />
      <PortFooter />
    </section>
  )
}
