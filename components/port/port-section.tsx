import { PortFooter } from "./port-footer"
import { PortHeader } from "./port-header"
import { PortTable } from "./port-table"

export const PortSection = () => {
  return (
    <section className="flex h-fit max-h-150 w-full min-w-1/2 flex-col border lg:w-fit lg:rounded">
      <PortHeader />
      <PortTable />
      <PortFooter />
    </section>
  )
}
