class BallFactory{
    constructor(){
        this.createBall = function(type){
            let ball;
            if(type === 'football' || type === 'soccer') ball = new Football();
            else if(type === 'basketball') ball = new Basketball();
            ball.roll = function(){
                return `The ${this._type} is rolling.`;
            };
            return ball;
        };
    }
}

class Football{
    constructor(){
        this._type = 'football';
        this.kick = function(){
            return "you kicked the football.";
        };
    }
}

class Basketball{
    constructor(){
        this._type = 'basketball';
        this.bounce = function(){
            return "You bounced the basketball.";
        };
    }
}

