import { PropsWithChildren } from 'react'

interface ProfileLayoutProps extends PropsWithChildren {
  title: string
}

export default function ProfileLayout({ title, children }: ProfileLayoutProps) {
  return (
    <section className="text-xl font-normal flex flex-col gap-y-[30px] text-white">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-white tablet:text-base mobile:text-lg">
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}
