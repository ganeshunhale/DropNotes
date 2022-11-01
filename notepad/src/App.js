import "./App.css";

import Note from "./Note/Note";
// import { Component } from "react";
import NoteForm from "./NoteForm/NoteForm";
import { db, storage } from "./config/config";
import { Waypoint } from "react-waypoint";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import ImageIcon from "@mui/icons-material/Image";
// import { Providecontext } from "./contextapi";
import { EditorState, convertToRaw } from "draft-js";
import { convertFromHTML } from "draft-convert";
// import DB_CONFIG from "./config/config";
// import { initializeApp,database } from "firebase/app"
import {
  collection,
  getDocs,
  deleteDoc,
  addDoc,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteField,
  serverTimestamp,
  orderBy,
  where
} from "firebase/firestore";
import "firebase/database";
import { createRef, useEffect, useRef, useState } from "react";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { width } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import Dropzone from "./Components/Dropzone/Dropzone";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import DocViewer from "./Components/DocViwer/doc";
import StickyBox from "react-sticky-box";
import { Signup } from "./Components/Signup";
import { mockAPI, MockAPI } from "./mockApi/mockApi";
import { Alert, Button, Card, ClickAwayListener } from "@mui/material";
import { useAuth } from "./contexts/AuthContext1";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

// import DocViewer, { DocViewerRenderers, PDFRenderer } from "react-doc-viewer";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.addNotes = this.addNotes.bind(this);
// this.app = initializeApp(DB_CONFIG);
// this.db = this.app.database().ref().child("notes")

// this.state = {
//   notes: [
//     // { id: 1, noteContent: "note 1 here" },
//     // { id: 2, noteContent: "note 2 here" },
//   ],
// };

