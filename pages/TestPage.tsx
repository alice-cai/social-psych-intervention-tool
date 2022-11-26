import type { NextPage } from 'next'
import { Container, Typography } from '@mui/material'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Test from '../components/test';

const TestPage: NextPage = () => {
  const router = useRouter();
  const testNumQuery:number = +router.query;
  let testNum:number = testNumQuery;

    return (
      <>
        <Head>
          <title>Psychology Tool</title>
        </Head>
        <Container>
          <main>
            <Typography variant='h1' style={{ marginBottom: 8 }}>
              Social Media Intervention Test
            </Typography>

            <Test></Test>
          </main>
        </Container>
      </>
    )
  };
  
  export default TestPage