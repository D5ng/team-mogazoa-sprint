# Mogazoa
<img src="https://github.com/D5ng/team-mogazoa-sprint/blob/main/public/assets/images/logo.svg" style="width: 400px" />

음악, 식당, 영화, 강의, 여행지, 전자기기, 호텔, 와인, 옷, 앱 등 다양한 분야의 상품을 리뷰하고 비교하는 플랫폼

- 개발 기간: 2024.09.09 - 2024.09.29
- 프로젝트 배포 주소: https://wdj-mogazoa.vercel.app/
- 스토리북 배포 주소: https://66f6dab61d3f9b08b3e8e893-cvinockmrn.chromatic.com

## Teams

<table>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/D5ng">
          <img src="https://avatars.githubusercontent.com/u/121039744?v=4" width="150px" height="15%" style="max-width: 100%;">
        </a>
      </td>
      <td>
        <a href="https://github.com/parkwoohyeok">
          <img src="https://avatars.githubusercontent.com/u/155030236?v=4" width="150px" height="15%" style="max-width: 100%;">
        </a>
      </td>
      <td>
        <a href="https://github.com/JaeBeen95">
          <img src="https://avatars.githubusercontent.com/u/108844881?v=4" width="150px" height="15%" style="max-width: 100%;">
        </a>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://github.com/parkwoohyeok">
          FE 이동현
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/parkwoohyeok">
          FE 박우혁
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/parkwoohyeok">
          FE 이재빈
        </a>
      </td>
    </tr>
  </tbody>
</table>

### Stacks

![image](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![image](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![Static Badge](https://img.shields.io/badge/MSW-%23FF6A33?style=for-the-badge&logo=mockserviceworker&logoColor=white)
![image](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

## R&R

#### 이동현
- 페이지: 상품 디테일 페이지, 카카오 로그인
- 공통 컴포넌트: Dropdown, Modal, Button

#### 이재빈
- 페이지: 로그인, 회원가입, 구글 로그인, 내 프로필, 유저 프로필
- 공통 컴포넌트: 전반적인 Input(업로드, 자동완성 등)

### 박우혁
- 페이지: 메인, 비교하기
- 공통 컴포넌트: 사이드 메뉴, 랭킹


## 우리는 이런 생각을 가지고 만들었어요

#### FSD 아키텍쳐 (Feature Sliced Design)

프로젝트의 규모가 크지는 않지만 각 역할을 명확하게 하기위해 FSD 아키텍쳐를 선택했습니다. 저희 프로젝트에서는 `App`, `Pages`, `Widgets`, `Shared` 총 4개의 레이어를 사용해 관리하였고, 각 슬라이스에는 해당 기능과 관련된 코드들이 들어가 있습니다. 세그먼트에는 `components`, `hooks`, `constants`, `utils`등이 포함되어있고 API같은 경우엔 하나의 기능에서만 사용하지 않아 Shared에 API 세그먼트를 분리해 작성하였고, Tanstack Query에 query, mutate는 Hooks 세그먼트에 분리하였습니다. 각 폴더마다 `index.ts`를 만들어 `Barrel Pattern`을 사용해 import문이 길어지는것을 최소화 하도록 하였습니다.
(Compound Pattern을 사용할 때에는 사용하지 않는 코드들이 한번에 import되는 문제가 있어 이름을 각각 정의해 내보내도록 하였습니다.)

#### 컴포넌트 개발

- 재사용성을 높이기 위해 관심사를 분리하고 가독성을 향상시키기 위해 Compound Pattern을 적극적으로 활용했습니다.
- UI 테스트 도구인 Storybook을 활용하여 수동으로 UI 테스트를 진행했습니다. 예를 들어, 드롭다운의 경우 텍스트가 길어질 때나 항목이 많아질 때의 동작을 확인했습니다.
- 데이터가 필요한 컴포넌트는 Mock Service Worker(MSW)를 사용해 실제 환경과 유사한 테스트를 진행하여, 안정적인 개발을 할 수 있었습니다.

#### UX

디자인 시안에 없지만 UX적으로 문제가 될 수 있는 부분을 미리 대비했습니다.
- 로딩 상태는 Suspense를 사용하여 스켈레톤 UI를 보여주도록 했습니다.
- 오류 상태는 ErrorBoundary를 활용해 사용자에게 오류를 인지시키고, 다시 시도할 수 있도록 버튼을 제공하여 사용자 경험을 개선했습니다.
- 인증이 안된 유저가 특정 기능에 접근하려고 할 때 토스트 메세지로 로그인할 수 있도록 유도

#### Tanstack Query

- 쿼리 키를 중앙 집중식으로 관리하여 일관성 유지
- 찜, 좋아요, 팔로우 등 낙관적 업데이트를 사용해 UX 개선

#### SSR

이 프로젝트는 로그인 없이도 검색이 가능하고, 검색을 통한 유입을 고려해야 했기 때문에 SSR을 사용하여 완성된 페이지를 제공하도록 하였고, `Next-SEO`를 사용해 Meta태그들을 등록하고 사이트맵 제공.

#### 기타

- 검색 시 Debounce 처리를 사용해 HTTP 요청 최소화
- middleware를 사용해 로그인 여부에 따라 접근할 수 있는 페이지와 접근할 수 없는 페이지를 구분


