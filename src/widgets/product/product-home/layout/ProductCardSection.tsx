import type { ReactNode } from 'react'
import CategoryDropDown from '../components/category-menu/CategoryDropDown'

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
      <div className=" flex justify-between mb-[30px] text-[24px] tablet:text-[20px] mobile:text-[16px] text-white">
        {renderTitle}
        <CategoryDropDown />
      </div>
      {children}
    </section>
  )
}
