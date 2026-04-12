/**
 * AeroPython — Quiz Bank
 * ~6-8 questions per module, 3 types: mcq, output, bugfix
 */

const quizzes = {
  1: [
    {
      id: "q1-1", type: "mcq",
      question: "Which is a valid Python variable name?",
      code: null,
      options: ["2fast", "my-var", "my_var", "class"],
      correct: 2,
      explanation: "Variable names can't start with digits, contain hyphens, or be reserved keywords like 'class'."
    },
    {
      id: "q1-2", type: "output",
      question: "What does this print?",
      code: 'x = "7"\ny = 3\nprint(x * y)',
      options: ["21", "777", "Error", "73"],
      correct: 1,
      explanation: 'String * int repeats the string. "7" * 3 = "777".'
    },
    {
      id: "q1-3", type: "mcq",
      question: "What is the type of: 3.14?",
      code: null,
      options: ["str", "int", "float", "bool"],
      correct: 2,
      explanation: "Numbers with a decimal point are float type in Python."
    },
    {
      id: "q1-4", type: "output",
      question: "What does this print?",
      code: 'name = "Ada"\nprint(f"Hello, {name}!")',
      options: ["Hello, {name}!", "Hello, Ada!", "Error", "f\"Hello, Ada!\""],
      correct: 1,
      explanation: "f-strings evaluate expressions inside {} curly braces."
    },
    {
      id: "q1-5", type: "bugfix",
      question: "Which line has the bug?",
      code: 'age = input("Age: ")\nnext_year = age + 1\nprint(next_year)',
      options: ["Line 1", "Line 2 — can't add int to str", "Line 3", "No bug"],
      correct: 1,
      explanation: "input() always returns a string. You need int(age) + 1."
    },
    {
      id: "q1-6", type: "mcq",
      question: "What does bool(\"\") return?",
      code: null,
      options: ["True", "False", "None", "Error"],
      correct: 1,
      explanation: "Empty strings, 0, None, and empty collections are all falsy in Python."
    }
  ],

  2: [
    {
      id: "q2-1", type: "output",
      question: "What does this print?",
      code: 'for i in range(3):\n    print(i, end=" ")',
      options: ["1 2 3", "0 1 2", "0 1 2 3", "1 2"],
      correct: 1,
      explanation: "range(3) generates 0, 1, 2. The end=\" \" keeps output on one line."
    },
    {
      id: "q2-2", type: "mcq",
      question: "Which operator means 'not equal to'?",
      code: null,
      options: ["<>", "!=", "=/=", "not="],
      correct: 1,
      explanation: "Python uses != for not-equal comparison. <> was removed in Python 3."
    },
    {
      id: "q2-3", type: "output",
      question: "What does this print?",
      code: 'x = 5\nif x > 10:\n    print("big")\nelif x > 3:\n    print("medium")\nelse:\n    print("small")',
      options: ["big", "medium", "small", "big medium"],
      correct: 1,
      explanation: "x is 5: not > 10, but > 3, so elif branch executes. Only one branch runs."
    },
    {
      id: "q2-4", type: "bugfix",
      question: "What's wrong with this code?",
      code: 'count = 0\nwhile count < 5\n    print(count)\n    count += 1',
      options: ["Missing colon after while condition", "count should start at 1", "Should use for loop", "Nothing wrong"],
      correct: 0,
      explanation: "Python requires a colon : at the end of while, for, if, def, class lines."
    },
    {
      id: "q2-5", type: "output",
      question: "What does this print?",
      code: 'for i in range(5):\n    if i == 3:\n        break\n    print(i, end=" ")',
      options: ["0 1 2 3", "0 1 2", "0 1 2 3 4", "3"],
      correct: 1,
      explanation: "break exits the loop when i == 3, before printing 3."
    },
    {
      id: "q2-6", type: "mcq",
      question: "What does 'continue' do inside a loop?",
      code: null,
      options: ["Exits the loop entirely", "Skips to the next iteration", "Restarts the loop from 0", "Pauses execution"],
      correct: 1,
      explanation: "'continue' skips the rest of the current iteration and moves to the next one."
    },
    {
      id: "q2-7", type: "output",
      question: "What does this print?",
      code: 'print(True and False)\nprint(True or False)',
      options: ["True True", "False True", "True False", "False False"],
      correct: 1,
      explanation: "'and' requires both True. 'or' requires at least one True."
    }
  ],

  3: [
    {
      id: "q3-1", type: "output",
      question: "What does this print?",
      code: 'nums = [10, 20, 30, 40, 50]\nprint(nums[1:3])',
      options: ["[10, 20]", "[20, 30]", "[20, 30, 40]", "[10, 20, 30]"],
      correct: 1,
      explanation: "Slicing [1:3] gets indices 1 and 2 (stop index is exclusive)."
    },
    {
      id: "q3-2", type: "mcq",
      question: "Which method adds an item to the END of a list?",
      code: null,
      options: ["list.add()", "list.append()", "list.insert()", "list.push()"],
      correct: 1,
      explanation: ".append() adds to the end. .insert(i, val) adds at a specific index."
    },
    {
      id: "q3-3", type: "output",
      question: "What does this print?",
      code: 'd = {"a": 1, "b": 2}\nprint(d.get("c", 0))',
      options: ["None", "Error", "0", "c"],
      correct: 2,
      explanation: ".get(key, default) returns the default value if the key doesn't exist."
    },
    {
      id: "q3-4", type: "bugfix",
      question: "What's wrong here?",
      code: 'data = {"name": "Alice", "age": 25}\nprint(data["score"])',
      options: ["Nothing wrong", "KeyError — 'score' doesn't exist", "SyntaxError", "TypeError"],
      correct: 1,
      explanation: "Accessing a missing key with [] raises KeyError. Use .get('score', 0) instead."
    },
    {
      id: "q3-5", type: "output",
      question: "What does this print?",
      code: 'items = [3, 1, 4, 1, 5]\nitems.sort()\nprint(items[-1])',
      options: ["3", "5", "1", "4"],
      correct: 1,
      explanation: "After sorting: [1, 1, 3, 4, 5]. Index -1 is the last element: 5."
    },
    {
      id: "q3-6", type: "mcq",
      question: "What is the difference between a list and a tuple?",
      code: null,
      options: ["Tuples are faster", "Lists are immutable", "Tuples are immutable", "No difference"],
      correct: 2,
      explanation: "Tuples can't be modified after creation. Lists can be changed freely."
    },
    {
      id: "q3-7", type: "output",
      question: "What does this print?",
      code: 'print(len({"x": 1, "y": 2, "x": 3}))',
      options: ["3", "2", "Error", "6"],
      correct: 1,
      explanation: "Duplicate key 'x' is overwritten. The dict has only 2 keys: 'x' and 'y'."
    }
  ],

  4: [
    {
      id: "q4-1", type: "output",
      question: "What does this print?",
      code: 'def greet(name="World"):\n    return f"Hello, {name}!"\n\nprint(greet())',
      options: ["Hello, !", "Error", "Hello, World!", "Hello, name!"],
      correct: 2,
      explanation: "When called without arguments, the default parameter 'World' is used."
    },
    {
      id: "q4-2", type: "mcq",
      question: "What does *args collect?",
      code: null,
      options: ["Keyword arguments as a dict", "Positional arguments as a tuple", "All arguments as a list", "Nothing — it's invalid syntax"],
      correct: 1,
      explanation: "*args collects extra positional arguments into a tuple."
    },
    {
      id: "q4-3", type: "output",
      question: "What does this print?",
      code: 'def add(a, b):\n    return a + b\n\nresult = add(3, 4)\nprint(result)',
      options: ["None", "7", "34", "Error"],
      correct: 1,
      explanation: "add(3, 4) returns 3 + 4 = 7, which is stored in result."
    },
    {
      id: "q4-4", type: "bugfix",
      question: "Why does this return None?",
      code: 'def double(n):\n    n * 2\n\nprint(double(5))',
      options: ["Missing return statement", "n * 2 is invalid", "Should use print inside function", "double(5) should be double(n=5)"],
      correct: 0,
      explanation: "Without 'return', Python functions return None. Should be: return n * 2"
    },
    {
      id: "q4-5", type: "output",
      question: "What does this print?",
      code: 'double = lambda x: x * 2\nprint(double(7))',
      options: ["7", "14", "Error", "lambda"],
      correct: 1,
      explanation: "Lambda creates a small anonymous function. double(7) returns 7 * 2 = 14."
    },
    {
      id: "q4-6", type: "output",
      question: "What does this print?",
      code: 'def power(base, exp=2):\n    return base ** exp\n\nprint(power(3, 3))',
      options: ["9", "27", "6", "Error"],
      correct: 1,
      explanation: "3 ** 3 = 27. The explicit argument 3 overrides the default exp=2."
    }
  ],

  5: [
    {
      id: "q5-1", type: "mcq",
      question: "What does 'with open(f) as file:' do when the block ends?",
      code: null,
      options: ["Deletes the file", "Automatically closes the file", "Saves a backup", "Nothing special"],
      correct: 1,
      explanation: "The 'with' context manager ensures the file is closed even if an error occurs."
    },
    {
      id: "q5-2", type: "output",
      question: "What does this print?",
      code: 'import json\ndata = \'{"a": 1, "b": 2}\'\nresult = json.loads(data)\nprint(type(result).__name__)',
      options: ["str", "list", "dict", "json"],
      correct: 2,
      explanation: "json.loads() parses a JSON string into a Python dict."
    },
    {
      id: "q5-3", type: "mcq",
      question: "Which file mode opens a file for writing (creates or overwrites)?",
      code: null,
      options: ['"r"', '"w"', '"a"', '"x"'],
      correct: 1,
      explanation: "'w' opens for writing and truncates. 'a' appends. 'r' reads. 'x' creates (fails if exists)."
    },
    {
      id: "q5-4", type: "bugfix",
      question: "What's the issue here?",
      code: 'file = open("data.txt", "r")\ncontent = file.read()\n# ... process content\n# file is never closed',
      options: ["Nothing wrong", "Should use 'with' statement", "Should use 'w' mode", "'read' isn't a method"],
      correct: 1,
      explanation: "Without 'with', you must manually call file.close(). Best practice: use 'with'."
    },
    {
      id: "q5-5", type: "output",
      question: "What does this print?",
      code: 'import json\nprint(json.dumps({"b": 2, "a": 1}, sort_keys=True))',
      options: ['{"b": 2, "a": 1}', '{"a": 1, "b": 2}', "Error", "{'a': 1, 'b': 2}"],
      correct: 1,
      explanation: "sort_keys=True alphabetizes the keys. json.dumps uses double quotes."
    },
    {
      id: "q5-6", type: "mcq",
      question: "What HTTP status code means 'Not Found'?",
      code: null,
      options: ["200", "301", "404", "500"],
      correct: 2,
      explanation: "404 = Not Found. 200 = OK. 301 = Redirect. 500 = Server Error."
    }
  ],

  6: [
    {
      id: "q6-1", type: "output",
      question: "What does this print?",
      code: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n\nd = Dog("Rex")\nprint(d.name)',
      options: ["Dog", "name", "Rex", "Error"],
      correct: 2,
      explanation: "__init__ sets self.name = 'Rex'. Accessing d.name returns 'Rex'."
    },
    {
      id: "q6-2", type: "mcq",
      question: "What does 'self' refer to inside a class method?",
      code: null,
      options: ["The class itself", "The current instance", "The parent class", "Nothing — it's just convention"],
      correct: 1,
      explanation: "'self' is a reference to the specific object calling the method."
    },
    {
      id: "q6-3", type: "output",
      question: "What does this print?",
      code: 'class Counter:\n    count = 0\n    def __init__(self):\n        Counter.count += 1\n\na = Counter()\nb = Counter()\nc = Counter()\nprint(Counter.count)',
      options: ["1", "0", "3", "Error"],
      correct: 2,
      explanation: "'count' is a class variable shared by all instances. 3 objects = count is 3."
    },
    {
      id: "q6-4", type: "bugfix",
      question: "What's wrong with this class?",
      code: 'class Cat:\n    def __init__(name):\n        name = name\n\nc = Cat("Luna")',
      options: ["Missing 'self' parameter", "'name = name' should be 'self.name = name'", "Both issues above", "Nothing wrong"],
      correct: 2,
      explanation: "__init__ needs 'self' as first parameter, and attributes need self. prefix."
    },
    {
      id: "q6-5", type: "output",
      question: "What does this print?",
      code: 'class Animal:\n    def speak(self):\n        return "..."\n\nclass Dog(Animal):\n    def speak(self):\n        return "Woof!"\n\nprint(Dog().speak())',
      options: ["...", "Woof!", "Error", "Animal"],
      correct: 1,
      explanation: "Dog overrides the speak() method from Animal. Dog().speak() returns 'Woof!'."
    },
    {
      id: "q6-6", type: "mcq",
      question: "What is __str__ used for?",
      code: null,
      options: ["String validation", "String encryption", "Human-readable representation of an object", "Converting to bytes"],
      correct: 2,
      explanation: "__str__ defines what print(obj) displays — the human-readable form."
    }
  ],

  7: [
    {
      id: "q7-1", type: "output",
      question: "What does this produce?",
      code: 'result = [x**2 for x in range(5)]\nprint(result)',
      options: ["[1, 4, 9, 16, 25]", "[0, 1, 4, 9, 16]", "[0, 2, 4, 6, 8]", "Error"],
      correct: 1,
      explanation: "range(5) gives 0-4. Squaring each: [0, 1, 4, 9, 16]."
    },
    {
      id: "q7-2", type: "output",
      question: "What does this produce?",
      code: 'result = [x for x in range(10) if x % 3 == 0]\nprint(result)',
      options: ["[3, 6, 9]", "[0, 3, 6, 9]", "[1, 2, 4, 5, 7, 8]", "[0, 3, 6]"],
      correct: 1,
      explanation: "Filters range(10) to keep only values divisible by 3: 0, 3, 6, 9."
    },
    {
      id: "q7-3", type: "mcq",
      question: "What's the difference between a list comp and a generator expression?",
      code: null,
      options: ["No difference", "Generators use () and produce values lazily", "Generators are faster for small data", "List comps can't filter"],
      correct: 1,
      explanation: "Generators use () instead of [] and yield values one at a time — memory efficient."
    },
    {
      id: "q7-4", type: "output",
      question: "What does this produce?",
      code: 'd = {k: v for k, v in [("a", 1), ("b", 2), ("c", 3)]}\nprint(d)',
      options: ["[('a', 1), ('b', 2)]", "{'a': 1, 'b': 2, 'c': 3}", "Error", "{1: 'a', 2: 'b', 3: 'c'}"],
      correct: 1,
      explanation: "Dict comprehension builds a dictionary from key-value pairs."
    },
    {
      id: "q7-5", type: "output",
      question: "What does this print?",
      code: 'words = ["hello", "WORLD", "Python"]\nresult = [w.lower() for w in words]\nprint(result)',
      options: ['["hello", "world", "python"]', '["HELLO", "WORLD", "PYTHON"]', "Error", '["Hello", "World", "Python"]'],
      correct: 0,
      explanation: ".lower() converts each string to lowercase."
    },
    {
      id: "q7-6", type: "mcq",
      question: "What does 'yield' do in a function?",
      code: null,
      options: ["Returns a value and stops", "Returns a value but pauses (can resume)", "Raises an exception", "Prints a value"],
      correct: 1,
      explanation: "'yield' makes a function a generator — it pauses and resumes between values."
    }
  ],

  8: [
    {
      id: "q8-1", type: "mcq",
      question: "Which library is used to parse HTML in Python?",
      code: null,
      options: ["requests", "BeautifulSoup", "json", "csv"],
      correct: 1,
      explanation: "BeautifulSoup (bs4) parses HTML/XML. requests fetches pages. Different jobs."
    },
    {
      id: "q8-2", type: "mcq",
      question: "What does a 403 HTTP status code mean?",
      code: null,
      options: ["OK", "Not Found", "Forbidden", "Server Error"],
      correct: 2,
      explanation: "403 = Forbidden (no permission). 404 = Not Found. 200 = OK."
    },
    {
      id: "q8-3", type: "output",
      question: "What does this print?",
      code: 'html = "<p>Hello <b>World</b></p>"\nstart = html.find("<b>") + 3\nend = html.find("</b>")\nprint(html[start:end])',
      options: ["<b>World</b>", "Hello World", "World", "Hello"],
      correct: 2,
      explanation: "find('<b>') + 3 skips past the tag. Slicing to '</b>' extracts 'World'."
    },
    {
      id: "q8-4", type: "mcq",
      question: "Why should you add delays between scraping requests?",
      code: null,
      options: ["Python runs too fast", "To avoid getting IP-banned by the server", "HTML loads slowly", "Browsers require it"],
      correct: 1,
      explanation: "Rapid requests can trigger rate limits or IP bans. Use time.sleep() between requests."
    },
    {
      id: "q8-5", type: "mcq",
      question: "What does robots.txt tell you about a website?",
      code: null,
      options: ["The site's password", "Which pages you're allowed to scrape", "The server's IP address", "The site's HTML structure"],
      correct: 1,
      explanation: "robots.txt specifies which paths crawlers/scrapers should and shouldn't access."
    },
    {
      id: "q8-6", type: "bugfix",
      question: "What will go wrong here?",
      code: 'import requests\nfor i in range(10000):\n    r = requests.get("https://example.com")\n    print(r.status_code)',
      options: ["Nothing", "10,000 rapid requests will likely get you banned", "requests can't use loops", "status_code doesn't exist"],
      correct: 1,
      explanation: "Always add time.sleep() between requests and respect rate limits."
    }
  ],

  9: [
    {
      id: "q9-1", type: "mcq",
      question: "What is a Pandas DataFrame?",
      code: null,
      options: ["A type of chart", "A 2D labeled data table", "A Python list", "A database connection"],
      correct: 1,
      explanation: "A DataFrame is like a spreadsheet in Python — rows and labeled columns."
    },
    {
      id: "q9-2", type: "output",
      question: "What does this print?",
      code: 'import numpy as np\na = np.array([1, 2, 3])\nprint(a * 2)',
      options: ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "Error", "[1, 2, 3, 2]"],
      correct: 1,
      explanation: "NumPy arrays support element-wise operations. * 2 multiplies each element."
    },
    {
      id: "q9-3", type: "mcq",
      question: "What does df.groupby('category').sum() do?",
      code: null,
      options: ["Sorts by category", "Groups rows by category and sums numeric columns", "Counts categories", "Filters rows"],
      correct: 1,
      explanation: "groupby splits data into groups, then sum() aggregates each group's numbers."
    },
    {
      id: "q9-4", type: "output",
      question: "What does this print?",
      code: 'import numpy as np\na = np.array([10, 20, 30, 40, 50])\nprint(a[a > 25])',
      options: ["[True, False, True, True, True]", "[30, 40, 50]", "Error", "[10, 20]"],
      correct: 1,
      explanation: "Boolean indexing: a > 25 creates a mask, then a[mask] filters matching elements."
    },
    {
      id: "q9-5", type: "mcq",
      question: "What does .describe() show for a DataFrame?",
      code: null,
      options: ["Column names only", "Count, mean, std, min, 25%, 50%, 75%, max", "Data types", "First 5 rows"],
      correct: 1,
      explanation: ".describe() gives summary statistics for all numeric columns."
    },
    {
      id: "q9-6", type: "mcq",
      question: "What is 'vectorization' in NumPy?",
      code: null,
      options: ["Converting to vectors", "Applying operations to entire arrays at once", "Drawing vector graphics", "Memory compression"],
      correct: 1,
      explanation: "Vectorization means operating on whole arrays without explicit loops — much faster."
    }
  ],

  10: [
    {
      id: "q10-1", type: "output",
      question: "What does this print?",
      code: 'from pathlib import Path\np = Path("/home/user/docs/file.txt")\nprint(p.suffix)',
      options: ["file.txt", ".txt", "txt", "/home/user/docs"],
      correct: 1,
      explanation: ".suffix returns the file extension including the dot."
    },
    {
      id: "q10-2", type: "mcq",
      question: "What does Path.glob('*.py') return?",
      code: null,
      options: ["All files in all subdirectories", "All .py files in the current directory", "A string of filenames", "The first .py file found"],
      correct: 1,
      explanation: "glob('*.py') matches all files ending in .py in that directory (not recursive)."
    },
    {
      id: "q10-3", type: "output",
      question: "What does this print?",
      code: 'from pathlib import Path\np = Path("project") / "src" / "main.py"\nprint(p)',
      options: ["project/src/main.py", "project\\\\src\\\\main.py", "Error", "projectsrcmain.py"],
      correct: 0,
      explanation: "Path uses / operator to join paths. Result uses OS-appropriate separators."
    },
    {
      id: "q10-4", type: "mcq",
      question: "What's the difference between shutil.copy() and shutil.move()?",
      code: null,
      options: ["No difference", "copy keeps original, move deletes original", "move is faster", "copy only works with text files"],
      correct: 1,
      explanation: "copy() duplicates the file. move() relocates it (original is gone)."
    },
    {
      id: "q10-5", type: "bugfix",
      question: "What's risky about this code?",
      code: 'import shutil\nshutil.rmtree("/home/user/important_folder")',
      options: ["Nothing — it's safe", "rmtree permanently deletes the entire folder and contents", "It only deletes empty folders", "It moves to trash"],
      correct: 1,
      explanation: "rmtree is dangerous — it permanently deletes everything with no undo. Always add confirmation."
    },
    {
      id: "q10-6", type: "output",
      question: "What does this print?",
      code: 'from pathlib import Path\np = Path("photo_2024.jpg")\nprint(p.stem)',
      options: ["photo_2024.jpg", ".jpg", "photo_2024", "photo"],
      correct: 2,
      explanation: ".stem returns the filename without the extension."
    }
  ],

  11: [
    {
      id: "q11-1", type: "mcq",
      question: "What does @app.route('/') do in Flask?",
      code: null,
      options: ["Creates a file at /", "Maps the root URL to a function", "Starts the server", "Redirects to homepage"],
      correct: 1,
      explanation: "@app.route('/') is a decorator that maps the URL path '/' to the function below it."
    },
    {
      id: "q11-2", type: "mcq",
      question: "Which command starts a Streamlit app?",
      code: null,
      options: ["python app.py", "streamlit run app.py", "flask run", "npm start"],
      correct: 1,
      explanation: "Streamlit apps are started with 'streamlit run filename.py' from the terminal."
    },
    {
      id: "q11-3", type: "mcq",
      question: "In Flask, what does render_template() do?",
      code: null,
      options: ["Renders a Python file", "Renders an HTML template with dynamic data", "Creates a new route", "Sends JSON response"],
      correct: 1,
      explanation: "render_template loads an HTML file from /templates and fills in Jinja2 variables."
    },
    {
      id: "q11-4", type: "mcq",
      question: "What port does Flask use by default?",
      code: null,
      options: ["3000", "8080", "5000", "80"],
      correct: 2,
      explanation: "Flask runs on http://127.0.0.1:5000 by default."
    },
    {
      id: "q11-5", type: "bugfix",
      question: "What's wrong with this Flask app?",
      code: 'from flask import Flask\napp = Flask(__name__)\n\n@app.route("/")\ndef home():\n    return "Hello!"\n\n# Missing: app.run()',
      options: ["Nothing wrong", "Missing app.run() to start the server", "Route should be '/home'", "Flask isn't imported"],
      correct: 1,
      explanation: "Without app.run() (or using 'flask run' CLI), the server never starts."
    },
    {
      id: "q11-6", type: "mcq",
      question: "What is Jinja2 in the context of Flask?",
      code: null,
      options: ["A database", "A templating engine for HTML", "A CSS framework", "A testing library"],
      correct: 1,
      explanation: "Jinja2 lets you embed Python expressions in HTML: {{ variable }}, {% for %}."
    }
  ],

  12: [
    {
      id: "q12-1", type: "mcq",
      question: "What belongs in a requirements.txt file?",
      code: null,
      options: ["Your Python code", "A list of dependencies with versions", "Project documentation", "Configuration settings"],
      correct: 1,
      explanation: "requirements.txt lists packages needed: requests==2.31.0, pandas>=2.0"
    },
    {
      id: "q12-2", type: "mcq",
      question: "Why use logging instead of print() in production?",
      code: null,
      options: ["Logging is faster", "Logging has levels (DEBUG, INFO, WARNING, ERROR) and can write to files", "print() doesn't work in production", "No real difference"],
      correct: 1,
      explanation: "Logging offers severity levels, file output, timestamps, and can be configured without code changes."
    },
    {
      id: "q12-3", type: "bugfix",
      question: "What's the security issue here?",
      code: 'API_KEY = "sk-abc123secret"\nresponse = requests.get(f"https://api.example.com?key={API_KEY}")',
      options: ["Nothing wrong", "API key is hardcoded — should use environment variables", "URL is wrong", "requests needs headers"],
      correct: 1,
      explanation: "Never hardcode secrets. Use os.environ['API_KEY'] or a .env file with python-dotenv."
    },
    {
      id: "q12-4", type: "mcq",
      question: "What is a good project structure for a Python app?",
      code: null,
      options: ["Everything in one file", "src/ for code, tests/ for tests, config/ for settings", "One folder per function", "Alphabetical file naming"],
      correct: 1,
      explanation: "Separating source code, tests, and configuration makes projects maintainable."
    },
    {
      id: "q12-5", type: "mcq",
      question: "What does a .gitignore file do?",
      code: null,
      options: ["Deletes files from Git", "Tells Git which files to NOT track", "Encrypts sensitive files", "Creates backups"],
      correct: 1,
      explanation: ".gitignore lists patterns for files Git should ignore: .env, __pycache__/, node_modules/"
    },
    {
      id: "q12-6", type: "mcq",
      question: "What's the purpose of a README.md?",
      code: null,
      options: ["To store data", "To document what the project does and how to use it", "To list bugs", "To configure the server"],
      correct: 1,
      explanation: "README.md is the first thing people see — it explains the project, setup, and usage."
    }
  ]
};

export default quizzes;
