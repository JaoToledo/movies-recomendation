/**
 * 
 * Content do Header 
 * Define o alinhamento e a largura total
 * 
 * @returns 
 */

export function HeaderContent({ children }: {children: React.ReactNode} ) {
  return (
    <div className="flex items-center w-full max-w-[1000px] mx-auto  " > 
      {children}
    </div>
  )
}