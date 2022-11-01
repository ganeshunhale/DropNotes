import { height } from "@mui/system";
import React from "react";

const DocIframe = ({ source }) => {
    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;
    return (
        <div style={{ height: "80vh", maxHeight: "500px", width: "70vw", maxWidth: "500px" }}>
            <iframe
                style={{ height: "100%", width: "100%", objectFit: "fill" }}
                src={src}
                // src={src}
                title="file"
            // width=""
            // height=""


            ></iframe>
        </div>
    );
};

export default DocIframe;
