const CACHE_NAME= "cache_v1";
const UrlsToCache =[
  '/index.html',
  '/assets/logo.jpg',
  '/assets/icon',
  '/nigeria.png',
  '/world.png',
  '/guardian.png'



]
self.addEventListener('install', installer=>{
console.log('installing');
const done = async ()=>{
  const cache = await caches.open(CACHE_NAME);
  return cache.addAll(UrlsToCache)
}

  installer.waitUntil(done())

})

self.addEventListener('activate', activator=>{
const currentCache = [CACHE_NAME];
console.log('activating');
const done = async()=>{
  const names = await caches.keys();
  return promise.all(names.map(name=>{
    if(!currentCache.includes(name)){
      return caches.delete(name);
    }
  }))
}


  activator.waitUntil(done())
})

self.addEventListener('fetch', fetchEvent=>{
  console.log('i am in fetch');
  const url = fetchEvent.request.url;
getResponse: async(request)=>{
  let response;
  response = await caches.match(request.url);
  if(response && response.status == 200){
console.log('File in cache, returning cached version');
    return response;
  }
  try{
    response = await fetch(request);
    return caches.match('/assets/pagenotfound.html')
  }catch(e){
    return caches.match('/assets/offline.html');

  }
  const clone = response.clone();
  const cache = await caches.open(CACHE_NAME);
  cache.put(url, clone);
  return response;
}



  fetchEvent.respondWith(getResponse(fetchEvent.request));
})
