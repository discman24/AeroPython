/**
 * AeroPython RPG — Quest Data (Genshin Impact Style)
 * 8 Elemental Regions, each with 5 quests + boss battle.
 * Language tuned for age 10. Simple, fun, exciting!
 */

// ─────────────────────────────────────────────
// PORTRAITS — Who is talking?
// Each portrait needs: emoji (display icon) + element (links to ELEMENTS key)
// ─────────────────────────────────────────────
export const PORTRAITS = {
  aero:    { emoji: '✈️', element: 'wind'      },
  ignis:   { emoji: '🔥', element: 'fire'      },
  frost:   { emoji: '❄️', element: 'ice'       },
  bolt:    { emoji: '⚡', element: 'lightning' },
  wave:    { emoji: '🌊', element: 'water'     },
  petra:   { emoji: '🪨', element: 'earth'     },
  verde:   { emoji: '🌿', element: 'nature'    },
  cipher:  { emoji: '🔮', element: 'void'      },
  default: { emoji: '💬', element: 'wind'      },
};

// ─────────────────────────────────────────────
// ELEMENTS — Genshin-style element data
// Each needs: color, icon, name, border (for card outlines), bg (for tinted backgrounds)
// ─────────────────────────────────────────────
export const ELEMENTS = {
  wind:      { color: '#22d3ee', icon: '💨', name: 'Wind',      border: '#22d3ee33', bg: '#22d3ee0d', glow: '0 0 20px rgba(34,211,238,0.3)',  particle: '✦' },
  fire:      { color: '#ef4444', icon: '🔥', name: 'Fire',      border: '#ef444433', bg: '#ef44440d', glow: '0 0 20px rgba(239,68,68,0.3)',   particle: '🔥' },
  ice:       { color: '#93c5fd', icon: '❄️', name: 'Ice',       border: '#93c5fd33', bg: '#93c5fd0d', glow: '0 0 20px rgba(147,197,253,0.3)', particle: '❄️' },
  lightning: { color: '#fbbf24', icon: '⚡', name: 'Lightning', border: '#fbbf2433', bg: '#fbbf240d', glow: '0 0 20px rgba(251,191,36,0.3)',  particle: '⚡' },
  water:     { color: '#3b82f6', icon: '🌊', name: 'Water',     border: '#3b82f633', bg: '#3b82f60d', glow: '0 0 20px rgba(59,130,246,0.3)',  particle: '💧' },
  earth:     { color: '#a3793a', icon: '🪨', name: 'Earth',     border: '#a3793a33', bg: '#a3793a0d', glow: '0 0 20px rgba(163,121,58,0.3)',  particle: '🪨' },
  nature:    { color: '#22c55e', icon: '🌿', name: 'Nature',    border: '#22c55e33', bg: '#22c55e0d', glow: '0 0 20px rgba(34,197,94,0.3)',   particle: '🍃' },
  void:      { color: '#a855f7', icon: '🔮', name: 'Void',      border: '#a855f733', bg: '#a855f70d', glow: '0 0 20px rgba(168,85,247,0.3)', particle: '✴️' },
  // Fallback used by components when element lookup fails
  variables: { color: '#94a3b8', icon: '📦', name: 'Basic',     border: '#94a3b833', bg: '#94a3b80d', glow: '0 0 20px rgba(148,163,184,0.3)', particle: '✦' },
};

// ─────────────────────────────────────────────
// COMPANIONS — Unlock one per region!
// ─────────────────────────────────────────────
export const COMPANIONS = [
  { id: 'pyro',   name: 'Pyro the Phoenix',  icon: '🐦‍🔥', element: 'fire',      bonus: 'Extra hints',      unlockAR: 5  },
  { id: 'glacia', name: 'Glacia the Owl',    icon: '🦉',   element: 'ice',       bonus: 'Slower timer',     unlockAR: 10 },
  { id: 'spark',  name: 'Spark the Fox',     icon: '🦊',   element: 'lightning', bonus: 'XP boost',         unlockAR: 15 },
  { id: 'coral',  name: 'Coral the Turtle',  icon: '🐢',   element: 'water',     bonus: 'Error shield',     unlockAR: 20 },
  { id: 'terra',  name: 'Terra the Bear',    icon: '🐻',   element: 'earth',     bonus: 'Stronger attacks', unlockAR: 25 },
  { id: 'fern',   name: 'Fern the Cat',      icon: '🐱',   element: 'nature',    bonus: 'Auto-hints',       unlockAR: 30 },
  { id: 'nova',   name: 'Nova the Dragon',   icon: '🐉',   element: 'void',      bonus: 'All bonuses',      unlockAR: 35 },
];

// ─────────────────────────────────────────────
// REGION → ELEMENT mapping (used by WorldMap)
// ─────────────────────────────────────────────
export const REGION_ELEMENTS = {
  1: 'wind',
  2: 'fire',
  3: 'ice',
  4: 'lightning',
  5: 'water',
  6: 'earth',
  7: 'nature',
  8: 'void',
};

