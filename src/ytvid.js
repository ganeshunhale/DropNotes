// let videolist = document.querySelector("#ytvid")

let videolistarr = [
  {
    video: "https://www.youtube.com/embed/tq1eP1D5xuk"
    ,
    videoname: "doctor strange in multiverse",
    videodesc: "upcoming mcu movie trailer",
    channellogo: "shop",
    channelname: "marvel entertainment"

  },
  {
    video: "https://www.youtube.com/embed/tq1eP1D5xuk"
    ,
    videoname: "ironman",
    videodesc: "upcoming mcu movie trailer",
    channellogo: "shop",
    channelname: "marvel entertainment"

  },
  {
    video: "https://www.youtube.com/embed/tq1eP1D5xuk",
    videoname: "spiderman",
    videodesc: "upcoming mcu movie trailer",
    channellogo: "shop",
    channelname: "marvel entertainment"

  },
  {
    video: "https://www.youtube.com/embed/tq1eP1D5xuk",
    videoname: "black panther",
    videodesc: "upcoming mcu movie trailer",
    channellogo: "shop",
    channelname: "marvel entertainment"

  }

]


let mapvideos = (filterd, num) => {

  let mapvideoDesc = filterd.map((item, index) => {

    return `<div class="ytvideostyleing">
        <iframe
        src= ${item.video}
        ></iframe>
       
        <div class="flexdiv">
        
        <span class="material-icons channellogo ">
         ${item.channellogo} </span>
        
        <div>
        <p style="font-weight:bold; 
         
         max-width:100%;
      
        overflow: hidden;
       
        margin: 0 5px 10px 5px;
       
        text-overflow: ellipsis;
      line-height:0.8em;
        ">
        ${item.videoname}
       </p>
        <p style="font-weight:200; line-height: 2px;">
        ${item.videodesc}
       </p>
       
        <p style="font-weight:200;color:grey;align-self:center;margin-top:20px;">
        ${item.channelname}
         </p>
       </div>
    
    
       <div class="dropdown" id="video-menu">
       <button
         class="btn"
         type="button"
         id="dropdownMenuButton"
         data-toggle="dropdown"
         aria-haspopup="true"
         aria-expanded="false"
       >
         <div
           style="
             display: flex;
             flex-direction: column;
             height: 25px;
             cursor: pointer;
             user-select: none;
           "
    
         >
           <div class="dot">.</div>
           <div class="dot">.</div>
    
           <div class="dot">.</div>
         </div>
       </button>
       <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
         <a class="dropdown-item" href="#">Action</a>
         <a class="dropdown-item" href="#">Another action</a>
         <a class="dropdown-item" href="#">Something else here</a>
       </div>
     </div>
        </div>
       
        
        </div>`

  }).join('')
  // videolist.innerHTML = mapvideoDesc
}

mapvideos(videolistarr)

let searchbar = document.querySelector("#searchbar")

var filtervideodesc = videolistarr
searchbar.addEventListener("input", () => {

  let words = searchbar.value
  console.log(words);


  filtervideodesc = videolistarr.filter((item, index) => {

    return item.videoname.includes(words)


  })
  console.log("filtervideodesc", filtervideodesc);
  mapvideos(filtervideodesc, 2)


})







let videos = document.querySelectorAll(".ytvideostyleing");

videos.forEach(function (video, index) {
  let videoMenu = video.querySelector("#video-menu");

  let videoMenuBtn = videoMenu.querySelector("button");

  console.log("video", video, "videoMenu", videoMenu, "videoMenuBtn", videoMenuBtn, "ariaExpanded",);

  // video.style.color = "red"
  video.addEventListener("mouseover", () => {


    videoMenu.style.visibility = "visible"
  })


  video.addEventListener("mouseout", () => {
    let ariaExpanded = videoMenuBtn.getAttribute('aria-expanded')

    console.log("ariaExpanded", ariaExpanded);
    if (ariaExpanded == "false") {

      videoMenu.style.visibility = "hidden"

    }
  })
})

window.addEventListener("click", () => {

  let videos = document.querySelectorAll(".ytvideostyleing");

  videos.forEach(function (video, index) {
    let videoMenu = video.querySelector("#video-menu");

    // let videoMenuBtn = videoMenu.querySelector("button");

    videoMenu.style.visibility = "hidden"

  })

})



// document.getElementById('test').getAttribute('aria-expanded')

