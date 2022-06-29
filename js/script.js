function masc_tel(obj) {
    if (obj.value.length == 0) {
        obj.value += "("
    }
    if (obj.value.length == 3) {
        obj.value += ")"
    }
    if (obj.value.length == 9) {
        obj.value += "-"
    }


}
function masc_cpf(this) {
    if (obj2.value.length == 4) {
        obj2.value += "."
    }
    if (obj2.value.length == 8){
        obj2.value += "."
    }
    if (obj2.value.length == 12) {
        boj2.value += "-"
    }
}