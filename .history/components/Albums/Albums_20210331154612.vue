<template>
  <div class="images-container mt-6">
    <div class="images-item">
      <div class="images-card">
        <img
          src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw1MTg1MXwxfDF8YWxsfDF8fHx8fHwyfHwxNjE3MTg4MTI0&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400"
          class="images-card__image"
        />
        <div
          class="images-card__mask"
          style="background-color: rgb(217, 192, 166)"
        ></div>
      </div>
    </div>
    <div class="images-item">
      <div class="images-card">
        <img
          src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw1MTg1MXwxfDF8YWxsfDF8fHx8fHwyfHwxNjE3MTg4MTI0&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400"
          class="images-card__image"
        />
        <div
          class="images-card__mask"
          style="background-color: rgb(217, 192, 166)"
        ></div>
      </div>
    </div>
    <div class="images-item">
      <div class="images-card">
        <img
          src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw1MTg1MXwxfDF8YWxsfDF8fHx8fHwyfHwxNjE3MTg4MTI0&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400"
          class="images-card__image"
        />
        <div
          class="images-card__mask"
          style="background-color: rgb(217, 192, 166)"
        ></div>
      </div>
    </div>
    <div class="images-item">
      <div class="images-card">
        <img
          src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw1MTg1MXwxfDF8YWxsfDF8fHx8fHwyfHwxNjE3MTg4MTI0&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400"
          class="images-card__image"
        />
        <div
          class="images-card__mask"
          style="background-color: rgb(217, 192, 166)"
        ></div>
      </div>
    </div>
    <div class="images-item">
      <div class="images-card">
        <img
          src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw1MTg1MXwxfDF8YWxsfDF8fHx8fHwyfHwxNjE3MTg4MTI0&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400"
          class="images-card__image"
        />
        <div
          class="images-card__mask"
          style="background-color: rgb(217, 192, 166)"
        ></div>
      </div>
    </div>
    <div class="images-item">
      <div class="images-card">
        <img
          src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw1MTg1MXwxfDF8YWxsfDF8fHx8fHwyfHwxNjE3MTg4MTI0&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400"
          class="images-card__image"
        />
        <div
          class="images-card__mask"
          style="background-color: rgb(217, 192, 166)"
        ></div>
      </div>
    </div>
    <div class="images-item">
      <div class="images-card">
        <img
          src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw1MTg1MXwxfDF8YWxsfDF8fHx8fHwyfHwxNjE3MTg4MTI0&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400"
          class="images-card__image"
        />
        <div
          class="images-card__mask"
          style="background-color: rgb(217, 192, 166)"
        ></div>
      </div>
    </div>
    <div class="images-item">
      <div class="images-card">
        <img
          src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw1MTg1MXwxfDF8YWxsfDF8fHx8fHwyfHwxNjE3MTg4MTI0&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400"
          class="images-card__image"
        />
        <div
          class="images-card__mask"
          style="background-color: rgb(217, 192, 166)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.images-container {
    width: 100vw;
    max-width: 1200px;
    padding-bottom: 30px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
@keyframes fadeInUp{ 
    0% {
    opacity: 0;
    transform: translateY(10%) scale(0.9);
}
100% {
    opacity: 1;
    transform: translateY(0%) scale(1.0);
}
}
.images-item {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: fadeInUp;
    width: 33.333%;
    padding: 1%;
}
.images-card {
    width: 100%;
    height: 0;
    padding-bottom: 70%;
    position: relative;
}
.images-card__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
}
.images-card__mask {
    position: absolute;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .8;
}

</style>