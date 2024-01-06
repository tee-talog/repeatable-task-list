import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import Paper from "@mui/material/Paper"

const Footer: React.FC = () => {
  const value = 0
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
      component="nav"
    >
      <BottomNavigation showLabels value={value}>
        <BottomNavigationAction label="A">
          <a>A</a>
        </BottomNavigationAction>

        <BottomNavigationAction label="B">
          <a>B</a>
        </BottomNavigationAction>

        <BottomNavigationAction label="C">
          <a>C</a>
        </BottomNavigationAction>
      </BottomNavigation>
    </Paper>
  )
}

export default Footer
