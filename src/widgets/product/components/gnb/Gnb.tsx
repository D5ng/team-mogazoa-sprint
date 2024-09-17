import useWindowResize from '@/src/shared/hooks/useWindowResize'
import GnbPc from './GnbItemPc'
import GnbMobile from './GnbItemMobile'
export default function Gnb() {
  const WINDOW_SIZE = useWindowResize()
  return <>{WINDOW_SIZE > 767 ? <GnbPc /> : <GnbMobile />} </>
}
