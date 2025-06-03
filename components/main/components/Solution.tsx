import Image from "next/image"
import analitic from "@/public/solution/analitic.svg"
import loyal from "@/public/solution/loyal.svg"
import marketing from "@/public/solution/marketing.svg"

const solutions = [
  {
    icon: marketing,
    title: "Современный маркетинг",
    text: "Ваши гости становятся инфлюенсерами, а вы предлагаете им условия до первого чека. Никаких лишних инструментов, мы за простоту и эффективность!"
  },
  {
    icon: analitic,
    title: "Удобная аналитика",
    text: "Получайте информацию о предпочтениях гостей, их активности и вовлеченности. Теперь ваш посетитель полностью оцифрован!"
  },
  {
    icon: loyal,
    title: "Прогрессивная лояльность",
    text: "Гости получают персональную скидку в награду за “живые” отзывы, а также различные бонусы при участии в активностях вашего заведения."
  }
]

const Solution = () => (
  <section
    id="forbusiness"
    className="w-full flex flex-col items-center text-center gap-y-[40px] bg-white  scroll-mt-[100px] "
  >
    <div className="flex flex-col items-center gap-y-[24px] px-[4vw] xl:px-0">
      <h2 className="text-[2rem] md:text-[3.5rem] font-bold text-PrimaryBlack">
        Маркетинг, аналитика и лояльность <br /> в одном решении
      </h2>
      <p className="max-w-[85vw] md:max-w-[80vw] text-[1rem] md:text-[1.5rem] text-gray-600">
        Мост между вашим бизнесом и клиентами. Ваши гости – лояльные
        инфлюенсеры. <br />
        Удобная аналитика по предпочтениям и активности. Прогрессивная система
        лояльности с персональными бонусами. Всё просто, прозрачно и максимально
        полезно для роста вашего заведения.
      </p>
    </div>

    <div className="flex flex-col xl:flex-row gap-[24px] w-full lg:max-w-[60vw] xl:max-w-[1200px] px-[4vw] lg:px-0 no-scrollbar ">
      {solutions.map(({ icon, title, text }, index) => (
        <div
          key={index}
          className="flex-1 p-6 bg-white rounded-2xl border md:min-h-[200px] lg:min-w-[400px] xl:min-w-[300px] border-[#eaeaea] text-left flex flex-col items-center lg:items-start"
        >
          <div className="flex items-center gap-[2px] mb-3">
            <Image
              src={icon}
              alt={title}
              className="w-[32px] h-[32px] md:w-[48px] md:h-[48px]"
            />
            <h3 className="font-semibold md:text-[1rem]">{title}</h3>
          </div>
          <p className="text-[1rem] text-center lg:text-start md:max-w-[60vw] lg:max-w-auto text-gray-600">
            {text}
          </p>
        </div>
      ))}
    </div>
  </section>
)

export default Solution
