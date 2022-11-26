import Resources from '@components/resources';
import References from '@components/references';
import { Box, Container, Tab, Tabs, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';

import dynamic from 'next/dynamic'
const Test = dynamic(() => import('@components/test'), { ssr: false })

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Home: NextPage = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <title>Psychology Tool</title>
      </Head>
      <Container>
        <main>
          <Typography variant='h1' style={{ marginBottom: 8 }}>
            Social Media Intervention
          </Typography>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              <Tab label="Test" {...a11yProps(0)} />
              <Tab label="Resources" {...a11yProps(1)} />
              <Tab label="References" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Test/>
          </TabPanel>
          <TabPanel value={value} index={1}>
             <Resources />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <References />
          </TabPanel>
        </main>
      </Container>
    </>
  )
}

export default Home