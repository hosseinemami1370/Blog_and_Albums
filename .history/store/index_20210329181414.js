import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    //   token:null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
    //   addPost(state, post) {
    //     state.loadedPosts.push(post)
    //   },
    //   editPost(state, editedPost) {
    //     const postIndex = state.loadedPosts.findIndex(
    //       post => post.id === editedPost.id
    //     );
    //     state.loadedPosts[postIndex] = editedPost
    //   },
    //   setToken(state,token){
    //     state.token=token;
    //   }
    },
    actions: {
      getComment(context,postId){
        return axios
        .get("https://jsonplaceholder.typicode.com/comments?postId="+postId)
        .then(rex => {
          context.commit("setComment", res.data);
        })
      },
      getPost(context){
        alert("asdasdad")
        return axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then(res => {
            const postsArray = [];
            console.log("response:",res);
            // for (const key in res.data) {
            //   postsArray.push({ ...res.data[key], id: key });
            // }
            context.commit("setPosts", res.data);
          })
          .catch(e => context.error(e));
      },
    //   addPost(vuexContext, post) {
    //     const createdPost = {
    //       ...post,
    //       updatedDate: new Date()
    //     }
    //     return axios
    //     .post("https://nuxt-blog-31312-default-rtdb.firebaseio.com/.posts.josn", createdPost).then(result => {
    //       vuexContext.commit('addPost', {...createdPost, id: result.data.name})
    //     })
    //     .catch(e => console.log(e));
    //   },
    //   editPost(vuexContext, editedPost) {
    //     return axios.put("https://nuxt-blog-31312-default-rtdb.firebaseio.com/" +
    //       editedPost.id +
    //       ".json", editedPost)
    //       .then(res => {
    //         vuexContext.commit('editPost', editedPost)
    //       })
    //       .catch(e => console.log(e))
    //   },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      setComment(vuexContext,comment){
        
      },
    //   async authentication(vuexContext,authData){
    //     alert("dispatch of authentication")
    //     let authUrl="https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDwwRGsrwAq1FsLpSsBxJ5Xly4MIlc69sg"
    //     if(!authData.isLogin){
    //       authUrl="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDwwRGsrwAq1FsLpSsBxJ5Xly4MIlc69sg"
    //     }
    //     await axios.post(authUrl,{
    //       eamil:authData.eamil,
    //       password:authData.password,
    //       retuernSecureToken:true
    //     }).then(
    //       result=>{
    //         console.log("result:",result)
    //         vuexContext.commit("setToken",result.idToken)
    //       }
    //     ).catch(err=>{
    //       console.log("error:",err);
    //     })
    //   }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
