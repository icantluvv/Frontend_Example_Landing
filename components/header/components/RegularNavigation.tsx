import { useNavigationStateStore } from "@/store/navigationStore"
import Link from "next/link"
import { useScrollSpy } from "@/lib/useScrollSpy"

const sections = ["about", "forbusiness", "tariffs", "FAQ", "connect"]

const RegularNavigation = ({ navLinks }: RegularNavigationProps) => {
  useScrollSpy(sections)
  const { chooseNavElement, setChooseNavElement } = useNavigationStateStore()

  return (
    <nav className="lg:flex gap-x-4 flex-1 hidden items-center h-[64px]">
      <div className={` flex gap-x-6 `}>
        {navLinks.map(({ id, label }) => (
          <Link
            key={id}
            href={id}
            onClick={() => setChooseNavElement(id)}
            className={`${
              chooseNavElement === id
                ? "text-PrimaryBlack"
                : "text-PrimaryBlack/50"
            } text-[0.875rem] transition-colors cursor-pointer hover:text-PrimaryBlack`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default RegularNavigation

interface RegularNavigationProps {
  navLinks: { id: string; label: string }[]
}
