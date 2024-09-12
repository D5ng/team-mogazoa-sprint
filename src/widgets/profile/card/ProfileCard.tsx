import React from 'react'
import ReviewProfileImage from '@/public/test/review-profile.jpg'
import Image from 'next/image'
import { Button } from '@/src/shared/ui'
import type { UserData } from '@shared/types'

export default function ProfileCard({
  isFollowing,
  followeesCount,
  followersCount,
}: Pick<UserData, 'isFollowing' | 'followeesCount' | 'followersCount'>) {
  return (
    <div className="px-5 py-[30px] bg-black-60 border border-black-70 rounded-xl w-[340px] flex flex-col items-center">
      <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden">
        <Image
          src={ReviewProfileImage}
          alt="프로필 이미지"
          fill
          className="object-cover object-center"
        />
      </div>
      <h2 className="text-2xl font-semibold pt-5 pb-10 text-white">
        surisuri마수리
      </h2>
      <p className="text-base text-black-30">
        세상에 리뷰 못할 제품은 없다. surisuri마수리와 함께라면 당신도
        프로쇼핑러! 안녕하세요, 별점의 화신 surisuri마수리입니다!
      </p>
      <div className="py-10 flex justify-center">
        <div className="flex gap-x-[100px] relative">
          <div className="flex flex-col justify-center items-center after:content-[''] after:w-[1px] after:h-[50px] after:bg-black-70 after:absolute after:right-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2">
            <span className="text-xl font-semibold text-white">762</span>
            <span className="text-base text-black-20">팔로워</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-xl font-semibold text-white">
              {followersCount}
            </span>
            <span className="text-base text-black-20">{followeesCount}</span>
          </div>
        </div>
      </div>
      {isFollowing ? (
        <Button variant="tertiary">팔로우 취소</Button>
      ) : (
        <Button variant="primary">팔로우</Button>
      )}
    </div>
  )
}

/**
 * ! 내 프로필 이라면 /my-profile
 * ! 유저 프로필이라면 /profile/userId
 */
