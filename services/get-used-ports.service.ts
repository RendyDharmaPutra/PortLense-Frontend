import { ApiErrorResponse, ApiSuccessResponse } from "@/types/api-response.type"
import { Port } from "@/types/port.type"

export const getUsedPorts = async (): Promise<
  ApiSuccessResponse<Port[]> | ApiErrorResponse
> => {
  try {
    const res = await fetch(
      `http://localhost:${process.env.BACKEND_PORT}/ports`
    )

    return await res.json()
  } catch (error) {
    console.error("Failed to fetch used ports:", error)

    return {
      success: false,
      message: "Unexpected Error Occurred while fetching active ports",
      data: null,
    }
  }
}
