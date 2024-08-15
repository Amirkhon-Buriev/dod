let mevalar =['olma','banan','uzum','anor',`orik`]

let serchText = prompt(`Qidirayotgan ismimingizni kiriting`)

if (mevalar.includes(serchText)){
    alert(mevalar[mevalar.indox(serchText)])
}else{
    alert('hoy hoshim bu ism contacta yoq')
}

console.log(mevalar)