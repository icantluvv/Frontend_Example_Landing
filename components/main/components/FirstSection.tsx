import Image from "next/image"
import dark_arrow from "@/public/dark_arrow.svg"
import goals from "@/public/first/GOALS.svg"
import screen from "@/public/first/screen.png"

const FirstSection = () => {
  return (
    <section
      id="about"
      className="bg-gradient-custom w-full min-h-[50svh]  xl:min-h-[100svh] relative overflow-hidden flex justify-center
       md:px-[6.5vw] scroll-mt-[100px] pt-[64px]"
    >
      <div
        className="w-[700px] h-[700px] md:w-[1200px] md:h-[1200px] 
      xl:w-[2000px] xl:h-[2000px] rounded-[50%] left-[-70vw] top-[-75vh] absolute bg-[#4A69A3]/76 blur-[100px] move-slow"
      ></div>
      <div
        className="w-[500px] h-[500px] md:w-[1000px] md:h-[1000px] 
      xl:w-[1560px] xl:h-[1560px] rounded-[50%] lg:left-[30vw] lg:top-[-100vh] absolute bg-[#627DB1]/46 blur-[100px] lg:move-medium"
      ></div>
      <div
        className="w-[500px] h-[500px] md:w-[750px] md:h-[750px] 
      xl:w-[1283px] xl:h-[1283px] rounded-[50%] left-[calc(70%-641px)] top-[-50vh] absolute bg-[#8EA8DB]/40 blur-[100px] move-fast"
      ></div>

      <Image
        src={goals}
        alt={"goals"}
        className="absolute bottom-0 w-[130vw] xl:w-[100vw] max-w-none hidden xl:flex object-contain"
      />

      <Image
        className="absolute w-[70vw] lg:w-[20vw] z-[990] bottom-0 hidden xl:flex"
        src={screen}
        alt={"screen"}
      ></Image>

      <div className="z-[10] flex flex-col gap-y-[24px] px-[3vw] xl:px-0 py-[100px] lg:py-[10vh] items-center justify-between md:justify-start">
        <div className="w-full flex flex-col items-center gap-y-[24px]">
          <h1 className="text-[3.5rem] leading-18 xl:text-[5rem] font-bold text-WhiteText text-center ">
            Goals <br /> система лояльности
          </h1>
          <p className="text-[1.25rem] hidden md:flex leading-7 lg:text-[1.5rem] lg:leading-8 text-center w-[80vw] xl:w-[60vw] text-WhiteText">
            Ваши клиенты уже рассказывают о заведениях — пора управлять этим
            и извлекать выгоду!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <a
            href="#connect"
            className="p-[18px] rounded-[48px] flex items-center justify-center gap-x-[10px] 
            font-semibold cursor-pointer text-white bg-darkBlue
          active:bg-darkBlue/75 transition-colors"
          >
            <span>Подключить</span>
          </a>
          <a
            href="#forbusiness"
            className="p-[18px] rounded-[48px] flex gap-x-[12px] bg-white text-darkBlue font-semibold cursor-pointer
          active:bg-white/75 transition-colors"
          >
            <span>Как это работает?</span>
            <Image width={24} height={24} src={dark_arrow} alt="arrow"></Image>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FirstSection
