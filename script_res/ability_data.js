var ABILITIES_ADV = [
    'Air Lock',
    'Battle Armor',
    'Blaze',
    'Chlorophyll',
    'Clear Body',
    'Cloud Nine',
    'Drizzle',
    'Drought',
    'Flash Fire',
    'Forecast',
    'Guts',
    'Huge Power',
    'Hustle',
    'Hyper Cutter',
    'Intimidate',
    'Levitate',
    'Marvel Scale',
    'Overgrow',
    'Pure Power',
    'Rain Dish',
    'Sand Stream',
    'Sand Veil',
    'Shell Armor',
    'Soundproof',
    'Swarm',
    'Swift Swim',
    'Thick Fat',
    'Torrent',
    'Volt Absorb',
    'Water Absorb',
    'White Smoke',
    'Wonder Guard',
    'Damp',
    'Minus',   
    'Plus', 
    'Trace',   
    //NO FUNCTION IN CALCS
    'Arena Trap',
    'Color Change',
    'Compound Eyes',
    'Cute Charm',
    'Early Bird',
    'Effect Spore',
    'Flame Body',
    'Illuminate',
    'Immunity',
    'Inner Focus',  //Has functionality in a later gen
    'Insomnia',
    'Keen Eye',
    'Lightning Rod',    //Has functionality in a later gen
    'Limber',
    'Liquid Ooze',
    'Magma Armor',
    'Magnet Pull',
    'Natural Cure',
    'Oblivious',    //Has functionality in a later gen
    'Own Tempo',    //Has functionality in a later gen
    'Pickup',
    'Poison Point',
    'Pressure',
    'Rock Head',
    'Rough Skin',
    'Run Away',
    'Serene Grace',
    'Shadow Tag',
    'Shed Skin',
    'Shield Dust',
    'Speed Boost',
    'Static',
    'Stench',
    'Sticky Hold',
    'Sturdy',
    'Suction Cups',
    'Synchronize',
    'Truant',
    'Vital Spirit',
    'Water Veil',
];

var ABILITIES_DPP = ABILITIES_ADV.concat([
    'Adaptability',
    'Bad Dreams',
    'Download',
    'Dry Skin',
    'Filter',
    'Flower Gift',
    'Gluttony',
    'Heatproof',
    'Ice Body',
    'Iron Fist',
    'Klutz',
    'Magic Guard',
    'Mold Breaker',
    'Motor Drive',
    'Multitype',
    'Normalize',
    'Poison Heal',
    'Reckless',
    'Scrappy',
    'Simple',
    'Skill Link',
    'Slow Start',
    'Sniper',
    'Snow Cloak',
    'Snow Warning',
    'Solar Power',
    'Solid Rock',
    'Technician',
    'Tinted Lens',
    'Unaware',
    'Quick Feet',
    'Unburden',
    //NO FUNCTIONALITY IN CALCS
    'Aftermath',
    'Anger Point',
    'Anticipation',
    'Forewarn',
    'Frisk',
    'Honey Gather',
    'Hydration',
    'Leaf Guard',
    'No Guard',
    'Rivalry',  //Only implement functionality if demand is a lot
    'Stall',
    'Steadfast',
    'Storm Drain',   //Has functionality in a later gen
    'Super Luck',
    'Tangled Feet',
    'Creator\'s Ward',
]);

var ABILITIES_BW = ABILITIES_DPP.concat([
    
]);

var ABILITIES_XY = ABILITIES_BW.concat([
    
]);

var ABILITIES_SM = ABILITIES_XY.concat([
    
]);

var ABILITIES_SS = ABILITIES_SM.concat([
    
]);

var ABILITIES_SV = ABILITIES_SS.concat([
    
]);

//ABILITIES_XY.splice(ABILITIES_XY.indexOf('Lightning Rod'), 1, 'Lightning Rod');
var ATE_IZE_ABILITIES = [
    'Normalize',
];