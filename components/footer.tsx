import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from '@mui/material/Typography';
import { Stack } from "@mui/material";
import styles from '@styles/footer.module.css'

const Footer = () => {
  return (
    <Box component="footer" alignItems="center" className={styles.footer} sx={{ py: 5, px: 4 }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Typography >
          Made with 💜 © {new Date().getFullYear()}
        </Typography>
      </Stack>
    </Box>);
};

export default Footer;