function getUrlParam(variable)
{
       var query=window.location.search.substring(1);
       var vars=query.split("&");
       for (var ii=0;ii<vars.length;ii++) {
               var pair=vars[ii].split("=");
               if(pair[0]===variable){
                 return pair[1];
               }
       }
       return('');
}

export default getUrlParam
