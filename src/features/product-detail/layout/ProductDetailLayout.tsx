import { PropsWithChildren } from 'react'

interface ProductDetailLayoutProps extends PropsWithChildren {
  title: string
  renderDropdown?: JSX.Element
}

export default function ProductDetailLayout({
  title,
  children,
}: ProductDetailLayoutProps) {
  return (
    <section className="text-xl font-normal flex flex-col gap-y-[30px] text-white">
      <h2>{title}</h2>
      {children}
    </section>
  )
}
