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

export default commerce