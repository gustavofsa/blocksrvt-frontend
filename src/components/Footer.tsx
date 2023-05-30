import Link from 'next/link'

export function Footer() {
  return (
    <div className="flex flex-col items-center justify-evenly gap-7 bg-gray-200 py-6 md:flex-row">
      <Link href="/">Sobre nós</Link>
      <Link href="/">FAQ</Link>
      <Link href="/">Termos de uso</Link>
      <Link href="/">Política de privacidade</Link>
    </div>
  )
}
