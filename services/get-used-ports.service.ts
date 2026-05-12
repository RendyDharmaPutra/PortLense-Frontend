import { ApiErrorResponse, ApiSuccessResponse } from "@/types/api-response.type"
import { Port } from "@/types/port.type"

export const getUsedPorts = async (): Promise<
  ApiSuccessResponse<Port[]> | ApiErrorResponse
> => {
  const res = await fetch("http://localhost:3001/ports")

  return await res.json()
}
