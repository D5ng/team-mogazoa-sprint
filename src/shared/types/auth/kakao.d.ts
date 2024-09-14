interface KakaoAuthStatic {
  authorize: (settings: { redirectUri: string }) => void
  // 필요한 다른 Auth 관련 메서드들 추가
}

interface KakaoStatic {
  init: (apiKey: string) => void
  Auth: KakaoAuthStatic
  // 필요한 다른 Kakao SDK 메서드들을 여기에 추가
}

declare global {
  interface Window {
    Kakao: KakaoStatic
  }
}

export {}
