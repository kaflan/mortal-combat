export const heroesArrCreate = (number) => {
    return [...Array(number).keys()].map((x) => (x));
};


export const iconsArr = ['free-code-camp', 'snowflake-o', 'podcast', 'asterisk', 'compass', 'female', 'balance-scale'];

export const upArrow = 38;
export const downArrow = 40;
export const leftArrow = 37;
export const rightArrow = 39;
export const confirmThePick = 13;
export const upRow = 18;
export const downRow = 6;
export const step = 1;
export const coordinates = (x, l) => ((x % l) + l) % l;
export const defaultHeroLength = 24;
// keycodes

export const q = 81;
export const w = 87;
export const e = 69;
export const r = 82;
export const t = 84;
export const y = 89;
