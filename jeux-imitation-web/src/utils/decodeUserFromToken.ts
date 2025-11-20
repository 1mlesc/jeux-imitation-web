import type { User } from '../services/User';
import { jwtDecode } from 'jwt-decode';

//Décoder le token JWT pour récupérer les informations de l'utilisateur
const decodeUserFromToken = (token: string): any => {
      try {
        const decoded = jwtDecode<User>(token);
        return decoded;
      } catch (err) {
        console.error('Error decoding token:', err);
      }
    }

export default decodeUserFromToken;