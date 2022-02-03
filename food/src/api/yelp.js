import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer UZYwjuUJirW74X8oNqwzb7klaY0WZ_iNZlZOKGio1RH6jFXFa0AEcIjNo1l2yg1wPUp7RRHELGfqnah2pRqVHun92k3NjNf2SUKqgjlpSa8Cl3wxF1fkczXMPy76YXYx",
  },
});
