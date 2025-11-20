import type { User } from "../services/User";
import isExpires from "../utils/expires";
import decodeUserFromToken from "../utils/decodeUserFromToken";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Image from "../components/Image";



interface HomeProps {
    setUser: (user: User | null) => void;
    user: User | null;
}
const Home: React.FC<HomeProps> = ({ setUser, user }) => {

    const navigate = useNavigate();

    //Récupérer l'utilisateur depuis le token stocké et le set dans le state User
    useEffect(() => {
        const tokenJWT = localStorage.getItem('token');
        if(tokenJWT){
	        const decodedUser = decodeUserFromToken(tokenJWT);
            if(decodedUser && isExpires(decodedUser.exp)){
                setUser(decodedUser);
            }else{
                localStorage.removeItem('token');
                setUser(null);
                navigate('/login');
            }
        }else{
            navigate('/login');
        }
    }, [ setUser, navigate]);
   

    return (
        <>
        {user?.username}

        <Image src={user?.avatar} alt="User avatar"/>

        </>
    )
}

export default Home;