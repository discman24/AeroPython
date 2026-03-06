/**
 * AeroPython — Antigravity Academy
 * Module Roadmap: 12 missions with deep content
 */

const roadmap = [
  {
    id: 1,
    title: "The Launchpad",
    topic: "Variables & Syntax",
    challenge: "Create a 'Bio-Link' script that shares your socials.",
    details: "Learn how to store text and numbers.",
    objectives: [
      "Understand Python data types: str, int, float, bool",
      "Assign and reassign variables",
      "Use f-strings for formatted output",
      "Run your first .py script from the terminal"
    ],
    keyConcepts: [
      { term: "Variable", definition: "A named container for storing data values" },
      { term: "f-string", definition: 'Formatted string literal: f"Hello {name}"' },
      { term: "Data Type", definition: "The category of a value: str, int, float, bool" },
      { term: "print()", definition: "Built-in function that outputs text to the console" },
      { term: "input()", definition: "Built-in function that reads user input as a string" }
    ],
    starterCode: `# Mission 1: Bio-Link Generator
# Create variables for your profile

name = "Your Name"
age = 17
github = "https://github.com/you"
favourite_language = "Python"

print(f"\\n{'='*40}")
print(f"  👋 Hi, I'm {name}!")
print(f"  🎂 Age: {age}")
print(f"  💻 GitHub: {github}")
print(f"  🐍 Fav Language: {favourite_language}")
print(f"{'='*40}")

# Challenge: Add more fields — school, hobby, dream job
# Then ask the user for THEIR info with input()
`,
    resources: [
      { label: "Python Docs: Introduction", url: "https://docs.python.org/3/tutorial/introduction.html" },
      { label: "Real Python: Variables", url: "https://realpython.com/python-variables/" }
    ]
  },
  {
    id: 2,
    title: "Logic Gates",
    topic: "If/Else & Loops",
    challenge: "Build a 'Password Validator' security bot.",
    details: "Make your code think and repeat tasks.",
    objectives: [
      "Write if / elif / else conditional blocks",
      "Use comparison and logical operators (==, !=, and, or, not)",
      "Build for loops and while loops",
      "Understand break, continue, and loop-else"
    ],
    keyConcepts: [
      { term: "Boolean", definition: "A True/False value — the result of comparisons" },
      { term: "for loop", definition: "Iterates over a sequence (list, range, string)" },
      { term: "while loop", definition: "Repeats as long as a condition is True" },
      { term: "range()", definition: "Generates a sequence of numbers: range(start, stop, step)" },
      { term: "Indentation", definition: "Python uses 4 spaces to define code blocks — not braces" }
    ],
    starterCode: `# Mission 2: Password Validator Bot
import getpass

MAX_ATTEMPTS = 3
SECRET = "python123"

print("🔒 SECURITY SYSTEM v2.0")
print(f"You have {MAX_ATTEMPTS} attempts.\\n")

for attempt in range(1, MAX_ATTEMPTS + 1):
    password = input(f"Attempt {attempt}/{MAX_ATTEMPTS} — Enter password: ")
    
    if password == SECRET:
        print("✅ Access Granted! Welcome back.")
        break
    elif len(password) < 6:
        print("⚠️  Too short. Passwords are 6+ characters.")
    else:
        print("❌ Incorrect.")
else:
    print("\\n🚫 LOCKED OUT. Too many failed attempts.")

# Challenge: Add rules — must contain a number, uppercase letter
`,
    resources: [
      { label: "Python Docs: Control Flow", url: "https://docs.python.org/3/tutorial/controlflow.html" },
      { label: "Real Python: If Statements", url: "https://realpython.com/python-conditional-statements/" }
    ]
  },
  {
    id: 3,
    title: "Data Vaults",
    topic: "Lists & Dicts",
    challenge: "Design an 'Inventory System' for an RPG.",
    details: "Organize massive amounts of info easily.",
    objectives: [
      "Create and manipulate lists (append, pop, slice, sort)",
      "Understand tuples and when to use them",
      "Build dictionaries and access nested data",
      "Iterate over collections with for loops"
    ],
    keyConcepts: [
      { term: "List", definition: "Ordered, mutable collection: [1, 2, 3]" },
      { term: "Dictionary", definition: 'Key-value pairs: {"name": "Loot", "qty": 5}' },
      { term: "Tuple", definition: "Ordered, immutable collection: (x, y)" },
      { term: "Slicing", definition: "Extract parts of a list: items[1:3]" },
      { term: ".get()", definition: "Safely access dict keys with a default: d.get(key, default)" }
    ],
    starterCode: `# Mission 3: RPG Inventory System

inventory = {
    "health_potion": {"qty": 3, "power": 50, "weight": 0.5},
    "iron_sword":    {"qty": 1, "power": 120, "weight": 3.2},
    "gold_coins":    {"qty": 47, "power": 0, "weight": 0.01},
}

def show_inventory():
    print("\\n🎒 INVENTORY")
    print("-" * 35)
    for item, stats in inventory.items():
        print(f"  {item:<16} x{stats['qty']}  ⚡{stats['power']}")
    total_weight = sum(s["qty"] * s["weight"] for s in inventory.values())
    print(f"\\n  Total Weight: {total_weight:.1f} kg")

show_inventory()

# Challenge: Add functions to add_item(), use_item(), drop_item()
`,
    resources: [
      { label: "Python Docs: Data Structures", url: "https://docs.python.org/3/tutorial/datastructures.html" },
      { label: "Real Python: Dictionaries", url: "https://realpython.com/python-dicts/" }
    ]
  },
  {
    id: 4,
    title: "Superpowers",
    topic: "Functions",
    challenge: "Write a 'Universal Converter' function.",
    details: "Package your code into reusable tools.",
    objectives: [
      "Define functions with def, parameters, and return values",
      "Use default arguments and *args / **kwargs",
      "Understand scope (local vs global)",
      "Write lambda functions and use map/filter"
    ],
    keyConcepts: [
      { term: "def", definition: "Keyword to define a function: def greet(name):" },
      { term: "return", definition: "Sends a value back to the caller" },
      { term: "*args", definition: "Collects extra positional arguments as a tuple" },
      { term: "**kwargs", definition: "Collects extra keyword arguments as a dict" },
      { term: "lambda", definition: "Anonymous one-line function: lambda x: x * 2" }
    ],
    starterCode: `# Mission 4: Universal Converter

def convert(value, from_unit, to_unit):
    """Convert between units. Returns converted value."""
    
    conversions = {
        ("km", "miles"): 0.621371,
        ("miles", "km"): 1.60934,
        ("kg", "lbs"): 2.20462,
        ("lbs", "kg"): 0.453592,
        ("c", "f"): lambda v: v * 9/5 + 32,
        ("f", "c"): lambda v: (v - 32) * 5/9,
    }
    
    key = (from_unit.lower(), to_unit.lower())
    factor = conversions.get(key)
    
    if factor is None:
        return f"❌ Unknown conversion: {from_unit} → {to_unit}"
    if callable(factor):
        return f"✅ {value}{from_unit} = {factor(value):.1f}{to_unit}"
    return f"✅ {value}{from_unit} = {value * factor:.2f}{to_unit}"

print(convert(100, "km", "miles"))
print(convert(37, "C", "F"))
print(convert(10, "kg", "lbs"))

# Challenge: Add currency conversion using a dict of rates
`,
    resources: [
      { label: "Python Docs: Functions", url: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions" },
      { label: "Real Python: Functions", url: "https://realpython.com/defining-your-own-python-function/" }
    ]
  },
  {
    id: 5,
    title: "Data Extraction",
    topic: "Files & APIs",
    challenge: "Fetch live weather data for any city.",
    details: "Pull real-world data into your Python world.",
    objectives: [
      "Read and write text files with open() and context managers",
      "Parse CSV and JSON data",
      "Make HTTP requests with the requests library",
      "Handle API responses and error codes"
    ],
    keyConcepts: [
      { term: "with open()", definition: "Context manager that auto-closes files" },
      { term: "json.loads()", definition: "Parse a JSON string into a Python dict" },
      { term: "requests.get()", definition: "Send an HTTP GET request to a URL" },
      { term: "API", definition: "Application Programming Interface — a way to talk to remote servers" },
      { term: "CSV", definition: "Comma-Separated Values — a simple tabular data format" }
    ],
    starterCode: `# Mission 5: Weather Data Fetcher
# NOTE: Run this locally — needs 'requests' library
# pip install requests

import json

# Simulated API response (works without internet)
mock_response = {
    "city": "Singapore",
    "temp_c": 31.2,
    "humidity": 78,
    "condition": "Partly Cloudy",
    "wind_kph": 12.5
}

def display_weather(data):
    print(f"\\n🌤️  Weather for {data['city']}")
    print(f"   🌡️  {data['temp_c']}°C")
    print(f"   💧 Humidity: {data['humidity']}%")
    print(f"   🌬️  Wind: {data['wind_kph']} km/h")
    print(f"   ☁️  {data['condition']}")

display_weather(mock_response)

# Save to file
with open("weather_log.json", "w") as f:
    json.dump(mock_response, f, indent=2)
    print("\\n💾 Saved to weather_log.json")

# Challenge: Use requests.get() with a real API
# Try: https://wttr.in/Singapore?format=j1
`,
    resources: [
      { label: "Python Docs: File I/O", url: "https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files" },
      { label: "Real Python: Requests", url: "https://realpython.com/python-requests/" }
    ]
  },
  {
    id: 6,
    title: "The Architect",
    topic: "OOP (Classes)",
    challenge: "Model a 'Virtual Pet' with unique traits.",
    details: "Build complex blueprints for objects.",
    objectives: [
      "Define classes with __init__, attributes, and methods",
      "Understand self and instance vs class variables",
      "Use inheritance and method overriding",
      "Implement __str__ and __repr__ dunder methods"
    ],
    keyConcepts: [
      { term: "class", definition: "A blueprint for creating objects with shared structure" },
      { term: "__init__", definition: "Constructor method — runs when an object is created" },
      { term: "self", definition: "Reference to the current instance inside a method" },
      { term: "Inheritance", definition: "A class that extends another: class Dog(Animal):" },
      { term: "Dunder method", definition: "Special methods like __str__, __len__, __eq__" }
    ],
    starterCode: `# Mission 6: Virtual Pet Simulator

class Pet:
    def __init__(self, name, species, energy=100, happiness=100):
        self.name = name
        self.species = species
        self.energy = energy
        self.happiness = happiness
    
    def feed(self):
        self.energy = min(100, self.energy + 20)
        print(f"🍖 {self.name} eats happily! Energy: {self.energy}")
    
    def play(self):
        if self.energy < 20:
            print(f"😴 {self.name} is too tired to play!")
            return
        self.energy -= 15
        self.happiness = min(100, self.happiness + 25)
        print(f"🎾 {self.name} plays! Happiness: {self.happiness}")
    
    def status(self):
        e_bar = "█" * (self.energy // 10) + "░" * (10 - self.energy // 10)
        h_bar = "█" * (self.happiness // 10) + "░" * (10 - self.happiness // 10)
        print(f"\\n🐾 {self.name} the {self.species}")
        print(f"   ⚡ Energy:    [{e_bar}] {self.energy}%")
        print(f"   😊 Happiness: [{h_bar}] {self.happiness}%")

buddy = Pet("Buddy", "Golden Retriever")
buddy.status()
buddy.play()
buddy.feed()
buddy.status()

# Challenge: Add a Cat subclass with a unique purr() method
`,
    resources: [
      { label: "Python Docs: Classes", url: "https://docs.python.org/3/tutorial/classes.html" },
      { label: "Real Python: OOP", url: "https://realpython.com/python3-object-oriented-programming/" }
    ]
  },
  {
    id: 7,
    title: "Pythonic Art",
    topic: "Comprehensions & Generators",
    challenge: "Refactor a legacy script into 5 lines of code.",
    details: "Master the art of elegant, concise Python.",
    objectives: [
      "Write list, dict, and set comprehensions",
      "Use conditional expressions in comprehensions",
      "Understand generator expressions and yield",
      "Refactor verbose loops into Pythonic one-liners"
    ],
    keyConcepts: [
      { term: "List Comp", definition: "[x**2 for x in range(10) if x % 2 == 0]" },
      { term: "Dict Comp", definition: "{k: v for k, v in items if v > 0}" },
      { term: "Generator", definition: "Lazy iterator: (x for x in range(1000000))" },
      { term: "yield", definition: "Produces values one at a time from a generator function" },
      { term: "Ternary", definition: 'Inline if: "yes" if condition else "no"' }
    ],
    starterCode: `# Mission 7: The Refactoring Challenge
# Turn this verbose code into Pythonic one-liners

# --- BEFORE (verbose) ---
# Task 1: Get squares of even numbers from 0-19
squares = []
for i in range(20):
    if i % 2 == 0:
        squares.append(i ** 2)

# --- AFTER (Pythonic) ---
squares = [i**2 for i in range(20) if i % 2 == 0]
print("Squares:", squares)

# Task 2: Invert a dictionary
original = {"a": 1, "b": 2, "c": 3}
inverted = {v: k for k, v in original.items()}
print("Inverted:", inverted)

# Task 3: Generator for infinite Fibonacci
def fib():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

gen = fib()
first_10 = [next(gen) for _ in range(10)]
print("Fibonacci:", first_10)

# Challenge: Refactor 20 lines of "legacy code" (below) 
# into 5 lines or fewer using comprehensions
`,
    resources: [
      { label: "Python Docs: List Comprehensions", url: "https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions" },
      { label: "Real Python: Comprehensions", url: "https://realpython.com/list-comprehension-python/" }
    ]
  },
  {
    id: 8,
    title: "Web Explorer",
    topic: "Scraping & Requests",
    challenge: "Build a price tracker for your favorite store.",
    details: "Automatically monitor the web for changes.",
    objectives: [
      "Send GET/POST requests with headers and parameters",
      "Parse HTML with BeautifulSoup",
      "Handle pagination and rate limiting",
      "Store scraped data in CSV or JSON"
    ],
    keyConcepts: [
      { term: "BeautifulSoup", definition: "Library to parse and navigate HTML/XML documents" },
      { term: "CSS Selector", definition: "Pattern to find HTML elements: soup.select('.price')" },
      { term: "Headers", definition: "Metadata sent with requests — includes User-Agent" },
      { term: "Rate Limiting", definition: "Adding delays between requests to avoid bans" },
      { term: "robots.txt", definition: "File on websites that specifies scraping rules" }
    ],
    starterCode: `# Mission 8: Web Price Tracker
# pip install requests beautifulsoup4

from datetime import datetime

# Simulated HTML (works without internet)
mock_html = """
<div class="product">
  <h2 class="title">Wireless Earbuds Pro</h2>
  <span class="price">$49.99</span>
  <span class="rating">4.5/5</span>
</div>
<div class="product">
  <h2 class="title">USB-C Hub 7-in-1</h2>
  <span class="price">$29.99</span>
  <span class="rating">4.2/5</span>
</div>
"""

# Parse with string methods (BeautifulSoup version below)
def simple_parse(html):
    products = []
    for block in html.split('<div class="product">')[1:]:
        title = block.split('class="title">')[1].split('</')[0]
        price = block.split('class="price">')[1].split('</')[0]
        products.append({"title": title, "price": price})
    return products

results = simple_parse(mock_html)
print(f"📊 Scraped {len(results)} products at {datetime.now():%H:%M}")
for p in results:
    print(f"   {p['title']}: {p['price']}")

# Challenge: Use BeautifulSoup on a real webpage
# from bs4 import BeautifulSoup
# soup = BeautifulSoup(html, "html.parser")
# prices = [el.text for el in soup.select(".price")]
`,
    resources: [
      { label: "Beautiful Soup Docs", url: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/" },
      { label: "Real Python: Web Scraping", url: "https://realpython.com/beautiful-soup-web-scraper-python/" }
    ]
  },
  {
    id: 9,
    title: "Data Scientist",
    topic: "Pandas & NumPy",
    challenge: "Analyze your own screen time data.",
    details: "Turn raw numbers into visual insights.",
    objectives: [
      "Create and manipulate DataFrames with Pandas",
      "Filter, group, and aggregate data",
      "Perform basic NumPy array operations",
      "Generate summary statistics and simple plots"
    ],
    keyConcepts: [
      { term: "DataFrame", definition: "2D labeled data structure — like a spreadsheet in Python" },
      { term: ".groupby()", definition: "Group rows by a column and apply aggregations" },
      { term: "NumPy array", definition: "Fast numerical array: np.array([1, 2, 3])" },
      { term: ".describe()", definition: "Generate count, mean, std, min, max statistics" },
      { term: "Vectorization", definition: "Apply operations to entire arrays without loops" }
    ],
    starterCode: `# Mission 9: Screen Time Analyzer
# pip install pandas numpy

# Simulated screen time data (works without pandas)
screen_data = [
    {"day": "Mon", "app": "YouTube", "minutes": 95},
    {"day": "Mon", "app": "Instagram", "minutes": 45},
    {"day": "Tue", "app": "YouTube", "minutes": 120},
    {"day": "Tue", "app": "VS Code", "minutes": 180},
    {"day": "Wed", "app": "YouTube", "minutes": 60},
    {"day": "Wed", "app": "VS Code", "minutes": 210},
    {"day": "Thu", "app": "Instagram", "minutes": 30},
    {"day": "Thu", "app": "VS Code", "minutes": 240},
]

# Pure Python analysis
from collections import defaultdict

by_app = defaultdict(int)
for row in screen_data:
    by_app[row["app"]] += row["minutes"]

print("📱 Weekly Screen Time Report")
print("-" * 30)
for app, mins in sorted(by_app.items(), key=lambda x: -x[1]):
    hours = mins / 60
    bar = "█" * int(hours * 4)
    print(f"  {app:<12} {hours:.1f}h  {bar}")

total = sum(by_app.values()) / 60
print(f"\\n  Total: {total:.1f} hours")

# Challenge: Rewrite using pandas DataFrame + .groupby()
`,
    resources: [
      { label: "Pandas Getting Started", url: "https://pandas.pydata.org/docs/getting_started/intro_tutorials/" },
      { label: "NumPy Quickstart", url: "https://numpy.org/doc/stable/user/quickstart.html" }
    ]
  },
  {
    id: 10,
    title: "Automator",
    topic: "OS & Pathlib",
    challenge: "Create a bot that organizes your Desktop.",
    details: "Save hours by automating repetitive file tasks.",
    objectives: [
      "Navigate the filesystem with pathlib.Path",
      "List, move, rename, and delete files programmatically",
      "Use os and shutil for system operations",
      "Schedule scripts and handle errors gracefully"
    ],
    keyConcepts: [
      { term: "Path", definition: 'Cross-platform path: Path.home() / "Desktop"' },
      { term: ".glob()", definition: 'Find files by pattern: Path(".").glob("*.py")' },
      { term: "shutil.move()", definition: "Move or rename files across directories" },
      { term: "os.makedirs()", definition: "Create nested directory structure" },
      { term: "try/except", definition: "Handle errors without crashing the script" }
    ],
    starterCode: `# Mission 10: Desktop Organizer Bot
from pathlib import Path
from collections import Counter

# Simulated file list (safe — doesn't touch real files)
mock_files = [
    "essay_final.docx", "photo_001.jpg", "notes.txt",
    "budget.xlsx", "song.mp3", "script.py",
    "presentation.pptx", "photo_002.png", "data.csv",
    "report.pdf", "video.mp4", "archive.zip"
]

# File type categories
CATEGORIES = {
    "Documents": [".docx", ".pdf", ".txt", ".xlsx", ".pptx", ".csv"],
    "Images":    [".jpg", ".jpeg", ".png", ".gif", ".svg"],
    "Media":     [".mp3", ".mp4", ".wav", ".avi"],
    "Code":      [".py", ".js", ".html", ".css", ".json"],
    "Archives":  [".zip", ".tar", ".gz", ".rar"],
}

def categorize(filename):
    ext = Path(filename).suffix.lower()
    for category, extensions in CATEGORIES.items():
        if ext in extensions:
            return category
    return "Other"

print("🤖 Desktop Organizer Bot")
print("=" * 35)
plan = {}
for f in mock_files:
    cat = categorize(f)
    plan.setdefault(cat, []).append(f)

for cat, files in sorted(plan.items()):
    print(f"\\n📁 {cat}/")
    for f in files:
        print(f"   ← {f}")

print(f"\\n✅ Would move {len(mock_files)} files into {len(plan)} folders")

# Challenge: Make it work on YOUR real Desktop folder
# desktop = Path.home() / "Desktop"
# for f in desktop.iterdir(): ...
`,
    resources: [
      { label: "Python Docs: pathlib", url: "https://docs.python.org/3/library/pathlib.html" },
      { label: "Real Python: Pathlib", url: "https://realpython.com/python-pathlib/" }
    ]
  },
  {
    id: 11,
    title: "App Builder",
    topic: "Flask / Streamlit",
    challenge: "Create a personal dashboard web app.",
    details: "Build your first full web interface.",
    objectives: [
      "Set up a Flask or Streamlit project",
      "Create routes, templates, and forms",
      "Connect a frontend to Python backend logic",
      "Deploy a simple app to the web"
    ],
    keyConcepts: [
      { term: "Flask", definition: "Lightweight Python web framework: @app.route('/')" },
      { term: "Streamlit", definition: "Rapid data app framework: st.write(), st.slider()" },
      { term: "Route", definition: "URL pattern mapped to a Python function" },
      { term: "Template", definition: "HTML file with dynamic placeholders (Jinja2)" },
      { term: "API endpoint", definition: "A URL that returns data (usually JSON) instead of HTML" }
    ],
    starterCode: `# Mission 11: Personal Dashboard
# Option A: Streamlit (easiest)
# pip install streamlit
# streamlit run dashboard.py

# Simulated dashboard data
dashboard = {
    "coding_streak": 12,
    "problems_solved": 47,
    "favourite_topic": "Functions",
    "weekly_hours": [2.5, 3.0, 1.5, 4.0, 2.0, 5.5, 3.0],
}

days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

print("📊 YOUR PYTHON DASHBOARD")
print("=" * 40)
print(f"  🔥 Coding Streak:   {dashboard['coding_streak']} days")
print(f"  ✅ Problems Solved: {dashboard['problems_solved']}")
print(f"  ⭐ Favourite Topic: {dashboard['favourite_topic']}")
print(f"\\n  📈 Weekly Coding Hours:")

max_h = max(dashboard["weekly_hours"])
for day, hours in zip(days, dashboard["weekly_hours"]):
    bar = "█" * int(hours / max_h * 20)
    print(f"    {day} {bar} {hours}h")

total = sum(dashboard["weekly_hours"])
print(f"\\n  Total: {total:.1f}h this week")

# Challenge: Rebuild this with Streamlit for a real web UI
# import streamlit as st
# st.title("My Python Dashboard")
# st.metric("Streak", f"{dashboard['coding_streak']} days")
`,
    resources: [
      { label: "Flask Quickstart", url: "https://flask.palletsprojects.com/en/stable/quickstart/" },
      { label: "Streamlit Docs", url: "https://docs.streamlit.io/" }
    ]
  },
  {
    id: 12,
    title: "Final Boss",
    topic: "Capstone Project",
    challenge: "Build a Real-Time Crypto/Stock Tracker.",
    details: "Integrate everything into a professional tool.",
    objectives: [
      "Combine APIs, data processing, and display logic",
      "Structure a multi-file Python project properly",
      "Add error handling, logging, and configuration",
      "Document and package your project for others"
    ],
    keyConcepts: [
      { term: "Project Structure", definition: "Organize code into modules: src/, tests/, config/" },
      { term: "requirements.txt", definition: "List of dependencies: pip freeze > requirements.txt" },
      { term: "Logging", definition: "import logging — better than print() for production" },
      { term: "Config", definition: "Store API keys in .env files, never hardcode them" },
      { term: "README.md", definition: "Documentation file that explains your project" }
    ],
    starterCode: `# Mission 12: CAPSTONE — Stock/Crypto Tracker
# This combines EVERYTHING you've learned!

import json
from datetime import datetime

# Simulated portfolio (works offline)
portfolio = {
    "stocks": [
        {"symbol": "AAPL", "shares": 10, "buy_price": 150.00, "current": 178.50},
        {"symbol": "GOOGL", "shares": 5, "buy_price": 140.00, "current": 165.20},
    ],
    "crypto": [
        {"symbol": "BTC", "amount": 0.05, "buy_price": 42000, "current": 67500},
        {"symbol": "ETH", "amount": 1.2, "buy_price": 2200, "current": 3400},
    ]
}

def calc_pnl(assets):
    results = []
    for a in assets:
        qty = a.get("shares", a.get("amount"))
        invested = qty * a["buy_price"]
        current_val = qty * a["current"]
        pnl = current_val - invested
        pct = (pnl / invested) * 100
        results.append({**a, "pnl": pnl, "pct": pct, "value": current_val})
    return results

print(f"📈 PORTFOLIO TRACKER — {datetime.now():%Y-%m-%d %H:%M}")
print("=" * 55)

for asset_type in ["stocks", "crypto"]:
    print(f"\\n{'📊 STOCKS' if asset_type == 'stocks' else '🪙 CRYPTO'}")
    print("-" * 55)
    for a in calc_pnl(portfolio[asset_type]):
        icon = "🟢" if a["pnl"] >= 0 else "🔴"
        print(f"  {icon} {a['symbol']:<6} ${a['value']:>10,.2f}  {a['pct']:>+6.1f}%  (${a['pnl']:>+,.2f})")

total = sum(a["value"] for t in portfolio.values() for a in calc_pnl(t))
print(f"\\n  💰 Total Portfolio Value: ${total:,.2f}")

# Challenge: Add real API data, alerts, and auto-refresh
`,
    resources: [
      { label: "CoinGecko API", url: "https://www.coingecko.com/en/api" },
      { label: "Real Python: Project Structure", url: "https://realpython.com/python-application-layouts/" }
    ]
  }
];

export default roadmap;
