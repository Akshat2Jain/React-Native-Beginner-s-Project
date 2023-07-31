import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer FLpRaxMPqFcJmL9J7ydxufVni1rhJIbnnINAI5Z677fVCj-uw2TFmyBhJkQ2jUBWx4dKFa9CPF_0op8aVUk6KbMqedNe6-QVxCbv5_Wnj7wzwDtOXqJVYPcIMVG1ZHYx",
  },
});
