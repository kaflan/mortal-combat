export const heroesArrCreate = (number) => {
    return [...Array(number).keys()].map((x) => ({
        id: x
    }));
};


export const iconsHashTable = {
    0: 'free-code-camp',
    1: 'snowflake-o',
    2: 'podcast',
    3: 'asterisk',
    4: 'compass',
    5: 'female',
    6: 'balance-scale'
};
