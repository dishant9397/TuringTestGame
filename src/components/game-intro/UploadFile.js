import * as React from 'react';
import {Typography} from "@material-ui/core";

function UploadFile() {
    const [file, setFile] = React.useState({});

    const handleChange = (file) => {
        setFile(file);
    }

    return (
        <div className="start-fileArea">
            <Typography className="start-reminder">Please select the file to upload (.tsv only)</Typography>
            <input type="file" accept=".tsv" onChange={handleChange}/>
        </div>
    )
}

export default UploadFile