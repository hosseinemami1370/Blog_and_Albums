<template>
  <div><PostList  :posts="loadedPosts" />
  </div>
</template>
    
<script>
import PostList from "@/components/PostList/PostList";

export default {
  data(){
    return{
      page:1
    } 
  },
  components:{
    PostList,
    
  },
  computed: {
    loadedPosts() {
      
       return this.$store.getters.loadedPosts
      
    }
  },
   mounted(){
    this.scroll()
    this.$store.dispatch('getPost',this.page);
  },
  methods:{
    scroll () {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow) {
          if (this.itemsPagination.next && this.scrolledToBottom) {
            this.scrolledToBottom = false
            this.isLoadingMore = true
            this.$store.dispatch('LOAD_ITEMS_PAGINATION', { pagination: this.itemsPagination.next }).then((response) => {
              setTimeout(() => {
                if (this.$store.getters.getItemsPagination.results) {
                  this.moreItems.push(...this.$store.getters.getItemsPagination.results)
                }
                this.isLoadingMore = false
                this.scrolledToBottom = true
              }, 300)
            }, error => {
              console.log(error)
              this.isLoadingMore = false
            })
          }
        }
      }
    }
  }
  
   
  
}
</script>

<style>

</style>