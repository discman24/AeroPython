/**
 * AeroPython — Common Mistakes
 * Per-module "gotchas" with wrong/right code comparisons
 */

const commonMistakes = {
  1: [
    { title: "Confusing = with ==", wrong: 'if x = 5:        # SyntaxError', right: 'if x == 5:       # Comparison ✓', explanation: "Single = assigns a value. Double == compares two values." },
    { title: "String + Integer", wrong: 'age = 17\nprint("Age: " + age)   # TypeError', right: 'print("Age: " + str(age))  # ✓\nprint(f"Age: {age}")       # Better ✓', explanation: "Python won't auto-convert types. Use str(), f-strings, or comma in print()." },
    { title: "input() returns string", wrong: 'age = input("Age: ")\ncan_vote = age >= 18   # TypeError', right: 'age = int(input("Age: "))\ncan_vote = age >= 18   # ✓', explanation: "input() always returns a string, even if the user types a number." },
    { title: "Case sensitivity", wrong: 'Name = "Alice"\nprint(name)   # NameError', right: 'name = "Alice"\nprint(name)   # ✓', explanation: "Python is case-sensitive: Name, name, and NAME are all different variables." }
  ],
  2: [
    { title: "Missing colon", wrong: 'if x > 5\n    print("big")', right: 'if x > 5:\n    print("big")', explanation: "if, elif, else, for, while, def, and class all need a colon : at the end." },
    { title: "Indentation errors", wrong: 'if True:\nprint("yes")   # IndentationError', right: 'if True:\n    print("yes")   # 4 spaces ✓', explanation: "Python uses indentation (4 spaces) to define code blocks. Mixing tabs and spaces breaks things." },
    { title: "Infinite while loop", wrong: 'count = 0\nwhile count < 5:\n    print(count)\n    # Forgot count += 1!', right: 'count = 0\nwhile count < 5:\n    print(count)\n    count += 1   # Don\'t forget!', explanation: "Always ensure your while loop's condition will eventually become False." },
    { title: "Off-by-one with range", wrong: '# Print 1 to 10\nfor i in range(10):\n    print(i)   # Prints 0-9', right: 'for i in range(1, 11):\n    print(i)   # Prints 1-10 ✓', explanation: "range(n) starts at 0 and stops BEFORE n. Use range(1, n+1) for 1 to n." }
  ],
  3: [
    { title: "Modifying list while iterating", wrong: 'nums = [1, 2, 3, 4, 5]\nfor n in nums:\n    if n % 2 == 0:\n        nums.remove(n)  # Skips elements!', right: 'nums = [1, 2, 3, 4, 5]\nnums = [n for n in nums if n % 2 != 0]  # ✓', explanation: "Removing from a list while looping skips elements. Use list comprehension instead." },
    { title: "Mutable default argument", wrong: 'def add(item, lst=[]):\n    lst.append(item)\n    return lst\n# lst is shared between calls!', right: 'def add(item, lst=None):\n    if lst is None:\n        lst = []\n    lst.append(item)\n    return lst', explanation: "Default mutable arguments (lists, dicts) are created ONCE and shared between calls." },
    { title: "Dict KeyError", wrong: 'data = {"name": "Alice"}\nprint(data["age"])   # KeyError', right: 'print(data.get("age", "N/A"))  # ✓\n# or: "age" in data', explanation: "Accessing a missing key with [] crashes. Use .get(key, default) for safety." },
    { title: "Shallow copy trap", wrong: 'a = [[1, 2], [3, 4]]\nb = a.copy()\nb[0][0] = 99\n# a is also changed!', right: 'import copy\nb = copy.deepcopy(a)\nb[0][0] = 99\n# a is unchanged ✓', explanation: ".copy() makes a shallow copy — nested lists still share the same objects." }
  ],
  4: [
    { title: "Forgetting return", wrong: 'def double(n):\n    n * 2\n\nprint(double(5))   # None!', right: 'def double(n):\n    return n * 2\n\nprint(double(5))   # 10 ✓', explanation: "Without 'return', functions return None by default. Always return your result." },
    { title: "Scope confusion", wrong: 'x = 10\ndef change():\n    x = 20   # Creates a LOCAL x\n\nchange()\nprint(x)   # Still 10', right: 'x = 10\ndef change():\n    global x\n    x = 20\n\nchange()\nprint(x)   # 20 (but avoid global!)', explanation: "Assignment inside a function creates a local variable. Use global (sparingly) or return values." },
    { title: "Mutable default (again)", wrong: 'def log(msg, history=[]):\n    history.append(msg)\n    return history', right: 'def log(msg, history=None):\n    history = history or []\n    history.append(msg)\n    return history', explanation: "This is so common it appears twice! Never use mutable defaults (list, dict, set)." }
  ],
  5: [
    { title: "Not closing files", wrong: 'f = open("data.txt")\ndata = f.read()\n# f.close() missing!', right: 'with open("data.txt") as f:\n    data = f.read()\n# Auto-closed ✓', explanation: "Always use 'with' statements. They auto-close files even if errors occur." },
    { title: "Wrong file mode", wrong: 'with open("log.txt") as f:\n    f.write("entry")   # Error! Default is "r"', right: 'with open("log.txt", "a") as f:\n    f.write("entry")   # Append mode ✓', explanation: "Default mode is 'r' (read). Use 'w' to write (overwrites), 'a' to append." },
    { title: "JSON vs Python dicts", wrong: "# JSON uses double quotes only\ndata = \"{'name': 'Alice'}\"   # Invalid JSON!", right: 'data = \'{"name": "Alice"}\'   # Valid JSON ✓\njson.loads(data)', explanation: "JSON requires double quotes for keys and strings. Python dicts allow single quotes." }
  ],
  6: [
    { title: "Forgetting self", wrong: 'class Dog:\n    def __init__(name):\n        name = name', right: 'class Dog:\n    def __init__(self, name):\n        self.name = name', explanation: "Every method needs 'self' as its first parameter. self.name stores the attribute." },
    { title: "Calling method without ()", wrong: 'dog = Dog("Rex")\ndog.bark   # Doesn\'t call it!', right: 'dog.bark()   # Calls the method ✓', explanation: "Without (), you're referencing the method object, not calling it." },
    { title: "Class vs instance variable", wrong: 'class Counter:\n    count = 0   # Shared by ALL instances\n    def __init__(self):\n        self.count += 1   # Creates instance copy!', right: 'class Counter:\n    count = 0\n    def __init__(self):\n        Counter.count += 1   # Modifies class var ✓', explanation: "Class variables are shared. self.x += 1 creates a new instance variable that shadows the class one." }
  ],
  7: [
    { title: "Generator consumed", wrong: 'gen = (x for x in range(5))\nprint(list(gen))   # [0, 1, 2, 3, 4]\nprint(list(gen))   # [] — empty!', right: '# Create a new generator each time, or use a list\nnums = [x for x in range(5)]   # Reusable', explanation: "Generators can only be consumed ONCE. After iterating, they're exhausted." },
    { title: "Nested comprehension order", wrong: '# Wrong order — reads confusingly\n[item for item in sublist for sublist in matrix]', right: '# Correct: outer loop first\n[item for sublist in matrix for item in sublist]', explanation: "In nested comprehensions, write loops in the same order as you'd write them normally." }
  ],
  8: [
    { title: "No rate limiting", wrong: 'for url in urls:\n    requests.get(url)   # Hammers the server', right: 'import time\nfor url in urls:\n    requests.get(url)\n    time.sleep(1)   # Be polite ✓', explanation: "Rapid-fire requests can get you IP-banned. Always add delays." },
    { title: "No error handling", wrong: 'r = requests.get(url)\ndata = r.json()   # Crashes if not JSON', right: 'r = requests.get(url)\nif r.status_code == 200:\n    try:\n        data = r.json()\n    except ValueError:\n        data = r.text', explanation: "Always check status codes and handle potential JSON parse errors." }
  ],
  9: [
    { title: "Chained assignment confusion", wrong: 'df["new"] = df["a"] + df["b"]\n# Careful: NaN + number = NaN', right: 'df["new"] = df["a"].fillna(0) + df["b"].fillna(0)', explanation: "NaN values propagate through operations. Use .fillna() to handle missing data." },
    { title: "SettingWithCopyWarning", wrong: 'subset = df[df["age"] > 20]\nsubset["status"] = "adult"   # Warning!', right: 'subset = df[df["age"] > 20].copy()\nsubset["status"] = "adult"   # Safe ✓', explanation: "Modifying a slice of a DataFrame may not work as expected. Use .copy() first." }
  ],
  10: [
    { title: "String paths break", wrong: 'path = "C:\\\\Users\\\\name\\\\docs"   # Windows only!', right: 'from pathlib import Path\npath = Path.home() / "docs"   # Cross-platform ✓', explanation: "Hard-coded string paths break between OS. pathlib handles separators automatically." },
    { title: "rmtree is permanent", wrong: 'import shutil\nshutil.rmtree(folder)   # NO UNDO!', right: '# Add confirmation\nif input(f"Delete {folder}? (y/n): ") == "y":\n    shutil.rmtree(folder)', explanation: "rmtree permanently deletes entire folders. It doesn't go to Trash. Always confirm." }
  ],
  11: [
    { title: "Debug mode in production", wrong: 'app.run(debug=True)   # Exposes debugger to internet!', right: 'if __name__ == "__main__":\n    app.run(debug=False)   # Production ✓', explanation: "Flask's debug mode shows interactive traceback to anyone — a huge security risk." },
    { title: "Blocking main thread", wrong: '# Long task in a route blocks ALL users\n@app.route("/slow")\ndef slow():\n    time.sleep(30)\n    return "Done"', right: '# Use background tasks (Celery, threads)\nfrom threading import Thread\n# ... offload heavy work', explanation: "Flask handles one request at a time by default. Long tasks block everyone." }
  ],
  12: [
    { title: "Hardcoded secrets", wrong: 'API_KEY = "sk-abc123secret"   # In source code!', right: 'import os\nAPI_KEY = os.environ["API_KEY"]\n# Set in .env file, never commit', explanation: "Never put API keys in code. Use environment variables and add .env to .gitignore." },
    { title: "No error handling", wrong: 'data = requests.get(api_url).json()\nprice = data["price"]   # Crashes if API is down', right: 'try:\n    r = requests.get(api_url, timeout=5)\n    r.raise_for_status()\n    price = r.json()["price"]\nexcept Exception as e:\n    logging.error(f"API error: {e}")\n    price = None', explanation: "Production code needs try/except, timeouts, and logging. APIs fail constantly." }
  ]
};

export default commonMistakes;
