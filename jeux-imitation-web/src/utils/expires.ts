//Fonction qui permet de savoir si un timestamp est expiré ou non
const isExpires = (timestamps: number): boolean => {

  //Date actuelle convertie string & Date d'expiration en Date convertie en string
  const dateNow = new Date().toString();
  const dateExp = new Date(timestamps * 1000).toString();
  //Si la date actuelle est inférieure à la date d'expiration, le token est expiré
  return dateNow < dateExp ?  true : false;
}

export default isExpires;