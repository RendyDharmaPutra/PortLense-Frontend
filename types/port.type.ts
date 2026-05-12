export enum PortProtocol {
  TCP = "TCP",
  UDP = "UDP",
}

export type Port = {
  protocol: PortProtocol
  port: number
  address: string
}
