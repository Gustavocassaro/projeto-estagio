function masc_tel (obj) {
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