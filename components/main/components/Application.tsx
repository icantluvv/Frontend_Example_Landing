"use client"

import { useState } from "react"
import Image from "next/image"
import map from "@/public/map.svg"

type InputFieldProps = {
  placeholder: string
  className?: string
}

const InputField = ({ placeholder, className = "" }: InputFieldProps) => {
  const [value, setValue] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const isActive = isFocused || value.length > 0

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-1.5 py-3 border-b border-PrimaryBlack/25 focus:outline-none ${className}`}
      />
      <label
        className={`
          absolute z-[-1] left-0
          transition-all duration-200
          ${
            isActive
              ? "top-[-0.7rem] text-[0.75rem] text-PrimaryBlack"
              : "top-3 text-[1rem] text-PrimaryBlack/50"
          }
        `}
      >
        {placeholder}
      </label>
    </div>
  )
}

const Application = () => {
  return (
    <section id="connect" className="lg:rounded-[75px] scroll-mt-[100px]">
      <div className="relative flex justify-end w-full lg:h-[720px] px-[24px] py-[48px] lg:p-[48px] lg:rounded-[35px] lg:shadow-md ">
        <Image
          src={map}
          alt="map"
          fill
          className="xl:rounded-[35px] object-cover"
        />

        <form
          className="flex flex-col w-full xl:w-[50vw] h-full justify-between gap-[24px] p-[24px] lg:p-[48px] 
        bg-white rounded-[25px] lg:rounded-[35px] z-[1000]"
        >
          <div className="flex flex-col gap-3">
            <h3 className="text-[1.5rem] lg:text-[2.5rem] font-semibold">
              Оставьте заявку!
            </h3>
            <p className="text-[1rem] lg:text-[1.5rem]">
              Мы с вами свяжемся для продолжения регистрации
            </p>
          </div>

          <div className="flex gap-3">
            <InputField placeholder="Телефон" className="flex-1" />
            <InputField placeholder="Почта" className="flex-1" />
          </div>

          <div className="flex flex-col gap-9">
            <InputField placeholder="ФИО" />
            <InputField placeholder="ИНН Организации" />
          </div>

          <button
            className="w-full p-[20px] lg:p-[24px] text-[1.125rem] font-semibold text-WhiteText bg-PrimaryBlack 
          rounded-[48px] active:bg-PrimaryBlack/75 transition-colors"
          >
            Отправить
          </button>
        </form>
      </div>
    </section>
  )
}

export default Application
