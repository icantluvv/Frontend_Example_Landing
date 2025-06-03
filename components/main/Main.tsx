import FirstSection from "./components/FirstSection"
import Solution from "./components/Solution"
import Steps from "./components/Steps"
import Tariff from "./components/Tariff"
import FAQ from "./components/FAQ"
import Application from "./components/Application"

const Main = () => {
  return (
    <main className="w-full flex flex-col gap-y-[40px] lg:gap-y-[80px]">
      <FirstSection></FirstSection>
      <div className="flex flex-col gap-y-[40px] lg:gap-y-[80px] xl:px-[6.5vw]">
        <Solution></Solution>
        <Steps></Steps>
        <Tariff></Tariff>
        <FAQ></FAQ>
        <Application />
      </div>
    </main>
  )
}

export default Main
