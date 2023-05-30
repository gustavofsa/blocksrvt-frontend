import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export function FamilyCard() {
  return (
    <div className="rounded-lg border border-gray-300">
      <Image
        className="rounded-lg"
        src="https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/0032a1b5-8b30-4e10-a27c-3bd818d2f376.jpg"
        width="176"
        height="198"
        alt=""
      />
      {/* <div className="h-[149px] w-[92px] bg-[url('https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/0032a1b5-8b30-4e10-a27c-3bd818d2f376.jpg')] bg-cover"></div> */}
      <div className="flex gap-6 border-t border-gray-300 p-2">
        <p className="h-8 w-20 overflow-hidden text-ellipsis leading-tight">
          Lorem Ipsum is sLorem Ipsum is simply ....
        </p>
        <div className="flex justify-center gap-2">
          <div className="h-4 w-px bg-gray-300" />
          <a className="cursor-pointer">
            <ArrowUpRight color="#474747" size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}
