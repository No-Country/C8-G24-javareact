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
          break;
      default:
         break;
     }
     objects.functionNav(objects.pageTo);
   } else {
    return props.setOpenModal('pop-up');
   }
}

export default commerce 

