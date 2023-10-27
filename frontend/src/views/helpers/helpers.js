import { collection , getFirestore , doc, getDoc} from 'firebase/firestore'

function commerce (item) {
   
    item.sort(function (a, b) {
       if (a.precio > b.precio) {
         return 1;
       }
       if (a.precio < b.precio) {
         return -1;
       }
       // a must be equal to b
       return 0;
     });
}

export function countriesSelected(countriesData , itemFilter) {
  const resultadoFiltrado = countriesData.filter(
    (item) => item.country === itemFilter
  );
  return resultadoFiltrado;
}


export const confirmationUser = (props,{...objects}) => {
   if (objects.auth !== null) {
     switch (objects.locationPath) {
       case "/checkform":
        const userSession = {...objects.values , "mail": objects.auth.email}
         sessionStorage.setItem(objects.session, JSON.stringify(userSession));
         break;
        case "/checkform/payments":
          sessionStorage.setItem(objects.session, JSON.stringify(objects.creditCard));
          objects.setCart([]);
          localStorage.removeItem("usersCart");
          break;
      default:
         break;
     }
     objects.functionNav(objects.pageTo);
   } else {
    return props.setOpenModal('pop-up');
   }
}


export const getUsersFirestore = async (id, setUserDatabase, returnUserData = false) => {
  const db = getFirestore();
  const usersCollection = collection(db, "users");
  const currentUserDoc = doc(usersCollection, id);
  const userDoc = await getDoc(currentUserDoc);
  const userData = userDoc.data();

  if (userData) {
    setUserDatabase(returnUserData ? userData : userData.productsLike);
  }
}

export default commerce 

