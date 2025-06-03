"use client"
import Image from "next/image"
import React from "react"
import hide_show from "@/public/hide_show.svg"
import { useAccordionStore } from "@/store/accordionStore"
import big_logo from "@/public/big_logo.svg"

const FAQ = () => {
  return (
    <section
      id="FAQ"
      className="w-full flex flex-col xl:flex-row md:gap-y-[40px] gap-[24px] px-[4vw] xl:px-0 scroll-mt-[100px]"
    >
      <div className="flex flex-col flex-2 gap-y-[12px]">
        <AccordionItem
          id={1}
          question={"У вас остались еще вопросы?"}
          answer={"Это ответ на ваш вопрос"}
        />

        <AccordionItem
          id={2}
          question={"У вас что не остались еще вопросы?"}
          answer={"Остались"}
        />

        <AccordionItem
          id={3}
          question={"А у вас остались или не остались?"}
          answer={"Спасибо"}
        />

        <AccordionItem
          id={4}
          question={"А у вас остались или не остались?"}
          answer={"Спасибо"}
        />
        <AccordionItem
          id={5}
          question={"А у вас остались или не остались?"}
          answer={"Спасибо"}
        />
      </div>
      <AskBox />
    </section>
  )
}

export default FAQ

const AccordionItem = ({
  id,
  question,
  answer
}: {
  id: number
  question: string
  answer: string
}) => {
  const { openAccordion, setOpenAccordion } = useAccordionStore()

  const isOpen = openAccordion === id

  const toggleAccordion = () => {
    setOpenAccordion(isOpen ? null : id)
  }

  return (
    <div
      onClick={toggleAccordion}
      className={`border border-darkBlue/10 rounded-[24px] w-full p-[24px] flex flex-col cursor-pointer  ${
        isOpen ? "gap-y-[24px]" : "gap-y-0"
      } transition-all duration-300`}
    >
      <button className="flex items-center justify-between flex-1 cursor-pointer">
        <p className="font-semibold text-[1rem] md:text-[1.25rem] text-start cursor-pointer">
          {question}
        </p>
        <Image
          src={hide_show}
          alt={"hide_show"}
          className={`${
            isOpen ? "rotate-45" : "rotate-0"
          } transition-transform duration-200 w-[24px] h-[24px] md:w-[32x] md:h-[32px] cursor-pointer`}
        ></Image>
      </button>
      <div
        className={`${
          isOpen ? "h-[20px]" : "h-[0px]"
        } overflow-hidden transition-all`}
      >
        <p className="text-[0.875rem] md:text-[1rem]">{answer}</p>
      </div>
    </div>
  )
}

const AskBox = () => {
  return (
    <div
      className="flex-1 bg-gradient-custom rounded-[25px] lg:rounded-[35px] md:min-h-[320px] xl:min-w-[500px] h-[350px] p-[24px] md:p-[48px]
     flex flex-col justify-between relative gap-[24px] shadow-md"
    >
      <div className="flex flex-col gap-y-[12px] w-[60%] z-[1000]">
        <h4 className="text-[1.25rem] md:text-[1.5rem] text-WhiteText font-semibold select-none">
          Напишите нам!
        </h4>
        <p className="text-WhiteText text-[0.875rem] md:text-[1rem] select-none">
          Вы можете задать свой вопрос нам лично! Отправьте письмо,
          а мы постараемся ответить
        </p>
      </div>

      <div className="w-full z-[1000] flex">
        <button
          className="w-full py-[20px] md:py-[24px] text-[1rem] rounded-[25px] bg-white text-darkBlue font-semibold cursor-pointer 
        active:bg-darkBlue/40 active:text-WhiteText transition-colors select-none"
        >
          Задать вопрос в Goals
        </button>
      </div>

      <Image
        src={big_logo}
        alt={"big_logo"}
        className="absolute w-[110px] h-[110px] md:w-[130px] md:h-[130px] right-[24px] md:right-[48px] top-[12px] md:top-[36px]"
      ></Image>
    </div>
  )
}
