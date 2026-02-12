/**
 * Wrap do componente header.
 * Recebe a propriedade children para os elementos do header.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Elementos filhos do header 
 * @returns {JSX.Element} Container do header.
 */

export function Root({children}:{children: React.ReactNode}){
  return(
    <div 
      data-testid="header"
      className="bg-header-bg py-4 w-full "
      >
        {children}
    </div>
  )

}   