// --- Import Vue ---
import { ref,watch } from "vue";
// --- Import Pinia ---
import { defineStore } from "pinia";

//NOTE - Use Store
export const useAuthStore = defineStore("auth", () => {
  const token = ref(null);
  const user = ref({
    _id: "",
    email: "",
    name: "",
    surname: "",
    exp: "",
  });

  const setToken = (newToken) => {
    token.value = newToken;
  }

  const setUser = (newUser) => {
    user.value = newUser;
  }

  const logout = () => {
    token.value = null;
    user.value = {
      _id: "",
      email: "",
      name: "",
      surname: "",
      exp: "",
    };
  }

  return {
    token,
    user,
    setToken,
    setUser,
    logout,
  }
},{persist: true});
