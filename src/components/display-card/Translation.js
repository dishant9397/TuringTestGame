import * as React from 'react';
import { Button, Typography } from "@material-ui/core";

function Translation(props) {
    
    const details = props?.details
    const {choice, setChoice} = props?.options;
    const {score, align} = props?.options
    const [className, setClassName] = React.useState("display-cardButton")

    const getAlignment = () => {
        return align ? 'flex-end' : 'flex-start';
    }

    const getTextAlignment = () => {
        return align ? 'right' : 'left';
    }

    const handleClick = () => {
        if (!score.enable) {
            setChoice(details.type);
        }
    }

    React.useEffect(() => {
        if (choice === details.type && !details.isSelected) {
            setClassName("display-cardButton-clicked")
            details.isSelected = true
        } else {
            setClassName("display-cardButton")
            details.isSelected = false
        }
        // eslint-disable-next-line
    }, [choice])

    return (
        <div>
            <div style={{ display:'flex' }}>
                <Button style={{ textTransform: 'none', justifyContent: `${getAlignment()}`, textAlign: `${getTextAlignment()}` }} className={className} data-testid="selectBtn" onClick={handleClick}>
                    {details.translation}
                </Button>
                {score.enable && <Typography data-testid="score" className="score-class">{details.score}</Typography>}
                {score.enable && <img src={details.image} data-testid="identityImg" alt={details.type} title={details.type} className="identityImg" />}
            </div>
        </div> 
    )
}

export default Translation