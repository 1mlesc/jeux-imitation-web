import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import  environment  from '../../environment';

const Login: React.FC = () => {

	const navigate = useNavigate();

	//Rediriger vers l'authentification Twitch
	const handleTwitchLogin = () => {
		window.location.href = environment.apiUrl+'auth/twitch';
	}

	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		const tokenQueryParams = queryParams.get('token');

		if(tokenQueryParams){
			//Stocker le token dans la localStorage
			localStorage.setItem('token', tokenQueryParams);
			navigate('/home');
		}else{
			const tokenJWT = localStorage.getItem('token');
				if(tokenJWT){
					navigate('/home');
			}
		}
	});

	return (
		<div className="login-container">
			<h1>Login avec Twitch</h1>
			<button onClick={handleTwitchLogin} className="twitch-login-button">
				Se connecter avec Twitch
			</button>
		</div>
	)


	}

export default Login