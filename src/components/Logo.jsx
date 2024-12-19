import Image from 'next/image'
import DarkLogo from '@/images/esy-logos/logo-files/for-web/png/color-logo-no-bg.png'
import LightLogo from '@/images/esy-logos/logo-files/for-web/png/black-logo-no-bg.png'
import { useTheme } from 'next-themes'
function LogomarkPaths() {
  return (
    <g fill="none" stroke="#38BDF8" strokeLinejoin="round" strokeWidth={3}>
      <path d="M10.308 5L18 17.5 10.308 30 2.615 17.5 10.308 5z" />
      <path d="M18 17.5L10.308 5h15.144l7.933 12.5M18 17.5h15.385L25.452 30H10.308L18 17.5z" />
    </g>
  )
}

export function Logomark(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" {...props}>
      <LogomarkPaths />
    </svg>
  )
}

export function Logo(props) {
  const { theme } = useTheme()
  return <Image src={theme === 'dark' ? DarkLogo : LightLogo} alt="Logo" width={227} height={66} {...props} />
}
