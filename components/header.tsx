import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import HideOnScroll from "@components/hideOnScroll";
import styles from '@styles/header.module.css';
import Image from 'next/image';
import { useState } from 'react'
import Link from "next/link";
import { Box, Button } from "@mui/material";
import { useRouter } from 'next/router'
import SearchIcon from '@mui/icons-material/Search';
import logo from '../public/logo.png'

export const navLinks = [
  { title: 'home', path: '/' },
  { title: 'about', path: '/about' },
];

const Header = () => {
  
  const clearAuth = () => {
    sessionStorage.removeItem('auth');
  }

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" color="secondary" elevation={0}>
          <Toolbar>
            <Container
              maxWidth="lg"
              sx={{ display: `flex`, justifyContent: `space-between`, alignItems: 'center' }}
            >
              <Link passHref href="/">
                <Button onClick={clearAuth} className={styles.logoContainer}>
                  <Image className={styles.logo} src={logo} width={50} height={50} objectFit="cover" />
                </Button>
              </Link>
              {/* for desktop view */}
              <Toolbar
                component="nav"
                sx={{
                  display: { xs: `none`, md: `flex` },
                }}
              >
              </Toolbar>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll >
    </>
  );
};

export default Header;