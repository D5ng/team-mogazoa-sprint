import useWindowResize from '@/src/shared/hooks/useWindowResize'
import GnbPc from './Gnb-ui-Pc'
import GnbMobile from './Gnb-ui-Mobile'
export default function Gnb() {
  const WINDOW_SIZE = useWindowResize()
  return <>{WINDOW_SIZE > 767 ? <GnbPc /> : <GnbMobile />}</>
}
