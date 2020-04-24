import {robots} from './robots';

export const func = () => {
    let i = Math.ceil(Math.random() * 10)
    return robots[i]
}

export default func;