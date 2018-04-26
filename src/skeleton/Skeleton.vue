<template>
  <div>
    <!-- swipe -->
    <div class="swiper-container"></div>

    <!-- icon -->
    <div class="icon-container">
      <div class="icon-item">
        <div></div>
        <h3></h3>
      </div>
      <div class="icon-item">
        <div></div>
        <h3></h3>
      </div>
      <div class="icon-item">
        <div></div>
        <h3></h3>
      </div>
      <div class="icon-item">
        <div></div>
        <h3></h3>
      </div>
      <div class="icon-item">
        <div></div>
        <h3></h3>
      </div>
      <div class="icon-item">
        <div></div>
        <h3></h3>
      </div>
      <div class="icon-item">
        <div></div>
        <h3></h3>
      </div>
      <div class="icon-item">
        <div></div>
        <h3></h3>
      </div>
    </div>


    <!-- 推荐板块1 -->
    <div class="recommend-one">
      <div class="left"></div>
      <div class="right">
        <div class="top"></div>
        <div class="bottom"></div>
      </div>
    </div>

        <!-- 推荐banner -->
    <div class="reommend-banner">
      <div class="content"></div>
    </div>

    <div class="timeline-item">
      <div class="animated-background">
        <div class="background-masker header-top"></div>
        <div class="background-masker header-left"></div>
        <div class="background-masker header-right"></div>
        <div class="background-masker header-bottom"></div>
        <div class="background-masker subheader-left"></div>
        <div class="background-masker subheader-right"></div>
        <div class="background-masker subheader-bottom"></div>
      </div>
      <div class="animated-background">
        <div class="background-masker header-top"></div>
        <div class="background-masker header-left"></div>
        <div class="background-masker header-right"></div>
        <div class="background-masker header-bottom"></div>
        <div class="background-masker subheader-left"></div>
        <div class="background-masker subheader-right"></div>
        <div class="background-masker subheader-bottom"></div>
      </div>
      <div class="animated-background">
        <div class="background-masker header-top"></div>
        <div class="background-masker header-left"></div>
        <div class="background-masker header-right"></div>
        <div class="background-masker header-bottom"></div>
        <div class="background-masker subheader-left"></div>
        <div class="background-masker subheader-right"></div>
        <div class="background-masker subheader-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.swiper-container {
  width: 100%;
  height: 145px;
  background: linear-gradient(to right, #eeeeee 8%, #eeeeee 18%, #eeeeee 33%);
}

.icon-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
}

.icon-container .icon-item {
  width: 25%;
  margin-bottom: 7px;
}

.icon-container .icon-item div {
  width: 44px;
  height: 44px;
  margin: 0 auto;
  border-radius: 50%;
  background: linear-gradient(to right, #eeeeee 8%, #eeeeee 18%, #eeeeee 33%);
}

.icon-container .icon-item h3 {
  width: 44px;
  height: 13px;
  margin: 4px auto 0;
  background: linear-gradient(to right, #eeeeee 8%, #eeeeee 18%, #eeeeee 33%);
}

.recommend-one {
  display: flex;
  padding: 10px;
}

.recommend-one .left {
  width: 220px;
  height: 160px;
  margin-right: 7px;
  background: linear-gradient(to right, #eeeeee 8%, #eeeeee 18%, #eeeeee 33%);
}

.recommend-one .right {
  flex: 1;
}

.recommend-one .right .top,
.recommend-one .right .bottom {
  height: 77px;
  margin-bottom: 6px;
  background: linear-gradient(to right, #eeeeee 8%, #eeeeee 18%, #eeeeee 33%);
}

.recommend-one .right .right {
  margin-bottom: 0;
}

.reommend-banner {
  height: 100px;
  padding: 0 10px 10px;
  box-sizing: border-box;
}
.reommend-banner .content {
  width: 100%;
  height: 100px;
  background: linear-gradient(to right, #eeeeee 8%, #eeeeee 18%, #eeeeee 33%);
}

.timeline-item {
  background: #fff;
  /* border: 1px solid; */
  /* border-color: #e5e6e9 #dfe0e4 #d0d1d5; */
  /* border-radius: 3px; */
  padding: 12px;
  margin: 10px auto;
  max-width: 472px;
  min-height: 90px;
}

@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.animated-background {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  height: 40px;
  position: relative;
  margin-bottom: 10px;
}

.background-masker {
  background: #fff;
  position: absolute;
}

/* Every thing below this is just positioning */

.background-masker.header-top,
.background-masker.header-bottom,
.background-masker.subheader-bottom {
  top: 0;
  left: 40px;
  right: 0;
  height: 10px;
}

.background-masker.header-left,
.background-masker.subheader-left,
.background-masker.header-right,
.background-masker.subheader-right {
  top: 10px;
  left: 40px;
  height: 8px;
  width: 10px;
}

.background-masker.header-bottom {
  top: 18px;
  height: 6px;
}

.background-masker.subheader-left,
.background-masker.subheader-right {
  top: 24px;
  height: 6px;
}

.background-masker.header-right,
.background-masker.subheader-right {
  width: auto;
  left: 300px;
  right: 0;
}

.background-masker.subheader-right {
  left: 230px;
}

.background-masker.subheader-bottom {
  top: 30px;
  height: 10px;
}

.background-masker.content-top,
.background-masker.content-second-line,
.background-masker.content-third-line,
.background-masker.content-second-end,
.background-masker.content-third-end,
.background-masker.content-first-end {
  top: 40px;
  left: 0;
  right: 0;
  height: 6px;
}

.background-masker.content-top {
  height: 20px;
}

.background-masker.content-first-end,
.background-masker.content-second-end,
.background-masker.content-third-end {
  width: auto;
  left: 380px;
  right: 0;
  top: 60px;
  height: 8px;
}

.background-masker.content-second-line {
  top: 68px;
}

.background-masker.content-second-end {
  left: 420px;
  top: 74px;
}

.background-masker.content-third-line {
  top: 82px;
}

.background-masker.content-third-end {
  left: 300px;
  top: 88px;
}
</style>
