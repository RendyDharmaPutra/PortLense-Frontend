import { getUsedPorts } from "@/services/get-used-ports.service"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"

type Port = {
  protocol: "TCP" | "UDP"
  port: number
  address: string
}

const ports: Port[] = [
  {
    protocol: "TCP",
    port: 80,
    address: "192.168.1.10",
  },
  {
    protocol: "TCP",
    port: 443,
    address: "192.168.1.11",
  },
  {
    protocol: "UDP",
    port: 53,
    address: "192.168.1.12",
  },
  {
    protocol: "TCP",
    port: 22,
    address: "192.168.1.13",
  },
  {
    protocol: "UDP",
    port: 123,
    address: "192.168.1.14",
  },
  {
    protocol: "TCP",
    port: 80,
    address: "192.168.1.10",
  },
  {
    protocol: "TCP",
    port: 443,
    address: "192.168.1.11",
  },
  {
    protocol: "UDP",
    port: 53,
    address: "192.168.1.12",
  },
  {
    protocol: "TCP",
    port: 22,
    address: "192.168.1.13",
  },
  {
    protocol: "UDP",
    port: 123,
    address: "192.168.1.14",
  },
  {
    protocol: "TCP",
    port: 80,
    address: "192.168.1.10",
  },
  {
    protocol: "TCP",
    port: 443,
    address: "192.168.1.11",
  },
  {
    protocol: "UDP",
    port: 53,
    address: "192.168.1.12",
  },
  {
    protocol: "TCP",
    port: 22,
    address: "192.168.1.13",
  },
  {
    protocol: "UDP",
    port: 123,
    address: "192.168.1.14",
  },
  {
    protocol: "TCP",
    port: 80,
    address: "192.168.1.10",
  },
  {
    protocol: "TCP",
    port: 443,
    address: "192.168.1.11",
  },
  {
    protocol: "UDP",
    port: 53,
    address: "192.168.1.12",
  },
  {
    protocol: "TCP",
    port: 22,
    address: "192.168.1.13",
  },
  {
    protocol: "UDP",
    port: 123,
    address: "192.168.1.14",
  },
  {
    protocol: "TCP",
    port: 80,
    address: "192.168.1.10",
  },
  {
    protocol: "TCP",
    port: 443,
    address: "192.168.1.11",
  },
  {
    protocol: "UDP",
    port: 53,
    address: "192.168.1.12",
  },
  {
    protocol: "TCP",
    port: 22,
    address: "192.168.1.13",
  },
  {
    protocol: "UDP",
    port: 123,
    address: "192.168.1.14",
  },
]

export const PortTable = async () => {
  const res = await getUsedPorts() // ? temporary usage for example

  console.debug(res)

  return (
    <Table className="font-mono">
      <TableHeader className="bg-accent">
        <TableRow>
          <TableHead className="w-1/4 px-3 py-2">Port</TableHead>
          <TableHead className="w-1/2 px-3 py-2">Address</TableHead>
          <TableHead className="w-1/4 px-3 py-2">Protocol</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="bg-background">
        {ports.map((port, idx) => (
          <TableRow key={idx}>
            <TableCell className="px-3 py-2 text-primary">
              {port.port}
            </TableCell>
            <TableCell className="px-3 py-2 text-muted-foreground">
              {port.address}
            </TableCell>
            <TableCell className="px-3 py-2">
              <span
                className={`inline-flex items-center gap-1 ${
                  port.protocol === "TCP" ? "text-primary" : "text-secondary"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    port.protocol === "TCP" ? "bg-primary" : "bg-secondary"
                  }`}
                ></span>
                {port.protocol}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
