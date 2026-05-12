export type ApiResponse<T = null> = {
  success: boolean
  message: string
  data: T
}

export type ApiSuccessResponse<T> = ApiResponse<T> & {
  success: true
  data: T
}

export type ApiErrorResponse = ApiResponse & {
  success: false
}
