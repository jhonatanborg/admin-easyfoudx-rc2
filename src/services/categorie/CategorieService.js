import http from "../config";

export default {
  getCategorie: () => {
    return http.get("categorias");
  },
  postCategorie: (categorie) => {
    return http.post("categorias", categorie);
  },
  putCategorie: (id, name) => {
    return http.put(`categorias/${id}`, {
      categoria: name,
    });
  },
  deleteCategorie: (id) => {
    return http.delete(`categorias/${id}`);
  },
};
