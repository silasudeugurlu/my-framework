function getRouteFromHash(){//# den sonraki kısmı verir
    return location.hash.slice(1)//# silinir
}
window.addEventListener("load",()=>{//sayfa ilk yüklendiğinde tetiklenir mesela about varsa aboutpage componenti tetiklenir
    const route=getRouteFromHash()
    routeTo(route)
});
window.addEventListener("hashchange",()=>{
    const route=getRouteFromHash()
    routeTo(route)
});
