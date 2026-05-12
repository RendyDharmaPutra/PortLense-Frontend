import { getUsedPorts } from "@/services/get-used-ports.service"
import { PortFooter } from "./port-footer"
import { PortHeader } from "./port-header"
import { PortTable } from "./port-table"

export const PortSection = async () => {
  const res = await getUsedPorts()

  return (
    <section className="flex h-fit max-h-150 w-full min-w-1/2 flex-col border lg:w-fit lg:rounded">
      <PortHeader />
      {res.success ? <PortTable ports={res.data} /> : <h1>Error</h1>}
      <PortFooter />
    </section>
  )
}
