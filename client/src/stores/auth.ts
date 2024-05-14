// --- Vue Import ---
import { ref } from 'vue';
// --- Pinia Import ---
import { defineStore } from 'pinia';
// --- JWT Decode Import ---
import { jwtDecode } from 'jwt-decode';
// --- Import Types ---
import type { JwtPayload } from '@/types/JwtPayload.ts';
//NOTE - Define Store
export const useAuthStore = defineStore('auth', ()=>{
    const token = ref("");
    const user= ref({})
    const localToken = localStorage.getItem('token');
    if (localToken && localToken !== null && localToken !== undefined && localToken !== "") {
            const decoded = jwtDecode<JwtPayload>(localToken);
            token.value = localToken;
            user.value = {
                _id: decoded._id,
                name: decoded.name,
                surname: decoded.surname,
                email: decoded.email,
            };
    }
    return { token, user}
})