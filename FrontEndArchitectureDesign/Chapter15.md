# Style Guides

This chapter talks about evolving stylesheets and the necessity of an advanced documentation system. It introduces Hologram and SassDoc as vital tools for documenting design systems in modern web development. Here's a summary:

**Hologram for Documentation:**

1. **Integration with Code:** Hologram allows annotation within Sass or JavaScript files, which it then turns into a browsable website with rendered examples and code snippets.
2. **Integrated Style Guide:** The documentation becomes an integrated part of the design system, avoiding the maintenance of separate codebases.
3. **Additional Documentation:** Hologram supports standard Markdown files for various project-related documentation.

**Setting Up and Using Hologram:**

1. **Installation:** It starts with installing Hologram as a Ruby gem.
2. **Configuration:** A YAML file is used for configuration, specifying directories like `destination`, `documentation_assets`, and `source`.
3. **Customizing Code Examples:** Hologram provides flexibility in customizing the markup surrounding code examples.

**Hologram Documentation Process:**

1. **Documenting Code:** Documentation is written in CSS comments starting with "doc" and includes details like title and category.
2. **Markdown Features:** The documentation supports Markdown, allowing easy inclusion of various content forms.
3. **Building the Style Guide:** Hologram generates a style guide from the documentation, creating HTML files for each category with all dependencies.

**SassDoc for Sass Documentation:**

1. **Focused Documentation Tool:** SassDoc is specialized for documenting Sass variables, mixins, functions, and extends.
2. **Ease of Use:** It uses a simple annotation syntax and can be integrated with various build tools or used via command line.
3. **Detailed Documentation Features:** SassDoc includes annotations like `@param`, `@type`, and `@access`, providing detailed information about each documented item.

**Conclusion:**
The chapter concludes by emphasizing the value of static documentation systems like Hologram and SassDoc in capturing the nuances of a design system. It notes that these tools require significant user input but offer great flexibility and automation in creating comprehensive documentation. The chapter also hints at the next topic, code-driven documentation systems, contrasting them with the user-driven approach of Hologram and SassDoc.
