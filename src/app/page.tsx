import { getFamilies } from '@/services/families'
import { Families } from '@/components/Families'

export default async function Home() {
  const loadedFamilies = await getFamilies(0, 21)

  return (
    <main className="flex flex-1 flex-col">
      <div className="px-[18%] py-7 shadow-md">
        <h1 className="text-2xl font-bold leading-tight">Catálogo</h1>
        <div className="h-1 w-8 rounded-sm bg-gradient-to-r from-[#A11CF3] from-0% to-[#D835C5] to-100%" />
      </div>
      <div className="px-[18%] py-7">
        <h2 className="text-xl font-semibold leading-tight">Resultados</h2>
        <Families data={loadedFamilies} />
      </div>
    </main>
  )
}
