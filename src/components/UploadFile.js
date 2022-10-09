import * as React from 'react';
import {DropzoneArea} from "material-ui-dropzone";
import {Typography} from "@material-ui/core";

function UploadFile() {
    const [file, setFile] = React.useState({});

    const handleChange = (file) => {
        setFile(file);
    }


    const handleSubmit = () => {

    }


    return (
        <div className="start-fileArea">
            <Typography className="start-reminder">Please upload the tsv file!</Typography>
        <form onSubmit={handleSubmit}>
            <input type="file" accept=".tsv" onChange={handleChange} />
            <button type="submit">Upload</button>
        </form>
        </div>
    )
}

export default UploadFile