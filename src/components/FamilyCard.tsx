import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Family } from '@/services/families'

interface FamilyCardProps {
  data: Family
}

export function FamilyCard({ data }: FamilyCardProps) {
  const {
    id,
    details: { name, description },
  } = data

  return (
    <div className="rounded-lg border border-gray-300">
      <Image
        className="rounded-lg"
        src={`https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${id}.jpg`}
        width="176"
        height="198"
        alt={name}
      />
      <div className="flex gap-6 border-t border-gray-300 p-2">
        <p className="w-24 overflow-hidden text-ellipsis whitespace-nowrap text-xs font-semibold leading-tight">
          {description}
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
