import React, { Component } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
// import PropTypes from "prop-types";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { doc, updateDoc } from "firebase/firestore";
import "./Note.css";
import { db } from "../config/config";
class Note extends Component {
  constructor(props) {
    super(props);

    this.noteContent = props.noteContent;
    this.noteId = props.noteId;
    this.index = props.index;
    this.deleteDocCB = props.deleteDocCB;
    this.usersCollectionRef = props.usersCollectionRef
    // this.convertFromHTML = props.convertFromHTML;
    const html = `${this.noteContent}`;
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
        toolbarHiddenstate: true,
        visibility: "",
        saveVisibility: "none",
      };
    }
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  deleteDocFunc = (noteId) => {
    this.deleteDocCB(noteId);
  };
  editDocFunc = (noteId) => {
    this.setState({
      toolbarHiddenstate: false,
      visibility: "hidden",
      saveVisibility: "block",
    });
  };
  saveDocFunc = async () => {
    // this.saveDocCB(noteId);
    this.setState({ toolbarHiddenstate: true, visibility: "visible", saveVisibility: "none" });
    const body = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    if (body) {
      console.log("html body", body);

      // this.usersCollectionRef.doc(this.noteId).updateDoc(body)
      // addPost("posts", postData, navigate);

      const documentRef = doc(db, "Notes", this.noteId);

      // Set the "capital" field of the city 'DC'
      await updateDoc(documentRef, {
        html: body
      });

    } else {
      console.log("Posts need to include a body");
    }
  };

  render() {
    const { editorState, visibility, saveVisibility } = this.state;
    return (
      <div className="note">
        <div>
          <span className="noteIndex">{this.index}</span>
        </div>
        {/* <div className="noteContent" dangerouslySetInnerHTML={{ __html: `${this.noteContent}` }}> {console.log("noteContent", this.noteContent)}</div> */}
        <div style={{ paddingLeft: "2vw" }}>
          <Editor
            toolbarHidden={this.state.toolbarHiddenstate}
            editorState={editorState}
            // wrapperClassName="demo-wrapper"
            // editorClassName="demo-editor"
            editorStyle={{ maxWidth: "45vw", width: "4s0vw", }}
            onEditorStateChange={this.onEditorStateChange}
            readOnly={this.state.toolbarHiddenstate}
          />
          <textarea

            disabled
            style={{ maxWidth: "30vw" }}
            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          />
        </div>
        <div>
          <div
            className="noteIcon"
            onClick={() => {
              this.editDocFunc(this.noteId);
            }}
          >
            <EditIcon
              style={{ visibility: `${visibility}` }}
            >edit</EditIcon>
          </div>
          <div className="noteIcon" onClick={() => this.saveDocFunc(this.noteId)}>
            <SaveIcon style={{ display: `${saveVisibility}` }}>save</SaveIcon>
          </div>
          <div
            className="noteIcon"
            onClick={() => this.deleteDocFunc(this.noteId)}
          >
            <DeleteIcon></DeleteIcon>
          </div>
        </div>
      </div>
    );
  }
}
// Note.propsType = { noteContent: PropTypes.string };

export default Note;
