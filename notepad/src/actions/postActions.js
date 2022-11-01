import axios from "axios";

export function addPost(endpoint, postData, navigate) {
  axios
    .post(endpoint, postData)
    .then((response) => {
      console.log(response);
      navigate(`../${response.data.id}`);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function editPost(endpoint, postData, navigate) {
  axios
    .put("posts/" + endpoint, postData)
    .then((response) => {
      console.log(response);
      navigate(`../${endpoint}`, { replace: true });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function deletePost(postId, navigate) {
  axios
    .delete("posts/" + postId)
    .then((response) => {
      console.log(response);
      navigate("../", { replace: true });
    })
    .catch((error) => console.log(error));
}
