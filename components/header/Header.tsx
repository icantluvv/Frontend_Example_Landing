"use client"
import React from "react"
import MobileHeader from "./components/MobileHeader"
import RegularHeader from "./components/RegularHeader"

const baseButtonStyles = "backdrop-blur-md bg-white/30 "
const navLinks = [
  { id: "#about", label: "О нас" },
  { id: "#forbusiness", label: "Бизнесу" },
  { id: "#tariffs", label: "Тарифы" },
  { id: "#FAQ", label: "FAQ" },
  { id: "#connect", label: "Связаться" }
]

const Header = () => {
  return (
    <>
      <RegularHeader navLinks={navLinks} baseButtonStyles={baseButtonStyles} />
      <MobileHeader navLinks={navLinks} baseButtonStyles={baseButtonStyles} />
    </>
  )
}

export default Header
