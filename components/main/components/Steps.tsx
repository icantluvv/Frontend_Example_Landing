import React from "react"
import like from "@/public/like.png"
import Image from "next/image"
import trend from "@/public/trend.svg"

const steps = [
  {
    title: "Регистрация",
    description: "Оставьте заявку, и мы свяжемся с вами"
  },
  {
    title: "Создание профиля",
    description: "Оформите свой уникальный профиль"
  },
  {
    title: "Первый Голс!",
    description: "Придумайте задание или вызов своему посетителю"
  }
]

const Steps = () => {
  return (
    <section
      id="steps"
      className="flex w-full gap-[24px] flex-row py-2 overflow-x-auto no-scrollbar no-scrollbar px-[4vw] xl:px-0"
    >
      <div className="flex-1">
        <div
          className="w-full h-full bg-Purple rounded-[25px] lg:rounded-[35px] flex flex-col gap-y-[24px] p-[24px] lg:p-[48px] 
        min-w-[300px] md:min-w-[400px] xl:min-w-auto shadow-md"
        >
          <div className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] rounded-[50%] border-3 md:border-4 border-white flex justify-center items-center">
            <Image
              src={like}
              alt={"like"}
              objectFit="cover"
              className="scale-75 lg:scale-100"
            ></Image>
          </div>
          <h2 className="text-white text-[1.75rem] md:text-[2.75rem] lg:text-[3.25rem] font-semibold select-none">
            Всего несколько шагов до старта!
          </h2>
        </div>
      </div>

      <div className="flex-2 flex xl:flex-wrap gap-[24px]">
        {steps.map((step, index) => (
          <div
            key={index}
            className="w-full lg:w-[calc(50%-12px)] bg-darkBlue/5 lg:rounded-[35px] rounded-[25px] p-[24px] lg:p-[48px] flex flex-col 
            gap-y-[24px] lg:gap-y-[48px] min-w-[300px] md:min-w-[400px] xl:min-w-auto"
          >
            <div className="md:w-[70px] md:h-[70px] w-[55px] h-[55px] rounded-full md:border-4 border-3 border-darkBlue flex justify-center items-center">
              <span className="text-darkBlue md:text-[2rem] text-[1.5rem] select-none">
                {index + 1}
              </span>
            </div>

            <div className="flex flex-col gap-y-[12px]">
              <span className="md:text-[2rem] text-[1.5rem] text-PrimaryBlack font-semibold select-none">
                {step.title}
              </span>
              <p className="md:text-[1.5rem] text-[1rem] text-PrimaryBlack select-none">
                {step.description}
              </p>
            </div>
          </div>
        ))}

        <div
          className="w-full lg:w-[calc(50%-12px)] bg-darkBlue rounded-[25px] lg:rounded-[35px] p-[24px] lg:p-[48px] flex flex-col 
        justify-between gap-y-[96px] lg:gap-y-[48px] relative min-w-[300px] md:min-w-[400px] xl:min-w-auto overflow-hidden"
        >
          <Image
            src={trend}
            alt={"trend"}
            className="absolute bottom-0 right-[48px]"
          ></Image>

          <span className="text-[1.5rem] md:text-[2rem] text-white font-semibold select-none">
            Анализируйте результат
          </span>

          <div className="z-[10] w-full">
            <button
              className="inline-flex bg-branGreen px-[32px] md:px-[48px] py-[20px] md:py-[24px] rounded-[48px] cursor-pointer 
            active:bg-GreebActive"
            >
              <span className="text-[1rem] md:text-[1.25rem] font-semibold text-PrimaryBlack select-none">
                Подключить
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps
