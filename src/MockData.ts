
interface Stash {
    // Name
    stash: string,
    stashType: "PremiumStash",
    items: Item[],
    // For now "ignore" other properties
    [others: string]: any;
}

interface Item {
    name: string,
    // Size in the tab
    w: number,
    h: number,
    // Position in the tab
    x: number,
    y: number,
    // URL of the item
    icon: string,
    // For now "ignore" other properties
    [others: string]: any;
}

export const StaticStash: Stash = {
    "id": "6e744b0f76179835e1f681ce81c513ea190cb021b34eaacafe4c3d4f6990395f",
    "public": true,
    "accountName": "5a4oK",
    "lastCharacterName": "opa_I",
    "stash": "What i need",
    "stashType": "PremiumStash",
    "league": "Hardcore",
    "items": [
        {
            "verified": false,
            "w": 2,
            "h": 4,
            "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL1NhcmtoYW1zUmVhY2giLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/89bf0cff0b/SarkhamsReach.png",
            "league": "Hardcore",
            "id": "176b5e6f7af0a5bb4b48d7fdafa47501a179f4ea095815a58c82c4b5244b3cdb",
            "sockets": [
                {
                    "group": 0,
                    "attr": "D",
                    "sColour": "G"
                }
            ],
            "name": "Roth's Reach",
            "typeLine": "Recurve Bow",
            "baseType": "Recurve Bow",
            "identified": true,
            "ilvl": 71,
            "note": "~price 10 exa",
            "properties": [
                {
                    "name": "Bow",
                    "values": [

                    ],
                    "displayMode": 0
                },
                {
                    "name": "Quality",
                    "values": [
                        [
                            "+17%",
                            1
                        ]
                    ],
                    "displayMode": 0,
                    "type": 6
                },
                {
                    "name": "Physical Damage",
                    "values": [
                        [
                            "28-83",
                            1
                        ]
                    ],
                    "displayMode": 0,
                    "type": 9
                },
                {
                    "name": "Critical Strike Chance",
                    "values": [
                        [
                            "6.70%",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 12
                },
                {
                    "name": "Attacks per Second",
                    "values": [
                        [
                            "1.31",
                            1
                        ]
                    ],
                    "displayMode": 0,
                    "type": 13
                }
            ],
            "requirements": [
                {
                    "name": "Level",
                    "values": [
                        [
                            "18",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 62
                },
                {
                    "name": "Dex",
                    "values": [
                        [
                            "65",
                            0
                        ]
                    ],
                    "displayMode": 1,
                    "type": 64
                }
            ],
            "explicitMods": [
                "68% increased Physical Damage",
                "5% increased Attack Speed",
                "Skills Chain +1 times",
                "30% increased Projectile Speed",
                "34% increased Elemental Damage with Attack Skills"
            ],
            "flavourText": [
                "\"Exiled to the sea; what a joke. \r",
                "I'm more free than I've ever been.\"\r",
                "- Captain Weylam \"Rot-tooth\" Roth of the Black Crest"
            ],
            "frameType": 3,
            "extended": {
                "category": "weapons",
                "subcategories": [
                    "bow"
                ]
            },
            "x": 10,
            "y": 0,
            "inventoryId": "Stash1",
            "socketedItems": [

            ]
        },
        {
            "verified": false,
            "w": 1,
            "h": 1,
            "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9MZWFwU2xhbSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/f65891de7a/LeapSlam.png",
            "support": false,
            "league": "Hardcore",
            "id": "8d84024bd2f99bd467b671e6915bc999f6e26f512c7f7034f54ff182781198e6",
            "name": "",
            "typeLine": "Leap Slam",
            "baseType": "Leap Slam",
            "identified": true,
            "ilvl": 0,
            "properties": [
                {
                    "name": "Attack, AoE, Movement, Travel, Slam, Melee",
                    "values": [

                    ],
                    "displayMode": 0
                },
                {
                    "name": "Level",
                    "values": [
                        [
                            "1",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 5
                },
                {
                    "name": "Cost",
                    "values": [
                        [
                            "10 Mana",
                            0
                        ]
                    ],
                    "displayMode": 0
                },
                {
                    "name": "Attack Damage",
                    "values": [
                        [
                            "100% of base",
                            0
                        ]
                    ],
                    "displayMode": 0
                }
            ],
            "requirements": [
                {
                    "name": "Level",
                    "values": [
                        [
                            "10",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 62
                },
                {
                    "name": "Str",
                    "values": [
                        [
                            "29",
                            0
                        ]
                    ],
                    "displayMode": 1,
                    "type": 63
                }
            ],
            "additionalProperties": [
                {
                    "name": "Experience",
                    "values": [
                        [
                            "9569/9569",
                            0
                        ]
                    ],
                    "displayMode": 2,
                    "progress": 1,
                    "type": 20
                }
            ],
            "nextLevelRequirements": [
                {
                    "name": "Level",
                    "values": [
                        [
                            "13",
                            0
                        ]
                    ],
                    "displayMode": 0
                },
                {
                    "name": "Str",
                    "values": [
                        [
                            "35",
                            0
                        ]
                    ],
                    "displayMode": 1
                }
            ],
            "secDescrText": "Jump into the air, damaging and knocking back enemies with your weapon where you land. Enemies you would land on are pushed out of the way. Requires an Axe, Mace, Sceptre, Sword or Staff. Cannot be supported by Multistrike.",
            "explicitMods": [
                "20% increased Stun Duration against Enemies that are on Full Life",
                "+0.55 seconds to Attack Time",
                "Damaging Hits always Stun Enemies that are on Full Life"
            ],
            "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
            "frameType": 4,
            "extended": {
                "category": "gems",
                "subcategories": [
                    "activegem"
                ]
            },
            "x": 0,
            "y": 1,
            "inventoryId": "Stash2"
        },
        {
            "verified": false,
            "w": 1,
            "h": 1,
            "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0hpZ2hRdWVzdFJld2FyZFJlZCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/9dfceaff06/HighQuestRewardRed.png",
            "league": "Hardcore",
            "id": "d9503c22d6a753bed25ee06b63e8b17ad5f898cc7266a6eccebe6f993ee8944f",
            "name": "Conqueror's Efficiency",
            "typeLine": "Crimson Jewel",
            "baseType": "Crimson Jewel",
            "identified": true,
            "ilvl": 1,
            "properties": [
                {
                    "name": "Limited to",
                    "values": [
                        [
                            "1",
                            0
                        ]
                    ],
                    "displayMode": 0
                }
            ],
            "explicitMods": [
                "3% reduced Mana Cost of Skills",
                "4% increased Skill Effect Duration",
                "4% increased Mana Reservation Efficiency of Skills"
            ],
            "descrText": "Place into an allocated Jewel Socket on the Passive Skill Tree. Right click to remove from the Socket.",
            "flavourText": [
                "The stone may yet bleed."
            ],
            "frameType": 3,
            "extended": {
                "category": "jewels"
            },
            "x": 11,
            "y": 5,
            "inventoryId": "Stash3"
        },
        {
            "verified": false,
            "w": 1,
            "h": 1,
            "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9UdXJxdW9pc2VBbXVsZXQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/605b4da0e1/TurquoiseAmulet.png",
            "league": "Hardcore",
            "id": "358da932979a1121115fd923e0d57fd9fb7f179ddca77a7abfe6e1d767034924",
            "name": "Soul Beads",
            "typeLine": "Turquoise Amulet",
            "baseType": "Turquoise Amulet",
            "identified": true,
            "ilvl": 73,
            "requirements": [
                {
                    "name": "Level",
                    "values": [
                        [
                            "57",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 62
                }
            ],
            "implicitMods": [
                "+18 to Dexterity and Intelligence"
            ],
            "explicitMods": [
                "11% increased Spell Damage",
                "Adds 18 to 31 Fire Damage to Attacks",
                "37% increased Global Critical Strike Chance",
                "+25 to maximum Mana",
                "+27% to Fire Resistance",
                "+23% to Cold Resistance"
            ],
            "frameType": 2,
            "extended": {
                "category": "accessories",
                "subcategories": [
                    "amulet"
                ],
                "prefixes": 3,
                "suffixes": 3
            },
            "x": 0,
            "y": 0,
            "inventoryId": "Stash4"
        },
        {
            "verified": false,
            "w": 1,
            "h": 1,
            "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9TdXBwb3J0L0luY3JlYXNlZER1cmF0aW9uIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/a5db7ae0bd/IncreasedDuration.png",
            "support": true,
            "league": "Hardcore",
            "id": "2ce90c7a129f83de3406769e8b9e09763be5e5ad4311bf475cf5d4375831f705",
            "name": "",
            "typeLine": "Increased Duration Support",
            "baseType": "Increased Duration Support",
            "identified": true,
            "ilvl": 0,
            "properties": [
                {
                    "name": "Support, Duration",
                    "values": [

                    ],
                    "displayMode": 0
                },
                {
                    "name": "Level",
                    "values": [
                        [
                            "1",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 5
                },
                {
                    "name": "Cost & Reservation Multiplier",
                    "values": [
                        [
                            "130%",
                            0
                        ]
                    ],
                    "displayMode": 0
                }
            ],
            "requirements": [
                {
                    "name": "Level",
                    "values": [
                        [
                            "31",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 62
                },
                {
                    "name": "Str",
                    "values": [
                        [
                            "52",
                            0
                        ]
                    ],
                    "displayMode": 1,
                    "type": 63
                }
            ],
            "additionalProperties": [
                {
                    "name": "Experience",
                    "values": [
                        [
                            "1/285815",
                            0
                        ]
                    ],
                    "displayMode": 2,
                    "progress": 0,
                    "type": 20
                }
            ],
            "secDescrText": "Supports any skill with a duration.",
            "explicitMods": [
                "Supported Skills have 45% increased Skill Effect Duration"
            ],
            "descrText": "This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.",
            "frameType": 4,
            "extended": {
                "category": "gems",
                "subcategories": [
                    "supportgem"
                ]
            },
            "x": 0,
            "y": 2,
            "inventoryId": "Stash5"
        },
        {
            "verified": false,
            "w": 1,
            "h": 2,
            "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvZXZhc2lvbmZsYXNrMDEiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/8ead4435df/evasionflask01.png",
            "league": "Hardcore",
            "id": "bcd6e8fa61888422a1faed414577030569395da4290012e1bbe54b017071011b",
            "name": "",
            "typeLine": "Jade Flask",
            "baseType": "Jade Flask",
            "identified": true,
            "ilvl": 71,
            "properties": [
                {
                    "name": "Lasts {0} Seconds",
                    "values": [
                        [
                            "6",
                            0
                        ]
                    ],
                    "displayMode": 3
                },
                {
                    "name": "Consumes {0} of {1} Charges on use",
                    "values": [
                        [
                            "30",
                            0
                        ],
                        [
                            "60",
                            0
                        ]
                    ],
                    "displayMode": 3
                },
                {
                    "name": "Currently has {0} Charges",
                    "values": [
                        [
                            "0",
                            0
                        ]
                    ],
                    "displayMode": 3
                }
            ],
            "requirements": [
                {
                    "name": "Level",
                    "values": [
                        [
                            "27",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 62
                }
            ],
            "utilityMods": [
                "+1500 to Evasion Rating"
            ],
            "descrText": "Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.",
            "frameType": 0,
            "extended": {
                "category": "flasks"
            },
            "x": 10,
            "y": 8,
            "inventoryId": "Stash6"
        },
        {
            "verified": false,
            "w": 1,
            "h": 2,
            "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvbGlmZWZsYXNrMTBvbGQiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/63c7ee3e41/lifeflask10old.png",
            "league": "Hardcore",
            "id": "5e968f419af74b6c673927fd0f083ab3599573d2879d1f6e9c27085a761ea9fa",
            "name": "",
            "typeLine": "Prudent Divine Life Flask of Warding",
            "baseType": "Divine Life Flask",
            "identified": true,
            "ilvl": 62,
            "properties": [
                {
                    "name": "Quality",
                    "values": [
                        [
                            "+20%",
                            1
                        ]
                    ],
                    "displayMode": 0,
                    "type": 6
                },
                {
                    "name": "Recovers {0} Life over {1} Seconds",
                    "values": [
                        [
                            "2880",
                            1
                        ],
                        [
                            "3.50",
                            0
                        ]
                    ],
                    "displayMode": 3
                },
                {
                    "name": "Consumes {0} of {1} Charges on use",
                    "values": [
                        [
                            "15",
                            0
                        ],
                        [
                            "45",
                            0
                        ]
                    ],
                    "displayMode": 3
                },
                {
                    "name": "Currently has {0} Charges",
                    "values": [
                        [
                            "0",
                            0
                        ]
                    ],
                    "displayMode": 3
                }
            ],
            "requirements": [
                {
                    "name": "Level",
                    "values": [
                        [
                            "60",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 62
                }
            ],
            "explicitMods": [
                "100% more Recovery if used while on Low Life",
                "Removes Curses on use"
            ],
            "descrText": "Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.",
            "frameType": 1,
            "extended": {
                "category": "flasks",
                "prefixes": 1,
                "suffixes": 1
            },
            "x": 11,
            "y": 6,
            "inventoryId": "Stash7"
        },
        {
            "verified": false,
            "w": 1,
            "h": 1,
            "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9UdXJxdW9pc2VBbXVsZXQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/605b4da0e1/TurquoiseAmulet.png",
            "league": "Hardcore",
            "id": "ec668472eadc44c1cbca519d5f1b085cc68adda7aaa1440511d6724b699d3506",
            "name": "Pandemonium Beads",
            "typeLine": "Turquoise Amulet",
            "baseType": "Turquoise Amulet",
            "identified": true,
            "ilvl": 72,
            "requirements": [
                {
                    "name": "Level",
                    "values": [
                        [
                            "57",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 62
                }
            ],
            "implicitMods": [
                "+18 to Dexterity and Intelligence"
            ],
            "explicitMods": [
                "+11 to all Attributes",
                "20% increased Spell Damage",
                "+32 to maximum Life",
                "+43% to Cold Resistance"
            ],
            "frameType": 2,
            "extended": {
                "category": "accessories",
                "subcategories": [
                    "amulet"
                ],
                "prefixes": 2,
                "suffixes": 2
            },
            "x": 0,
            "y": 7,
            "inventoryId": "Stash8"
        },
        {
            "verified": false,
            "w": 1,
            "h": 1,
            "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9JbW1vcnRhbENhbGwiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/ef38147c94/ImmortalCall.png",
            "support": false,
            "league": "Hardcore",
            "id": "c4a85d530351912d143119656fb542bf9408457f2329bb8dfeb32a00f49866bf",
            "name": "",
            "typeLine": "Immortal Call",
            "baseType": "Immortal Call",
            "identified": true,
            "ilvl": 0,
            "properties": [
                {
                    "name": "Spell, Duration, Guard",
                    "values": [

                    ],
                    "displayMode": 0
                },
                {
                    "name": "Level",
                    "values": [
                        [
                            "1",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 5
                },
                {
                    "name": "Cost",
                    "values": [
                        [
                            "21 Mana",
                            0
                        ]
                    ],
                    "displayMode": 0
                },
                {
                    "name": "Cooldown Time",
                    "values": [
                        [
                            "3.00 sec",
                            0
                        ]
                    ],
                    "displayMode": 0
                },
                {
                    "name": "Cast Time",
                    "values": [
                        [
                            "Instant",
                            0
                        ]
                    ],
                    "displayMode": 0
                }
            ],
            "requirements": [
                {
                    "name": "Level",
                    "values": [
                        [
                            "34",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 62
                },
                {
                    "name": "Str",
                    "values": [
                        [
                            "79",
                            0
                        ]
                    ],
                    "displayMode": 1,
                    "type": 63
                }
            ],
            "additionalProperties": [
                {
                    "name": "Experience",
                    "values": [
                        [
                            "1/252595",
                            0
                        ]
                    ],
                    "displayMode": 2,
                    "progress": 0,
                    "type": 20
                }
            ],
            "secDescrText": "Take less Physical and Elemental Damage for a short time. Consumes up to 5 Endurance Charges to lengthen the buff and further lessen Physical Damage taken. Shares a cooldown with other Guard skills.",
            "explicitMods": [
                "Base duration is 1.00 seconds",
                "20% increased Buff Duration per Endurance Charge removed",
                "This Skill's Cooldown does not recover during its effect",
                "25% less Elemental Damage taken",
                "25% less Physical Damage taken",
                "15.0% less Physical Damage taken per Endurance Charge removed"
            ],
            "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
            "frameType": 4,
            "extended": {
                "category": "gems",
                "subcategories": [
                    "activegem"
                ]
            },
            "x": 0,
            "y": 6,
            "inventoryId": "Stash9"
        },
        {
            "verified": false,
            "w": 1,
            "h": 1,
            "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9IZXJhbGRvZkljZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/ce4dc073c8/HeraldofIce.png",
            "support": false,
            "league": "Hardcore",
            "id": "3431d653f0728e1c58db7a2f1cfee5191b5534bb8883b752e487e1cd4949a9a7",
            "name": "",
            "typeLine": "Herald of Ice",
            "baseType": "Herald of Ice",
            "identified": true,
            "ilvl": 0,
            "properties": [
                {
                    "name": "Spell, AoE, Cold, Herald",
                    "values": [

                    ],
                    "displayMode": 0
                },
                {
                    "name": "Level",
                    "values": [
                        [
                            "1",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 5
                },
                {
                    "name": "Reservation",
                    "values": [
                        [
                            "25% Mana",
                            0
                        ]
                    ],
                    "displayMode": 0
                },
                {
                    "name": "Cooldown Time",
                    "values": [
                        [
                            "1.00 sec",
                            0
                        ]
                    ],
                    "displayMode": 0
                },
                {
                    "name": "Cast Time",
                    "values": [
                        [
                            "Instant",
                            0
                        ]
                    ],
                    "displayMode": 0
                },
                {
                    "name": "Effectiveness of Added Damage",
                    "values": [
                        [
                            "80%",
                            0
                        ]
                    ],
                    "displayMode": 0
                }
            ],
            "requirements": [
                {
                    "name": "Level",
                    "values": [
                        [
                            "16",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 62
                },
                {
                    "name": "Dex",
                    "values": [
                        [
                            "26",
                            0
                        ]
                    ],
                    "displayMode": 1,
                    "type": 64
                },
                {
                    "name": "Int",
                    "values": [
                        [
                            "18",
                            0
                        ]
                    ],
                    "displayMode": 1,
                    "type": 65
                }
            ],
            "additionalProperties": [
                {
                    "name": "Experience",
                    "values": [
                        [
                            "1/49725",
                            0
                        ]
                    ],
                    "displayMode": 2,
                    "progress": 0,
                    "type": 20
                }
            ],
            "secDescrText": "Grants a buff adding cold damage to spells and attacks. If you shatter an enemy, this skill will cause them to explode and deal AoE cold damage to enemies near them. This damage is not affected by modifiers to spell damage.",
            "explicitMods": [
                "Deals 18 to 26 Cold Damage",
                "Damage cannot be Reflected",
                "Buff grants 4 to 5 Added Attack Cold Damage",
                "Buff grants 4 to 5 Added Spell Cold Damage"
            ],
            "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
            "frameType": 4,
            "extended": {
                "category": "gems",
                "subcategories": [
                    "activegem"
                ]
            },
            "x": 0,
            "y": 5,
            "inventoryId": "Stash10"
        },
        {
            "verified": false,
            "w": 1,
            "h": 1,
            "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL01pZFF1ZXN0UmV3YXJkUmVkIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/b920f106cf/MidQuestRewardRed.png",
            "league": "Hardcore",
            "id": "e768eb8f423f0ffc5cbf2e1e687f3e9f4289ff48565f2876b4a03033c3047c90",
            "name": "Warlord's Reach",
            "typeLine": "Crimson Jewel",
            "baseType": "Crimson Jewel",
            "identified": true,
            "ilvl": 1,
            "properties": [
                {
                    "name": "Limited to",
                    "values": [
                        [
                            "1",
                            0
                        ]
                    ],
                    "displayMode": 0
                }
            ],
            "explicitMods": [
                "8% increased Attack Damage",
                "+1 to Melee Strike Range"
            ],
            "descrText": "Place into an allocated Jewel Socket on the Passive Skill Tree. Right click to remove from the Socket.",
            "flavourText": [
                "A steady hand can hold back an army."
            ],
            "frameType": 3,
            "extended": {
                "category": "jewels"
            },
            "x": 11,
            "y": 4,
            "inventoryId": "Stash11"
        },
        {
            "verified": false,
            "w": 1,
            "h": 1,
            "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9TdXBwb3J0L0xpZmVMZWVjaCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/56a5e21d58/LifeLeech.png",
            "support": true,
            "league": "Hardcore",
            "id": "27134d26d7bd46362435339f2be02f76b21ac4018cc72e6c5e9e4c83436df071",
            "name": "",
            "typeLine": "Life Leech Support",
            "baseType": "Life Leech Support",
            "identified": true,
            "ilvl": 0,
            "properties": [
                {
                    "name": "Support",
                    "values": [

                    ],
                    "displayMode": 0
                },
                {
                    "name": "Level",
                    "values": [
                        [
                            "1",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 5
                },
                {
                    "name": "Cost & Reservation Multiplier",
                    "values": [
                        [
                            "110%",
                            0
                        ]
                    ],
                    "displayMode": 0
                }
            ],
            "requirements": [
                {
                    "name": "Level",
                    "values": [
                        [
                            "31",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 62
                },
                {
                    "name": "Str",
                    "values": [
                        [
                            "52",
                            0
                        ]
                    ],
                    "displayMode": 1,
                    "type": 63
                }
            ],
            "additionalProperties": [
                {
                    "name": "Experience",
                    "values": [
                        [
                            "1/285815",
                            0
                        ]
                    ],
                    "displayMode": 2,
                    "progress": 0,
                    "type": 20
                }
            ],
            "secDescrText": "Supports any skill that hits enemies, causing those hits to leech life based on damage dealt.",
            "explicitMods": [
                "Supported Skills have 2% of Damage Leeched as Life"
            ],
            "descrText": "This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.",
            "frameType": 4,
            "extended": {
                "category": "gems",
                "subcategories": [
                    "supportgem"
                ]
            },
            "x": 0,
            "y": 3,
            "inventoryId": "Stash12"
        },
        {
            "verified": false,
            "w": 1,
            "h": 1,
            "icon": "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvR2Vtcy9TaXBob25HZW0iLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/97ff6075bf/SiphonGem.png",
            "support": false,
            "league": "Hardcore",
            "id": "6261eb58d7cd12acc4dc938f353ca7ba12f37a3d2bf494c7dbef6e7b24e9b226",
            "name": "",
            "typeLine": "Essence Drain",
            "baseType": "Essence Drain",
            "identified": true,
            "ilvl": 0,
            "properties": [
                {
                    "name": "Spell, Projectile, Duration, Chaos, AoE",
                    "values": [

                    ],
                    "displayMode": 0
                },
                {
                    "name": "Level",
                    "values": [
                        [
                            "1",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 5
                },
                {
                    "name": "Cost",
                    "values": [
                        [
                            "8 Mana",
                            0
                        ]
                    ],
                    "displayMode": 0
                },
                {
                    "name": "Cast Time",
                    "values": [
                        [
                            "0.70 sec",
                            0
                        ]
                    ],
                    "displayMode": 0
                },
                {
                    "name": "Critical Strike Chance",
                    "values": [
                        [
                            "5.00%",
                            0
                        ]
                    ],
                    "displayMode": 0
                },
                {
                    "name": "Effectiveness of Added Damage",
                    "values": [
                        [
                            "90%",
                            0
                        ]
                    ],
                    "displayMode": 0
                }
            ],
            "requirements": [
                {
                    "name": "Level",
                    "values": [
                        [
                            "12",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 62
                },
                {
                    "name": "Dex",
                    "values": [
                        [
                            "14",
                            0
                        ]
                    ],
                    "displayMode": 1,
                    "type": 64
                },
                {
                    "name": "Int",
                    "values": [
                        [
                            "21",
                            0
                        ]
                    ],
                    "displayMode": 1,
                    "type": 65
                }
            ],
            "additionalProperties": [
                {
                    "name": "Experience",
                    "values": [
                        [
                            "1/15249",
                            0
                        ]
                    ],
                    "displayMode": 2,
                    "progress": 0,
                    "type": 20
                }
            ],
            "secDescrText": "Fires a projectile that applies a damage over time debuff when it hits. You are healed for a portion of the debuff damage. The debuff is spread by Contagion.",
            "explicitMods": [
                "Deals 9 to 13 Chaos Damage",
                "Deals 31.2 Base Chaos Damage per second",
                "Base duration is 3.80 seconds",
                "Modifiers to Spell Damage apply to this Skill's Damage Over Time effect",
                "Regenerate 0.50% of Debuff Damage as Life"
            ],
            "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
            "frameType": 4,
            "extended": {
                "category": "gems",
                "subcategories": [
                    "activegem"
                ]
            },
            "x": 0,
            "y": 4,
            "inventoryId": "Stash13"
        },
        {
            "verified": false,
            "w": 1,
            "h": 2,
            "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvZXZhc2lvbmZsYXNrMDEiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/8ead4435df/evasionflask01.png",
            "league": "Hardcore",
            "id": "dac306afc3a91e423e870c23aed8d944f38d29badd6c756645632a4e317bcbda",
            "name": "",
            "typeLine": "Jade Flask",
            "baseType": "Jade Flask",
            "identified": true,
            "ilvl": 68,
            "properties": [
                {
                    "name": "Lasts {0} Seconds",
                    "values": [
                        [
                            "6",
                            0
                        ]
                    ],
                    "displayMode": 3
                },
                {
                    "name": "Consumes {0} of {1} Charges on use",
                    "values": [
                        [
                            "30",
                            0
                        ],
                        [
                            "60",
                            0
                        ]
                    ],
                    "displayMode": 3
                },
                {
                    "name": "Currently has {0} Charges",
                    "values": [
                        [
                            "0",
                            0
                        ]
                    ],
                    "displayMode": 3
                }
            ],
            "requirements": [
                {
                    "name": "Level",
                    "values": [
                        [
                            "27",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 62
                }
            ],
            "utilityMods": [
                "+1500 to Evasion Rating"
            ],
            "descrText": "Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.",
            "frameType": 0,
            "extended": {
                "category": "flasks"
            },
            "x": 11,
            "y": 8,
            "inventoryId": "Stash14"
        },
        {
            "verified": false,
            "w": 1,
            "h": 2,
            "icon": "https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3Mvc3ByaW50IiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxfV0/aa66be180b/sprint.png",
            "league": "Hardcore",
            "id": "8bfb9fb7925e3a40b89bf52d7edd1257afe19db1b8527a13c80e00b2d338b99c",
            "name": "",
            "typeLine": "Medic's Quicksilver Flask of the Hare",
            "baseType": "Quicksilver Flask",
            "identified": true,
            "ilvl": 52,
            "properties": [
                {
                    "name": "Lasts {0} Seconds",
                    "values": [
                        [
                            "6",
                            0
                        ]
                    ],
                    "displayMode": 3
                },
                {
                    "name": "Consumes {0} of {1} Charges on use",
                    "values": [
                        [
                            "30",
                            0
                        ],
                        [
                            "60",
                            0
                        ]
                    ],
                    "displayMode": 3
                },
                {
                    "name": "Currently has {0} Charges",
                    "values": [
                        [
                            "0",
                            0
                        ]
                    ],
                    "displayMode": 3
                }
            ],
            "requirements": [
                {
                    "name": "Level",
                    "values": [
                        [
                            "6",
                            0
                        ]
                    ],
                    "displayMode": 0,
                    "type": 62
                }
            ],
            "utilityMods": [
                "40% increased Movement Speed"
            ],
            "explicitMods": [
                "20% chance to gain a Flask Charge when you deal a Critical Strike",
                "24% increased Movement Speed during Flask effect"
            ],
            "descrText": "Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.",
            "frameType": 1,
            "extended": {
                "category": "flasks",
                "prefixes": 1,
                "suffixes": 1
            },
            "x": 11,
            "y": 10,
            "inventoryId": "Stash15"
        }
    ]
};