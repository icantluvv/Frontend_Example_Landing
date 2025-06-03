import { useMobileHeaderStore } from "@/store/mobileHeaderStore"
import Image from "next/image"

import header_logo from "@/public/header/header_logo.svg"
import MobileNavigation from "./MobileNavigation"

const MobileHeader = ({ navLinks, baseButtonStyles }: MobileHeaderProps) => {
  const openHeader = useMobileHeaderStore((state) => state.openHeader)
  const setOpenHeader = useMobileHeaderStore((state) => state.setOpenHeader)

  return (
    <>
      <header
        className={`h-[64px] fixed left-0 top-0 w-full z-[9000] px-[4vw] flex ${baseButtonStyles} justify-between items-center lg:hidden`}
      >
        <Image
          src={header_logo}
          alt={"header_logo"}
          className="h-[44px] w-auto"
        ></Image>
        <button
          onClick={() => setOpenHeader()}
          className="w-[54px] h-[54px] flex flex-col items-center justify-center gap-[8px] relative"
        >
          <div
            className={`w-[22px] absolute h-[1.5px] transition-all bg-PrimaryBlack ${
              openHeader ? "rotate-45" : "mt-[-10px]"
            }`}
          />
          <div
            className={`w-[22px] absolute h-[1.5px] transition-all bg-PrimaryBlack ${
              openHeader ? "rotate-[-45deg]" : "mt-[10px]"
            }`}
          />
        </button>
      </header>
      <MobileNavigation navLinks={navLinks} />
    </>
  )
}

export default MobileHeader

interface MobileHeaderProps {
  navLinks: { id: string; label: string }[]
  baseButtonStyles: string
}
