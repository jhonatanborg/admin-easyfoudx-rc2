import http from "../config";

export default {
  listCarousel: () => {
    return http.get("carrossel");
  },
  postCarousel: (carousel) => {
    return http.post("carrossel", carousel);
  },
  deleteCarousel: (id) => {
    return http.delete(`carrossel/${id}`);
  },
};
