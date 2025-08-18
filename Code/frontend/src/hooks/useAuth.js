import api from "../services/api.service";
import { useState, useEffect } from "react";

export default function useCreateUser() {  // Hook para criar um usuário ao carregar o componente. é necessário o use no início do nome do hook.
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function createNewUser() {
            setLoading(true);
            try {
                const response = await api.post("/", {});
                setUser(response.data);
            } catch (error) {
                console.error("Error creating user:", error);
            } finally {
                setLoading(false);
            }
        }

        createNewUser();

    }, []);
}
//codigo de exemplo para criar um usuário ao carregar o componente.