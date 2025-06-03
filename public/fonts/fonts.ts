import localFont from "next/font/local"

export const poppins = localFont({
  src: [
    {
      path: "../fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../fonts/Poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal"
    },
    {
      path: "../fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-poppins",
  display: "swap"
})
