import axios from "axios";

class UserService {
  private URL = "http://localhost:3000/api/users";

  async registerUser(email: string, password: string) {
    try {
      const res = await axios.post(`${this.URL}/register`, {
        email,
        password,
      });
      console.log(res.data);

      return res.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || error.message);
      }
      throw new Error("Unknown error");
    }
  }

  async loginUser(email: string, password: string) {
    try {
      const res = await axios.post(`${this.URL}/login`, { email, password });
      const token = res.data.token;
      const userId = res.data.userId;
      return { token, userId };
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || error.message);
      }
      throw new Error("Unknown error");
    }
  }
}

export default new UserService();
