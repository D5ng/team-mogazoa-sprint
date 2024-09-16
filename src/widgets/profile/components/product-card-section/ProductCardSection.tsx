import { useState } from 'react'

const ReviewedProducts = () => <div>리뷰 남긴 상품 컴포넌트</div>
const RegisteredProducts = () => <div>등록한 상품 컴포넌트</div>
const WishlistedProducts = () => <div>찜한 상품 컴포넌트</div>

export default function ProductCardSection() {
  const [activeSection, setActiveSection] = useState('reviewed')

  const sections = [
    { id: 'reviewed', title: '리뷰 남긴 상품', component: ReviewedProducts },
    { id: 'registered', title: '등록한 상품', component: RegisteredProducts },
    { id: 'wishlisted', title: '찜한 상품', component: WishlistedProducts },
  ]

  const ActiveComponent =
    sections.find((section) => section.id === activeSection)?.component ||
    ReviewedProducts

  return (
    <section className="flex flex-col gap-4">
      <div className="flex gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-4 py-2 rounded ${
              activeSection === section.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      <ActiveComponent />
    </section>
  )
}
