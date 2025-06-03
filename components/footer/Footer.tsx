import Image from "next/image"
import Link from "next/link"
import React from "react"

import copyright from "@/public/copyright.svg"
import header_logo from "@/public/header/header_logo.svg"
import vk from "@/public/footer/vk.svg"
import tg from "@/public/footer/telegram.svg"

const links = [
  { title: "О нас", href: "#about" },
  { title: "Бизнесу", href: "#forbusiness" },
  { title: "Тарифы", href: "#tariffs" },
  { title: "FAQ", href: "#FAQ" },
  { title: "Связаться", href: "#connect" },
  { title: "Новости", href: "/news" },
  { title: "Пользователям Goals", href: "/GoalsForUser" }
]

const rightLinks = [
  { title: "Политика сервиса", href: "/privacy" },
  { title: "Пользовательское соглашение", href: "/agreement" }
]

const socialLinks = [
  { icon: tg, alt: "tg" },
  { icon: vk, alt: "vk" }
]

const LinksGroup = ({
  title,
  items
}: {
  title: string
  items: { title: string; href: string }[]
}) => (
  <div className="flex flex-col gap-4">
    <h4 className="text-PrimaryBlack">{title}</h4>
    <div className="flex flex-col xl:flex-row gap-x-[100px]">
      <div className="flex flex-col gap-y-3">
        {items.map(({ title, href }) => (
          <a
            key={title}
            href={href}
            className="hover:text-PrimaryBlack transition-colors"
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  </div>
)

const Footer = () => (
  <footer className="w-full flex-col px-[5vw] lg:px-[15vw] text-PrimaryBlack/50 flex py-10 gap-8 lg:gap-16 text-[0.875rem] border-t border-PrimaryBlack/10">
    <div className="flex flex-wrap justify-between items-start w-full gap-8 lg:gap-16">
      <Link href="/" className="w-full lg:w-auto flex">
        <Image
          src={header_logo}
          alt="footer_logo"
          className="w-auto h-[50px]"
        />
      </Link>
      <div className="flex gap-8">
        <LinksGroup title="Разделы и ссылки" items={links} />
        <LinksGroup title="Правила" items={rightLinks} />
      </div>
    </div>

    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-1">
        <Image
          src={copyright}
          alt="copyright"
          className="opacity-50"
          width={15}
          height={15}
        />
        <p>2025 Goals. Все права защищены</p>
      </div>

      <div className="flex items-center gap-3">
        {socialLinks.map(({ icon, alt }, i) => (
          <React.Fragment key={alt}>
            {i > 0 && (
              <div className="w-[1px] h-[20px] bg-PrimaryBlack/15"></div>
            )}
            <Link href="">
              <Image
                src={icon}
                alt={alt}
                width={18}
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  </footer>
)

export default Footer
