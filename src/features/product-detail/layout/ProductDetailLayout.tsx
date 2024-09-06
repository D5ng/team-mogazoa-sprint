import { PropsWithChildren } from 'react'

interface ProductDetailLayoutProps extends PropsWithChildren {
  title: string
  renderDropdown?: JSX.Element
}

export default function ProductDetailLayout({
  title,
  children,
  renderDropdown,
}: ProductDetailLayoutProps) {
  return (
    <section className="text-xl font-normal flex flex-col gap-y-[30px] text-white">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-white tablet:text-base mobile:text-lg">
          {title}
        </h2>
        {renderDropdown && renderDropdown}
      </div>
      {children}
    </section>
  )
}
