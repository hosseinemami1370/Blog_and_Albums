import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      loadedComments: [],
      loadedAlbums: [],
      postId:null,
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      setComment(state, comments) {
        state.loadedComments = comments;
      },
      setAlbums(state, albums) {
        state.loadedAlbums = albums;
      },
    },
    actions: {
      getComment(context,postId){
        return axios
        .get("https://jsonplaceholder.typicode.com/comments?postId="+postId)
        .then(res => {
          context.commit("setComment", res.data);
        })
      },
      getAlbums(context){
        return axios
        .get("https://jsonplaceholder.typicode.com/albums")
        .then(res => {
          console.log("ALBUMS:",res.data);
          context.commit("setAlbums", res.data);
        })
      },
      getPost(context,page){
       
        return axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then(res => {
           
            context.commit("setPosts", res.data);
          })
          .catch(e => context.error(e));
      },
    
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      setComment(vuexContext,comment){
        vuexContext.commit("setComment", comment);
      },
      setAlbums(vuexContext,albums){
        vuexContext.commit("setAlbums", albums);
      },
    
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      loadedComments(state) {
        return state.loadedComments;
      },
      loadedAlbums(state) {
        return state.loadedAlbums;
      },
      
   

    }
  });
};

export default createStore;