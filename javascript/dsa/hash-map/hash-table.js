class Hash {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.loadFactor = 0.75;
        this.table = new Array(this.capacity)
    }


    hash(key) {
        let total = 0;
        for(let i = 0;i<key.length;i++) {
            total = (total + (31*key.charCodeAt(i))) % this.capacity;
        }
        return total;
    }

    set(key, value) {
        if((this.size/this.capacity)>this.loadFactor) rehash()
        let index = this.hash(key);
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameKeyItem = this.table[index].find((item) => item[0] === key);
            if(sameKeyItem) {
                sameKeyItem[1] = value;
            }else{
                this.table[index].push([key,value])
            }
        }
        this.size++;
    }

    get(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            let sameKeyItem = bucket.find((item) => item[0] === key)
            if(sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined;
    }

    remove(key) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket) {
            let sameKeyItem = bucket.find((item) => item[0] === key) ;
            bucket.splice(bucket.indexOf(sameKeyItem),1);
            this.size--;
        }
    }


    rehash(){
        this.capacity *= 2;
        let oldTable = this.table;
        this.table = new Array(this.capacity);
        this.size = 0;
        for(let bucket of oldTable) {
            if(bucket){
                for(let [key,value] of bucket){
                    this.set(key,value);
                }
            }
        }
    }

}