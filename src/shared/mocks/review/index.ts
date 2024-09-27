import { DefaultBodyType, delay, http, HttpResponse, PathParams } from 'msw'
import {
  CreateReviewPayload,
  ProductReviewsResponse,
  UpdateReview,
} from '@shared/types'

export const reviewCreateHandler = http.post<PathParams, CreateReviewPayload>(
  `${process.env.NEXT_PUBLIC_BASE_URL}/reviews`,
  async ({ request }) => {
    const data = await request.json()
    const images = data.images.map((image, index) => ({
      id: index,
      source: image,
    }))

    await delay(1500)
    return HttpResponse.json({
      user: {
        image: 'https://example.com/...',
        nickname: 'string',
        id: 1,
      },
      reviewImages: images,
      productId: 1,
      userId: 1,
      updatedAt: '2024-09-25T09:18:05.936Z',
      createdAt: '2024-09-25T09:18:05.936Z',
      isLiked: false,
      likeCount: 0,
      content: data.content,
      rating: data.rating,
      id: 1,
    })
  },
)

export const fetchReviewHandler = http.get<
  PathParams,
  DefaultBodyType,
  ProductReviewsResponse
>(
  `${process.env.NEXT_PUBLIC_BASE_URL}/products/:productId/reviews`,
  async ({ params }) => {
    return HttpResponse.json({
      nextCursor: 0,
      list: [
        {
          user: {
            image:
              'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591634795000',
            nickname: '에어팟',
            id: 1,
          },
          reviewImages: [
            {
              source:
                'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591634795000',
              id: 1,
            },
          ],
          productId: 1,
          userId: 1,
          updatedAt: '2024-09-25T16:16:55.012Z',
          createdAt: '2024-09-25T16:16:55.012Z',
          isLiked: true,
          likeCount: 0,
          content:
            '에어팟 프로는 노이즈 캔슬링이 진짜 좋아서 음악에 완전 몰입할 수 있어요. 착용감도 편하고 음질도 깔끔해서 일상에서 쓰기 딱이에요! \n - ChatGPT의 친근한 말투',
          rating: 5,
          id: 1,
        },
      ],
    })
  },
)

export const reviewUpdateHandler = http.patch<PathParams, UpdateReview>(
  `${process.env.NEXT_PUBLIC_BASE_URL}/reviews/:reviewId`,
  async ({ request }) => {
    const data = await request.json()
    const existingImage = data.images.map((image, index) => ({
      id: index,
      source: image.url,
    }))

    const images = data.images.map((image, index) =>
      existingImage[index]?.source === image.url
        ? { id: existingImage[index].id }
        : { source: image.url },
    ) as []

    await delay(1500)
    return HttpResponse.json({
      reviewId: 1,
      content: data.content,
      rating: data.rating,
      images,
    })
  },
)

export const fetchReviewsHandler = http.get<
  PathParams,
  DefaultBodyType,
  ProductReviewsResponse
