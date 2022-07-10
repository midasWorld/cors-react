import axios from "axios";

class Cors {
  constructor(baseUrl) {
    this.client = axios.create({
      baseURL: baseUrl,
    });
  }

  async get() {
    const response = await this.client.get("api/cors");
    return response.data.response;
  }

  async post() {
    const response = await this.client.post("api/cors");
    return response.data.response;
  }

  async patch() {
    const response = await this.client.patch("api/cors");
    return response.data.response;
  }

  async delete() {
    const response = await this.client.delete("api/cors");
    return response.data.response;
  }
}

export default Cors;
