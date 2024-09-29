import { Categories } from '@/src/shared/ui'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { PropsWithChildren, ReactNode } from 'react'

interface CategoryItemProps {
  children: ReactNode
  onSelectedCategory: (category: Categories) => void
  selectedCategory: boolean
  category: Categories
}

export default function CategoryItem({
  children,
  onSelectedCategory,
  selectedCategory,
  category,
}: CategoryItemProps) {
  const router = useRouter()
  const pathname = usePathname()
  const handleUrlChange = (categoryId: number) => {
    router.replace(`${pathname}?category=${categoryId}`)
  }

  const handleClick = () => {
    onSelectedCategory(category)
    handleUrlChange(category.id)
  }

  return (
    <li className="w-full">
      <button
        className={`flex w-[200px] tablet:w-[180px] h-[50px] tablet:h-[45px] items-center cursor-pointer px-[20px] py-[15px] text-[16px] tablet:text-[14px] text-black-20 hover:text-white hover:border hover:border-black-30 hover:bg-black-20 rounded-md hover:bg-opacity-10 ${
          selectedCategory
            ? 'text-white border-black-30 bg-black-20 bg-opacity-10'
            : ''
        }`}
        onClick={handleClick}
      >
        {children}
      </button>
    </li>
  )
}