>(
  `${process.env.NEXT_PUBLIC_BASE_URL}/products/:productId/reviews`,
  async ({ params }) => {
    return HttpResponse.json({
      nextCursor: 0,
      list: [
        {
          user: {
            image:
              'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591634795000',
            nickname: '에어팟',
            id: 1,
          },
          reviewImages: [
            {
              source:
                'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591634795000',
              id: 1,
            },
          ],
          productId: 1,
          userId: 1,
          updatedAt: '2024-09-25T16:16:55.012Z',
          createdAt: '2024-09-25T16:16:55.012Z',
          isLiked: true,
          likeCount: 10,
          content:
            '에어팟 프로는 노이즈 캔슬링이 진짜 좋아서 음악에 완전 몰입할 수 있어요. 착용감도 편하고 음질도 깔끔해서 일상에서 쓰기 딱이에요! \n - ChatGPT의 친근한 말투',
          rating: 5,
          id: 1,
        },
        {
          user: {
            image:
              'https://www.apple.com/kr/iphone-16-pro/a/images/overview/product-stories/design/display__f5509jfp9nyq_xlarge.jpg',
            nickname: '아이폰',
            id: 2,
          },
          reviewImages: [
            {
              source:
                'https://www.apple.com/kr/iphone-16-pro/a/images/overview/product-stories/design/display__f5509jfp9nyq_xlarge.jpg',
              id: 20,
            },
            {
              source:
                'https://www.apple.com/kr/iphone-16-pro/a/images/overview/product-stories/design/thin__eqeewfn1mgsy_xlarge_2x.jpg',
              id: 21,
            },
          ],
          productId: 2,
          userId: 2,
          updatedAt: '2024-09-25T16:16:55.012Z',
          createdAt: '2024-09-25T16:16:55.012Z',
          isLiked: false,
          likeCount: 0,
          content:
            '아이폰은 정말 매일 쓰면서 감탄하게 되는 제품이에요! 디자인은 말할 것도 없고, 매번 손에 딱 맞는 느낌이 들어요. 화면도 너무 선명해서 영상 보거나 사진 찍을 때 정말 기분이 좋아져요. 특히 카메라 성능이 좋아서 그냥 막 찍어도 예쁜 사진이 나오는 게 진짜 대박! 🥰 그리고 앱 실행 속도도 빠르고, 여러 작업을 동시에 해도 버벅임이 없어서 스트레스가 전혀 없어요. 페이스 ID로 잠금 해제할 때마다 뭔가 미래를 살고 있는 기분? 😎 배터리도 오래가서 하루 종일 써도 불편함 없고요. 아이폰의 iOS 업데이트도 늘 깔끔하고 새로워서, 쓰면 쓸수록 더 좋아지는 것 같아요! 정말 일상 속에서 없어선 안 될 친구 같은 느낌이에요~ 📱💫',
          rating: 5,
          id: 2,
        },
        {
          user: {
            image:
              'https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_pro__6bgrkek0jnm2_xlarge.png',
            nickname: '아이패드',
            id: 3,
          },
          reviewImages: [
            {
              source:
                'https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_pro__6bgrkek0jnm2_xlarge.png',
              id: 30,
            },
            {
              source:
                'https://www.apple.com/v/ipad-pro/aq/images/overview/closer-look/space-black/slide_1A__cxvssgdj2v6u_large_2x.jpg',
              id: 31,
            },
            {
              source:
                'https://www.apple.com/v/ipad-pro/aq/images/overview/closer-look/space-black/slide_1B__dgpmmatbtrwy_large_2x.jpg',
              id: 32,
            },
          ],

          productId: 3,
          userId: 3,
          updatedAt: '2024-09-25T16:16:55.012Z',
          createdAt: '2024-09-25T16:16:55.012Z',
          isLiked: true,
          likeCount: 999,
          content:
            '아이패드는 진짜 만능 친구 같아요! 😍 화면이 커서 영상 보거나 책 읽을 때 몰입감이 최고예요. 특히 넷플릭스나 유튜브 볼 때 선명하고 생생한 화면이 너무 좋아요. 그리고 아이패드로 그림 그리는 사람들 많잖아요? 저도 따라해봤는데 애플 펜슬이랑 찰떡궁합이라 뭔가 제가 아티스트가 된 기분이랄까요? ✏️🎨 공부할 때도 완전 유용해요! 필기 앱으로 노트 정리하는데, 종이 대신 바로바로 수정할 수 있고 자료 찾을 때도 너무 편해서 생산성도 쭉쭉 올라가는 느낌이에요. 또 아이패드만 있으면 외출할 때 노트북 대신 가볍게 챙겨 나갈 수 있는 것도 큰 장점! 💼📚 배터리도 오래가고, 앱 실행도 빠르고 부드러워서 멀티태스킹할 때 완전 편리해요. 게임도 잘 돌아가고, 음악 들으면서 웹 서핑하거나 영상 편집할 때도 문제없어요. 아이패드는 그냥 어디서든 나만의 작은 오피스이자 창작 스튜디오예요! 📱💫',
          rating: 3,
          id: 3,
        },
      ],
    })
  },
)
