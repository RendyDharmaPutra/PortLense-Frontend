"use client"

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Network, RefreshCcwIcon } from "lucide-react"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

export const EmptyPort = () => {
  const router = useRouter()

  return (
    <Empty className="h-full bg-muted/30">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Network />
        </EmptyMedia>
        <EmptyTitle>No Ports</EmptyTitle>
        <EmptyDescription className="max-w-xs text-pretty">
          No active ports detected. Please ensure your target machine is online
          and try refreshing.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" onClick={() => router.refresh()}>
          <RefreshCcwIcon />
          Refresh
        </Button>
      </EmptyContent>
    </Empty>
  )
}
