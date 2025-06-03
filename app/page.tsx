import Footer from "@/components/footer/Footer"
import Header from "@/components/header/Header"
import Main from "@/components/main/Main"

export default function LandingPage() {
  return (
    <div className="flex items-center bg-white flex-col lg:gap-y-[40px]">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
