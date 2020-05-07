
 
function actualizaCacheDinamico( dynamicCache, req, res){

    if (res.ok) {
        cache.put(req, res.clone());
            return caches.open(dynamicCache).then(cache =>{
        return res.clone();
    });

}else{
    return res;
}
}