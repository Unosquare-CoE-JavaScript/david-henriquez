# Red Hat Proccess

The chapter discusses the frontend development workflow at Red Hat, which benefits from the team working ahead of backend development due to a well-established system that enables smooth transitions from prototyping to implementation.

Key aspects of the workflow at Red Hat include:

Early Prototyping: Frontend teams work on creating prototypes and have them signed off before handing them over to backend teams for implementation. This preemptive approach prevents discrepancies between the frontend prototypes and the backend output.

Addressing the 'Last Mile' Issue: Traditionally, there was a struggle to match the markup output by the backend with the frontend prototypes, often leading to bugs and discrepancies. Red Hat addressed this by implementing a universal templating engine using Twig, which could be shared between prototyping tools and production environments.

A Standard Set of Deliverables: For every component or layout, a standard set of files is provided, including a JSON schema, a Twig template file, a Sass partial, visual regression tests, testing data, documentation, and documentation data. This comprehensive package ensures consistency and clarity across the development process.

Schema-Driven Design System: The process is led by a schema-driven design approach, where JSON schemas define the correct data structure for a component. This method emphasizes content and user interaction over markup and CSS, creating a kind of design system API.

JSON Schemas to Drive Development: JSON schemas serve as the blueprint for the data structure, informing the user interface in the editor and the HTML output. They provide a detailed description of the data required, the types of data, and the necessary conditions for the data, guiding both the development of the user interface and the template logic.

From Schema to Template: The data defined by the JSON schema is then used to create the corresponding Twig template, ensuring that the final HTML output matches the design system's requirements. The template uses conditions and loops to handle optional and iterative content, as defined by the schema.

Benefits of the Approach: This schema-first strategy removes much of the guesswork from the development process, allows for third-party tool integration, and has proven so effective at Red Hat that it's become a standard practice for their design system development.

The chapter highlights the importance of a schema-driven approach in modern frontend architecture, illustrating how such a system can streamline the development process, reduce technical debt, and ensure that frontend and backend development are closely aligned.
