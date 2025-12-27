"use client"

/**
 * Input exclusivo do header.
 * @returns {JSX.Element} Campo de input customizado.
 */

export function Input({ onSubmit, onValueChange, value}:  {
      value:string, 
      onValueChange: (value:string) => void, 
      onSubmit: VoidFunction  
      }) {
     return (  
      <input
        className="
        bg-white/95 rounded-l-[20px] h-8 flex-1 outline-0 px-5 max-w-[556px]  shadow-[inset_0_0_10px_rgba(0,0,0,0.40)]  "

        value={value} 
        onChange={(e) => onValueChange(e.target.value)}
        onKeyDown={(e) => {
          if(e.key === 'Enter'){
            onSubmit()
          }
        }}
      />
      )
} 