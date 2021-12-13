function constructionCrew(obj) {
    if(obj.dizziness) {
        obj.dizziness = false;
        obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
    }
    return obj;
}
console.log(constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }));
console.log(constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }));
console.log(constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }));