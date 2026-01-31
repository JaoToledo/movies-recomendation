export function HeaderSearchWrapper({ children }: {children: React.ReactNode} ) {
  return (
    <div className="flex mx-auto w-full max-w-[556px]  ">
      {children}
    </div>
  )
}