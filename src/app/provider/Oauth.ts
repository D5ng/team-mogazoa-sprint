export const googleSignIn = () => {
  window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI_SIGN_IN}&response_type=code&scope=${encodeURIComponent(
    'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
  )}`
}

export const kakaoSignIn = () => {
  window.Kakao.Auth.authorize({
    redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI_SIGN_IN!,
  })
}
