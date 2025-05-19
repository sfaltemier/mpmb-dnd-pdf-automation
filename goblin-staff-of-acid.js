var iFileName = 'goblin-staff-of-acid.js';
/*  iFileName                // OPTIONAL // name displayed in the import dialog */

RequiredSheetVersion('13.2.3');
/*  RequiredSheetVersion      // OPTIONAL // require sheet v13.2.3 or newer */

MagicItemsList['goblin staff of acid'] = {
  name: 'Goblin Staff of Acid',
  /*  name                      // REQUIRED // display name of the magic item */

  // sortname : "Staff, Goblin Acid",
  /*  sortname                  // OPTIONAL // custom sort name in menu; default works */

  // nameAlt : ["Staff of Acid, Goblin"],
  /*  nameAlt                   // OPTIONAL // alt dropdown names; not needed */

  source: ['HB', 0],
  /*  source                    // REQUIRED // homebrew source HB */

  defaultExcluded: true,
  /*  defaultExcluded           // OPTIONAL // exclude by default in source selection */

  type: 'staff',
  /*  type                      // REQUIRED // item category */

  rarity: 'rare',
  /*  rarity                    // REQUIRED // rarity of the magic item */

  attunement: true,
  /*  attunement                // OPTIONAL // requires attunement */

  weight: 4,
  /*  weight                    // OPTIONAL // weight in lb; unspecified */

  // notLegalAL : false,
  /*  notLegalAL                // OPTIONAL // AL legality; homebrew */

  // magicItemTable : "H",
  /*  magicItemTable            // OPTIONAL // AL table; none */

  // storyItemAL : false,
  /*  storyItemAL               // OPTIONAL // AL story item; none */

  // allowDuplicates : false,
  /*  allowDuplicates           // OPTIONAL // copies limited; default single */

  usages: 10,
  /*  usages                    // OPTIONAL // number of charges tracked as limited feature */

  recovery: 'dawn',
  /*  recovery                  // OPTIONAL // recharges at dawn */

  limfeaname: 'Staff Charges',
  /*  limfeaname                // OPTIONAL // custom limited feature name */

  description:
    'This staff has a maximum of 10 charges. At each dawn, it regains 1d6 + 4 charges.\n\n' +
    'Acid Bolt — Cost: 1 charge; Action: 1 action; Range: 120 ft. You hurl a mote of acid at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 acid damage. You can spend an extra charge to inflict 2d10 acid damage.\n\n' +
    'Acid Ray — Cost: 3 charges; Action: 1 action; Range: 120 ft. You create three rays of acid and hurl them at targets within range. You can direct them at one target or several. Add your proficiency bonus and Intelligence modifier to your hit rolls. On a hit, the target takes 2d6 acid damage. You can spend two additional charges to hurl one more ray.\n\n' +
    'Acid Nova — Cost: 5 charges; Action: 1 action; Range: Self (10-foot radius). A ring of acid erupts from the staff. Each creature within range must make a DC 15 Dexterity saving throw, taking 2d10 acid damage on a failed save, or half as much on success. You can spend three additional charges to add 1d10 acid damage.',
  /*  description               // REQUIRED // main description field */

  // descriptionLong : "",
  /*  descriptionLong           // OPTIONAL // overflow page description; not used */
};
