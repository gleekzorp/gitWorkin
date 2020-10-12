export const dlContentOne = {
    name: 'Shatered Bloodline',
    killer: 'The Spirit',
    killerPerks: ['Rancor', 'Spirit Fury', 'Haunted Grounds'],
    survivor: 'Adam Francis',
    survivorPerks: ['Autodidact', 'Deliverance', 'Diversion']
    };
export const dlContentTwo = {
    name: 'Demise of the Faithful',
    killer: 'The Plague',
    killerPerks: ['Dark Devotion', 'Infectious Fright', 'Corrupt Intervention'],
    survivor: 'Jane Romero',
    survivorPerks: ['Head On', 'Solidarity', 'Poised']
    };
    
    
    // console.log(Object.values(dlContentOne));
    // console.log(Object.values(dlContentTwo));
    
    
export const sumObject = objNum => Object.values(objNum).reduce((a, b) => a + b);
    
export const objNum = {
        a: 5,
        b: 16,
        c: 8
    }
