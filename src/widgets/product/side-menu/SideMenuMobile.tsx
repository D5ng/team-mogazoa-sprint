import GnbMenu from '../gnb/Gnb-Menu'
import SideMenu from './SideMenu'

export default function SideMenuMobile() {
  return (
    <div className="w-2/5 fixed  left-0 bg-black-50  z-100">
      <div className="ml-[2vw] py-[2vw] ">
        <GnbMenu />
      </div>
      <div className="h-[1px] bg-black-20" />
      <div className="mt-[10px]">
        <SideMenu />
      </div>
    </div>
  )
}
