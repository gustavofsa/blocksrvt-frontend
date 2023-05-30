import Link from 'next/link'

export function Footer() {
  return (
    <div className="flex flex-col items-start justify-center gap-7 bg-gray-200 px-3.5 py-6 md:flex-row md:items-center">
      <Link href="/">Sobre nós</Link>
      <Link href="/">FAQ</Link>
      <Link href="/">Termos de uso</Link>
      <Link href="/">Política de privacidade</Link>
    </div>
  )
}
