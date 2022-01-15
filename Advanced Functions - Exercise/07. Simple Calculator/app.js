function calculator() {

    let [sel1, sel2, resSel] = '';    
    const calculate = {

        add,
        subtract,
        init

    }

    return calculate;

    function add() {

        resSel.value = Number(sel1.value) + Number(sel2.value);

    }

    function subtract() {

        resSel.value = Number(sel1.value) - Number(sel2.value);

    }

    function init(selector1, selector2, resultSelector) {

        sel1 = document.querySelector(selector1);
        sel2 = document.querySelector(selector2);
        resSel = document.querySelector(resultSelector);

    }

}




