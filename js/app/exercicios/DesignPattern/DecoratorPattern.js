class Book{
    constructor(title, author, price){
        this._title = title;
        this._author = author;
        this.price = price;
    }

    getDetails(){
        return `${this._title} by ${this._author}`;
    }
}

//decorator 1
function giftWrap(book){
    book.isGiftWrapped = true;
    book.unwrap = function(){
        return `unwrapped ${book.getDetails()}`; 
    };

    return book;
}

//decorator 2
function hardbindbook(book){
    book.isHardBound = true;
    book.price += 5;
    return book;
}