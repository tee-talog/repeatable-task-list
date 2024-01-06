import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssBaseline />

        <Box
          sx={{
            minHeight: "100vh",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            gridTemplateRows: "60px 1fr 60px",
            gridTemplateAreas: `"header header header header"
              "main main main sidebar"
              "footer footer footer footer"`,
          }}
        >
          <Box sx={{ gridArea: "header" }}>Header</Box>
          <Box sx={{ gridArea: "main" }}>{children}</Box>
          <Box sx={{ gridArea: "sidebar" }}>Sidebar</Box>
          <Box sx={{ gridArea: "footer" }}>Footer</Box>
        </Box>
      </body>
    </html>
  )
}
