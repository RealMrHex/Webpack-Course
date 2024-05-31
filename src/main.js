import logger from "./logger.js";

logger('Hello Internet!');
logger('Hello World!');
logger('Hello!');

class Car {
    startEngine()
    {
        console.log('engine started');
    }
}


const ford = new Car();
ford.startEngine();