// ─────────────────────────────────────────────
// REGION DATA
// ─────────────────────────────────────────────
const rpgQuests = {

  // ═══════════════════════════════════════════════
  // REGION 1: Whispering Woods (Wind / Nature)
  // Element: Wind   Biome: Forest
  // Python concept: print(), text, basic output
  // ═══════════════════════════════════════════════
  region1: {
    id: 1,
    name: 'Whispering Woods',
    description: 'A magical forest full of talking trees and wind spirits. But something has gone silent — make the woods speak again!',
    moduleId: 1,
    icon: '🌲',
    color: '#22d3ee',
    unlockLevel: 1,
    element: 'Wind',
    biome: 'forest',
    intro: [
      {
        speaker: 'Captain Aero',
        portrait: 'aero',
        text: "Welcome, young adventurer! I'm Captain Aero, your pilot guide. The Whispering Woods have gone totally quiet!",
      },
      {
        speaker: 'Captain Aero',
        portrait: 'aero',
        text: 'The wind spirits are trapped! To free them, you must make the computer TALK. We call this: using print().',
      },
      {
        speaker: 'Captain Aero',
        portrait: 'aero',
        text: "Think of print() like a loudspeaker. Whatever you put inside the brackets — the computer will say it out loud! Ready? Let's go!",
      },
    ],
    quests: [
      {
        id: 'r1q1',
        title: 'Wake the Forest',
        enemy: { name: 'Silence Slime', hp: 30, icon: '🫧' },
        story: 'A giant Silence Slime has swallowed all the sounds in the forest! The only way to defeat it is to make noise. Type a message and make the computer speak!',
        instructions: 'Use print() to show the message: Hello, AeroPython!',
        starterCode:
          '# The Silence Slime fears noise!\n' +
          '# Use print() to make the computer speak.\n' +
          '# Example: print("Hi there!")\n' +
          '\n' +
          '# Write your code below:\n',
        expectedOutput: 'Hello, AeroPython!',
        validationType: 'exact',
        hints: [
          'print() makes the computer show words on screen. Try typing print("Hello, AeroPython!")',
          'Put the words inside speech marks "like this" and put that inside print()',
          'print("Hello, AeroPython!")',
        ],
        xpReward: 20,
        concept: 'print()',
        elementalDamage: 5,
      },
      {
        id: 'r1q2',
        title: 'Call the Wind',
        enemy: { name: 'Grumble Toad', hp: 35, icon: '🐸' },
        story: "A grumpy Grumble Toad is blocking the path! It will only move if you say the magic words. Print two lines — one after the other!",
        instructions: 'Print "Whoooosh!" on the first line, then print "The wind blows!" on the second line.',
        starterCode:
          '# Print two messages, one on each line!\n' +
          '# Each print() starts a new line.\n' +
          '\n' +
          '# Line 1:\n' +
          '\n' +
          '# Line 2:\n',
        expectedOutput: 'Whoooosh!\nThe wind blows!',
        validationType: 'exact',
        hints: [
          'You can use print() more than once! Each one makes a new line.',
          'First write print("Whoooosh!") then write print("The wind blows!") below it.',
          'print("Whoooosh!")\nprint("The wind blows!")',
        ],
        xpReward: 20,
        concept: 'multiple print() calls',
        elementalDamage: 5,
      },
      {
        id: 'r1q3',
        title: 'The Talking Tree',
        enemy: { name: 'Grumpy Stump', hp: 40, icon: '🪵' },
        story: 'An old Grumpy Stump is blocking the river crossing! It will only let you pass if you can make the computer say its full name on one line with a space in the middle.',
        instructions: 'Print "Aero Python" — both words on the same line with a space between them.',
        starterCode:
          '# The Grumpy Stump wants to hear its name!\n' +
          '# Print both words with a space between them.\n' +
          '\n' +
          '# Your code:\n',
        expectedOutput: 'Aero Python',
        validationType: 'exact',
        hints: [
          'You can put a space inside your quote marks, like "Hello World".',
          'Try print("Aero Python") — the space is inside the quotes!',
          'print("Aero Python")',
        ],
        xpReward: 25,
        concept: 'printing text with spaces',
        elementalDamage: 5,
      },
      {
        id: 'r1q4',
        title: 'Wind Chant',
        enemy: { name: 'Echo Bat', hp: 45, icon: '🦇' },
        story: 'The Echo Bat copies everything you say — backwards! Confuse it by printing the same word THREE times in a row, each on its own line.',
        instructions: 'Print "Wind!" three times, each on a new line.',
        starterCode:
          '# Print "Wind!" three separate times!\n' +
          '# Each print() goes on its own line in your code.\n' +
          '\n' +
          '# First time:\n' +
          '\n' +
          '# Second time:\n' +
          '\n' +
          '# Third time:\n',
        expectedOutput: 'Wind!\nWind!\nWind!',
        validationType: 'exact',
        hints: [
          'Use print() three separate times! Copy and paste is okay.',
          'Write print("Wind!") three times, one below the other.',
          'print("Wind!")\nprint("Wind!")\nprint("Wind!")',
        ],
        xpReward: 25,
        concept: 'repeating print()',
        elementalDamage: 8,
      },
      {
        id: 'r1q5',
        title: '🏆 BOSS: Silent Storm',
        enemy: { name: 'Silent Storm', hp: 100, icon: '🌪️', isBoss: true },
        story: 'BOSS BATTLE! The Silent Storm is a giant tornado that swallowed all the words in the forest! To defeat it, you must print a whole story — 4 lines that tell what happened. Ready, hero?',
        instructions:
          'Print these 4 lines exactly:\n' +
          'Line 1: "The woods were quiet."\n' +
          'Line 2: "A hero arrived."\n' +
          'Line 3: "They typed their code."\n' +
          'Line 4: "The forest spoke again!"',
        starterCode:
          '# BOSS BATTLE! Defeat the Silent Storm!\n' +
          '# Print 4 lines to tell the story.\n' +
          '\n' +
          '# Line 1:\n' +
          '\n' +
          '# Line 2:\n' +
          '\n' +
          '# Line 3:\n' +
          '\n' +
          '# Line 4:\n',
        expectedOutput: 'The woods were quiet.\nA hero arrived.\nThey typed their code.\nThe forest spoke again!',
        validationType: 'exact',
        hints: [
          'You need four print() commands — one for each line of the story.',
          'Make sure the words match EXACTLY — capital letters and full stops matter!',
          'print("The woods were quiet.")\nprint("A hero arrived.")\nprint("They typed their code.")\nprint("The forest spoke again!")',
        ],
        xpReward: 100,
        concept: 'print() mastery',
        elementalDamage: 15,
      },
    ],
    completion: [
      {
        speaker: 'Captain Aero',
        portrait: 'aero',
        text: 'AMAZING! The Whispering Woods are alive again! The wind spirits are dancing!',
      },
      {
        speaker: 'Captain Aero',
        portrait: 'aero',
        text: "You learned how to make the computer talk using print(). That's the very first step every programmer takes!",
      },
      {
        speaker: 'Captain Aero',
        portrait: 'aero',
        text: "Next stop: Ember Highlands! Grab your fireproof boots — it's going to get HOT. We'll learn about variables: magical boxes that hold things!",
      },
    ],
    rewards: {
      items: ['Wind Crystal', 'Forest Feather', "Aero's Pilot Badge"],
      companionUnlock: null,
      titleUnlock: 'Forest Whisperer',
    },
  },

  // ═══════════════════════════════════════════════
  // REGION 2: Ember Highlands (Fire)
  // Element: Fire   Biome: Volcano
  // Python concept: variables, numbers, math
  // ═══════════════════════════════════════════════
  region2: {
    id: 2,
    name: 'Ember Highlands',
    description: "Glowing volcanoes and rivers of lava! The Forge Master needs your help to rebuild the smithy using the power of variables.",
    moduleId: 2,
    icon: '🌋',
    color: '#ef4444',
    unlockLevel: 6,
    element: 'Fire',
    biome: 'volcano',
    intro: [
      {
        speaker: 'Forge Master Ignis',
        portrait: 'ignis',
        text: "WELCOME to the Ember Highlands! I'm Forge Master Ignis. I forge weapons in the volcano's fire!",
      },
      {
        speaker: 'Forge Master Ignis',
        portrait: 'ignis',
        text: 'But my workshop is in chaos! I need VARIABLES. Think of a variable as a magic box — you put something inside, give it a name, and you can use it anytime!',
      },
      {
        speaker: 'Forge Master Ignis',
        portrait: 'ignis',
        text: 'For example: sword = "Dragon Fang" is a box called "sword" that holds the name "Dragon Fang". Easy! Now let\'s forge some code!',
      },
    ],
    quests: [
      {
        id: 'r2q1',
        title: 'Name the Sword',
        enemy: { name: 'Nameless Blade', hp: 35, icon: '⚔️' },
        story: 'A powerful sword is floating in mid-air with no name! A nameless sword has no power. Give it a name by putting it in a variable box, then show the name!',
        instructions: 'Create a variable called weapon and put "Dragon Fang" inside it. Then print weapon.',
        starterCode:
          '# Put the sword name in a box called "weapon"\n' +
          '# Like this: weapon = "Dragon Fang"\n' +
          '\n' +
          '# Step 1: Create the variable\n' +
          '\n' +
          '# Step 2: Print it\n',
        expectedOutput: 'Dragon Fang',
        validationType: 'exact',
        hints: [
          'A variable is like a box with a name. Write: weapon = "Dragon Fang"',
          'Then use print() to show what is in the box: print(weapon)',
          'weapon = "Dragon Fang"\nprint(weapon)',
        ],
        xpReward: 20,
        concept: 'string variables',
        elementalDamage: 6,
      },
      {
        id: 'r2q2',
        title: 'Count the Potions',
        enemy: { name: 'Potion Thief', hp: 40, icon: '🧪' },
        story: 'The Potion Thief stole most of our healing potions! Count what we have left. Variables can hold numbers too — without any quote marks!',
        instructions: 'Create a variable called potions and set it to 7. Then print it.',
        starterCode:
          "# Number variables don't need quote marks!\n" +
          '# Like this: potions = 7\n' +
          '\n' +
          '# Step 1: Create the number variable\n' +
          '\n' +
          '# Step 2: Print it\n',
        expectedOutput: '7',
        validationType: 'exact',
        hints: [
          'Numbers go straight in without quotes: potions = 7',
          'Then print the variable: print(potions)',
          'potions = 7\nprint(potions)',
        ],
        xpReward: 20,
        concept: 'number variables',
        elementalDamage: 6,
      },
      {
        id: 'r2q3',
        title: 'Lava Math',
        enemy: { name: 'Magma Crab', hp: 50, icon: '🦀' },
        story: 'The Magma Crab challenges you to a math duel! Add two numbers together. Python can do math just like a calculator — try it!',
        instructions: 'Create fire_power = 25 and ice_power = 15. Add them together and save as total. Print total.',
        starterCode:
          '# Python can do maths!\n' +
          '# + adds, - subtracts, * multiplies, / divides\n' +
          '\n' +
          'fire_power = 25\n' +
          'ice_power = 15\n' +
          '\n' +
          '# Add them together:\n' +
          'total = \n' +
          '\n' +
          '# Show the answer:\n',
        expectedOutput: '40',
        validationType: 'exact',
        hints: [
          'To add two variables: total = fire_power + ice_power',
          'Then print the total: print(total)',
          'fire_power = 25\nice_power = 15\ntotal = fire_power + ice_power\nprint(total)',
        ],
        xpReward: 25,
        concept: 'addition with variables',
        elementalDamage: 8,
      },
      {
        id: 'r2q4',
        title: 'Forge the Armour',
        enemy: { name: 'Rust Dragon Jr.', hp: 60, icon: '🦕' },
        story: "Rust Dragon Jr. is eating all the metal! To make armour strong, multiply the ore count by the heat level. Protect the forge!",
        instructions: 'Create ore = 8 and heat = 5. Multiply them and save as strength. Print strength.',
        starterCode:
          '# Multiplication uses the * star symbol\n' +
          '# Like this: area = width * height\n' +
          '\n' +
          'ore = 8\n' +
          'heat = 5\n' +
          '\n' +
          '# Multiply to get armour strength:\n' +
          'strength = \n' +
          '\n' +
          '# Print it:\n',
        expectedOutput: '40',
        validationType: 'exact',
        hints: [
          'Use * for multiplication: strength = ore * heat',
          'Then print: print(strength)',
          'ore = 8\nheat = 5\nstrength = ore * heat\nprint(strength)',
        ],
        xpReward: 30,
        concept: 'multiplication',
        elementalDamage: 8,
      },
      {
        id: 'r2q5',
        title: '🏆 BOSS: Number Dragon',
        enemy: { name: 'Number Dragon', hp: 120, icon: '🐲', isBoss: true },
        story: 'BOSS BATTLE! The Number Dragon breathes number-fire! To stop it, you must show your hero stats all in one message. Combine a name (text) and a number in one print!',
        instructions:
          'Create: hero = "Ignis Junior" and level = 5. ' +
          'Print this exact message: "Hero: Ignis Junior is Level 5" — using your variables.',
        starterCode:
          '# BOSS BATTLE! Show your hero stats!\n' +
          '# We use f"..." to mix words and variables.\n' +
          '# Example: f"My name is {hero}"\n' +
          '\n' +
          'hero = "Ignis Junior"\n' +
          'level = 5\n' +
          '\n' +
          '# Print the message:\n',
        expectedOutput: 'Hero: Ignis Junior is Level 5',
        validationType: 'exact',
        hints: [
          'Use an f-string: start with f" then put variable names inside curly braces {}',
          'Like this: f"Hero: {hero} is Level {level}"',
          'hero = "Ignis Junior"\nlevel = 5\nprint(f"Hero: {hero} is Level {level}")',
        ],
        xpReward: 110,
        concept: 'f-strings (combining text + numbers)',
        elementalDamage: 18,
      },
    ],
    completion: [
      {
        speaker: 'Forge Master Ignis',
        portrait: 'ignis',
        text: 'INCREDIBLE! You defeated the Number Dragon! The forge is safe!',
      },
      {
        speaker: 'Forge Master Ignis',
        portrait: 'ignis',
        text: 'You now know about variables — magic boxes for text AND numbers. And you can do maths and mix them together!',
      },
      {
        speaker: 'Forge Master Ignis',
        portrait: 'ignis',
        text: "Take Pyro the Phoenix with you — he'll give you extra hints when you need them. The Crystal Caverns await!",
      },
    ],
    rewards: {
      items: ['Ember Shard', "Forge Master's Hammer", 'Fire Opal'],
      companionUnlock: 'pyro',
      titleUnlock: 'Ember Forger',
    },
  },

  // ═══════════════════════════════════════════════
  // REGION 3: Crystal Caverns (Ice)
  // Element: Ice   Biome: Tundra
  // Python concept: if/else, True/False, comparisons
  // ═══════════════════════════════════════════════
  region3: {
    id: 3,
    name: 'Crystal Caverns',
    description: 'Glittering ice caves full of frozen monsters and riddles! Only those who can make smart choices will survive.',
    moduleId: 3,
    icon: '🧊',
    color: '#93c5fd',
    unlockLevel: 11,
    element: 'Ice',
    biome: 'tundra',
    intro: [
      {
        speaker: 'Oracle Frost',
        portrait: 'frost',
        text: 'Brrrr! Welcome to the Crystal Caverns. I am Oracle Frost. I see all... possible futures!',
      },
      {
        speaker: 'Oracle Frost',
        portrait: 'frost',
        text: 'In this icy land, everything is a CHOICE. If the door is locked, do one thing. Else, do something else. We call this if/else!',
      },
      {
        speaker: 'Oracle Frost',
        portrait: 'frost',
        text: '"If it is raining, take an umbrella. Otherwise, wear sunglasses." Python thinks the same way!',
      },
    ],
    quests: [
      {
        id: 'r3q1',
        title: 'The Frozen Door',
        enemy: { name: 'Ice Doorman', hp: 35, icon: '🚪' },
        story: 'A big frozen door blocks the path! It only opens for adventurers who know the secret password. Write a choice: if the password is right, open the door!',
        instructions: 'Set password = "frost". If password equals "frost", print "Door opens!". Otherwise print "Stay out!".',
        starterCode:
          '# Make a CHOICE using if/else!\n' +
          '# if something is true: do this\n' +
          '# else: do that instead\n' +
          '\n' +
          'password = "frost"\n' +
          '\n' +
          '# Check the password:\n' +
          'if password == "frost":\n' +
          '    # This runs if the password is correct\n' +
          '    \n' +
          'else:\n' +
          '    # This runs if the password is wrong\n' +
          '    \n',
        expectedOutput: 'Door opens!',
        validationType: 'exact',
        hints: [
          'Fill in the blank after if: print("Door opens!")',
          'Inside the if block: print("Door opens!") — and inside else: print("Stay out!")',
          'password = "frost"\nif password == "frost":\n    print("Door opens!")\nelse:\n    print("Stay out!")',
        ],
        xpReward: 25,
        concept: 'if/else',
        elementalDamage: 6,
      },
      {
        id: 'r3q2',
        title: 'Too Cold!',
        enemy: { name: 'Blizzard Pup', hp: 40, icon: '🐺' },
        story: "The Blizzard Pup only attacks if it's freezing cold! Check the temperature and warn everyone if it is below zero.",
        instructions: "Set temp = -5. If temp is less than 0, print \"It's freezing! Stay inside!\". Otherwise print \"It's fine, let's go!\".",
        starterCode:
          '# Use < to check if something is less than something else\n' +
          '# Use > to check if something is greater\n' +
          '\n' +
          'temp = -5\n' +
          '\n' +
          '# Write your if/else here:\n',
        expectedOutput: "It's freezing! Stay inside!",
        validationType: 'exact',
        hints: [
          'if temp < 0: means "if temp is less than zero"',
          'Then print the freezing warning inside the if block.',
          "temp = -5\nif temp < 0:\n    print(\"It's freezing! Stay inside!\")\nelse:\n    print(\"It's fine, let's go!\")",
        ],
        xpReward: 25,
        concept: 'comparison operators < >',
        elementalDamage: 6,
      },
      {
        id: 'r3q3',
        title: 'Potion Power Check',
        enemy: { name: 'Crystal Goblin', hp: 50, icon: '💎' },
        story: "The Crystal Goblin stole a potion but doesn't know if it's weak, medium, or strong! Help figure out which one it is using elif (that means \"else if, try another choice\").",
        instructions: 'Set power = 65. If power >= 80 print "Strong potion!". Elif power >= 40 print "Medium potion!". Else print "Weak potion!".',
        starterCode:
          '# elif means "otherwise, try this next check"\n' +
          '# if ... elif ... else gives us THREE choices!\n' +
          '\n' +
          'power = 65\n' +
          '\n' +
          'if power >= 80:\n' +
          '    \n' +
          'elif power >= 40:\n' +
          '    \n' +
          'else:\n' +
          '    \n',
        expectedOutput: 'Medium potion!',
        validationType: 'exact',
        hints: [
          'Fill in each print() statement — 65 is between 40 and 80 so "Medium potion!" should print.',
          'power = 65 means: not >= 80, but IS >= 40 — so the elif runs!',
          'power = 65\nif power >= 80:\n    print("Strong potion!")\nelif power >= 40:\n    print("Medium potion!")\nelse:\n    print("Weak potion!")',
        ],
        xpReward: 30,
        concept: 'if/elif/else',
        elementalDamage: 8,
      },
      {
        id: 'r3q4',
        title: 'True or False?',
        enemy: { name: 'Riddle Snowman', hp: 55, icon: '⛄' },
        story: "The Riddle Snowman only melts when you answer True or False correctly. Is the hero's level high enough to enter the ice castle?",
        instructions: 'Set hero_level = 10 and required_level = 8. Check if hero_level >= required_level. Print "You may enter!" if True, print "Too low!" if False.',
        starterCode:
          "# True and False are Python's yes/no answers\n" +
          '# >= means "greater than or equal to"\n' +
          '\n' +
          'hero_level = 10\n' +
          'required_level = 8\n' +
          '\n' +
          '# Write your if/else:\n',
        expectedOutput: 'You may enter!',
        validationType: 'exact',
        hints: [
          'if hero_level >= required_level: will be True because 10 is bigger than 8',
          'Print "You may enter!" inside the if block.',
          'hero_level = 10\nrequired_level = 8\nif hero_level >= required_level:\n    print("You may enter!")\nelse:\n    print("Too low!")',
        ],
        xpReward: 30,
        concept: 'boolean comparisons',
        elementalDamage: 8,
      },
      {
        id: 'r3q5',
        title: '🏆 BOSS: Logic Sphinx',
        enemy: { name: 'Logic Sphinx', hp: 130, icon: '🦁', isBoss: true },
        story: 'BOSS BATTLE! The Logic Sphinx blocks the exit and asks TWO questions at the same time: "Is the hero brave AND do they have a sword?" Both must be true to pass!',
        instructions: 'Set is_brave = True and has_sword = True. If BOTH are True, print "You may pass, champion!". Otherwise print "Not ready yet!".',
        starterCode:
          '# Use "and" to check TWO things at once!\n' +
          '# Both must be True for the whole thing to be True.\n' +
          '\n' +
          'is_brave = True\n' +
          'has_sword = True\n' +
          '\n' +
          '# Check both conditions:\n',
        expectedOutput: 'You may pass, champion!',
        validationType: 'exact',
        hints: [
          'if is_brave and has_sword: — both must be True!',
          'Then print "You may pass, champion!"',
          'is_brave = True\nhas_sword = True\nif is_brave and has_sword:\n    print("You may pass, champion!")\nelse:\n    print("Not ready yet!")',
        ],
        xpReward: 120,
        concept: 'and / or operators',
        elementalDamage: 18,
      },
    ],
    completion: [
      {
        speaker: 'Oracle Frost',
        portrait: 'frost',
        text: 'Brilliant! The Logic Sphinx is defeated! You have mastered the art of choices!',
      },
      {
        speaker: 'Oracle Frost',
        portrait: 'frost',
        text: 'if, else, elif, and, or — these are the building blocks of decisions. Every computer program ever made uses them!',
      },
      {
        speaker: 'Oracle Frost',
        portrait: 'frost',
        text: "Glacia the Owl joins your team — she'll slow down the timer when things get tricky. Now fly to the Windswept Peaks!",
      },
    ],
    rewards: {
      items: ['Frost Crystal', 'Ice Sphinx Feather', "Oracle's Snowglobe"],
      companionUnlock: 'glacia',
      titleUnlock: 'Ice Oracle',
    },
  },

  // ═══════════════════════════════════════════════
  // REGION 4: Windswept Peaks (Lightning)
  // Element: Lightning   Biome: Mountain
  // Python concept: for loops, while loops
  // ═══════════════════════════════════════════════
  region4: {
    id: 4,
    name: 'Windswept Peaks',
    description: 'Jagged mountains struck by lightning! Learn to make the computer repeat things over and over without typing them a million times.',
    moduleId: 4,
    icon: '⛰️',
    color: '#fbbf24',
    unlockLevel: 16,
    element: 'Lightning',
    biome: 'mountain',
    intro: [
      {
        speaker: 'Storm Runner Bolt',
        portrait: 'bolt',
        text: "ZAP! I'm Storm Runner Bolt! I run across the mountain tops — I REPEAT the same path again and again at lightning speed!",
      },
      {
        speaker: 'Storm Runner Bolt',
        portrait: 'bolt',
        text: 'In Python, we call repeating a "loop". A loop lets you do something over and over without typing it 100 times. Imagine counting to 100 — a loop does it in 2 lines!',
      },
      {
        speaker: 'Storm Runner Bolt',
        portrait: 'bolt',
        text: 'We\'ll use "for" loops to repeat a set number of times. Let\'s go — fast as lightning!',
      },
    ],
    quests: [
      {
        id: 'r4q1',
        title: 'Lightning Strike 5 Times',
        enemy: { name: 'Thunder Slug', hp: 40, icon: '🐌' },
        story: 'The Thunder Slug is very slow! Strike it with lightning 5 times by printing a number each time. A loop does the counting for you!',
        instructions: 'Use a for loop with range(5) to print the numbers 0, 1, 2, 3, 4 — one per line.',
        starterCode:
          '# A for loop repeats code!\n' +
          '# range(5) counts: 0, 1, 2, 3, 4\n' +
          '\n' +
          '# Complete the loop:\n' +
          'for number in range(5):\n' +
          '    # Print the number here:\n' +
          '    \n',
        expectedOutput: '0\n1\n2\n3\n4',
        validationType: 'exact',
        hints: [
          'Inside the for loop, add: print(number)',
          'The loop will run 5 times — each time "number" is the next value.',
          'for number in range(5):\n    print(number)',
        ],
        xpReward: 25,
        concept: 'for loop with range()',
        elementalDamage: 7,
      },
      {
        id: 'r4q2',
        title: 'Count to the Summit',
        enemy: { name: 'Boulder Bully', hp: 45, icon: '🪨' },
        story: 'The Boulder Bully rolls down from the top of the mountain and counts how many steps it takes! Count from 1 to 5 to match its path.',
        instructions: 'Use a for loop with range(1, 6) to print the numbers 1, 2, 3, 4, 5 — one per line.',
        starterCode:
          '# range(start, stop) counts from start UP TO (not including) stop\n' +
          '# range(1, 6) gives: 1, 2, 3, 4, 5\n' +
          '\n' +
          '# Write your loop:\n',
        expectedOutput: '1\n2\n3\n4\n5',
        validationType: 'exact',
        hints: [
          'for i in range(1, 6): starts at 1 and stops before 6',
          'Then print(i) inside the loop.',
          'for i in range(1, 6):\n    print(i)',
        ],
        xpReward: 25,
        concept: 'range(start, stop)',
        elementalDamage: 7,
      },
      {
        id: 'r4q3',
        title: 'Storm Shout',
        enemy: { name: 'Echo Vulture', hp: 55, icon: '🦅' },
        story: 'The Echo Vulture copies any sound three times! Shout "ZAP!" in a loop three times to overload it.',
        instructions: 'Use a for loop to print "ZAP!" exactly 3 times.',
        starterCode:
          '# Loop 3 times using range(3)\n' +
          '# Inside the loop, print your shout!\n' +
          '\n' +
          '# Your code:\n',
        expectedOutput: 'ZAP!\nZAP!\nZAP!',
        validationType: 'exact',
        hints: [
          "for _ in range(3): — the underscore means \"we don't need the number\"",
          'Then print("ZAP!") inside the loop.',
          'for _ in range(3):\n    print("ZAP!")',
        ],
        xpReward: 30,
        concept: 'for loop with string output',
        elementalDamage: 8,
      },
      {
        id: 'r4q4',
        title: 'Loop Through Weapons',
        enemy: { name: 'Gear Gargoyle', hp: 65, icon: '🗿' },
        story: 'The Gear Gargoyle steals weapons! Show off every weapon in your collection by looping through a list of them.',
        instructions: 'Create weapons = ["sword", "bow", "staff"]. Use a for loop to print each weapon on its own line.',
        starterCode:
          '# You can loop through a list too!\n' +
          '# for item in my_list: goes through each thing in the list.\n' +
          '\n' +
          'weapons = ["sword", "bow", "staff"]\n' +
          '\n' +
          '# Loop through and print each weapon:\n',
        expectedOutput: 'sword\nbow\nstaff',
        validationType: 'exact',
        hints: [
          'for weapon in weapons: goes through each item in the weapons list.',
          'Then print(weapon) inside the loop.',
          'weapons = ["sword", "bow", "staff"]\nfor weapon in weapons:\n    print(weapon)',
        ],
        xpReward: 30,
        concept: 'for loop through a list',
        elementalDamage: 8,
      },
      {
        id: 'r4q5',
        title: '🏆 BOSS: Infinite Loop Serpent',
        enemy: { name: 'Infinite Loop Serpent', hp: 150, icon: '🐍', isBoss: true },
        story: 'BOSS BATTLE! The Infinite Loop Serpent spins in circles forever! Show it that YOU control loops — print only the EVEN numbers from 1 to 10. Skip the odd ones!',
        instructions: 'Use a for loop from 1 to 10. If the number is even (divisible by 2 with no leftover), print it.',
        starterCode:
          '# BOSS BATTLE! Print only even numbers 1-10\n' +
          '# % is the "leftover" symbol. 4 % 2 = 0 (no leftover = even!)\n' +
          '\n' +
          '# Your loop:\n' +
          'for n in range(1, 11):\n' +
          '    # Check if n is even:\n' +
          '    if n % 2 == 0:\n' +
          '        # Print it!\n' +
          '        \n',
        expectedOutput: '2\n4\n6\n8\n10',
        validationType: 'exact',
        hints: [
          "n % 2 == 0 means \"n has no leftover when divided by 2\" — that's an even number!",
          'Add print(n) inside the if block.',
          'for n in range(1, 11):\n    if n % 2 == 0:\n        print(n)',
        ],
        xpReward: 130,
        concept: 'loops + conditionals + modulo',
        elementalDamage: 20,
      },
    ],
    completion: [
      {
        speaker: 'Storm Runner Bolt',
        portrait: 'bolt',
        text: "ZAPPPP! You defeated the Infinite Loop Serpent! You're as fast as lightning now!",
      },
      {
        speaker: 'Storm Runner Bolt',
        portrait: 'bolt',
        text: "Loops are one of the most powerful tools in coding. Computers never get tired of repeating — that's their superpower!",
      },
      {
        speaker: 'Storm Runner Bolt',
        portrait: 'bolt',
        text: 'Spark the Fox joins your crew for an XP boost! Now dive into the ocean — Tidecaller Shore is next!',
      },
    ],
    rewards: {
      items: ['Thunder Gem', "Storm Runner's Boots", 'Lightning Bolt Badge'],
      companionUnlock: 'spark',
      titleUnlock: 'Lightning Looper',
    },
  },

  // ═══════════════════════════════════════════════
  // REGION 5: Tidecaller Shore (Water)
  // Element: Water   Biome: Ocean
  // Python concept: lists (create, access, add, loop)
  // ═══════════════════════════════════════════════
  region5: {
    id: 5,
    name: 'Tidecaller Shore',
    description: 'A vast sparkling ocean full of sea monsters and sunken treasure! Learn to keep lots of things together in lists.',
    moduleId: 5,
    icon: '🏖️',
    color: '#3b82f6',
    unlockLevel: 21,
    element: 'Water',
    biome: 'ocean',
    intro: [
      {
        speaker: 'Captain Wave',
        portrait: 'wave',
        text: "Ahoy! I'm Captain Wave, sailor of the digital seas! Welcome to Tidecaller Shore!",
      },
      {
        speaker: 'Captain Wave',
        portrait: 'wave',
        text: 'On my ship, I keep all my treasure in a LIST. A list is like a treasure chest with numbered compartments — it holds MANY things at once!',
      },
      {
        speaker: 'Captain Wave',
        portrait: 'wave',
        text: 'You write a list with square brackets: treasure = ["gold", "ruby", "map"]. Easy as pie! Let\'s sail!',
      },
    ],
    quests: [
      {
        id: 'r5q1',
        title: 'Build the Treasure Chest',
        enemy: { name: 'Soggy Seagull', hp: 35, icon: '🐦' },
        story: 'The Soggy Seagull stole our treasure and scattered it! Gather it all back into one list so we know what we have.',
        instructions: 'Create a list called treasure with: "gold", "ruby", "map". Then print treasure.',
        starterCode:
          '# A list holds many things at once!\n' +
          '# treasure = ["thing1", "thing2", "thing3"]\n' +
          '\n' +
          '# Build your treasure list:\n' +
          'treasure = \n' +
          '\n' +
          '# Print it:\n',
        expectedOutput: "['gold', 'ruby', 'map']",
        validationType: 'exact',
        hints: [
          'Use square brackets: treasure = ["gold", "ruby", "map"]',
          'Each item goes in quotes, separated by commas.',
          'treasure = ["gold", "ruby", "map"]\nprint(treasure)',
        ],
        xpReward: 25,
        concept: 'creating lists',
        elementalDamage: 6,
      },
      {
        id: 'r5q2',
        title: 'First Item in the Chest',
        enemy: { name: 'Clam Bandit', hp: 40, icon: '🦪' },
        story: 'The Clam Bandit only wants the FIRST thing in your list! Give it what it wants before it takes everything.',
        instructions: 'Create treasure = ["gold", "ruby", "map"]. Print only the first item using treasure[0].',
        starterCode:
          '# To get ONE thing from a list, use its position number!\n' +
          '# Lists start counting at 0, not 1.\n' +
          '# treasure[0] = first item, treasure[1] = second, etc.\n' +
          '\n' +
          'treasure = ["gold", "ruby", "map"]\n' +
          '\n' +
          '# Print just the first item:\n',
        expectedOutput: 'gold',
        validationType: 'exact',
        hints: [
          'treasure[0] gets the first item — lists start at 0!',
          'Use print(treasure[0])',
          'treasure = ["gold", "ruby", "map"]\nprint(treasure[0])',
        ],
        xpReward: 25,
        concept: 'list indexing',
        elementalDamage: 6,
      },
      {
        id: 'r5q3',
        title: 'Add to the Crew',
        enemy: { name: 'Barnacle Beast', hp: 50, icon: '🐚' },
        story: 'The Barnacle Beast is growing! Add a new crew member to your crew list to fight it off. Use .append() to add things to a list!',
        instructions: 'Start with crew = ["Bolt", "Frost"]. Use .append() to add "Wave". Then print crew.',
        starterCode:
          '# .append() adds a new item to the END of a list\n' +
          '# Like: my_list.append("new thing")\n' +
          '\n' +
          'crew = ["Bolt", "Frost"]\n' +
          '\n' +
          '# Add "Wave" to the crew:\n' +
          '\n' +
          '# Print the updated crew:\n',
        expectedOutput: "['Bolt', 'Frost', 'Wave']",
        validationType: 'exact',
        hints: [
          'crew.append("Wave") adds Wave to the end of the list.',
          'Then print(crew) to show the whole list.',
          'crew = ["Bolt", "Frost"]\ncrew.append("Wave")\nprint(crew)',
        ],
        xpReward: 30,
        concept: 'list .append()',
        elementalDamage: 8,
      },
      {
        id: 'r5q4',
        title: 'Count the Fish',
        enemy: { name: 'Counting Crab', hp: 60, icon: '🦀' },
        story: 'The Counting Crab challenges you to count how many fish are in your net! Use len() to find how many items are in your list.',
        instructions: 'Create fish = ["tuna", "salmon", "cod", "bass"]. Print how many fish using len(fish).',
        starterCode:
          '# len() counts how many things are in a list!\n' +
          '# len(my_list) gives you the number.\n' +
          '\n' +
          'fish = ["tuna", "salmon", "cod", "bass"]\n' +
          '\n' +
          '# Print the count:\n',
        expectedOutput: '4',
        validationType: 'exact',
        hints: [
          'len(fish) will give the number of items — 4 fish!',
          'print(len(fish)) is all you need.',
          'fish = ["tuna", "salmon", "cod", "bass"]\nprint(len(fish))',
        ],
        xpReward: 30,
        concept: 'len() on lists',
        elementalDamage: 8,
      },
      {
        id: 'r5q5',
        title: '🏆 BOSS: Kraken of Collections',
        enemy: { name: 'Kraken of Collections', hp: 160, icon: '🦑', isBoss: true },
        story: "BOSS BATTLE! The mighty Kraken rises from the deep! It holds all your stolen items. Loop through the Kraken's loot and print every item to reclaim them!",
        instructions: 'Create loot = ["anchor", "compass", "spyglass", "parrot"]. Use a for loop to print each item on its own line.',
        starterCode:
          '# BOSS BATTLE! Loop through the list!\n' +
          '# for item in my_list: goes through EVERY item.\n' +
          '\n' +
          'loot = ["anchor", "compass", "spyglass", "parrot"]\n' +
          '\n' +
          '# Loop and print each item:\n',
        expectedOutput: 'anchor\ncompass\nspyglass\nparrot',
        validationType: 'exact',
        hints: [
          'for item in loot: will go through each item in the list.',
          'Then print(item) inside the loop.',
          'loot = ["anchor", "compass", "spyglass", "parrot"]\nfor item in loot:\n    print(item)',
        ],
        xpReward: 130,
        concept: 'looping through lists',
        elementalDamage: 20,
      },
    ],
    completion: [
      {
        speaker: 'Captain Wave',
        portrait: 'wave',
        text: "HOORAH! The Kraken is defeated! All our treasure is back where it belongs!",
      },
      {
        speaker: 'Captain Wave',
        portrait: 'wave',
        text: 'Lists are like treasure chests for your data — you can store lots of things, add more, and loop through all of them!',
      },
      {
        speaker: 'Captain Wave',
        portrait: 'wave',
        text: "Coral the Turtle joins your party — she'll shield you from errors! Sail on to the Ancient Library!",
      },
    ],
    rewards: {
      items: ['Pearl of the Deep', "Captain's Compass", 'Kraken Ink Bottle'],
      companionUnlock: 'coral',
      titleUnlock: 'Tidecaller',
    },
  },

  // ═══════════════════════════════════════════════
  // REGION 6: Ancient Library (Earth)
  // Element: Earth   Biome: Desert
  // Python concept: functions (def, parameters, return)
  // ═══════════════════════════════════════════════
  region6: {
    id: 6,
    name: 'Ancient Library',
    description: 'A massive sandstone library buried in the desert! The ancient scrolls hold the secret of FUNCTIONS — your own custom superpowers.',
    moduleId: 6,
    icon: '📚',
    color: '#a3793a',
    unlockLevel: 26,
    element: 'Earth',
    biome: 'desert',
    intro: [
      {
        speaker: 'Sage Petra',
        portrait: 'petra',
        text: 'Greetings, traveller. I am Sage Petra, keeper of the Ancient Library. I guard the most powerful secrets in all of coding.',
      },
      {
        speaker: 'Sage Petra',
        portrait: 'petra',
        text: 'A FUNCTION is like a superpower you create yourself. You define it once, give it a name, and use it as many times as you want!',
      },
      {
        speaker: 'Sage Petra',
        portrait: 'petra',
        text: 'Think of it as writing a spell in a spellbook. def greet(): is how you write the spell. greet() is how you cast it!',
      },
    ],
    quests: [
      {
        id: 'r6q1',
        title: 'Write Your First Spell',
        enemy: { name: 'Dusty Dummy', hp: 40, icon: '🪆' },
        story: 'The Dusty Dummy has forgotten all its spells! Help it by writing the simplest function — one that just says hello when you call it.',
        instructions: 'Define a function called say_hello() that prints "Hello from a function!". Then call it.',
        starterCode:
          '# def starts a function (your custom superpower!)\n' +
          '# The code inside runs when you CALL the function.\n' +
          '\n' +
          '# Step 1: Define (write) the function:\n' +
          'def say_hello():\n' +
          '    # Put what the function does here:\n' +
          '    \n' +
          '\n' +
          '# Step 2: Call (use) the function:\n' +
          'say_hello()\n',
        expectedOutput: 'Hello from a function!',
        validationType: 'exact',
        hints: [
          'Inside the function (indented), add: print("Hello from a function!")',
          'The function already gets called at the bottom with say_hello()',
          'def say_hello():\n    print("Hello from a function!")\n\nsay_hello()',
        ],
        xpReward: 30,
        concept: 'defining and calling functions',
        elementalDamage: 7,
      },
      {
        id: 'r6q2',
        title: 'Greet the Hero',
        enemy: { name: 'Rude Scarecrow', hp: 45, icon: '🎃' },
        story: "The Rude Scarecrow refuses to greet anyone by name! Show it how by making a function that takes a name and uses it!",
        instructions: 'Define greet(name) that prints "Hello, " + name + "!". Call it with greet("Petra").',
        starterCode:
          '# Functions can take INPUT — we call these "parameters"\n' +
          '# def greet(name): — name is the input!\n' +
          '\n' +
          '# Define the function:\n' +
          'def greet(name):\n' +
          '    # Use name inside a print:\n' +
          '    \n' +
          '\n' +
          '# Call it:\n' +
          'greet("Petra")\n',
        expectedOutput: 'Hello, Petra!',
        validationType: 'exact',
        hints: [
          'Inside the function: print("Hello, " + name + "!")',
          'Or you can use an f-string: print(f"Hello, {name}!")',
          'def greet(name):\n    print("Hello, " + name + "!")\n\ngreet("Petra")',
        ],
        xpReward: 30,
        concept: 'function parameters',
        elementalDamage: 7,
      },
      {
        id: 'r6q3',
        title: 'The Answer Machine',
        enemy: { name: 'Quiz Skeleton', hp: 55, icon: '💀' },
        story: 'The Quiz Skeleton asks maths questions but never gives answers! Build a function that RETURNS an answer — and print it.',
        instructions: 'Define add(a, b) that returns a + b. Print add(12, 8).',
        starterCode:
          '# "return" sends the answer BACK to whoever called the function!\n' +
          '# Like a calculator — you put in numbers, it gives back the answer.\n' +
          '\n' +
          '# Define the function:\n' +
          'def add(a, b):\n' +
          '    return \n' +
          '\n' +
          '# Print the result:\n' +
          'print(add(12, 8))\n',
        expectedOutput: '20',
        validationType: 'exact',
        hints: [
          'return a + b sends the sum back.',
          'The full function: def add(a, b): return a + b',
          'def add(a, b):\n    return a + b\n\nprint(add(12, 8))',
        ],
        xpReward: 35,
        concept: 'return values',
        elementalDamage: 9,
      },
      {
        id: 'r6q4',
        title: 'Double the Power',
        enemy: { name: 'Mirror Mimic', hp: 65, icon: '🪞' },
        story: 'The Mirror Mimic doubles everything it touches! Build a function that doubles any number — then use it twice in a row!',
        instructions: 'Define double(n) that returns n * 2. Print double(5) and print double(double(3)) on separate lines.',
        starterCode:
          '# Functions can use OTHER functions!\n' +
          '# double(double(3)) = double(6) = 12\n' +
          '\n' +
          '# Define the function:\n' +
          'def double(n):\n' +
          '    return \n' +
          '\n' +
          '# Test 1:\n' +
          'print(double(5))\n' +
          '\n' +
          '# Test 2 (double of a double!):\n' +
          'print(double(double(3)))\n',
        expectedOutput: '10\n12',
        validationType: 'exact',
        hints: [
          'return n * 2 doubles the number.',
          'double(5) = 10. double(double(3)) = double(6) = 12.',
          'def double(n):\n    return n * 2\n\nprint(double(5))\nprint(double(double(3)))',
        ],
        xpReward: 35,
        concept: 'using functions inside functions',
        elementalDamage: 9,
      },
      {
        id: 'r6q5',
        title: '🏆 BOSS: Recursion Golem',
        enemy: { name: 'Recursion Golem', hp: 170, icon: '🗿', isBoss: true },
        story: 'BOSS BATTLE! The Recursion Golem rebuilds itself — it calls ITSELF to regenerate! Defeat it by writing a function that calls ITSELF to count down from 3 to 1!',
        instructions: 'Define countdown(n) that: if n is 0, prints "Blast off!". Otherwise prints n and calls countdown(n - 1). Call countdown(3).',
        starterCode:
          '# BOSS BATTLE! A function that calls ITSELF is called recursion!\n' +
          '# It keeps going until it hits the "base case" (the stopping point).\n' +
          '\n' +
          'def countdown(n):\n' +
          '    if n == 0:\n' +
          '        print("Blast off!")\n' +
          '    else:\n' +
          '        # Print n, then call countdown with a smaller number:\n' +
          '        print(n)\n' +
          '        # Call countdown again:\n' +
          '        \n' +
          '\n' +
          'countdown(3)\n',
        expectedOutput: '3\n2\n1\nBlast off!',
        validationType: 'exact',
        hints: [
          'Inside the else block, add: countdown(n - 1)',
          'This makes the function call itself with a smaller number each time.',
          'def countdown(n):\n    if n == 0:\n        print("Blast off!")\n    else:\n        print(n)\n        countdown(n - 1)\n\ncountdown(3)',
        ],
        xpReward: 140,
        concept: 'recursion (intro)',
        elementalDamage: 22,
      },
    ],
    completion: [
      {
        speaker: 'Sage Petra',
        portrait: 'petra',
        text: 'Extraordinary! The Recursion Golem is shattered! You have learned the deepest secret of the library!',
      },
      {
        speaker: 'Sage Petra',
        portrait: 'petra',
        text: 'Functions are the heart of all programs. Every app, every game, every website is built from functions just like the ones you wrote!',
      },
      {
        speaker: 'Sage Petra',
        portrait: 'petra',
        text: "Terra the Bear joins your quest for stronger attacks! On to the Shadow Jungle — where data gets a LABEL!",
      },
    ],
    rewards: {
      items: ['Stone Tablet', "Sage's Quill", 'Ancient Scroll of Functions'],
      companionUnlock: 'terra',
      titleUnlock: 'Function Forger',
    },
  },

  // ═══════════════════════════════════════════════
  // REGION 7: Shadow Jungle (Nature)
  // Element: Nature   Biome: Jungle
  // Python concept: dictionaries (key-value pairs)
  // ═══════════════════════════════════════════════
  region7: {
    id: 7,
    name: 'Shadow Jungle',
    description: 'A dark, tangled jungle where every creature has a label and every plant has a secret name. Learn dictionaries to survive!',
    moduleId: 7,
    icon: '🌴',
    color: '#22c55e',
    unlockLevel: 31,
    element: 'Nature',
    biome: 'jungle',
    intro: [
      {
        speaker: 'Ranger Verde',
        portrait: 'verde',
        text: "Psst! Over here! I'm Ranger Verde. In this jungle, you need to LABEL everything or you'll get lost!",
      },
      {
        speaker: 'Ranger Verde',
        portrait: 'verde',
        text: 'We use DICTIONARIES for that! A dictionary is like a notebook where you write a label (key) and what it means (value). Like: "hp": 100',
      },
      {
        speaker: 'Ranger Verde',
        portrait: 'verde',
        text: 'monster = {"name": "Vine Beast", "hp": 80, "power": 15} — see? Each thing has a label. Let\'s explore!',
      },
    ],
    quests: [
      {
        id: 'r7q1',
        title: 'Label the Creature',
        enemy: { name: 'Confused Chameleon', hp: 40, icon: '🦎' },
        story: "The Confused Chameleon has forgotten what it is! Build a dictionary that describes it so it knows its own identity.",
        instructions: 'Create creature = {"name": "Chameleon", "color": "green"}. Print creature["name"].',
        starterCode:
          '# A dictionary uses {} curly brackets\n' +
          '# Each entry is: "label": value\n' +
          '# creature = {"name": "Chameleon", "color": "green"}\n' +
          '\n' +
          '# Create the dictionary:\n' +
          'creature = \n' +
          '\n' +
          '# Print just the name:\n',
        expectedOutput: 'Chameleon',
        validationType: 'exact',
        hints: [
          'creature = {"name": "Chameleon", "color": "green"}',
          'To get the name: creature["name"] — use the label in square brackets.',
          'creature = {"name": "Chameleon", "color": "green"}\nprint(creature["name"])',
        ],
        xpReward: 30,
        concept: 'creating dictionaries',
        elementalDamage: 7,
      },
      {
        id: 'r7q2',
        title: 'Check the Monster Stats',
        enemy: { name: 'Stat Snatcher', hp: 45, icon: '📊' },
        story: 'The Stat Snatcher scrambled all the monster stats! Rebuild the monster card and look up its hp.',
        instructions: 'Create monster = {"name": "Vine Beast", "hp": 80, "attack": 15}. Print monster["hp"].',
        starterCode:
          '# Dictionaries can hold numbers too!\n' +
          '# You look up values using their key (label).\n' +
          '\n' +
          '# Build the monster card:\n' +
          'monster = {"name": "Vine Beast", "hp": 80, "attack": 15}\n' +
          '\n' +
          '# Look up and print the hp:\n',
        expectedOutput: '80',
        validationType: 'exact',
        hints: [
          'monster["hp"] gets the hp value from the dictionary.',
          'print(monster["hp"]) will show 80.',
          'monster = {"name": "Vine Beast", "hp": 80, "attack": 15}\nprint(monster["hp"])',
        ],
        xpReward: 30,
        concept: 'accessing dictionary values',
        elementalDamage: 7,
      },
      {
        id: 'r7q3',
        title: 'Add a New Label',
        enemy: { name: 'Label Leech', hp: 55, icon: '🪱' },
        story: 'The Label Leech is eating dictionary entries! Quickly add a new entry to the dictionary before more get eaten!',
        instructions: 'Start with hero = {"name": "Verde", "level": 5}. Add "weapon": "vine whip" to it. Print hero["weapon"].',
        starterCode:
          '# You can add new entries to a dictionary!\n' +
          '# my_dict["new_key"] = new_value\n' +
          '\n' +
          'hero = {"name": "Verde", "level": 5}\n' +
          '\n' +
          '# Add the weapon:\n' +
          '\n' +
          '# Print the weapon:\n',
        expectedOutput: 'vine whip',
        validationType: 'exact',
        hints: [
          'hero["weapon"] = "vine whip" adds a new entry.',
          'Then print(hero["weapon"]) to show it.',
          'hero = {"name": "Verde", "level": 5}\nhero["weapon"] = "vine whip"\nprint(hero["weapon"])',
        ],
        xpReward: 35,
        concept: 'adding to dictionaries',
        elementalDamage: 9,
      },
      {
        id: 'r7q4',
        title: 'Jungle Roll Call',
        enemy: { name: 'Roll Call Parrot', hp: 65, icon: '🦜' },
        story: 'The Roll Call Parrot wants to hear the name of every jungle creature! Loop through the dictionary and print each key.',
        instructions: 'Create jungle = {"tiger": "big", "frog": "small", "snake": "long"}. Loop through jungle and print each key.',
        starterCode:
          '# for key in my_dict: loops through all the labels (keys)!\n' +
          '\n' +
          'jungle = {"tiger": "big", "frog": "small", "snake": "long"}\n' +
          '\n' +
          '# Loop and print each animal name:\n',
        expectedOutput: 'tiger\nfrog\nsnake',
        validationType: 'exact',
        hints: [
          'for animal in jungle: gives you each key (label).',
          'Then print(animal) inside the loop.',
          'jungle = {"tiger": "big", "frog": "small", "snake": "long"}\nfor animal in jungle:\n    print(animal)',
        ],
        xpReward: 35,
        concept: 'looping through dictionary keys',
        elementalDamage: 9,
      },
      {
        id: 'r7q5',
        title: '🏆 BOSS: Data Hydra',
        enemy: { name: 'Data Hydra', hp: 180, icon: '🐉', isBoss: true },
        story: 'BOSS BATTLE! The Data Hydra has seven heads — each head is a creature with a size! Loop through the dictionary and print BOTH the name AND the size together!',
        instructions: 'Create creatures = {"wolf": "large", "bat": "tiny", "bear": "huge"}. Loop through it using .items() and print "wolf is large" format for each one.',
        starterCode:
          '# .items() gives you BOTH the key AND the value at the same time!\n' +
          '# for name, size in my_dict.items():\n' +
          '\n' +
          'creatures = {"wolf": "large", "bat": "tiny", "bear": "huge"}\n' +
          '\n' +
          '# Loop and print both key and value:\n',
        expectedOutput: 'wolf is large\nbat is tiny\nbear is huge',
        validationType: 'exact',
        hints: [
          'for name, size in creatures.items(): gives both the key and value each loop.',
          'Then print(name + " is " + size) or use an f-string.',
          'creatures = {"wolf": "large", "bat": "tiny", "bear": "huge"}\nfor name, size in creatures.items():\n    print(name + " is " + size)',
        ],
        xpReward: 140,
        concept: 'looping through key-value pairs',
        elementalDamage: 22,
      },
    ],
    completion: [
      {
        speaker: 'Ranger Verde',
        portrait: 'verde',
        text: "YES! The Data Hydra is defeated! The jungle is safe! You're an incredible coder!",
      },
      {
        speaker: 'Ranger Verde',
        portrait: 'verde',
        text: 'Dictionaries let you label everything. Real programs use dictionaries for user profiles, game stats, weather data — everything!',
      },
      {
        speaker: 'Ranger Verde',
        portrait: 'verde',
        text: "Fern the Cat is yours now — she'll give auto-hints when you're stuck. One final region remains: the VOID CITADEL!",
      },
    ],
    rewards: {
      items: ['Jungle Vine', "Ranger's Map", 'Nature Totem'],
      companionUnlock: 'fern',
      titleUnlock: 'Data Ranger',
    },
  },

  // ═══════════════════════════════════════════════
  // REGION 8: Void Citadel (Void)
  // Element: Void   Biome: Cosmic/Void
  // Python concept: combining everything — final challenges
  // ═══════════════════════════════════════════════
  region8: {
    id: 8,
    name: 'Void Citadel',
    description: 'A floating fortress at the edge of reality! Only a true Python master can combine ALL their skills to defeat the Final Code Dragon!',
    moduleId: 8,
    icon: '🏰',
    color: '#a855f7',
    unlockLevel: 36,
    element: 'Void',
    biome: 'void',
    intro: [
      {
        speaker: 'Archmage Cipher',
        portrait: 'cipher',
        text: 'So... you have come this far. I am Archmage Cipher, master of the Void Citadel. Very few reach this place.',
      },
      {
        speaker: 'Archmage Cipher',
        portrait: 'cipher',
        text: 'Here, you will face the ultimate test. Not just one skill — but ALL of them, combined. print, variables, if/else, loops, lists, functions, dictionaries.',
      },
      {
        speaker: 'Archmage Cipher',
        portrait: 'cipher',
        text: 'The Final Code Dragon awaits at the top. Are you ready, young master? Then let us begin the final gauntlet!',
      },
    ],
    quests: [
      {
        id: 'r8q1',
        title: 'The Variable Vault',
        enemy: { name: 'Memory Phantom', hp: 60, icon: '👻' },
        story: 'The Memory Phantom scrambles all your stored knowledge! Prove you remember variables AND f-strings by building a hero card from scratch.',
        instructions: 'Create: name = "Cipher Knight", hp = 150, element = "Void". Print: "Cipher Knight | HP: 150 | Element: Void" using an f-string.',
        starterCode:
          '# Mix everything you know!\n' +
          '# Variables + f-strings together.\n' +
          '\n' +
          'name = "Cipher Knight"\n' +
          'hp = 150\n' +
          'element = "Void"\n' +
          '\n' +
          '# Print the hero card:\n',
        expectedOutput: 'Cipher Knight | HP: 150 | Element: Void',
        validationType: 'exact',
        hints: [
          'Use an f-string with all three variables.',
          'f"{name} | HP: {hp} | Element: {element}"',
          'name = "Cipher Knight"\nhp = 150\nelement = "Void"\nprint(f"{name} | HP: {hp} | Element: {element}")',
        ],
        xpReward: 35,
        concept: 'variables + f-strings review',
        elementalDamage: 10,
      },
      {
        id: 'r8q2',
        title: 'The Decision Tower',
        enemy: { name: 'Binary Wraith', hp: 70, icon: '💻' },
        story: "The Binary Wraith only thinks in 0s and 1s! Show it you can make smart decisions — check a player's score and give the right rank.",
        instructions: 'Set score = 85. If >= 90 print "S Rank!". Elif >= 70 print "A Rank!". Elif >= 50 print "B Rank!". Else print "Try again!".',
        starterCode:
          '# Use if/elif/else to check score ranges!\n' +
          '\n' +
          'score = 85\n' +
          '\n' +
          '# Write your if/elif/else:\n',
        expectedOutput: 'A Rank!',
        validationType: 'exact',
        hints: [
          '85 is >= 70 but NOT >= 90, so the elif >= 70 branch runs.',
          'That means "A Rank!" should print.',
          'score = 85\nif score >= 90:\n    print("S Rank!")\nelif score >= 70:\n    print("A Rank!")\nelif score >= 50:\n    print("B Rank!")\nelse:\n    print("Try again!")',
        ],
        xpReward: 35,
        concept: 'if/elif/else review',
        elementalDamage: 10,
      },
      {
        id: 'r8q3',
        title: 'The Loop Labyrinth',
        enemy: { name: 'Maze Minotaur', hp: 80, icon: '🐂' },
        story: 'The Maze Minotaur is trapped in an endless loop! Escape by showing you can loop through a list and do something with each item!',
        instructions: 'Create spells = ["fireball", "ice spike", "thunderbolt"]. Loop through and print "Casting: " + each spell name.',
        starterCode:
          '# Loop through a list and build a message each time!\n' +
          '\n' +
          'spells = ["fireball", "ice spike", "thunderbolt"]\n' +
          '\n' +
          '# Your loop:\n',
        expectedOutput: 'Casting: fireball\nCasting: ice spike\nCasting: thunderbolt',
        validationType: 'exact',
        hints: [
          'for spell in spells: goes through each spell.',
          'print("Casting: " + spell) builds the message.',
          'spells = ["fireball", "ice spike", "thunderbolt"]\nfor spell in spells:\n    print("Casting: " + spell)',
        ],
        xpReward: 40,
        concept: 'loops + lists + string building review',
        elementalDamage: 12,
      },
      {
        id: 'r8q4',
        title: 'The Function Fortress',
        enemy: { name: 'Gate Sentinel', hp: 90, icon: '🛡️' },
        story: 'The Gate Sentinel only opens to those who can create AND use a function that works with a dictionary! Prove your worth!',
        instructions: 'Define get_power(hero_dict) that returns hero_dict["attack"] * 2. Create hero = {"name": "Nova", "attack": 25}. Print get_power(hero).',
        starterCode:
          '# A function that takes a dictionary as input!\n' +
          '# Functions can take ANY kind of value — even whole dictionaries.\n' +
          '\n' +
          '# Define the function:\n' +
          'def get_power(hero_dict):\n' +
          '    return \n' +
          '\n' +
          '# Create the hero:\n' +
          'hero = {"name": "Nova", "attack": 25}\n' +
          '\n' +
          '# Call the function:\n' +
          'print(get_power(hero))\n',
        expectedOutput: '50',
        validationType: 'exact',
        hints: [
          'hero_dict["attack"] gets the attack value (25). Multiply by 2 = 50.',
          'return hero_dict["attack"] * 2',
          'def get_power(hero_dict):\n    return hero_dict["attack"] * 2\n\nhero = {"name": "Nova", "attack": 25}\nprint(get_power(hero))',
        ],
        xpReward: 40,
        concept: 'functions + dictionaries review',
        elementalDamage: 12,
      },
      {
        id: 'r8q5',
        title: '🏆 FINAL BOSS: Code Dragon',
        enemy: { name: 'Final Code Dragon', hp: 300, icon: '🐉', isBoss: true },
        story: 'THE FINAL BOSS! The Code Dragon combines ALL the dark powers! To defeat it, you must use EVERYTHING: a function, a loop, a list, and an if/else — all at once. This is your destiny, hero!',
        instructions:
          'Define check_power(spells) that loops through the spells list. ' +
          'For each spell, if the spell starts with "fire" print "[spell]: FIRE DAMAGE!". ' +
          'Otherwise print "[spell]: Normal hit." ' +
          'Call check_power(["fireball", "ice beam", "fire storm", "wind slash"]).',
        starterCode:
          '# FINAL BOSS BATTLE!\n' +
          '# Use a function + loop + list + if/else all together!\n' +
          '\n' +
          '# Define your function:\n' +
          'def check_power(spells):\n' +
          '    for spell in spells:\n' +
          '        if spell.startswith("fire"):\n' +
          '            # Print: spell + ": FIRE DAMAGE!"\n' +
          '            \n' +
          '        else:\n' +
          '            # Print: spell + ": Normal hit."\n' +
          '            \n' +
          '\n' +
          '# Call your function:\n' +
          'check_power(["fireball", "ice beam", "fire storm", "wind slash"])\n',
        expectedOutput: 'fireball: FIRE DAMAGE!\nice beam: Normal hit.\nfire storm: FIRE DAMAGE!\nwind slash: Normal hit.',
        validationType: 'exact',
        hints: [
          'Inside if: print(spell + ": FIRE DAMAGE!") and inside else: print(spell + ": Normal hit.")',
          '.startswith("fire") checks if the word begins with "fire" — fireball and fire storm both do!',
          'def check_power(spells):\n    for spell in spells:\n        if spell.startswith("fire"):\n            print(spell + ": FIRE DAMAGE!")\n        else:\n            print(spell + ": Normal hit.")\n\ncheck_power(["fireball", "ice beam", "fire storm", "wind slash"])',
        ],
        xpReward: 150,
        concept: 'mastery — all concepts combined',
        elementalDamage: 30,
      },
    ],
    completion: [
      {
        speaker: 'Archmage Cipher',
        portrait: 'cipher',
        text: 'INCREDIBLE. The Final Code Dragon has fallen. You... you have truly done it.',
      },
      {
        speaker: 'Archmage Cipher',
        portrait: 'cipher',
        text: 'You have mastered print(), variables, if/else, loops, lists, functions, and dictionaries. You are no longer a beginner — you are a PYTHON CODER.',
      },
      {
        speaker: 'Archmage Cipher',
        portrait: 'cipher',
        text: 'Nova the Dragon is yours. With all bonuses unlocked, you are unstoppable. The real world of coding awaits you beyond this citadel. Go — and build amazing things!',
      },
    ],
    rewards: {
      items: ['Void Crystal', "Archmage's Staff", 'Final Dragon Scale', "Master Coder's Crown"],
      companionUnlock: 'nova',
      titleUnlock: 'Python Master',
    },
  },
};

export default rpgQuests;
