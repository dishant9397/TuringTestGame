import * as React from 'react';
import {TextField, Button, Typography} from "@material-ui/core";
import { Controller, useForm } from 'react-hook-form';

const LIMIT = 100;

function Sentences(props) {
    const { handleSubmit, control } = useForm();
    const [data, setData] = React.useState(0);
    const { handleNext } = props;
    const onSubmit = (data) => {
        data && data > 0 && data < LIMIT && setData(data['Number of sentences']);
        if (data['Number of sentences'] < LIMIT && data['Number of sentences'] > 0) {
            // submit
            handleNext();
        }
        console.log(data['Number of sentences']);
    }

    React.useEffect(() => {
    }, [data])

    return (
        <div className="start-fileArea">
        <Typography className="start-reminder">
            I want to choose
        </Typography>
        <form>
            <Controller
                name="Number of sentences"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextField onChange={onChange} value={value} label={"number"} type="number"/>
                )}
            />
            <br />
            {data >= LIMIT && <div style={{color: "red"}}>too large! please do not submit more than {LIMIT} sentences</div>}
            <div className="start-submit-button">
                <Button onClick={handleSubmit(onSubmit)} >Submit</Button>
            </div>

        </form>
            <Typography className="start-reminder">
                sentences to randomly draw from file
            </Typography>
        </div>
    )
}

export default Sentences