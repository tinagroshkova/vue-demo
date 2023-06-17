const events = new Map();

export default {
    /* eslint-disable */
    $on(eventName, fn){
        if(!events.has(eventName)){
            events.set(eventName, []);
        }
        events.get(eventName).push(fn);
    },
    $off(eventName, fn){
        throw { message: 'Not implemented'};
    },
    $emit(eventName, data){
        if (events.has(eventName)){
            events.get(eventName).forEach(fn => fn(data));
        }
    }
}