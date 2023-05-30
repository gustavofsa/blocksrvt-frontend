import { FamilyCard } from '@/components/FamilyCard'

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="px-[18%] py-7 shadow-md">
        <h1 className="text-2xl font-bold leading-tight">Catálogo</h1>
        <div className="h-1 w-8 rounded-sm bg-gradient-to-r from-[#A11CF3] from-0% to-[#D835C5] to-100%" />
      </div>
      <div className="px-[18%] py-7">
        <h2 className="text-xl font-semibold leading-tight">Resultados</h2>
        <div className="my-4 grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-7">
          {/* Grid */}
          <FamilyCard />
          <FamilyCard />
          <FamilyCard />
          <FamilyCard />
          <FamilyCard />
          <FamilyCard />
          <FamilyCard />
        </div>
      </div>
    </main>
  )
}
