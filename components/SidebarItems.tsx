import React from 'react'
import Link from 'next/link';

interface Props{
    isActive: boolean;
    name: string;
    isSidebarOpen: boolean;
    icon: React.ReactNode;
    toPage: string;
    size?: number;
}

const SidebarItems = ({isActive, isSidebarOpen,name, icon, toPage, size=32}: Props) => {
    const color = isActive ? "#4D9DE0": "#898989";
    const iconElement = React.cloneElement(icon as React.ReactElement, {size, color });
  

  return (
    <div className="my-4">
      <Link href={`/${toPage}`} className='flex'>
        {iconElement}
        {isSidebarOpen && <span style={{ color }}>{name}</span>}
      </Link>
    </div>
  )
}

export default SidebarItems