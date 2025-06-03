import Link from "next/link"
import header_logo from "@/public/header/header_logo.svg"
import Image from "next/image"

const NotFound = () => {
  return (
    <div className="h-[100svh] bg-gradient-custom flex flex-col items-center relative overflow-hidden">
      {/* <header className="w-full fixed h-[64px] px-[4vw] backdrop-blur-md bg-white/30 flex items-center z-[2000]">
        <Link href={"/"}>
          <Image
            src={header_logo}
            alt={"header_logo"}
            className="h-[44px] w-auto"
          ></Image>
        </Link>
      </header> */}

      <header
        className={`fixed top-0 h-[64px] w-full lg:w-[88vw] lg:rounded-[64px] rounded-0 lg:mt-[24px] px-[4vw] items-center gap-[56px] z-[5000] backdrop-blur-md bg-white/30 `}
      >
        <div className="flex w-full h-full items-center">
          <Link href={"/"}>
            <Image
              src={header_logo}
              className="h-[44px] lg:h-[50px] w-auto"
              alt="logo"
            />
          </Link>
        </div>
      </header>

      <main className="flex items-center justify-center flex-1 ">
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
        <h1 className="text-2xl xl:text-4xl w-[80vw] font-bold text-center text-WhiteText z-[1000]">
          Ошибка 404: Страница не найдена
        </h1>
      </main>
    </div>
  )
}

export default NotFound
