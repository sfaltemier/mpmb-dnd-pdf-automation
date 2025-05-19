// Homebrew WeaponsList entries for the three acid attacks
var iFileName = 'Homebrew - Acid Attacks.js';
/*  iFileName                // OPTIONAL // file name for acid attacks */

RequiredSheetVersion('13.2.0');

// ---------- Acid Bolt ----------
WeaponsList['acid bolt'] = {
  name: 'Acid Bolt',
  /*  name                      // REQUIRED // attack name */

  source: ['HB', 0],
  /*  source                    // REQUIRED // homebrew source */

  defaultExcluded: true,
  /*  defaultExcluded           // OPTIONAL // hidden by default */

  regExpSearch: /^(?=.*acid)(?=.*bolt).*$/i,
  /*  regExpSearch              // REQUIRED // match "Acid Bolt" */

  type: 'AlwaysProf',
  /*  type                      // REQUIRED // always proficient */

  ability: 4,
  /*  ability                   // REQUIRED // Intelligence for spell attacks */

  abilitytodamage: false,
  /*  abilitytodamage           // REQUIRED // no ability modifier to damage */

  damage: [1, 10, 'acid'],
  /*  damage                    // REQUIRED // 1d10 acid */

  range: '120 ft',
  /*  range                     // REQUIRED // attack range */

  description: 'Ranged spell attack, costs 1 charge.',
  /*  description               // REQUIRED // summary */

  isMagicWeapon: true,
  /*  isMagicWeapon             // OPTIONAL // counts as magical */
};

// ---------- Acid Ray ----------
WeaponsList['acid ray'] = {
  name: 'Acid Ray',
  /*  name                      // REQUIRED // attack name */

  source: ['HB', 0],
  defaultExcluded: true,
  regExpSearch: /^(?=.*acid)(?=.*ray).*$/i,
  type: 'AlwaysProf',
  ability: 4,
  abilitytodamage: false,
  damage: [2, 6, 'acid'],
  range: '120 ft',
  description:
    'Ranged spell attack, costs 3 charges. You can spend 2 extra charges to fire one more ray.',
  isMagicWeapon: true,
};

// ---------- Acid Nova ----------
WeaponsList['acid nova'] = {
  name: 'Acid Nova',
  source: ['HB', 0],
  defaultExcluded: true,
  regExpSearch: /^(?=.*acid)(?=.*nova).*$/i,
  type: 'AlwaysProf',
  ability: 0,
  abilitytodamage: false,
  dc: true,
  modifiers: ['dc15', ''],
  damage: [2, 10, 'acid'],
  range: 'Self (10 ft radius)',
  description: 'Costs 5 charges; creatures in area make DC 15 Dex save for half.',
  isMagicWeapon: true,
};

// Homebrew MagicItemsList entry for Goblin Staff of Acid
var iFileName = 'Homebrew - Goblin Staff of Acid.js';
RequiredSheetVersion('13.2.3');

MagicItemsList['goblin staff of acid'] = {
  name: 'Goblin Staff of Acid',
  /*  name                      // REQUIRED // display name */

  source: ['HB', 0],
  defaultExcluded: true,
  type: 'staff',
  rarity: 'rare',
  attunement: true,

  // Track charges automatically
  usages: 10,
  recovery: 'dawn',
  limfeaname: 'Staff Charges',

  // Push acid attacks into Attack menu
  weaponOptions: {
    regExpSearch: /goblin staff of acid/i,
    weaponsAdd: ['acid bolt', 'acid ray', 'acid nova'],
  },

  description:
    'This staff has 10 charges, regaining 1d6+4 at dawn. Use the Attack menu to cast Acid Bolt, Acid Ray, or Acid Nova.',
  /*  description               // REQUIRED // concise summary */
};
