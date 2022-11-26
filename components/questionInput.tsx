import React, {useEffect, useState} from 'react'
import styles from '@styles/content.module.css'

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

type Props = {
    callBack: Function,
    number: number
};

const QuestionInput = ({callBack, number}: Props) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(0); 
    }, [number])

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
        callBack(newValue);
    };

    return (
        <div  className={styles.questionInput}>
        <FormControl>
            <RadioGroup
                aria-labelledby="radio-buttons-group"
                name="radio-buttons-group"
                value={value}
                onChange={handleChange}
                row
            >
                <FormControlLabel className={styles.radioBtn} value={0} labelPlacement={"bottom"} control={<Radio />} label="Strongly Disagree" />
                <FormControlLabel className={styles.radioBtn} value={1} labelPlacement={"bottom"} control={<Radio />} label="Disagree" />
                <FormControlLabel className={styles.radioBtn} value={2} labelPlacement={"bottom"} control={<Radio />} label="Neutral" />
                <FormControlLabel className={styles.radioBtn} value={3} labelPlacement={"bottom"} control={<Radio />} label="Agree" />
                <FormControlLabel className={styles.radioBtn} value={4} labelPlacement={"bottom"} control={<Radio />} label="Strongly Agree" />
            </RadioGroup>
        </FormControl>
        </div>
    )
}

export default QuestionInput;