function App() {
  const [notes, setnotes] = useState(null);
  const [allNotes, setAllNotes] = useState(null);
  // const [inputeNoteState, setinputeNoteState] = useState([])
  const usersCollectionRef = collection(db, "Notes");

  const unsubscribeRef = useRef("");
  useEffect(() => {
    // getnotes();
    getRealtimeNotes();
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        console.log("item", item);
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
      console.log("gvgvgvgvgvggvg", response);
    });
    // docss()

    // return unsubscribeRef
  }, []);
  // const getnotes = async () => {
  //   // console.log("datattattataatat");
  //   if (!notes || notes?.length ===0){

  //     const data = await getDocs(usersCollectionRef);
  //     console.log("datattattataatat",data.docs);

  //     let mappedData=  data.docs.map((doc) => {
  //       console.log("doc.id++++++++++++",doc.id,indexedDB);

  //       return   {...doc.data(), id: doc.id ,}

  //     })
  //     setnotes(mappedData);
  //   }
  // };

  const getRealtimeNotes = async () => {
    // const q = query(usersCollectionRef, where("state", "==", "CA"));
    const q = query(usersCollectionRef, where("uid", "==", `${currenetUserState}`), orderBy("timestamp", "desc"));
    console.log("asasssasas", q);

    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    // const cities = [];
    // querySnapshot.forEach((doc) => {
    //     cities.push(doc.data());
    // });
    // console.log("Current cities in CA: ", cities.join(", "));
    // const source = q.hasPendingWrites ? "Local" : "Server";
    unsubscribeRef.current = onSnapshot(q, (querySnapshot) => {
      // console.log(source, " data: ", doc.data());
      // source()
      console.log("querySnapshot ", querySnapshot);
      let mappedData = querySnapshot.docs.map((doc) => {
        console.log("doc.id++++++++++++", doc.id, doc.data());

        return { ...doc.data(), id: doc.id };
      });
      // setnotes(mappedData);
      setAllNotes(mappedData);
    });
    console.log("allNotes", allNotes);
    // return unsubscribe()
  };

  //   const previouseNotes= this.state.notes;
  //   this.database.on("child_added",snap=>{
  //     previouseNotes.push({id:snap.key,
  //     noteContent:snap.val().noteContent})}}

  //     this.setState({notes:previouseNotes})
  //   })
  const addNotesorImg = async (InputnoteORImgUrl, uid, type, fileType, filePath) => {
    // setinputeNoteState(InputnoteORImgUrl)

    console.log("InputnoteORImgUrl", InputnoteORImgUrl);
    // console.log("inputenotestate",inputeNoteState);
    // const { currenetUserIdFunc} = useAuth()
    // const uid = currenetUserIdFunc
    try {
      // await getnotes()
      // let added= await setDoc(doc(db,"Notes","33ALiWugodEcWvx2uDGg"),{name:InputnoteORImgUrl,})
      let added = await addDoc(
        usersCollectionRef,
        // type === "note"
        //   ? {
        //     text: InputnoteORImgUrl,
        //     timestamp: serverTimestamp(),
        //     fileType: "text/plain",
        //     type,
        //     uid
        //   }
        //   :
        type === "html"
          ? {
            html: InputnoteORImgUrl,
            timestamp: serverTimestamp(),
            fileType,
            type,
            uid
          }
          : {
            ImgUrl: InputnoteORImgUrl,
            timestamp: serverTimestamp(),
            fileType,
            type,
            filePath,
            uid
          }
      );

      console.log("added", added);
    } catch (error) {
      console.log(error);
    }
  };

  const handledeleteDoc = async (DocId, filePath) => {
    // setinputeNoteState(InputnoteORImgUrl)
    // console.log("InputnoteORImgUrl", InputnoteORImgUrl);
    // console.log("inputenotestate",inputeNoteState);

    try {
      // await getnotes()
      // let added= await setDoc(doc(db,"Notes","33ALiWugodEcWvx2uDGg"),{name:InputnoteORImgUrl,})
      // let deleted = await deleteDoc(usersCollectionRef(DocId)
      let deleted = await deleteDoc(doc(db, "Notes", DocId));
      // // Create a reference to the file to delete
      // const desertRef = ref(storage, filePath);

      // // Delete the file
      // deleteObject(desertRef).then(() => {
      //   // File deleted successfully
      // })
      // const deleteRef = doc(db, 'Notes', DocId);

      // Remove the 'capital' field from the document
      // await updateDoc(deleteRef, {
      //   doc: deleteField()
      // });

      console.log("deleted", deleted, filePath);
    } catch (error) {
      console.log(error);
    }
  };

  // const previouseNotes = this.state.notes;
  // previouseNotes.push({id:previouseNotes.length+1,noteContent:note});
  // this.setState({ notes: previouseNotes });
  // this.database.push().set({noteContent:note})

  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageref = ref(
      storage,
      `images/${imageUpload.name + Math.floor(Math.random() * 100)}`
    );
    uploadBytes(imageref, imageUpload).then((uploadResult) => {
      alert("uploaded");
      console.log("image uploaded", uploadResult);
      getDownloadURL(uploadResult.ref).then((url) => {
        console.log(
          "getDownloadURL(uploadResult)",
          url,
          uploadResult.metadata.fullPath
        );
        addNotesorImg(
          url,
          currenetUserState,
          "files",
          imageUpload.type,
          uploadResult.metadata.fullPath,

        );
      });
    });
  };
  const imageListRef = ref(storage, "images/");
  const deleteDocFunc = (noteId, filePath) => {
    // Create a reference to the file to delete
    const desertRef = ref(storage, filePath);

    // Delete the file
    deleteObject(desertRef)
      .then(() => {
        // File deleted successfully
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
    handledeleteDoc(noteId, filePath);
    console.log("note id.......", noteId, filePath);
    console.log("desertRef", desertRef);
  };

  //   const content = () => {
  //     {notes?.map((note, index) => {
  //       console.log("note", note);
  // // const contentIfElse=(note)=>{note.hasOwnProperty("ImgUrl") ? ((note.ImgUrl.includes(".mp4")) ?{type==mp4

  // // } : {

  // // })
  // // }
  //       return (
  //         <div>
  //           {note.hasOwnProperty("ImgUrl") ? ((note.ImgUrl.includes(".mp4")) ?{

  //           } : {

  //           })
  //    }
  //    </div>
  // const [controlsState, setControlsState] = useState({ controls() })

  const [controlsState, setControlsState] = useState(true);
  const ControlsStateFunc = (e) => {
    setControlsState((prev) => false);
    e.target.pause();
  };
  const [value, setValue] = useState(0);
  useEffect(() => {
    setnotes(allNotes);
    handleChange("", value);
    // MockAPI(allNotes)
  }, [allNotes]);

  // let mappedTabsObj = {
  //   0: "All",
  //   1: "video",
  //   2: "image",
  //   3: "text"

  // }
  let mappedTabsArr = ["All", "video", "image", "text", "application"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("newValue", newValue, event);
    // event.target.newValue().then()
    if (mappedTabsArr[newValue] === "All") {
      setnotes(allNotes);
    } else {
      const handleChangeFilter = allNotes?.filter((note, index) => {
        return note?.fileType.includes(mappedTabsArr[newValue]);
      });
      setnotes(handleChangeFilter);
    }
  };

  // const docs = [{ uri: note.ImgUrl }]

  // const docss = () => {
  //   notes?.map((note, index) => {
  //     return (
  //       note?.fileType?.includes("application" ) ? (
  //         docs = [{ uri: require(note.ImgUrl) }])
  //         : null)
  //   })
  // }

  // const stickyRef = useStickyBox({ offsetTop: 20, offsetBottom: 20 })

  // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  // // General scroll to element function

  // const handleScroll = (e) => {
  //   console.log("handleScroll", e);
  //   // if (e.currentTarget.scrollTop === 0) {
  //   if (e.target.scrollingElement.scrollTop > 20) {

  //     alert("on top")
  //   }
  // }

  // const myRef = useRef(null)
  // useEffect(() => {
  //   console.log("myRef", myRef);
  //   let con1 = document.getElementById("con1")

  //   con1.addEventListener("scroll", handleScroll)

  // }, [])

  // const executeScroll = () => {
  //   console.log("");
  //   scrollToRef(myRef)
  // }
  // const [htmlConvert, setHtmlConvert] = useState(null)
  const [error, setError] = useState("")
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  // const auth = getAuth()
  // const user = auth.currentUser;
  // const email = user ? user?.email : null
  const { logOutFromFirbaseUser, currentUserEmail, currenetUserState } = useAuth()
  const handleLogout = async () => {
    setError("")
    try {

      await logOutFromFirbaseUser()
      // Sign-out successful.
      // navigate("/login")
    } catch (error) {
      console.log("log out failed");
      setError("log out failed")
    }

  }
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpen(false);
  };



  return (
    <>
      {/* <Signup></Signup> */}
      {/* <Providecontext value={{ allNotes: allNotes }}> */}
      <div className="notesWrapper" id={"con1"}>
        <div className="notesHeader">
          <img style={{ width: "13vw", height: "10vh" }} src={require("./Static/img/notesNdropbox.png")} alt="website logo"></img>
          <h2 className="heading">Firebase Notes + Dropbox</h2>
          <ClickAwayListener onClickAway={handleClickAway}>
            <div style={{ backgroundColor: "transparent", display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <div style={{ backgroundColor: "transparent", display: "flex" }} >
                <Button type="button" style={{}} variant="outlined" size="small" onClick={handleClick}><h3>Profile</h3>
                </Button></div>{error && <Alert severity="error" >{error}</Alert>}
              {console.log("currentuser.", currentUserEmail)}
              {open ? (<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "AppWorkspace", minWidth: "250px", borderRadius: "1vw", position: "absolute", zIndex: "1", right: "3vw", transform: "translate(-2px, 11vh)" }}><div><strong>Email</strong>:{currentUserEmail}</div>
                <br></br>
                {/* <Button variant="text" size="small"
                  onClick={() => navigate("/update-profile")}
                >Update Profile</Button> */}
                <Button style={{ width: "6vw", height: "5vh", flexDirection: "row" }} variant="outlined" size="small"
                  onClick={handleLogout}
                >
                  Log Out
                </Button></div>) : null}
            </div></ClickAwayListener>
        </div>
        {/* <div> */}
        <div className="notesFooter">
          <div style={{ margin: "2vw" }}>
            <NoteForm addNotes={addNotesorImg}></NoteForm>
          </div>
          <div style={{ marginRight: "2vw", marginTop: "2vw" }}>
            <Dropzone
              onDrop={(fileObj) => {
                console.log("fileObj", fileObj);
                setImageUpload(fileObj);
              }}
            ></Dropzone>
            <button className="noteButton" onClick={uploadImage}>
              Upload File
            </button>
          </div>
        </div>
        <div style={{ position: "relative", width: "100%" }}>
          <div className="allTabsDiv">
            {/* <StickyBox offsetTop={20} offsetBottom={20}> */}
            {/* <input
            className="noteButton"
            type="file"
            onChange={(e) => {
              setImageUpload(e.target.files[0]);
              console.log("print e", e);
            }}
          /> */}
            <Tabs
              className="allTabs"
              textColor="inherit"
              value={value}
              variant="scrollable"
              scrollButtons="auto"
              onChange={handleChange}
              aria-label="icon label tabs example"
            >
              <Tab icon={<ClearAllIcon />} label="all" />
              <Tab icon={<OndemandVideoOutlinedIcon />} label="Videos" />
              <Tab icon={<ImageIcon />} label="Images" />
              <Tab icon={<TextSnippetIcon />} label="Text" />
              <Tab icon={<DocumentScannerIcon />} label="docs" />
            </Tabs>
            {/* </StickyBox> */}
          </div>
        </div>
        {/* <div className="imageListDiv">{imageList.map((url) => { return <img className="imageList" alt="firebase images" src={url} /> })}</div> */}
        <div>
          {/* {console.log(notes)} */}
          {notes?.map((note, index) => {
            console.log("note", note)

            return (
              note?.uid === currenetUserState &&
              <div key={note.id}>
                {note.hasOwnProperty("ImgUrl") ? (
                  <div className="notesBody">
                    <div className="imageRemove">
                      <div className="indexNdel">
                        <h3 className="imgIndex">{index + 1}</h3>
                        <DeleteIcon
                          fontSize="large"
                          className="imageDeleteIcon"
                          onClick={() =>
                            deleteDocFunc(note.id, note.filePath)
                          }
                        ></DeleteIcon>
                      </div>

                      {note?.fileType?.includes("video") ? (
                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              fontWeight: "bolder",
                              alignItems: "center",
                              paddingRight: "2vw",
                            }}
                          >
                            video
                            <OndemandVideoOutlinedIcon></OndemandVideoOutlinedIcon>
                          </div>
                          <div
                            style={{
                              width: "60vw",
                              padding: "2vw",
                              paddingTop: "0",
                            }}
                          >
                            <video
                              className="videoItem"
                              alt="firebase video"
                              src={note.ImgUrl}
                              controls={controlsState}
                              onMouseOver={(e) => {
                                e.target.play();
                                setControlsState(true);
                              }}
                              onMouseOut={(e) => {
                                e.target.pause();
                                // setControlsState(false)
                                ControlsStateFunc();
                              }}
                            // onLeave={(e) => { e.target.pause() }}

                            // onMouseOver={(e) => { controls(true) }}
                            ></video>
                          </div>
                        </div>
                      ) : // </Waypoint>
                        null}
                      {note?.fileType?.includes("image") ? (
                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                              alignItems: "center",
                              fontWeight: "bolder",
                              paddingRight: "2vw",
                              color: "white",
                            }}
                          >
                            Img<ImageIcon></ImageIcon>
                          </div>{" "}
                          <img
                            className="imageItem"
                            alt="firebase images"
                            src={note.ImgUrl}
                          ></img>
                        </div>
                      ) : null}
                      {note?.fileType?.includes("application") ? (
                        <div>
                          <DocViewer
                            source={note.ImgUrl}
                            style={{ height: "100%" }}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                ) : (
                  <div className="notesBody">
                    <Note
                      // convertFromHTML={EditorState.createWithContent(convertFromHTML(note?.name?.body))}
                      noteContent={note?.html}
                      index={index + 1}
                      noteId={note.id}
                      key={note.id}
                      deleteDocCB={handledeleteDoc}
                      usersCollectionRef={usersCollectionRef}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
        {/* </div > */}
        {/* <div>
        {notes?.map((noteName) => {
          return (
            <div>
              <h1>Name: {noteName.name}</h1>
            </div>
          );
        })}
      </div> */}
      </div>
      {/* </Providecontext> */}
    </>
  );
}

export default App;
