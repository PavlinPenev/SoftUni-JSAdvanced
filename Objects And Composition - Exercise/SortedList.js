function createSortedList() {
    
    const SORTED_REPOSITORY = [];
        
    return {
        add(element){
            SORTED_REPOSITORY.push(element);
            SORTED_REPOSITORY.sort((a, b) => a - b);
        },

        remove(index){
            if(index >= 0 && index < SORTED_REPOSITORY.length) {
                SORTED_REPOSITORY.splice(index, 1);
                SORTED_REPOSITORY.sort((a, b) => a - b);
            }
        },
        get(index){
            if (index < 0 || index >= SORTED_REPOSITORY.length) {
                throw new Error(`Index doesn't exist`);
            } 
            return SORTED_REPOSITORY[index];
        },
        get size() {
            return SORTED_REPOSITORY.length;
        }
    }
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);