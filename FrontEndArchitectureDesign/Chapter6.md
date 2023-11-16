# JAVASCRIPT

While many would argue that JavaScript should not be a required part of our web technology stack, it is nonetheless an integral part of many of the websites we build today.

# Selecting Frameworks

What I can tell you is this: it’s very possible that you don’t actually need a framework at all. Instead of focusing on which frameworks and plug-ins to use, you first need to determine which tools are necessary to achieve your goals,
This applies not only to JavaScript frameworks, but to CMS, MVC, and CSS frameworks as well.

# Maintaining Clean JavaScript

The chapter discusses the significance of maintaining clean JavaScript code, even in simple projects that primarily use jQuery and plugins. The author proposes establishing standards for writing JavaScript to prevent scripts from becoming unmanageable and difficult to maintain or refactor.

Key points to ensure clean JavaScript include:

Linting/Hinting Tools: Using tools like JS Hint within the text editor and build system is recommended to catch errors early, enforce code formatting standards, and ensure code consistency.

Reusable Functions: Instead of writing jQuery code as a series of chained methods, the author suggests creating small, reusable functions. This approach not only makes the code more readable but also promotes reusability. An example is given where functions like add_background() and log_text_on_click() can be used across multiple elements, making future changes more manageable.

Advantages of Reusable Code: By abstracting common tasks into functions, the code becomes cleaner, more flexible, and easier to test—similar to the benefits Sass mixins provide over raw CSS.

Conclusion: The author stresses that while JavaScript is a broad topic, setting a baseline of coding standards is essential for consistent code quality across a development team. This ensures that all developers have a clear understanding of what constitutes good code and that code reviews are conducted fairly.

In summary, the author advocates for proactive strategies in writing and managing JavaScript code to avoid a chaotic and unstructured codebase, emphasizing code quality, reusability, and maintainability.
