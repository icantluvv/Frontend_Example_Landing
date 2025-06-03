"use client"

const tariffs = [
  {
    title: "Базовый",
    price: "5 999₽",
    subtext: "в месяц за 2 заведения",
    description:
      "Для небольших организаций, которые хотят опробовать новый инструмент продвижения",
    features: [
      "Настройка сайта-визитки",
      "Создание голосов",
      "Отзывы клиентов",
      "До 3-х заведений"
    ]
  },
  {
    title: "Продвинутый",
    price: "7 999₽",
    subtext: "в месяц за 3 заведения",
    description:
      "Для организаций, которые хотят получать больше возможностей для настроек и анализа. В пакет входит Базовый тариф, а также:",
    features: [
      "Приложения лояльности",
      "Аналитика",
      "Взаимодействие с клиентами",
      "До 10-ти заведений"
    ]
  },
  {
    title: "Максимальный",
    price: "9 999₽",
    subtext: "в месяц за Х заведений",
    description:
      "Для организаций, стремящихся быстро и качественно привлечь ЦА, получить доступ ко всем возможностям сервиса, использовать платформу на полную мощность. В пакет входит тариф Продвинутый, а также:",
    features: [
      "Усиленная аналитика",
      "Освоение самых новых трендов",
      "Неограниченное количество заведений"
    ]
  }
]

const Tariff = () => {
  return (
    <section
      id="tariffs"
      className="w-full flex flex-col items-center gap-y-[40px] lg:px-0 scroll-mt-[100px]"
    >
      <div className="flex flex-col items-center gap-y-[24px] text-center px-[3vw] xl:px-0">
        <h2 className="text-[2rem] md:text-[3.5rem] font-bold">
          Выберите тариф <br />
          для своего бизнеса
        </h2>
        <p className="max-w-[85vw] xl:max-w-[60vw] text-[1rem] md:text-[1.5rem] text-gray-600">
          Учитывайте количество открытых заведений, текущие задачи и этапы
          развития вашего бизнеса. Выберите тариф, который соответствует вашим
          целям — от базового тестирования инструментов до масштабной работы
          с аудиторией и продвинутой аналитики.
        </p>
      </div>

      <div className="flex gap-[24px] w-full overflow-x-auto xl:overflow-hidden no-scrollbar px-[4vw] xl:px-0">
        {tariffs.map((tariff, i) => (
          <div
            key={i}
            className="flex flex-col min-w-[300px] md:min-w-[450px] max-w-[80vw] xl:min-w-auto md:w-[calc(33.3333%-12px)]
             bg-darkBlue/5 p-[24px] md:p-[48px] rounded-[25px] lg:rounded-[35px] md:min-h-[500px] gap-6 justify-between"
          >
            <div className="flex flex-col gap-[12px] md:gap-[24px]">
              <div>
                <div className="text-[1.75rem] md:text-[2rem] font-bold text-BrandDarkBlue">
                  <h4>{tariff.title}</h4>
                  <h4>{tariff.price}</h4>
                </div>

                <p className="text-Purple text-[1rem] md:text-[1.5rem]">
                  {tariff.subtext}
                </p>
              </div>

              <p className="text-[1rem] text-BrandDarkBlue max-h-[120px] overflow-y-auto no-scrollbar">
                {tariff.description}
              </p>
              <ul className="flex flex-col gap-[12px] border-t border-darkBlue/20 pt-[16px]">
                {tariff.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-[8px] text-[0.875rem] md:text-[1rem] text-darkBlue"
                  >
                    <span className="w-[6px] h-[6px] rounded-full bg-darkBlue"></span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <button
                className="bg-darkBlue text-white text-[1rem] font-semibold px-[24px] md:px-[48px] py-[16px] md:py-[24px] rounded-[48px]
              active:bg-darkBlue/75 transition-colors cursor-pointer select-none"
              >
                Подключить
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tariff
