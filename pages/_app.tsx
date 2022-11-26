import Head from 'next/head';
import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Header from "@components/header";
import createEmotionCache from '@styles/createEmotionCache';
import "/styles/globals.css";
import theme from '../styles/theme';
import Footer from "@components/footer";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header />
        <>
        <Component {...pageProps} />
        </>
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;