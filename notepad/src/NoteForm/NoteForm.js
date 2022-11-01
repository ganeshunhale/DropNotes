import React, { useState } from "react";
import "./NoteForm.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useAuth } from "../contexts/AuthContext1";
// class NoteForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//         newNoteContent:'',
//     };
//   }
//   handleUserInput(e){
//       this.setState({
//           newNoteContent:e.target.value
//       })
//   }
//   render() {
//     return (
//       <div className="formWrapper">
//         {/* <input type={""} className="noteInput" placeholder="write a new note" /> */}

//         <textarea
//           id="note"
//           name="note"
//           className="noteInput"
//           placeholder="write a new note"
//           rows="4"
//           cols="100"
//           value={this.state.newNoteContent}
//           onChange={this.handleUserInput}
//         ></textarea>
//         <button className="noteButton">add note</button>
//         {/* <input type="submit" className="noteButton" value="Submit"></input> */}
//       </div>
//     );
//   }
// }

// export default NoteForm;

// import React from 'react'

function NoteForm({ addNotes }) {
  const [newNoteContent, setNewNoteContent] = useState("");
  const [bodyHtml, setBodyHtml] = useState(null);
  const { currenetUserState } = useAuth()
  const [editorState, setEditorState] = useState(() => {
    EditorState.createEmpty()
  })

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  let body
  function publish() {
    body = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    setBodyHtml(body)

    if (body) {
      console.log(body);
      const postData = body;
      // addPost("posts", postData, navigate);
      addNotes(postData, currenetUserState, "html", "html/text",)
      setEditorState(EditorState.createEmpty())
    } else {
      console.log("Posts need to include a body");
    }
  }
  let buttons = <button className="noteButton" onClick={publish} >Publish</button>;
  // console.log(props ,"proppsppppppppppppppp");
  return (
    <div className="formWrapper">

      {/* <input  id="note"
          name="note"
          className="noteInput"
          placeholder="write a new note"
          rows="4"
          cols="100"
          value={newNoteContent}
          onChange={e=> setNewNoteContent(e.target.value)}/> */}

      {/* <textarea
        id="note"
        name="note"
        className="noteInput"
        placeholder="write a new note"
        rows="4"
        cols="100"
        value={newNoteContent}
        // value={newNoteContent}
        onChange={(e) => setNewNoteContent(e.target.value)}
      ></textarea> */}
      {/* <pre>{newNoteContent}</pre> */}
      <div style={{ backgroundColor: "GrayText", borderRadius: "3vw" }}>
        <Editor
          editorState={editorState}
          // toolbarStyle={{ maxWidth: "60vw", maxheight: "25vh", }}
          // wrapperClassName="wrapper-class"
          // editorClassName="editor-class"
          // toolbarClassName="toolbar-class"
          editorStyle={{ maxWidth: "60vw", height: "25vh" }}
          onEditorStateChange={onEditorStateChange}
        />
        {buttons}
      </div>
      {/*  buttons = <button onClick={publish}>Publish</button>; */}
      {/* <button
        className="noteButton"
        onClick={() => {
          if (!newNoteContent) {
            alert("add somthing in noteinput");
            return;
          }
          addNotes(newNoteContent, "note");
          setNewNoteContent("");
        }
        }
      >


        add note
      </button> */}
      {/* <div>{body}</div> */}
      {/* <div>{bodyHtml}</div> */}
      {/* <input type="submit" className="noteButton" value="Submit"></input> */}
    </div>
  );
}

export default NoteForm;
