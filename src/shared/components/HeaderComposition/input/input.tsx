"use client"

import { InputProps } from "./types"

/**
 * Input exclusivo do header.
 * @returns {JSX.Element} Campo de input customizado.
 */

export function Input({ onSubmit, onValueChange, value}: InputProps){
  return (  
    <input
      className="
      bg-white/95 rounded-l-[20px] h-8 flex-1 outline-0 px-5 w-full
        shadow-[inset_0_0_10px_rgba(0,0,0,0.40)]"
      placeholder="Pesquisar..."
      value={value} 
      onChange={(e) => onValueChange(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
    />
  );
}

