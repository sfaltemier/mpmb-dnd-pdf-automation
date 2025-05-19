var iFileName = "Homebrew - Akaviri Longbow.js";
/*  iFileName                // OPTIONAL // name displayed in the import dialog */

RequiredSheetVersion("13.2.0");
/*  RequiredSheetVersion      // OPTIONAL // require sheet v13.2.0 or newer */

WeaponsList["akaviri longbow"] = {
    name : "Akaviri Longbow",
    /*  name                      // REQUIRED // display name of the weapon */

    sortname : "Longbow, Akaviri",
    /*  sortname                  // OPTIONAL // custom sort name in menu so it appears correctly */

    nameAlt : ["Longbow, Akaviri"],
    /*  nameAlt                   // OPTIONAL // alternative dropdown names */

    source : ["HB", 0],
    /*  source                    // REQUIRED // homebrew source */

    defaultExcluded : true,
    /*  defaultExcluded           // OPTIONAL // exclude by default in source selector */

    regExpSearch : /^(?=.*akaviri)(?=.*longbow).*$/i,
    /*  regExpSearch              // REQUIRED // regex to recognize this weapon */

    type : "Martial",
    /*  type                      // REQUIRED // martial weapon category */

    list : "ranged",
    /*  list                      // OPTIONAL // group under ranged weapons dropdown */

    ability : 2,
    /*  ability                   // REQUIRED // Dexterity (2) for bows */

    abilitytodamage : true,
    /*  abilitytodamage           // REQUIRED // add Dex modifier to damage */

    damage : [1, 8, "piercing"],
    /*  damage                    // REQUIRED // 1d8 piercing damage */

    range : "150/600 ft",
    /*  range                     // REQUIRED // normal/long range in feet */

    description : "Ammunition, heavy, two-handed, magical",
    /*  description               // REQUIRED // weapon properties */

    tooltip : "The Akaviri Longbow is a finely crafted weapon of the Imperial Blades. This bow counts as magical for overcoming damage resistances.",
    /*  tooltip                   // OPTIONAL // flavor text in Acrobat tooltip */

    isRangedWeapon : true,
    /*  isRangedWeapon            // OPTIONAL // ensure this counts as ranged for feats like Sharpshooter */

    isMagicWeapon : true,
    /*  isMagicWeapon             // OPTIONAL // counts as magical for resistances & features */

    isAlwaysProf : true,
    /*  isAlwaysProf              // OPTIONAL // force proficiency bonus always (uncomment if needed) */

    modifiers : [2, 2],
    /*  modifiers                 // OPTIONAL // +2 to hit and +2 to damage (magical bonus) */

    ammo : "arrow",
    /*  ammo                      // OPTIONAL // uses arrows as ammunition */

    weight : 2,
    /*  weight                    // OPTIONAL // assumed 2 lb weight of a longbow */

    // special : false,
    /*  special                   // OPTIONAL // no extra special property beyond magical */

    // dc : false,
    /*  dc                        // OPTIONAL // uses To Hit, not a DC-based effect */

    // monkweapon : false,
    /*  monkweapon                // OPTIONAL // not a monk weapon */

    // isNotWeapon : false,
    /*  isNotWeapon               // OPTIONAL // this is a weapon, not non-weapon attack */

    // baseWeapon : "",
    /*  baseWeapon                // OPTIONAL // not based on another weapon entry */

    // selectNow : false,
    /*  selectNow                 // OPTIONAL // not auto-selected on import */

    // value : 500,
    /*  value                     // Not supported in WeaponsList; use MagicItemsList or notes */

    // attunement : false,
    /*  attunement                // Not tracked in WeaponsList; managed via MagicItemsList */
};
