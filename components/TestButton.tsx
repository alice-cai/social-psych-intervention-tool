import React from 'react'
import styles from '@styles/content.module.css'
import Button from '@mui/material/Button';

function TestButton (callback : Function) {
    return (
        <div className={styles.takeTestBtn} > 
            <Button variant="contained" onClick={event => callback()}>Take Test Now</Button>
        </div>
    )

}

export default TestButton; 