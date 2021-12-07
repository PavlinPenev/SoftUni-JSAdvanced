function pieceOfPie(arrayPies, targetPie1, targetPie2) {
    let targetPie1Idx = arrayPies.indexOf(targetPie1);
    let targetPie2Idx = arrayPies.indexOf(targetPie2);

    
    return arrayPies.slice(targetPie1Idx, targetPie2Idx + 1);
}
console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));
console.log(pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));