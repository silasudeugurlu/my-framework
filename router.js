const routes={ //# den sonraki kısmı verir
   "":HomePage,
    home: HomePage,
    about:AboutPage,
    contact:ContactPage,

    
}
function routeTo(routeName){ //routes objesinden doğru fonksiyonu alır. Eğer routname=home ise bu satır pagefunc=homepage olur
    const pageFunc=routes[routeName]
    const appDiv=document.getElementById("app")//id=app olan divi yakalar.Her componentin html çıktısı buraya yazilir.
    if( typeof pageFunc==="function"){ //eger tanımlıysa o fonksiyonun mesajı döner 
        appDiv.innerHTML=pageFunc()
    }else{ //tanımsızsa 404 sayfa  bulunamadı mesajı döner
        appDiv.innerHTML=`<h1>404</h1><p>Sayfa Bulunamadi</p>`
    }
    }
