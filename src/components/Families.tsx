'use client'

import { useState } from 'react'
import { Family, getFamilies } from '@/services/families'
import { FamilyCard } from './FamilyCard'
import InfiniteScroll from 'react-infinite-scroll-component'

export function Families({ data }: { data: Family[] }) {
  const [families, setFamilies] = useState<Family[]>(data)
  const [hasMore, setHasMore] = useState(true)

  async function getMoreFamilies() {
    const newFamilies = await getFamilies(families.length, 14)
    setFamilies((families) => [...families, ...newFamilies])

    if (families.length === families.length + newFamilies.length) {
      setHasMore(false)
    }
  }

  return (
    <InfiniteScroll
      dataLength={families.length}
      next={getMoreFamilies}
      hasMore={hasMore}
      loader={<h3>Loading...</h3>}
      endMessage={<h4>Você chegou ao final dos resultados ;D</h4>}
      className="my-4 grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-7"
    >
      {families.map((family) => (
        <FamilyCard key={family.id} data={family} />
      ))}
    </InfiniteScroll>
  )
}
