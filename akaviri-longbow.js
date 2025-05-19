var iFileName = 'Homebrew - Akaviri Longbow.js';
/*  iFileName                // OPTIONAL // name displayed in the import dialog */

RequiredSheetVersion('13.2.0');
/*  RequiredSheetVersion      // OPTIONAL // require sheet v13.2.0 or newer */

WeaponsList['akaviri longbow'] = {
  name: 'Akaviri Longbow',
  /*  name                      // REQUIRED // display name of the weapon */

  // nameAlt : ["Longbow, Akaviri"],
  /*  nameAlt                   // OPTIONAL // alt dropdown names; commented out because not needed */

  source: ['HB', 0],
  /*  source                    // REQUIRED // custom homebrew source */

  defaultExcluded: true,
  /*  defaultExcluded           // OPTIONAL // exclude by default in source selector */

  regExpSearch: /^(?=.*akaviri)(?=.*longbow).*$/i,
  /*  regExpSearch              // REQUIRED // regex to recognize this weapon by name */

  type: 'Martial',
  /*  type                      // REQUIRED // martial weapon category */

  ability: 2,
  /*  ability                   // REQUIRED // Dexterity (2) for bows */

  abilitytodamage: true,
  /*  abilitytodamage           // REQUIRED // add Dex modifier to damage */

  damage: [1, 8, 'piercing'],
  /*  damage                    // REQUIRED // 1d8 piercing damage */

  range: '150/600 ft',
  /*  range                     // REQUIRED // normal/long range in feet */

  description: 'Heavy, ammunition, two-handed, magical damage',
  /*  description               // REQUIRED // weapon properties */

  tooltip:
    'The Akaviri Longbow is a finely crafted weapon of the Imperial Blades. This bow counts as magical for overcoming damage resistances.',
  /*  tooltip                   // OPTIONAL // flavor text in Acrobat tooltip */

  // special : false,
  /*  special                   // OPTIONAL // no "special" property beyond magical count */

  // list : "ranged",
  /*  list                      // OPTIONAL // grouping; omitted since default grouping works */

  weight: 2,
  /*  weight                    // OPTIONAL // assumed 2 lb weight of a longbow */

  // dc : false,
  /*  dc                        // OPTIONAL // uses To Hit, not a DC-based effect */

  modifiers: [2, 2],
  /*  modifiers                 // OPTIONAL // +2 bonus to hit and +2 to damage */

  // monkweapon : false,
  /*  monkweapon                // OPTIONAL // not a monk weapon */

  isMagicWeapon: true,
  /*  isMagicWeapon             // OPTIONAL // counts as magical for resistances & features */

  // isNotWeapon : false,
  /*  isNotWeapon               // OPTIONAL // this is a weapon, not non-weapon attack */

  // isAlwaysProf : false,
  /*  isAlwaysProf              // OPTIONAL // proficiency determined normally */

  ammo: 'arrow',
  /*  ammo                      // OPTIONAL // uses arrows as ammunition */

  // SpellsList : "",
  /*  SpellsList                // OPTIONAL // not linked to a spell list */

  // useSpellcastingAbility : false,
  /*  useSpellcastingAbility    // OPTIONAL // uses weapon ability, not spellcasting */

  // useSpellMod : "",
  /*  useSpellMod               // OPTIONAL // no fixed spellcasting entity */

  // baseWeapon : "",
  /*  baseWeapon                // OPTIONAL // not based on another weapon entry */

  // selectNow : false,
  /*  selectNow                 // OPTIONAL // not auto-selected on import */

  // value : 500,
  /*  value                     // Not supported in WeaponsList; use MagicItemsList or notes */

  // attunement : false,
  /*  attunement                // Not tracked in WeaponsList; managed via MagicItemsList */
};
