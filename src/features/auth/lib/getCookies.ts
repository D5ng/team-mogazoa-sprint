export default function getCookies() {
  const cookies = Object.fromEntries(
    document.cookie.split(';').map((cookie) => cookie.trim().split('=')),
  )
  return cookies
}
