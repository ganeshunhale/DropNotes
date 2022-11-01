// https://blog.logrocket.com/create-a-drag-and-drop-component-with-react-dropzone/
import { useState, useRef } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Icon, OutlinedInput, InputAdornment } from "@mui/material";

import "./Dropzone.css";

const Dropzone = ({ onDrop: onDropProp }) => {
    const [inputFileName, setInputFileName] = useState("");
    const [unsupportedFile, setUnsupportedFile] = useState(false);
    const fileInputRef = useRef();

    const dragOver = (e) => {
        e.preventDefault();
    };
    const dragEnter = (e) => {
        e.preventDefault();
    };
    const dragLeave = (e) => {
        e.preventDefault();
    };

    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) {
            const fileObj = files[0];
            handleFiles(fileObj);
        }
    };
    const handleFiles = (fileObj) => {
        if (validateFile(fileObj)) {
            setInputFileName(fileObj.name);
            unsupportedFile && setUnsupportedFile(false);
        } else {
            setUnsupportedFile(true);
            inputFileName && setInputFileName("");
        }
        onDropProp(fileObj);
    };
    // const validateFile = (file) => {

    //     console.log("validateFile", file, file.type);
    //     const validTypes = ["image/*", "video/*"]

    //     if (validTypes.indexOf(file.type) === -1) {
    //         return false
    //     }
    //     return true
    // }
    const validateFile = (file) => {
        console.log("validateFile", file, file.type);

        const GenericFileType = file.type.split("/");
        console.log("GenericFileType", GenericFileType);
        const validTypes = ["image", "video", "text", "application"];

        if (validTypes.indexOf(GenericFileType[0]) === -1) {
            return false;
        }
        return true;
    };
    const fileInputClicked = () => {
        fileInputRef.current.click();
    };
    const filesSelected = () => {
        if (fileInputRef.current.files.length) {
            handleFiles(fileInputRef.current.files[0]);
        }
    };
    const uploadFiles = () => { };
    const removeInputFile = () => {
        setInputFileName("");
    };
    return (
        <>
            <div className="content">
                {/* Actual dropzone Component starts */}
                {/* {inputFileName ? <button className="file-upload-btn" onClick={() => uploadFiles()}>Upload Files</button> : ''} */}
                {unsupportedFile ? (
                    <p className="container-p">Please select supported file type.</p>
                ) : (
                    ""
                )}
                <div
                    className="drop-container"
                    onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDrop={fileDrop}
                >
                    {inputFileName ? (
                        <div
                            size="small"
                            readOnly
                            className="file-field"
                            value={inputFileName}
                            position="end"
                            style={{ display: "flex", fontSize: "1rem", contain: "content", justifyContent: "space-between", borderWidth: "1px ", borderStyle: "solid", borderColor: "ButtonFace", width: "20vw", borderRadius: "1vw" }}
                        >
                            <div style={{ maxWidth: "15vw" }}>{inputFileName}</div>

                            <DeleteIcon onClick={removeInputFile} />
                        </div>
                    ) : (
                        <div className="upload-icon">
                            <Icon>
                                <CloudUploadIcon />
                            </Icon>
                        </div>
                    )}
                    <p className={"drop-message"}>
                        Drag and Drop files here or{" "}
                        <span className={"drop-message-label"} onClick={fileInputClicked}>
                            click to upload
                        </span>
                    </p>
                    <input
                        ref={fileInputRef}
                        className="file-input"
                        type="file"
                        // multiple
                        onChange={filesSelected}
                        accept="image/*, video/* ,application/pdf"
                    />
                </div>
                {/* ends */}
            </div>
        </>
    );
};
export default Dropzone;
