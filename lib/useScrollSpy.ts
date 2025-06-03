import { useEffect } from "react"
import { useNavigationStateStore } from "@/store/navigationStore"

export const useScrollSpy = (sectionIds: string[]) => {
  const setChooseNavElement = useNavigationStateStore(
    (state) => state.setChooseNavElement
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting)

        if (visibleSections.length > 0) {
          const topMostSection = visibleSections.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0]

          setChooseNavElement(`#${topMostSection.target.id}`)
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -65% 0px",
        threshold: 0.1
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.unobserve(el)
      })
    }
  }, [sectionIds, setChooseNavElement])
}
