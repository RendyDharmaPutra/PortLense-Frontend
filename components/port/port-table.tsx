import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import { Port } from "@/types/port.type"

export const PortTable = async ({ ports }: { ports: Port[] }) => {
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
              {port.ip}
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
