class Database{
    constructor(data){
        if(Database.exist){
            return Database.instance;
        }
        
        this._data = data;
        Database.instance = this;
        Database.exist = true;
        return this;
    }

    getData(){
        return this._data;
    }

    setData(data) {
        this._data = data;
    }
}