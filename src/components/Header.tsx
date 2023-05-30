import Image from 'next/image'

import BlocksrvtLogo from '../assets/logo-blocksrvt.svg'

export function Header() {
  return (
    <div className="align-center flex justify-center border-b border-b-purple-600 py-2">
      <Image
        src={BlocksrvtLogo}
        height={54}
        width={146}
        alt="Logo Blocks Revit"
      />
    </div>
  )
}
