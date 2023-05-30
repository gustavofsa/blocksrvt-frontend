import Image from 'next/image'

import BlocksrvtLogo from '../assets/logo-blocksrvt.svg'

export function Header() {
  return (
    <div className="align-center flex justify-center border-b border-b-[#A11CF3] py-2 md:mt-16">
      <Image
        src={BlocksrvtLogo}
        height={54}
        width={146}
        alt="Logo Blocks Revit"
      />
    </div>
  )
}
