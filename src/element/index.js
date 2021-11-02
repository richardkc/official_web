import { Carousel, CarouselItem, Button, Message } from "element-ui";
const element = {
  install: function(Vue) {
    Vue.use(Carousel);
    Vue.use(CarouselItem);
    Vue.use(Button);
    Vue.prototype.$message = Message;
  }
};
export default element;
