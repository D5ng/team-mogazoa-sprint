import Image from 'next/image'
import CategoryChip from '@widgets/product/category-chip/CategoryChip'

interface LogListItemProps {
  title: string
  image?: string
  name: string
  value: any
}

export default function LogListItem({
  title,
  image,
  name,
  value,
}: LogListItemProps) {
  const isCategoryItem = name === 'mostFavoriteCategory'

  return (
    <li className="w-[300px] h-[190px] flex flex-col justify-center items-center gap-y-5 bg-black-60 border border-black-70 rounded-xl tablet:w-full tablet:h-auto tablet:px-11 tablet:py-[30px] tablet:gap-x-[15px] tablet:gap-y-[15px] mobile:p-5">
      <div className="flex flex-col gap-y-5 items-center tablet:gap-y-[15px] mobile:gap-x-[10px]">
        <h3 className="text-lg font-medium text-white whitespace-nowrap tablet:text-base mobile:text-sm">
          {title}
        </h3>
        <div className="flex items-center gap-x-[5px]">
          {image && (
            <Image
              src={image}
              alt={title}
              width={24}
              height={24}
              className="tablet:w-5 tablet:h-5"
            />
          )}
          {isCategoryItem ? (
            <CategoryChip name={value} />
          ) : (
            <span className="text-2xl font-light text-black-20 tablet:text-xl mobile:text-base">
              {value}
            </span>
          )}
        </div>
      </div>
    </li>
  )
}
