import {useState, useEffect } from 'react';
import Test from './test';
import styles from '@styles/content.module.css'
import Link from "next/link";

import Button from '@mui/material/Button';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TestPage = () => {
    return (
        <div className={styles.testOptions}>
            <Accordion>
            <AccordionSummary 
                aria-controls="panel1d-content" 
                id="panel1d-header" 
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Test #1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
                </Typography>
                <div className={styles.takeTestBtn}> 
                    <Link passHref href={{pathname: '/TestPage', query: { testNum: 1 }}}>
                        <Button variant="contained">Take Test Now</Button>
                    </Link>
                </div>
            </AccordionDetails>
            </Accordion>
            <Accordion>
            <AccordionSummary
                aria-controls="panel1d-content" 
                id="panel1d-header" 
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Test #2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
                </Typography>
                <div className={styles.takeTestBtn}> 
                    <Link passHref href={{pathname: '/TestPage', query: { testNum: 2 }}}>
                        <Button variant="contained">Take Test Now</Button>
                    </Link>
                </div>
            </AccordionDetails>
            </Accordion>
            <Accordion>
            <AccordionSummary
                aria-controls="panel1d-content" 
                id="panel1d-header" 
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Test #3</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
                </Typography>
                <div className={styles.takeTestBtn}> 
                    <Link passHref href={{pathname: '/TestPage', query: { testNum: 3 }}}>
                        <Button variant="contained">Take Test Now</Button>
                    </Link>
                </div>
            </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default TestPage; 