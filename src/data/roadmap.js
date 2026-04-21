/**
 * AeroPython — Antigravity Academy
 * Module Roadmap: 40 missions, built for 10-year-olds
 * Progresses from "what is a computer?" to mini projects
 */

const roadmap = [

  // ============================================================
  // FLIGHT LEVEL 1 — Stages 1-5: What Is Coding? First Words.
  // ============================================================

  {
    id: 1,
    title: "Pre-Flight Briefing",
    topic: "What Is Coding?",
    challenge: "Make Python say 'Tower, this is AeroPython — ready for takeoff!'",
    details: "Before every flight, pilots do a briefing. Let's do yours. You're about to talk to a computer using a secret language called Python!",
    objectives: [
      "Understand that code is just instructions for a computer",
      "Type your very first Python command",
      "Make the computer say something on screen"
    ],
    keyConcepts: [
      { term: "print()", definition: "The magic word that makes Python show something on screen. Like yelling into a speaker!" },
      { term: "Code", definition: "Instructions written for a computer to follow, one step at a time." },
      { term: "Python", definition: "A programming language — like English, but for computers. Very friendly for beginners!" }
    ],
    starterCode: `# Welcome to AeroPython! The '#' symbol means a comment.
# Comments are notes for YOU - Python ignores them.

# Let's make Python talk!
print("Tower, this is AeroPython - ready for takeoff!")

# YOUR TURN: Change the words inside the quotes.
# Make Python say YOUR name!
print("Hello, my name is ___!")
`,
    resources: [
      { label: "Python for Kids (free)", url: "https://python.land/python-tutorial" },
      { label: "What is coding? (video)", url: "https://www.youtube.com/watch?v=QvyTEx1wyOY" }
    ]
  },

  {
    id: 2,
    title: "Radio Check",
    topic: "Printing Text",
    challenge: "Print a 3-line poem about flying using print() three times.",
    details: "Pilots use radios to send messages. print() is YOUR radio to send messages to the screen. Let's practice sending lots of messages!",
    objectives: [
      "Use print() multiple times in a row",
      "Understand that Python runs code top-to-bottom",
      "Print blank lines to make your output look tidy"
    ],
    keyConcepts: [
      { term: "print()", definition: "You can use it as many times as you want — each one shows a new line!" },
      { term: "Quotes \" \"", definition: "Text must live inside quotes. Like passengers inside a plane." },
      { term: "Empty print()", definition: "print() with nothing inside prints a blank line — great for spacing!" }
    ],
    starterCode: `# Every print() shows one line on screen.
# Python reads top to bottom, like a checklist.

print("I want to fly up high,")
print("Above the clouds and sky,")
print("With Python by my side,")
print("On this coding ride!")

# Print a blank line for spacing
print()

print("Mission complete! Pilot out.")

# YOUR TURN: Write your own 3-line poem below!
`,
    resources: [
      { label: "Python print() explained", url: "https://realpython.com/python-print/" }
    ]
  },

  {
    id: 3,
    title: "Cockpit Display",
    topic: "Numbers on Screen",
    challenge: "Print the altitude (35000), speed (550), and fuel (80) of your plane.",
    details: "Cockpits are full of numbers — altitude, speed, fuel. Python can show numbers too, and do maths with them!",
    objectives: [
      "Print numbers (not just words) with print()",
      "Do simple maths inside print()",
      "See the difference between numbers and words"
    ],
    keyConcepts: [
      { term: "Number", definition: "Numbers don't need quotes! print(42) works. print(\"42\") also works but they're different." },
      { term: "Maths in print()", definition: "Python can add, subtract, multiply, divide: print(10 + 5) shows 15" },
      { term: "+ - * /", definition: "These are operators — tools for doing maths. * means multiply, / means divide." }
    ],
    starterCode: `# Python loves numbers! No quotes needed.

# Show the cockpit readings
print("=== COCKPIT DISPLAY ===")
print("Altitude (feet):", 35000)
print("Speed (mph):", 550)
print("Fuel (%):", 80)

# Python can do maths!
print()
print("Half fuel remaining:", 80 / 2)
print("Total seats:", 20 + 180)

# YOUR TURN: What is 35000 - 5000? Add a line to show it!
`,
    resources: [
      { label: "Python numbers tutorial", url: "https://www.w3schools.com/python/python_numbers.asp" }
    ]
  },

  {
    id: 4,
    title: "Pilot's Joke Book",
    topic: "Fun With Text",
    challenge: "Make Python tell 3 aviation jokes using print().",
    details: "Why do pilots make great comedians? Because their jokes always fly! Let's have fun with text and see what cool tricks print() can do.",
    objectives: [
      "Print multi-line stories or jokes",
      "Use print() to draw simple shapes with characters",
      "Have fun — coding should be enjoyable!"
    ],
    keyConcepts: [
      { term: "String", definition: "The fancy word for text in Python. 'Hello' is a string. Always in quotes." },
      { term: "* (repeat trick)", definition: "print('=' * 20) prints ==================== — super useful for borders!" },
      { term: "Escape \\n", definition: "\\n inside a string means 'new line'. Like pressing Enter inside a quote." }
    ],
    starterCode: `# Let's tell some jokes!

print("=" * 30)
print("   PILOT'S JOKE BOOK")
print("=" * 30)
print()

print("Q: Why can't pilots ever be sad?")
print("A: Because they always look on the flight side!")
print()

print("Q: What do you call a pilot who has retired?")
print("A: Grounded!")
print()

# Draw a tiny plane with text art!
print("      *")
print("  ---[=]---")
print("      *")
print()

# YOUR TURN: Write your own joke or draw something with text!
`,
    resources: [
      { label: "Python strings beginner guide", url: "https://www.w3schools.com/python/python_strings.asp" }
    ]
  },

  {
    id: 5,
    title: "Ask the Pilot",
    topic: "Getting Input From User",
    challenge: "Ask the user their name and favourite destination, then greet them like a flight attendant.",
    details: "So far Python only TALKS. What if it could LISTEN too? input() is how Python asks YOU a question!",
    objectives: [
      "Use input() to ask the user a question",
      "Store the answer and print it back",
      "Make Python feel like it's talking to you"
    ],
    keyConcepts: [
      { term: "input()", definition: "Pauses the program and waits for you to type something. Like a question box!" },
      { term: "Combining text", definition: "Use + to join text together: \"Hello \" + name" },
      { term: "Answer storage", definition: "When you type something, Python needs to save it somewhere. We'll learn more in Stage 6!" }
    ],
    starterCode: `# input() asks the user to type something
# Whatever they type gets saved

print("=== BOARDING GATE 5 ===")
print()

# Ask for the passenger's name
passenger = input("Welcome! What is your name? ")

# Now use what they said
print("Hello, " + passenger + "!")
print("We're glad to have you on board.")

destination = input("Where are you flying today? ")
print("Excellent! Flight to " + destination + " now boarding.")
print("Enjoy your flight, " + passenger + "!")

# YOUR TURN: Ask one more question — maybe their seat number!
`,
    resources: [
      { label: "Python input() explained", url: "https://www.w3schools.com/python/ref_func_input.asp" }
    ]
  },

  // ============================================================
  // FLIGHT LEVEL 2 — Stages 6-10: Variables (Boxes!)
  // ============================================================

  {
    id: 6,
    title: "The Storage Bay",
    topic: "Variables (Boxes for Data)",
    challenge: "Create 4 boxes (variables) for your pilot profile: name, age, plane, and favourite airport.",
    details: "Imagine the luggage bay of a plane — you put things in boxes, label them, and grab them when you need them. That's what variables are: labelled boxes for storing information!",
    objectives: [
      "Create a variable by giving it a name and a value",
      "Store text (words) and numbers in variables",
      "Use variables inside print() statements"
    ],
    keyConcepts: [
      { term: "Variable", definition: "A labelled box that stores information. name = \"Alex\" makes a box called 'name' with 'Alex' inside." },
      { term: "= (assignment)", definition: "The = sign STORES something into a box. It doesn't mean 'equals' here!" },
      { term: "Reusing variables", definition: "Once a box exists, you can use it anywhere: print(name) shows whatever is in the name box." }
    ],
    starterCode: `# Create some boxes (variables)!
# box_name = value_to_store

pilot_name = "Alex"
pilot_age = 10
plane_type = "Boeing 737"
home_airport = "Singapore Changi"

# Now USE the boxes inside print()
print("=== PILOT PROFILE ===")
print("Name:", pilot_name)
print("Age:", pilot_age)
print("Plane:", plane_type)
print("Base Airport:", home_airport)

# YOUR TURN: Change the values to YOUR info!
# Then add a 5th variable: favourite_food
`,
    resources: [
      { label: "Python variables for beginners", url: "https://www.w3schools.com/python/python_variables.asp" }
    ]
  },

  {
    id: 7,
    title: "Fuel Calculator",
    topic: "Numbers and Maths",
    challenge: "Calculate how much fuel you need for a 5-hour flight if you burn 2,500 litres per hour.",
    details: "Pilots do a lot of maths — fuel loads, distances, speeds. Python is an amazing calculator. Let's crunch some numbers!",
    objectives: [
      "Use variables to store numbers",
      "Do maths with variables",
      "Store the result in a new variable"
    ],
    keyConcepts: [
      { term: "+ add", definition: "5 + 3 = 8. Simple!" },
      { term: "- subtract", definition: "10 - 4 = 6. Take away." },
      { term: "* multiply", definition: "6 * 7 = 42. Times tables!" },
      { term: "/ divide", definition: "20 / 4 = 5. Split into equal parts." }
    ],
    starterCode: `# Fuel Calculator for Flight AeroPython 001

flight_hours = 5
fuel_per_hour = 2500  # litres per hour

# Do the maths!
total_fuel = flight_hours * fuel_per_hour

print("=== FUEL REPORT ===")
print("Flight hours:", flight_hours)
print("Fuel per hour:", fuel_per_hour, "litres")
print("Total fuel needed:", total_fuel, "litres")

# Extra maths!
reserve_fuel = 500  # always keep 500L spare
fuel_to_load = total_fuel + reserve_fuel
print("Including reserves:", fuel_to_load, "litres")

# YOUR TURN: What if the flight was 8 hours? Change flight_hours!
`,
    resources: [
      { label: "Python maths operators", url: "https://www.w3schools.com/python/python_operators.asp" }
    ]
  },

  {
    id: 8,
    title: "Speed Converter",
    topic: "Maths With Variables",
    challenge: "Convert a plane's speed from km/h to mph AND to metres per second.",
    details: "Pilots use different speed units around the world. Let's build a speed converter using maths and variables!",
    objectives: [
      "Chain maths calculations using variables",
      "Understand that / means divide and * means multiply",
      "Round numbers to look tidy"
    ],
    keyConcepts: [
      { term: "round()", definition: "round(3.14159, 2) gives you 3.14 — rounds to 2 decimal places." },
      { term: "Calculation chain", definition: "You can do maths on results: mps = kmh / 3.6 — divide km/h by 3.6 to get m/s" },
      { term: "Variable update", definition: "You can change a box's value anytime: speed = speed + 10 adds 10 to speed." }
    ],
    starterCode: `# Speed Converter — Pilot's Tool

speed_kmh = 900  # plane speed in km/h

# Convert to mph (divide by 1.609)
speed_mph = speed_kmh / 1.609

# Convert to metres per second (divide by 3.6)
speed_mps = speed_kmh / 3.6

print("=== SPEED CONVERTER ===")
print("Speed in km/h:", speed_kmh)
print("Speed in mph:", round(speed_mph, 1))
print("Speed in m/s:", round(speed_mps, 1))

# How far does it travel in 30 minutes?
minutes = 30
hours = minutes / 60
distance = speed_kmh * hours
print()
print("In", minutes, "minutes, you travel:", round(distance), "km")

# YOUR TURN: Change speed_kmh to 1200 (supersonic!) and run again.
`,
    resources: [
      { label: "Python round() function", url: "https://www.w3schools.com/python/ref_func_round.asp" }
    ]
  },

  {
    id: 9,
    title: "Countdown to Launch",
    topic: "Changing Variables",
    challenge: "Simulate a rocket countdown from 10 to 0 by updating a variable each time.",
    details: "Variables can change! You can update a box with new information. Let's count down to launch by changing a variable over and over.",
    objectives: [
      "Change a variable's value after it's been created",
      "Use += to add to a variable (shortcut!)",
      "Print the variable at different points to track changes"
    ],
    keyConcepts: [
      { term: "Update a variable", definition: "count = count - 1 takes 1 away from count. The box's value changes!" },
      { term: "-= shortcut", definition: "count -= 1 means the same as count = count - 1. Quicker to type!" },
      { term: "+= shortcut", definition: "score += 10 means add 10 to score. Super common in games!" }
    ],
    starterCode: `# Rocket Countdown!

countdown = 10

print("=== LAUNCH SEQUENCE INITIATED ===")
print("T-minus", countdown)

countdown -= 1
print("T-minus", countdown)

countdown -= 1
print("T-minus", countdown)

countdown -= 1
print("T-minus", countdown)

countdown -= 1
print("T-minus", countdown)

countdown -= 1
print("T-minus", countdown, "... halfway there!")

# YOUR TURN: Keep going down to 0 then print "LIFTOFF!"
# (We'll learn a shortcut for this in Stage 16!)
`,
    resources: [
      { label: "Python variable assignment", url: "https://www.w3schools.com/python/python_variables.asp" }
    ]
  },

  {
    id: 10,
    title: "Passenger Manifest",
    topic: "Text Variables & Joining",
    challenge: "Build a boarding announcement by joining together different text variables.",
    details: "Flight attendants read from a script that changes for every flight. Let's build one that fills in the blanks automatically using variables!",
    objectives: [
      "Store words and sentences in variables",
      "Join variables together with + or using commas in print()",
      "Build a longer message from small pieces"
    ],
    keyConcepts: [
      { term: "String variable", definition: "A box that stores text: airline = \"SkyHigh Air\"" },
      { term: "Joining strings", definition: "\"Hello \" + name joins two text pieces into one. No space is added automatically!" },
      { term: "print() commas", definition: "print(\"Hello\", name) puts a space between each thing automatically. Very handy!" }
    ],
    starterCode: `# Automated Boarding Announcement Generator

airline = "AeroPython Airways"
flight_number = "AP-001"
destination = "Tokyo"
gate = "Gate 7"
boarding_time = "14:30"

# Build the announcement piece by piece
print("=== BOARDING ANNOUNCEMENT ===")
print()

# Using commas in print() adds spaces automatically
print("Ladies and gentlemen,", airline, "welcomes you.")
print("Flight", flight_number, "to", destination)
print("is now boarding at", gate)
print("Boarding time:", boarding_time)

print()
print("Thank you for choosing", airline + "!")
print("We hope you enjoy your flight to " + destination + ".")

# YOUR TURN: Add a variable for the plane type and include it!
`,
    resources: [
      { label: "Python string concatenation", url: "https://www.w3schools.com/python/gloss_python_string_concatenation.asp" }
    ]
  },

  // ============================================================
  // FLIGHT LEVEL 3 — Stages 11-15: Making Choices (If/Else)
  // ============================================================

  {
    id: 11,
    title: "Weather Check",
    topic: "True and False",
    challenge: "Check if the weather is safe to fly by comparing numbers.",
    details: "Before flying, pilots check if conditions are safe. Python can check conditions too using True and False — like YES and NO answers.",
    objectives: [
      "Understand True and False (called booleans)",
      "Use == to check if two things are equal",
      "Use > and < to compare numbers"
    ],
    keyConcepts: [
      { term: "True / False", definition: "Python's YES and NO. Every comparison gives you either True or False." },
      { term: "== (equals check)", definition: "5 == 5 is True. 5 == 6 is False. (Two equals signs! Not one.)" },
      { term: "> and <", definition: "10 > 5 is True (10 is bigger). 3 < 1 is False (3 is not less than 1)." }
    ],
    starterCode: `# Weather Safety Checker

wind_speed = 45    # km/h
visibility = 8000  # metres
max_wind = 50      # limit for safe flying

# These comparisons give True or False
wind_ok = wind_speed < max_wind
vis_ok = visibility > 1000

print("=== WEATHER REPORT ===")
print("Wind speed:", wind_speed, "km/h")
print("Visibility:", visibility, "m")
print()
print("Wind safe to fly?", wind_ok)
print("Visibility safe?", vis_ok)
print()

# Try changing wind_speed to 60 — what changes?

# YOUR TURN: Add a variable for temperature.
# Is temperature > -10 safe? Check it!
`,
    resources: [
      { label: "Python booleans explained", url: "https://www.w3schools.com/python/python_booleans.asp" }
    ]
  },

  {
    id: 12,
    title: "Go / No-Go Decision",
    topic: "If Statements",
    challenge: "Use an if statement to decide if it's safe to fly based on wind speed.",
    details: "Pilots make go/no-go decisions constantly. Now Python can make decisions too! The 'if' statement says: IF this is true, do this thing.",
    objectives: [
      "Write your first if statement",
      "Understand that indentation (spaces) matters in Python",
      "Run different code based on a condition"
    ],
    keyConcepts: [
      { term: "if", definition: "if condition: — if the condition is True, run the indented code below it." },
      { term: "Indentation", definition: "The 4 spaces before code inside an if block. Python uses spacing to know what belongs where!" },
      { term: "Condition", definition: "The True/False question that if checks. Like: wind_speed < 50" }
    ],
    starterCode: `# Go / No-Go Decision System

wind_speed = 35  # try changing this!

print("Wind speed:", wind_speed, "km/h")

# if the condition is True, run the indented line
if wind_speed < 50:
    print("GO! Wind is acceptable.")
    print("Cleared for takeoff.")

# YOUR TURN: What if wind_speed is 65?
# Change the number and run again.
# Notice — nothing prints for the unsafe case!
# We'll fix that in Stage 13 with 'else'.
`,
    resources: [
      { label: "Python if statement", url: "https://www.w3schools.com/python/python_conditions.asp" }
    ]
  },

  {
    id: 13,
    title: "Alternate Airport",
    topic: "If / Else",
    challenge: "If weather is good, fly to destination. Else, divert to the alternate airport.",
    details: "Pilots always have a backup plan — an alternate airport. In Python, 'else' is your backup plan. If the main condition isn't true, do the else thing instead!",
    objectives: [
      "Add an else block to handle the 'other' case",
      "Understand that only ONE branch runs — either if or else",
      "Build a proper decision that always does something"
    ],
    keyConcepts: [
      { term: "else:", definition: "The backup plan. If the if condition is False, Python runs the else block instead." },
      { term: "Only one runs", definition: "Either the if block OR the else block runs. Never both. Never neither." },
      { term: "Indentation again", definition: "else: lines up with if: and its code is also indented 4 spaces." }
    ],
    starterCode: `# Go/No-Go with Alternate Airport

visibility = 2000  # metres — try changing to 800!
destination = "Tokyo"
alternate = "Osaka"

print("=== FLIGHT DECISION ===")

if visibility > 1000:
    print("Visibility OK:", visibility, "m")
    print("Proceeding to", destination)
else:
    print("Visibility TOO LOW:", visibility, "m")
    print("Diverting to alternate:", alternate)

print()
print("Decision made. Flight crew informed.")

# YOUR TURN: Change visibility to 800 and run again.
# Then try 1500. See how the decision changes!
`,
    resources: [
      { label: "Python if else", url: "https://www.w3schools.com/python/python_conditions.asp" }
    ]
  },

  {
    id: 14,
    title: "Turbulence Levels",
    topic: "If / Elif / Else",
    challenge: "Classify turbulence as Light, Moderate, or Severe based on a shake value.",
    details: "Sometimes there are more than 2 options! 'elif' means 'else if' — check another condition if the first one was false. Like multiple choice!",
    objectives: [
      "Add elif to handle multiple conditions",
      "Chain if / elif / elif / else together",
      "Understand only the FIRST true condition runs"
    ],
    keyConcepts: [
      { term: "elif", definition: "Short for 'else if'. Checks another condition if the previous if was False." },
      { term: "Chain order", definition: "Python checks top to bottom and stops at the FIRST True condition." },
      { term: "else at the end", definition: "The else catches everything that didn't match any if or elif above it." }
    ],
    starterCode: `# Turbulence Level Classifier

shake_value = 45  # 0=calm, 100=extreme

print("Shake value:", shake_value)
print()

if shake_value < 20:
    print("Status: LIGHT turbulence")
    print("Seat belts recommended.")
elif shake_value < 50:
    print("Status: MODERATE turbulence")
    print("Please remain seated.")
elif shake_value < 80:
    print("Status: SEVERE turbulence")
    print("All crew, take your seats!")
else:
    print("Status: EXTREME turbulence!")
    print("MAYDAY MAYDAY MAYDAY!")

# YOUR TURN: Test with values 10, 35, 65, 95
# Change shake_value each time and see what happens!
`,
    resources: [
      { label: "Python elif", url: "https://www.w3schools.com/python/python_conditions.asp" }
    ]
  },

  {
    id: 15,
    title: "Flight Computer",
    topic: "If With User Input",
    challenge: "Ask the user for wind speed and make an automatic go/no-go decision.",
    details: "Let's combine input() and if/else to build an interactive flight computer! The user types a number, and Python makes a decision.",
    objectives: [
      "Combine input() with if/else",
      "Convert user input to a number with int()",
      "Build a mini interactive program"
    ],
    keyConcepts: [
      { term: "int()", definition: "input() always gives you text. int() converts text to a number. int(\"42\") = 42" },
      { term: "Interactive program", definition: "A program that asks questions and responds based on answers." },
      { term: "Combining skills", definition: "Variables + input() + if/else all working together!" }
    ],
    starterCode: `# Interactive Flight Computer

print("=== AERO FLIGHT COMPUTER ===")
print()

# input() gives us TEXT — we convert to a number with int()
wind_text = input("Enter wind speed (km/h): ")
wind_speed = int(wind_text)

vis_text = input("Enter visibility (metres): ")
visibility = int(vis_text)

print()
print("=== ANALYSIS ===")

# Check wind
if wind_speed > 60:
    print("WIND: Too strong -", wind_speed, "km/h")
else:
    print("WIND: OK -", wind_speed, "km/h")

# Check visibility
if visibility < 800:
    print("VIS: Too low -", visibility, "m")
else:
    print("VIS: OK -", visibility, "m")

# Final decision
if wind_speed <= 60 and visibility >= 800:
    print()
    print("FINAL DECISION: GO FOR LAUNCH!")
else:
    print()
    print("FINAL DECISION: NO-GO. Wait for better conditions.")
`,
    resources: [
      { label: "Python int() conversion", url: "https://www.w3schools.com/python/ref_func_int.asp" }
    ]
  },

  // ============================================================
  // FLIGHT LEVEL 4 — Stages 16-20: Loops (Repeating Things)
  // ============================================================

  {
    id: 16,
    title: "Engine Startup Sequence",
    topic: "For Loops",
    challenge: "Print the engine startup steps numbered 1 to 8 automatically.",
    details: "Pilots follow a checklist — the same steps every time. Instead of writing print() 8 times, a FOR loop does it automatically! A for loop repeats code a set number of times.",
    objectives: [
      "Write your first for loop using range()",
      "Understand that the loop variable changes each time",
      "See how loops save you from writing the same thing many times"
    ],
    keyConcepts: [
      { term: "for loop", definition: "Repeats code a set number of times. for i in range(5): runs 5 times!" },
      { term: "range(n)", definition: "Makes a list of numbers from 0 to n-1. range(5) gives 0,1,2,3,4" },
      { term: "Loop variable", definition: "The i in 'for i in range(5)' changes value each loop: 0, then 1, then 2..." }
    ],
    starterCode: `# Engine Startup — automatic with a loop!

print("=== ENGINE STARTUP SEQUENCE ===")

# This loop runs 8 times (0, 1, 2, 3, 4, 5, 6, 7)
for step in range(8):
    print("Step", step, ": Checking system...")

print()
print("All steps complete!")

# Wait — steps start at 0. Let's fix that!
print()
print("=== BETTER VERSION ===")

# range(1, 9) goes from 1 to 8
for step in range(1, 9):
    print("Step", step, ": System checked OK")

print("Engine startup complete!")

# YOUR TURN: Change to 12 steps for a bigger plane!
`,
    resources: [
      { label: "Python for loops", url: "https://www.w3schools.com/python/python_for_loops.asp" }
    ]
  },

  {
    id: 17,
    title: "Altitude Report",
    topic: "Loops With Maths",
    challenge: "Print the plane's altitude every 1000 feet as it climbs from 0 to 10,000 feet.",
    details: "Planes climb in steps. Let's use a loop with maths to simulate a climb report — showing altitude at every checkpoint!",
    objectives: [
      "Use range() with a step (count by 2s, 5s, 1000s...)",
      "Do maths inside a loop",
      "Print a report that changes each time through the loop"
    ],
    keyConcepts: [
      { term: "range(start, stop, step)", definition: "range(0, 10000, 1000) counts: 0, 1000, 2000... up to 9000" },
      { term: "Loop variable in maths", definition: "You can do maths with the loop variable: altitude * 2" },
      { term: "Formatted output", definition: "Make your output line up neatly so it's easy to read." }
    ],
    starterCode: `# Climb Report Generator

print("=== CLIMB REPORT ===")
print("Altitude | Phase")
print("-" * 25)

# Count from 0 to 10000, going up by 1000 each time
for altitude in range(0, 11000, 1000):

    if altitude == 0:
        phase = "Ground - Takeoff roll"
    elif altitude < 3000:
        phase = "Initial climb"
    elif altitude < 8000:
        phase = "Climbing..."
    elif altitude < 10000:
        phase = "Almost there!"
    else:
        phase = "Cruise altitude reached!"

    print(altitude, "feet  |", phase)

print()
print("Climb complete. Seat belt sign OFF.")

# YOUR TURN: Change the step to 500 for more detail!
`,
    resources: [
      { label: "Python range() with steps", url: "https://www.w3schools.com/python/ref_func_range.asp" }
    ]
  },

  {
    id: 18,
    title: "Passenger Counter",
    topic: "While Loops",
    challenge: "Keep asking 'Is the next passenger ready?' until all 10 seats are filled.",
    details: "A FOR loop repeats a fixed number of times. A WHILE loop repeats as long as something is true — useful when you don't know how many times you'll need to repeat!",
    objectives: [
      "Write a while loop",
      "Understand how the loop stops (the condition becomes False)",
      "Build a loop that waits for user input"
    ],
    keyConcepts: [
      { term: "while", definition: "while condition: repeats as long as condition is True. It stops when condition becomes False." },
      { term: "Loop stopper", definition: "You MUST change something inside the loop, or it runs forever!" },
      { term: "Infinite loop danger", definition: "while True: with nothing to stop it runs forever. Always plan your exit!" }
    ],
    starterCode: `# Passenger Boarding Counter

total_seats = 5   # start small!
passengers = 0

print("=== BOARDING BEGINS ===")
print("Seats available:", total_seats)
print()

# Keep looping while seats aren't all filled
while passengers < total_seats:
    passengers += 1  # add 1 to passengers
    print("Passenger", passengers, "of", total_seats, "boarded.")

print()
print("All", total_seats, "passengers boarded!")
print("Doors closed. Ready for pushback.")

# YOUR TURN: Change total_seats to 10.
# Then try adding: input("Press Enter for next passenger")
# inside the loop to make it interactive!
`,
    resources: [
      { label: "Python while loops", url: "https://www.w3schools.com/python/python_while_loops.asp" }
    ]
  },

  {
    id: 19,
    title: "Fuel Warning System",
    topic: "Loops With Break",
    challenge: "Burn fuel in a loop and BREAK out of the loop when fuel hits the warning level.",
    details: "Sometimes you need to STOP a loop early. 'break' immediately exits a loop — like pulling the emergency handle! Let's build a fuel monitor.",
    objectives: [
      "Use break to exit a loop early",
      "Combine while loops with if and break",
      "Simulate a real-world monitoring system"
    ],
    keyConcepts: [
      { term: "break", definition: "Immediately exits the loop — jumps to the code after the loop." },
      { term: "continue", definition: "Skips the rest of this loop round and starts the next one." },
      { term: "Loop + if + break", definition: "A very common pattern: loop forever, but break when a condition is met." }
    ],
    starterCode: `# Fuel Warning System

fuel = 8000  # litres
burn_rate = 1500  # litres per hour
warning_level = 2000  # litres — trigger warning!
hour = 0

print("=== FUEL MONITOR ===")
print("Starting fuel:", fuel, "litres")
print()

while fuel > 0:
    hour += 1
    fuel -= burn_rate

    print("Hour", hour, "- Fuel remaining:", fuel, "litres")

    # Warning check!
    if fuel <= warning_level:
        print()
        print("*** LOW FUEL WARNING! ***")
        print("Declaring fuel emergency!")
        break  # exit the loop immediately!

print()
print("Monitor ended at hour", hour)

# YOUR TURN: Change burn_rate to 2000 — runs out faster!
`,
    resources: [
      { label: "Python break and continue", url: "https://www.w3schools.com/python/python_while_loops.asp" }
    ]
  },

  {
    id: 20,
    title: "Star Field",
    topic: "Loops Inside Loops",
    challenge: "Draw a 5x5 grid of stars using a loop inside a loop.",
    details: "What if you need to repeat something inside something that's already repeating? Loops inside loops! Like rows and columns on a grid.",
    objectives: [
      "Write a loop inside another loop (nested loops)",
      "Use print() with end='' to print on the same line",
      "Build a grid pattern"
    ],
    keyConcepts: [
      { term: "Nested loops", definition: "A loop inside a loop. The inner loop runs completely each time the outer loop does one step." },
      { term: "print(end='')", definition: "Normally print() starts a new line. end='' keeps it on the same line!" },
      { term: "print() to new line", definition: "An empty print() at the end of the inner loop starts a new row." }
    ],
    starterCode: `# Star Field — nested loops!

rows = 5
cols = 8

print("=== STAR FIELD ===")

# Outer loop = rows (top to bottom)
for row in range(rows):

    # Inner loop = columns (left to right)
    for col in range(cols):
        print("* ", end="")  # end="" keeps on same line

    print()  # start a new row

print()
print("Stars printed:", rows * cols)

# YOUR TURN: Change * to a different character.
# Try making a 3x10 grid instead.
# Can you print a triangle? (hint: change cols to row+1)
`,
    resources: [
      { label: "Python nested loops", url: "https://www.w3schools.com/python/gloss_python_for_nested.asp" }
    ]
  },

  // ============================================================
  // FLIGHT LEVEL 5 — Stages 21-25: Lists (Collections)
  // ============================================================

  {
    id: 21,
    title: "Passenger List",
    topic: "Creating Lists",
    challenge: "Create a list of 5 passenger names and print each one.",
    details: "A variable holds ONE thing. A list holds MANY things, in order! Like a clipboard with multiple names. Perfect for passenger lists, waypoints, or checklists.",
    objectives: [
      "Create a list using square brackets []",
      "Access items in a list by position number",
      "Find out how many items are in a list"
    ],
    keyConcepts: [
      { term: "List", definition: "A collection of things in order: names = [\"Alice\", \"Bob\", \"Carol\"]" },
      { term: "Index", definition: "The position number of an item. Starts at 0! names[0] is the first item." },
      { term: "len()", definition: "Counts how many items are in a list: len(names) = 3" }
    ],
    starterCode: `# Passenger List

# Create a list with square brackets []
passengers = ["Alice", "Bob", "Carol", "David", "Emma"]

print("=== PASSENGER MANIFEST ===")
print("Total passengers:", len(passengers))
print()

# Access by position — starts at 0!
print("First passenger:", passengers[0])
print("Second passenger:", passengers[1])
print("Last passenger:", passengers[4])

# Tip: -1 always gets the LAST item
print("Last (shortcut):", passengers[-1])

print()
print("Full list:", passengers)

# YOUR TURN: Add YOUR name to the list!
# Change the list to have 6 names.
# Then print passengers[5]
`,
    resources: [
      { label: "Python lists", url: "https://www.w3schools.com/python/python_lists.asp" }
    ]
  },

  {
    id: 22,
    title: "Waypoint Navigator",
    topic: "Looping Through Lists",
    challenge: "Loop through a list of waypoints and print each one as the plane passes it.",
    details: "Pilots navigate through waypoints — checkpoints in the sky. Let's loop through a list automatically and visit each waypoint!",
    objectives: [
      "Loop through a list with 'for item in list'",
      "Process each item in the list individually",
      "Combine loops and lists for powerful effects"
    ],
    keyConcepts: [
      { term: "for item in list:", definition: "Goes through the list one item at a time. item is each value in turn." },
      { term: "List loop pattern", definition: "The most common thing in Python! for thing in collection: do something with thing" },
      { term: "No index needed", definition: "You don't need numbers — for name in names: gives you each name directly!" }
    ],
    starterCode: `# Waypoint Navigator

waypoints = ["ALPHA", "BRAVO", "CHARLIE", "DELTA", "ECHO", "HOME"]

print("=== FLIGHT PLAN ===")
print("Total waypoints:", len(waypoints))
print()

# Loop through each waypoint automatically!
for waypoint in waypoints:
    print("Passing waypoint:", waypoint, "--- CLEAR")

print()
print("All waypoints cleared!")
print("Approaching final destination.")

# YOUR TURN: Add "FOXTROT" and "GOLF" to the list.
# The loop will automatically handle the new waypoints!
`,
    resources: [
      { label: "Python list iteration", url: "https://www.w3schools.com/python/python_lists_loop.asp" }
    ]
  },

  {
    id: 23,
    title: "Dynamic Crew Roster",
    topic: "Adding and Removing from Lists",
    challenge: "Build a crew roster where you can add new crew members and remove ones who've gone off duty.",
    details: "Lists aren't frozen — you can add things to them, remove things, check if something's there. Perfect for a dynamic crew roster!",
    objectives: [
      "Add items to a list with .append()",
      "Remove items with .remove()",
      "Check if something is in a list with 'in'"
    ],
    keyConcepts: [
      { term: ".append()", definition: "Adds a new item to the END of the list: names.append(\"Frank\")" },
      { term: ".remove()", definition: "Removes the first matching item: names.remove(\"Bob\")" },
      { term: "in", definition: "Checks if something is in a list: \"Alice\" in names gives True or False" }
    ],
    starterCode: `# Dynamic Crew Roster

crew = ["Captain Smith", "First Officer Lee", "Purser Khan"]

print("=== CREW ROSTER ===")
print("Current crew:", crew)
print()

# Add a new crew member
crew.append("Cabin Crew Rivera")
print("After adding Rivera:", crew)

# Remove someone going off duty
crew.remove("Purser Khan")
print("After Khan leaves:", crew)

# Check if someone is on the roster
if "Captain Smith" in crew:
    print("Captain Smith is on duty - flight can proceed!")
else:
    print("No captain found! Flight delayed.")

print()
print("Final crew count:", len(crew))

# YOUR TURN: Add 2 more crew members.
# Then remove one. Then check if they're still there.
`,
    resources: [
      { label: "Python list methods", url: "https://www.w3schools.com/python/python_lists_methods.asp" }
    ]
  },

  {
    id: 24,
    title: "High Score Board",
    topic: "Sorting Lists",
    challenge: "Sort a list of pilot scores from lowest to highest and find the top pilot.",
    details: "Lists can be sorted automatically. Python can put things in order — numbers from smallest to biggest, names from A to Z. Let's build a pilot leaderboard!",
    objectives: [
      "Sort a list with .sort()",
      "Reverse a sort to get biggest first",
      "Find the max and min values in a list"
    ],
    keyConcepts: [
      { term: ".sort()", definition: "Sorts the list in place: from smallest to biggest (or A to Z for words)." },
      { term: "reverse=True", definition: ".sort(reverse=True) sorts biggest to smallest." },
      { term: "max() and min()", definition: "max(scores) finds the biggest. min(scores) finds the smallest." }
    ],
    starterCode: `# Pilot Simulator High Score Board

scores = [8520, 6300, 9100, 7450, 8900, 5600, 9800, 7200]
pilots = ["Alex", "Sam", "Jamie", "Riley", "Morgan", "Casey", "Jordan", "Taylor"]

print("=== PILOT LEADERBOARD ===")
print()

# Show original order
print("Raw scores:", scores)
print()

# Find best and worst
print("Highest score:", max(scores))
print("Lowest score:", min(scores))

# Sort highest to lowest
scores.sort(reverse=True)
print()
print("Sorted leaderboard:")
for position, score in enumerate(scores):
    print("  #" + str(position + 1), "-", score, "points")

# YOUR TURN: Sort the pilots list alphabetically using .sort()
# Then print them with a loop!
`,
    resources: [
      { label: "Python list sorting", url: "https://www.w3schools.com/python/python_lists_sort.asp" }
    ]
  },

  {
    id: 25,
    title: "Flight Data Recorder",
    topic: "Lists of Numbers",
    challenge: "Record 5 altitude readings in a list, then calculate average altitude.",
    details: "The flight data recorder (black box!) stores hundreds of numbers. Let's store altitude readings in a list and analyse them — find the average, highest, lowest.",
    objectives: [
      "Build a list of numbers",
      "Calculate the sum and average of a list",
      "Use built-in functions: sum(), max(), min(), len()"
    ],
    keyConcepts: [
      { term: "sum()", definition: "Adds up all numbers in a list: sum([1, 2, 3]) = 6" },
      { term: "Average formula", definition: "Average = total / count. In Python: sum(numbers) / len(numbers)" },
      { term: "Built-in functions", definition: "sum(), max(), min(), len() all work on lists. Python does the hard work!" }
    ],
    starterCode: `# Flight Data Recorder Analysis

# Altitude readings taken every hour (in feet)
altitude_log = [0, 8000, 32000, 35000, 34500, 35200, 35000, 15000, 3000, 0]

print("=== FLIGHT DATA RECORDER ===")
print("Total readings:", len(altitude_log))
print("Altitude log:", altitude_log)
print()

# Analyse the data
max_alt = max(altitude_log)
min_alt = min(altitude_log)
total = sum(altitude_log)
average = total / len(altitude_log)

print("Peak altitude:", max_alt, "feet")
print("Minimum altitude:", min_alt, "feet")
print("Average altitude:", round(average), "feet")
print("Total altitude-hours:", total)

# YOUR TURN: Add 3 more readings to the list.
# The calculations update automatically!
`,
    resources: [
      { label: "Python sum() and statistics", url: "https://www.w3schools.com/python/ref_func_sum.asp" }
    ]
  },

  // ============================================================
  // FLIGHT LEVEL 6 — Stages 26-30: Functions (Superpowers)
  // ============================================================

  {
    id: 26,
    title: "Reusable Checklist",
    topic: "Creating Functions",
    challenge: "Write a function called 'run_checklist' that prints a 5-step pre-flight checklist.",
    details: "Functions are reusable chunks of code. Instead of writing the same code again and again, you wrap it in a function and just CALL it by name. Like a superpower you can use whenever you want!",
    objectives: [
      "Define a function using 'def'",
      "Call the function by name",
      "Understand why functions make life easier"
    ],
    keyConcepts: [
      { term: "def", definition: "Short for 'define'. def my_function(): creates a new function called my_function." },
      { term: "Calling a function", definition: "After you define it, use it by writing its name with (): my_function()" },
      { term: "Indentation", definition: "Everything inside the function is indented 4 spaces — just like if/else!" }
    ],
    starterCode: `# Reusable Checklist Function

# DEFINE the function (write it once)
def run_preflight_checklist():
    print("=== PRE-FLIGHT CHECKLIST ===")
    print("1. Fuel level: CHECK")
    print("2. Oil pressure: CHECK")
    print("3. Navigation lights: CHECK")
    print("4. Radio: CHECK")
    print("5. Seatbelts: CHECK")
    print("Checklist complete!")
    print()

# CALL the function (use it as many times as you want!)
print("Flight 1:")
run_preflight_checklist()

print("Flight 2:")
run_preflight_checklist()

print("Flight 3:")
run_preflight_checklist()

# YOUR TURN: Add a 6th item to the checklist inside the function.
# All 3 calls will automatically show the new item!
`,
    resources: [
      { label: "Python functions for beginners", url: "https://www.w3schools.com/python/python_functions.asp" }
    ]
  },

  {
    id: 27,
    title: "Personalised Greeting",
    topic: "Functions With Inputs",
    challenge: "Write a greet_pilot() function that takes a name and rank, then prints a personalised welcome.",
    details: "Functions become even more powerful when you can give them INPUTS. Like a coffee machine — you put in the coffee type and it makes that specific coffee!",
    objectives: [
      "Add parameters (inputs) to a function",
      "Use the parameters inside the function",
      "Call the function with different values each time"
    ],
    keyConcepts: [
      { term: "Parameter", definition: "A variable that lives inside the function's brackets: def greet(name): — name is the parameter." },
      { term: "Argument", definition: "The actual value you pass in when calling: greet(\"Alex\") — \"Alex\" is the argument." },
      { term: "Multiple parameters", definition: "def greet(name, rank): takes TWO inputs, separated by commas." }
    ],
    starterCode: `# Functions with inputs (parameters)

# This function takes name and rank as inputs
def greet_pilot(name, rank):
    print("=== CREW CHECK-IN ===")
    print("Welcome aboard,", rank, name + "!")
    print("Your crew badge is ready.")
    print()

# Call it with different values each time!
greet_pilot("Smith", "Captain")
greet_pilot("Lee", "First Officer")
greet_pilot("Khan", "Purser")

# YOUR TURN: Add a third parameter: years_experience
# Print "X years of service" inside the function.
# Then update all 3 function calls with the new argument!
`,
    resources: [
      { label: "Python function parameters", url: "https://www.w3schools.com/python/python_functions.asp" }
    ]
  },

  {
    id: 28,
    title: "Distance Computer",
    topic: "Functions That Return Values",
    challenge: "Write a function that calculates flight distance from speed and time, and RETURNS the answer.",
    details: "Functions can also GIVE BACK an answer using 'return'. Like a calculator — you give it numbers, it gives back the result. Then you can use that result anywhere!",
    objectives: [
      "Use 'return' to send a value back from a function",
      "Store the returned value in a variable",
      "Build calculation functions that return results"
    ],
    keyConcepts: [
      { term: "return", definition: "Sends a value BACK from the function to whoever called it." },
      { term: "Using return value", definition: "result = my_function() — the returned value goes into 'result'." },
      { term: "Return stops the function", definition: "As soon as return runs, the function ends immediately." }
    ],
    starterCode: `# Distance Calculator with return

def calculate_distance(speed_kmh, time_hours):
    distance = speed_kmh * time_hours
    return distance  # send the answer back!

def calculate_fuel(distance, fuel_per_km):
    fuel_needed = distance * fuel_per_km
    return fuel_needed

# Call the functions and CATCH the returned values
speed = 850    # km/h
hours = 6      # hours
fuel_rate = 12 # litres per km

dist = calculate_distance(speed, hours)
fuel = calculate_fuel(dist, fuel_rate)

print("=== FLIGHT CALCULATIONS ===")
print("Speed:", speed, "km/h")
print("Flight time:", hours, "hours")
print("Distance:", dist, "km")
print("Fuel needed:", fuel, "litres")

# YOUR TURN: Write a function called calculate_cost()
# that takes fuel_litres and price_per_litre and returns the cost.
`,
    resources: [
      { label: "Python return statement", url: "https://www.w3schools.com/python/ref_keyword_return.asp" }
    ]
  },

  {
    id: 29,
    title: "Smart Defaults",
    topic: "Default Parameter Values",
    challenge: "Write a function for aircraft configuration with default values for optional settings.",
    details: "Sometimes you don't want to type EVERY argument every time. Default values let you set a 'usual' setting that's used if you don't specify otherwise.",
    objectives: [
      "Set default values for function parameters",
      "Call functions with and without the optional arguments",
      "Understand which arguments are required vs optional"
    ],
    keyConcepts: [
      { term: "Default parameter", definition: "def land(speed=150, flaps=30): — if you don't provide speed, it uses 150." },
      { term: "Optional argument", definition: "Arguments with defaults are optional — you can skip them when calling." },
      { term: "Required first", definition: "Required arguments (no default) must come BEFORE optional ones in the def." }
    ],
    starterCode: `# Aircraft Configuration with Defaults

def configure_landing(runway, speed=150, flaps=30, lights=True):
    print("=== LANDING CONFIGURATION ===")
    print("Runway:", runway)
    print("Approach speed:", speed, "knots")
    print("Flap setting:", flaps, "degrees")
    print("Landing lights:", "ON" if lights else "OFF")
    print()

# Use all defaults (only runway is required)
configure_landing("Runway 28L")

# Override some defaults
configure_landing("Runway 10R", speed=160, flaps=40)

# Override all defaults
configure_landing("Runway 01", 140, 20, False)

# YOUR TURN: Add a default parameter for 'gear' (default: True)
# Print "Landing gear: DOWN" or "UP" based on it.
`,
    resources: [
      { label: "Python default arguments", url: "https://www.w3schools.com/python/python_functions.asp" }
    ]
  },

  {
    id: 30,
    title: "Mission Control Console",
    topic: "Functions Working Together",
    challenge: "Build a mini mission control console using 3 functions that call each other.",
    details: "The real power of functions is when they work TOGETHER. One function calls another. Like a team — each person does their job, and together they achieve something big!",
    objectives: [
      "Write multiple functions that call each other",
      "Break a big task into smaller functions",
      "Understand how programs grow from small pieces"
    ],
    keyConcepts: [
      { term: "Calling functions from functions", definition: "A function can call another function — just use its name inside the code." },
      { term: "Decomposition", definition: "Breaking a big problem into smaller pieces. Each piece = one function." },
      { term: "Program flow", definition: "Code runs from the top. Functions run when called, then return to where they were." }
    ],
    starterCode: `# Mission Control — functions working as a team!

def get_weather_status():
    return "CLEAR"  # pretend we checked the weather

def check_fuel(capacity):
    if capacity > 5000:
        return "FUEL OK"
    else:
        return "LOW FUEL"

def display_status(flight_id, fuel, weather):
    print("=== MISSION CONTROL ===")
    print("Flight:", flight_id)
    print("Fuel:", fuel)
    print("Weather:", weather)
    if fuel == "FUEL OK" and weather == "CLEAR":
        print("STATUS: ALL SYSTEMS GO!")
    else:
        print("STATUS: HOLD - ISSUES DETECTED")

# Main program — calls all the functions!
flight = "AP-007"
fuel_liters = 8000

weather = get_weather_status()
fuel_status = check_fuel(fuel_liters)
display_status(flight, fuel_status, weather)

# YOUR TURN: Change fuel_liters to 3000 and run again!
`,
    resources: [
      { label: "Python functions - advanced", url: "https://realpython.com/defining-your-own-python-function/" }
    ]
  },

  // ============================================================
  // FLIGHT LEVEL 7 — Stages 31-35: Dictionaries
  // ============================================================

  {
    id: 31,
    title: "Aircraft Registry",
    topic: "Dictionaries (Labelled Boxes)",
    challenge: "Create a dictionary of aircraft details: type, seats, range, speed.",
    details: "A dictionary is like a labelled filing cabinet. Instead of using position numbers like a list, you use NAMES (called keys) to find things. Much easier when you have many different pieces of information!",
    objectives: [
      "Create a dictionary with key-value pairs",
      "Access values using their key",
      "Add new key-value pairs to a dictionary"
    ],
    keyConcepts: [
      { term: "Dictionary", definition: "A collection of labelled data: {\"name\": \"Alice\", \"age\": 10}. Each label is a 'key'." },
      { term: "Key", definition: "The label. Must be in quotes if it's a word. aircraft[\"speed\"] uses \"speed\" as the key." },
      { term: "Value", definition: "The data stored under a key. Can be anything — number, text, list, even another dictionary!" }
    ],
    starterCode: `# Aircraft Registry — using a dictionary

# Create a dictionary with {}
aircraft = {
    "type": "Boeing 737",
    "seats": 189,
    "max_range_km": 5765,
    "cruise_speed": 842,
    "registration": "9V-SQA"
}

print("=== AIRCRAFT REGISTRY ===")

# Access values by their KEY (label)
print("Aircraft type:", aircraft["type"])
print("Seats:", aircraft["seats"])
print("Max range:", aircraft["max_range_km"], "km")
print("Speed:", aircraft["cruise_speed"], "km/h")

# Add a new piece of information
aircraft["airline"] = "AeroPython Airways"
print("Airline:", aircraft["airline"])

# Show the whole dictionary
print()
print("Full record:", aircraft)

# YOUR TURN: Add "year_built" and "country" to the dictionary!
`,
    resources: [
      { label: "Python dictionaries", url: "https://www.w3schools.com/python/python_dictionaries.asp" }
    ]
  },

  {
    id: 32,
    title: "Airport Database",
    topic: "Looping Through Dictionaries",
    challenge: "Loop through an airport database and print each airport's name and country.",
    details: "Just like we looped through lists, we can loop through dictionaries! Let's build an airport database and browse through it.",
    objectives: [
      "Loop through dictionary keys and values",
      "Use .items() to get both key and value at once",
      "Build a searchable data store"
    ],
    keyConcepts: [
      { term: ".keys()", definition: "Gets all the keys (labels) of a dictionary." },
      { term: ".values()", definition: "Gets all the values stored in a dictionary." },
      { term: ".items()", definition: "Gets both key AND value as pairs: for k, v in d.items():" }
    ],
    starterCode: `# Airport Database

airports = {
    "SIN": {"name": "Singapore Changi", "country": "Singapore", "runways": 2},
    "NRT": {"name": "Tokyo Narita", "country": "Japan", "runways": 2},
    "LHR": {"name": "London Heathrow", "country": "UK", "runways": 2},
    "DXB": {"name": "Dubai International", "country": "UAE", "runways": 2},
    "LAX": {"name": "Los Angeles International", "country": "USA", "runways": 4},
}

print("=== WORLD AIRPORT DATABASE ===")
print("Total airports:", len(airports))
print()

# Loop through all airports
for code, details in airports.items():
    print(code, "-", details["name"], "|", details["country"])

print()
# Look up one specific airport
search = "SIN"
print("Looking up:", search)
print("Full info:", airports[search])

# YOUR TURN: Add "SYD" for Sydney Kingsford Smith, Australia.
# Then loop and print only the airports in Asia!
`,
    resources: [
      { label: "Python dict iteration", url: "https://www.w3schools.com/python/python_dictionaries_loop.asp" }
    ]
  },

  {
    id: 33,
    title: "Pilot Log Book",
    topic: "Dictionaries in Lists",
    challenge: "Store multiple flight records (each a dictionary) in a list, then loop through them.",
    details: "Real power unlocked: put dictionaries INSIDE a list. Now you can store many complex records and loop through all of them. This is how databases actually work!",
    objectives: [
      "Create a list of dictionaries",
      "Loop through the list and access dictionary values",
      "Calculate totals from multiple records"
    ],
    keyConcepts: [
      { term: "List of dicts", definition: "Each item in the list is a whole dictionary. Very common in real programs!" },
      { term: "Accessing nested data", definition: "flights[0][\"hours\"] — first flight record, then the hours value." },
      { term: "Accumulating", definition: "total += flight[\"hours\"] — add each flight's hours to a running total." }
    ],
    starterCode: `# Pilot Log Book

# A list where each item is a dictionary (one per flight)
flight_log = [
    {"date": "2024-01-15", "route": "SIN-NRT", "hours": 7.5, "aircraft": "B737"},
    {"date": "2024-01-18", "route": "NRT-LHR", "hours": 12.0, "aircraft": "B777"},
    {"date": "2024-01-22", "route": "LHR-DXB", "hours": 6.5, "aircraft": "A380"},
    {"date": "2024-01-25", "route": "DXB-SIN", "hours": 7.0, "aircraft": "B777"},
]

print("=== CAPTAIN'S LOG BOOK ===")
print()

total_hours = 0

for flight in flight_log:
    print("Date:", flight["date"])
    print("Route:", flight["route"], "| Aircraft:", flight["aircraft"])
    print("Hours:", flight["hours"])
    print("-" * 30)
    total_hours += flight["hours"]

print("TOTAL HOURS FLOWN:", total_hours)

# YOUR TURN: Add 2 more flight records to the list.
# The total will update automatically!
`,
    resources: [
      { label: "Python list of dictionaries", url: "https://www.w3schools.com/python/python_dictionaries.asp" }
    ]
  },

  {
    id: 34,
    title: "Safe Access",
    topic: "Dictionary Safety",
    challenge: "Look up airports safely — handle missing keys without crashing.",
    details: "What if you look up a key that doesn't exist? Python crashes! But .get() saves the day — it returns a safe backup value instead of crashing. Essential for real programs.",
    objectives: [
      "Use .get() to safely access dictionary keys",
      "Set a fallback value when a key is missing",
      "Check if a key exists before using it"
    ],
    keyConcepts: [
      { term: ".get(key, default)", definition: "Safely gets a value. If key doesn't exist, returns default instead of crashing." },
      { term: "KeyError", definition: "The crash you get when a key doesn't exist: airports[\"ZZZ\"] — CRASH!" },
      { term: "'key' in dict", definition: "Checks if a key exists: \"SIN\" in airports — gives True or False." }
    ],
    starterCode: `# Safe Dictionary Access

airports = {
    "SIN": "Singapore Changi",
    "NRT": "Tokyo Narita",
    "LHR": "London Heathrow",
}

# UNSAFE — this CRASHES if the key doesn't exist!
# print(airports["ZZZ"])  # KeyError!

# SAFE — .get() returns None (or your default) if missing
print("Safe lookup:")
print(airports.get("SIN", "Unknown Airport"))   # found!
print(airports.get("ZZZ", "Unknown Airport"))   # not found, uses default

print()

# Check BEFORE looking up
codes_to_check = ["SIN", "DXB", "NRT", "LAX"]

for code in codes_to_check:
    if code in airports:
        print(code, "->", airports[code], "(FOUND)")
    else:
        print(code, "-> Not in our database")

# YOUR TURN: Add "DXB" to the airports dictionary.
# Run again — now DXB should show as FOUND!
`,
    resources: [
      { label: "Python dict .get() method", url: "https://www.w3schools.com/python/ref_dictionary_get.asp" }
    ]
  },

  {
    id: 35,
    title: "Score Tracker",
    topic: "Dictionaries for Counting",
    challenge: "Count how many times each aircraft type appears in a flight list.",
    details: "Dictionaries are amazing for counting things! Instead of making a tally on paper, let Python count for you. This is called a 'frequency count' — used in data science all the time!",
    objectives: [
      "Build a counter dictionary from scratch",
      "Update counts using .get() as a safe default",
      "Sort the results to find the most common item"
    ],
    keyConcepts: [
      { term: "Counter pattern", definition: "count[item] = count.get(item, 0) + 1 — either adds 1 or starts at 0+1=1." },
      { term: "Starting at 0", definition: "The default is 0 (not yet counted). Then add 1 each time we see it." },
      { term: "sorted() with key", definition: "sorted(d.items(), key=lambda x: x[1]) sorts by values (the counts)." }
    ],
    starterCode: `# Aircraft Frequency Counter

flights = [
    "B737", "A380", "B777", "B737", "A380",
    "B737", "B777", "A380", "B737", "A350",
    "B777", "B737", "A380", "A350", "B737",
]

print("=== FLEET FREQUENCY REPORT ===")
print("Total flights recorded:", len(flights))
print()

# Count each aircraft type
count = {}  # start with empty dictionary

for aircraft in flights:
    # .get(aircraft, 0) returns current count OR 0 if not seen yet
    count[aircraft] = count.get(aircraft, 0) + 1

print("Aircraft counts:")
for aircraft, total in count.items():
    bar = ">" * total
    print(" ", aircraft, "-", total, "flights", bar)

# Find the most used aircraft
most_used = max(count, key=count.get)
print()
print("Most used aircraft:", most_used, "with", count[most_used], "flights")

# YOUR TURN: Add 5 more flights to the list and run again!
`,
    resources: [
      { label: "Python counting patterns", url: "https://realpython.com/python-counter/" }
    ]
  },

  // ============================================================
  // FLIGHT LEVEL 8 — Stages 36-40: Mini Projects (Final Boss!)
  // ============================================================

  {
    id: 36,
    title: "Guess the Altitude",
    topic: "Mini Project: Number Game",
    challenge: "Build a number guessing game where Python picks a random altitude and you have to guess it.",
    details: "Time to build your first real GAME! Python will secretly pick a number and you have to guess it. You'll use everything: variables, loops, if/else, and functions!",
    objectives: [
      "Use the random module to pick random numbers",
      "Combine loops, if/else, and input() into a game",
      "Track the number of guesses taken"
    ],
    keyConcepts: [
      { term: "import random", definition: "Gives you access to random number tools. random.randint(1, 100) picks a random number 1-100." },
      { term: "import", definition: "Loads extra tools (modules) that Python comes with. Like adding an app to your phone." },
      { term: "Game loop", definition: "while True: keeps the game going. break exits when the player wins." }
    ],
    starterCode: `# GUESS THE ALTITUDE — Number Guessing Game!

import random

# Pick a secret random altitude
secret = random.randint(1000, 40000)
guesses = 0
max_guesses = 7

print("=== GUESS THE ALTITUDE ===")
print("I'm thinking of an altitude between 1,000 and 40,000 feet.")
print("You have", max_guesses, "attempts. Good luck!")
print()

while guesses < max_guesses:
    guess_text = input("Your guess (feet): ")
    guess = int(guess_text)
    guesses += 1

    if guess == secret:
        print("CORRECT! The altitude was", secret, "feet!")
        print("You got it in", guesses, "guesses!")
        break
    elif guess < secret:
        print("Too LOW! Climb higher.")
    else:
        print("Too HIGH! Descend.")

    remaining = max_guesses - guesses
    print("Attempts left:", remaining)
    print()
else:
    print("Out of attempts! The altitude was", secret, "feet.")

# YOUR TURN: Add a difficulty selector at the start.
# Easy: 10 guesses. Hard: 5 guesses.
`,
    resources: [
      { label: "Python random module", url: "https://www.w3schools.com/python/module_random.asp" }
    ]
  },

  {
    id: 37,
    title: "Flight Quiz Commander",
    topic: "Mini Project: Quiz Game",
    challenge: "Build a 5-question aviation quiz that tracks your score and gives a pilot rank at the end.",
    details: "Let's build a full quiz game! Store questions in a list of dictionaries, ask them one by one, check answers, keep score, and give a pilot rank based on how many you got right.",
    objectives: [
      "Store quiz data in a list of dictionaries",
      "Loop through questions and check answers",
      "Calculate final score and display a result"
    ],
    keyConcepts: [
      { term: "List of dicts for data", definition: "Each question is a dictionary with 'question', 'answer', and 'hint' keys." },
      { term: "String comparison", definition: "guess.lower() == answer.lower() — compare in lowercase so capitalisation doesn't matter." },
      { term: "Score tracking", definition: "score += 1 each time the player is correct. Display at the end." }
    ],
    starterCode: `# Aviation Quiz Game!

questions = [
    {"q": "What does SIN stand for?", "a": "singapore", "hint": "It's an airport code!"},
    {"q": "How many engines does a Boeing 747 have?", "a": "4", "hint": "Think 'jumbo jet'"},
    {"q": "What is the black box actually coloured?", "a": "orange", "hint": "Easy to find!"},
    {"q": "What does ATC stand for?", "a": "air traffic control", "hint": "They direct planes"},
    {"q": "What is Mach 1?", "a": "speed of sound", "hint": "Supersonic planes exceed this"},
]

score = 0
total = len(questions)

print("=== FLIGHT QUIZ COMMANDER ===")
print("Answer", total, "questions to earn your pilot rank!")
print()

for i, question in enumerate(questions):
    print("Q" + str(i+1) + ":", question["q"])
    answer = input("Your answer: ").lower().strip()

    if answer == question["a"]:
        print("CORRECT! +1 point")
        score += 1
    else:
        print("Wrong! The answer was:", question["a"])
        print("Hint:", question["hint"])
    print()

# Show final result
percent = score / total * 100
print("=== RESULTS ===")
print("Score:", score, "out of", total, "(", round(percent), "%)")

if score == total:
    print("Rank: CHIEF PILOT - Perfect score!")
elif score >= 3:
    print("Rank: CAPTAIN - Well done!")
else:
    print("Rank: CADET - Keep studying!")
`,
    resources: [
      { label: "Python quiz game tutorial", url: "https://realpython.com/python-quiz-application/" }
    ]
  },

  {
    id: 38,
    title: "Flight Tracker Dashboard",
    topic: "Mini Project: Data Display",
    challenge: "Build a live-looking flight tracker dashboard that shows multiple planes and their status.",
    details: "Combine EVERYTHING — lists, dictionaries, functions, loops, and if/else — to build a flight tracker dashboard that looks like something from an airport screen!",
    objectives: [
      "Combine all skills: lists, dicts, functions, loops, if/else",
      "Format output to look like a real dashboard",
      "Analyse data across multiple records"
    ],
    keyConcepts: [
      { term: "f-strings", definition: "f\"Hello {name}!\" — put variables directly inside strings with {}. Super useful!" },
      { term: "str.ljust(n)", definition: "Pads text to width n with spaces: \"HI\".ljust(10) = \"HI        \". Makes columns line up!" },
      { term: "Putting it all together", definition: "Real programs combine many small techniques. You know them all now!" }
    ],
    starterCode: `# Flight Tracker Dashboard

def get_status_icon(status):
    icons = {"ON TIME": "✓", "DELAYED": "!", "BOARDING": "→", "LANDED": "L"}
    return icons.get(status, "?")

flights = [
    {"id": "AP001", "from": "SIN", "to": "NRT", "status": "ON TIME",  "progress": 75},
    {"id": "AP002", "from": "LHR", "to": "DXB", "status": "DELAYED",  "progress": 20},
    {"id": "AP003", "from": "LAX", "to": "SIN", "status": "BOARDING", "progress": 0},
    {"id": "AP004", "from": "NRT", "to": "LAX", "status": "ON TIME",  "progress": 50},
    {"id": "AP005", "from": "DXB", "to": "LHR", "status": "LANDED",   "progress": 100},
]

print("=" * 60)
print("   AEROPYTHON FLIGHT TRACKER DASHBOARD")
print("=" * 60)
print(f"  {'FLIGHT':<8} {'ROUTE':<12} {'STATUS':<10} {'PROGRESS'}")
print("-" * 60)

for f in flights:
    icon = get_status_icon(f["status"])
    route = f["from"] + "-" + f["to"]
    bar_len = f["progress"] // 5
    bar = "[" + "#" * bar_len + "." * (20 - bar_len) + "]"
    print(f"  {f['id']:<8} {route:<12} {icon} {f['status']:<8} {bar} {f['progress']}%")

print("=" * 60)
delayed = sum(1 for f in flights if f["status"] == "DELAYED")
print(f"  Delayed flights: {delayed} | On time: {len(flights) - delayed}")
`,
    resources: [
      { label: "Python f-strings guide", url: "https://realpython.com/python-f-strings/" }
    ]
  },

  {
    id: 39,
    title: "AI Co-Pilot",
    topic: "Mini Project: Text Adventure",
    challenge: "Build a text adventure game where you're a pilot making decisions that lead to different outcomes.",
    details: "Text adventures are stories where YOU make the choices! Build a branching story where pilot decisions (entered as text) lead to different endings. A true 'choose your own adventure' game.",
    objectives: [
      "Build a branching story using if/elif/else",
      "Use functions to handle each story scene",
      "Create at least 2 different endings"
    ],
    keyConcepts: [
      { term: "Branching story", definition: "A story with choices. Each choice leads to a different path. Like a tree!" },
      { term: "Scene functions", definition: "Each scene is a function. Calling the right function moves the story forward." },
      { term: "User choice routing", definition: "if choice == '1': go to scene_a() — route based on what the player typed." }
    ],
    starterCode: `# AI Co-Pilot Text Adventure!

def scene_start():
    print()
    print("=== EMERGENCY AT 35,000 FEET ===")
    print("You're flying Flight AP-999 over the Pacific.")
    print("Suddenly, engine 2 fails. Warning lights everywhere.")
    print()
    print("What do you do?")
    print("1. Declare emergency and divert to nearest airport")
    print("2. Try to restart the engine")
    print("3. Continue to destination on one engine")
    choice = input("Enter 1, 2, or 3: ")

    if choice == "1":
        scene_divert()
    elif choice == "2":
        scene_restart()
    else:
        scene_continue()

def scene_divert():
    print()
    print("Smart move! You declare MAYDAY and divert to Honolulu.")
    print("Emergency services are waiting on the ground.")
    print("All 189 passengers land safely. HERO PILOT!")
    print("=== ENDING: BEST PILOT AWARD ===")

def scene_restart():
    print()
    print("You attempt an engine restart...")
    import random
    if random.randint(1, 2) == 1:
        print("ENGINE RESTART SUCCESSFUL! Crisis averted.")
        print("=== ENDING: LUCKY PILOT ===")
    else:
        print("Restart failed. You divert anyway. Safe landing!")
        print("=== ENDING: SAFE BUT SHAKEN ===")

def scene_continue():
    print()
    print("Continuing on one engine... the second engine struggles.")
    print("You barely make it. Passengers never fly again.")
    print("=== ENDING: SURVIVED, BUT NEVER AGAIN ===")

# START THE ADVENTURE
print("Welcome, Pilot. Your skills will be tested.")
scene_start()
`,
    resources: [
      { label: "Python text adventure tutorial", url: "https://realpython.com/python-rock-paper-scissors/" }
    ]
  },

  {
    id: 40,
    title: "Final Boss: AeroPython Mission Control",
    topic: "Capstone: Everything Combined",
    challenge: "Build a fully interactive Mission Control system: manage a fleet, run checklists, track fuel, and launch missions.",
    details: "This is it — the final mission! You've learned variables, maths, if/else, loops, lists, functions, and dictionaries. Now combine ALL of it into one epic Mission Control system. You are a Python pilot!",
    objectives: [
      "Combine every skill learned across all 40 missions",
      "Build a menu-driven interactive program",
      "Complete your journey from absolute beginner to Python Pilot!"
    ],
    keyConcepts: [
      { term: "Menu loop", definition: "while True: show menu, get choice, run function — the standard pattern for interactive programs." },
      { term: "Everything combined", definition: "Variables + loops + if/else + lists + dicts + functions. All working together!" },
      { term: "You did it!", definition: "40 missions complete. You are officially an AeroPython Pilot. The sky is not the limit." }
    ],
    starterCode: `# ====================================================
# AEROPYTHON MISSION CONTROL — FINAL BOSS
# ====================================================

fleet = [
    {"id": "AP-001", "type": "B737", "fuel": 8000, "status": "Ready"},
    {"id": "AP-002", "type": "A380", "fuel": 12000, "status": "Ready"},
    {"id": "AP-003", "type": "B777", "fuel": 5000, "status": "Maintenance"},
]

def show_fleet():
    print("\\n=== FLEET STATUS ===")
    for plane in fleet:
        print(plane["id"], "|", plane["type"], "|",
              "Fuel:", plane["fuel"], "L |", plane["status"])

def launch_mission():
    print("\\n=== LAUNCH MISSION ===")
    show_fleet()
    plane_id = input("Enter plane ID to launch: ")
    for plane in fleet:
        if plane["id"] == plane_id:
            if plane["status"] == "Maintenance":
                print("Cannot launch - plane in maintenance!")
            elif plane["fuel"] < 6000:
                print("Low fuel! Load more before launch.")
            else:
                plane["status"] = "In Flight"
                plane["fuel"] -= 1000
                print(plane_id, "launched successfully!")
            return
    print("Plane not found.")

def refuel_plane():
    show_fleet()
    plane_id = input("Enter plane ID to refuel: ")
    for plane in fleet:
        if plane["id"] == plane_id:
            plane["fuel"] = 12000
            print(plane_id, "refuelled to maximum!")
            return

# MAIN MENU
print("=== AEROPYTHON MISSION CONTROL ===")
print("Welcome, Chief Pilot. All systems online.")

while True:
    print("\\n1. View Fleet  2. Launch Mission  3. Refuel  4. Exit")
    choice = input("Command: ")

    if choice == "1":
        show_fleet()
    elif choice == "2":
        launch_mission()
    elif choice == "3":
        refuel_plane()
    elif choice == "4":
        print("\\nMission Control signing off. Great flying, Pilot!")
        break
    else:
        print("Unknown command. Try 1, 2, 3, or 4.")
`,
    resources: [
      { label: "Python project ideas for beginners", url: "https://realpython.com/intermediate-python-project-ideas/" },
      { label: "What to learn next", url: "https://www.python.org/about/gettingstarted/" }
    ]
  }

];

export default roadmap;
