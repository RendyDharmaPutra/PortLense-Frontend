export const PortFooter = ({ portLength }: { portLength: number }) => {
  return (
    <footer className="flex items-center border-t bg-accent px-3 py-2 font-mono text-sm">
      <p>Showing {portLength} active ports</p>
    </footer>
  )
}
