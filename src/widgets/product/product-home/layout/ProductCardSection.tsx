import type { ReactNode } from 'react'

interface ProductCardSectionProps {
  children: ReactNode
  renderTitle: ReactNode
}

export default function ProductCardSection({
  children,
  renderTitle,
}: ProductCardSectionProps) {
  return (
    <section>
      <p className="ml-[10px] mb-[10px] text-[24px] tablet:text-[20px] mobile:text-[16px] text-white">
        {renderTitle}
      </p>
      {children}
    </section>
  )
}
