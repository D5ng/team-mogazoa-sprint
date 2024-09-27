import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

interface ProductDetailLayoutProps extends PropsWithChildren {
  title: string
  renderDropdown?: JSX.Element
  className?: string
}

export default function ProductDetailLayout({
  title,
  children,
  renderDropdown,
  className,
}: ProductDetailLayoutProps) {
  return (
    <section
      className={twMerge(
        'text-xl font-normal flex flex-col gap-y-[30px] text-white',
        className,
      )}
    >
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
