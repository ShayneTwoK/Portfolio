new Vue({
  el: '#carousel3dnav',
  data: {
    slides: 8
  },
  components: {
    'carousel-3d': Carousel3d.Carousel3d,
    'slide': Carousel3d.Slide
  }
})
