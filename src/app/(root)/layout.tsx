import Box from "@mui/material/Box"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function RootLayout({
  children,
  dialog,
}: {
  children: React.ReactNode
  dialog: React.ReactNode
}) {
  return (
    <>
      <Header />

      <Box
        sx={{
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
        component="main"
      >
        {children}
        {dialog}
      </Box>

      <Footer />
    </>
  )
}
