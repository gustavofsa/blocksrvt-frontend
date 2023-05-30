export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="px-52 py-7 shadow-md">
        <h1 className="text-2xl font-bold leading-tight">Catálogo</h1>
        <div className="h-1 w-8 rounded-sm bg-gradient-to-r from-[#A11CF3] from-0% to-[#D835C5] to-100%" />
      </div>
      <div className="px-52 py-7">
        <h2 className="text-xl font-semibold leading-tight">Resultados</h2>
        <div>{/* Grid */}</div>
      </div>
    </main>
  )
}
