import * as React from 'react';
import {TextField, Button, Typography} from "@material-ui/core";
import {Controller, useForm} from 'react-hook-form';

const LIMIT = 100;

function Sentences(props) {
    const {handleSubmit, control} = useForm();
    const [sentences, setSentences] = React.useState(0);
    const {handleNext} = props;

    const onSubmit = () => {
        // submit api goes in here
        handleNext();
    }

    React.useEffect(() => {
    }, [sentences])

    return (
        <div className="start-fileArea">
            <Typography className="start-reminder">
                Select the number of sentences in the gameplay
            </Typography>
            <form>
                <Controller
                    name="Number of Sentences"
                    control={control}
                    render={({field: {onChange, value}}) => (
                        <TextField onChange={(event) => {
                            setSentences(event.target.value);
                            return onChange(event);
                        }} value={value} label={"Number of Sentences"} type="number"/>
                    )}
                />
                <br/>
                {sentences > LIMIT &&
                    <div style={{color: "red"}}>too large! please do not submit more than {LIMIT} sentences</div>}
                {sentences < 0 &&
                    <div style={{color: "red"}}>too small! please submit at least 1 sentence</div>}
                <div className="start-submit-button">
                    <Button onClick={handleSubmit(onSubmit)}
                            disabled={sentences <= 0 || sentences > LIMIT}>Next</Button>
                </div>

            </form>
        </div>
    )
}

export default Sentences