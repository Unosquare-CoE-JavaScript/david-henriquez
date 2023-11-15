# Red Hat

The chapter recounts the author's experience working on the Redhat.com website launch in fall 2014. Despite the website's success, the author faced a challenge when asked about the modularity of the design. The current setup was far from modular, with dependencies and location-dependent styling that made sharing styles across the company's websites difficult.

Key issues included:

Dependency Bloat: A single content band required loading substantial CSS from Bootstrap and the site's core styles, which were interdependent and location-specific.

Location-Dependent Nightmare: Styles were highly specific to their location within the page structure, leading to long, inflexible selectors that were tied to the markup order and made rearrangement or reuse difficult.

The author was tasked with creating a modular, scalable, and sustainable design system during a code freeze of the newly launched site. This led to:

Breaking the Design Down: Analyzing common patterns across the site to identify reusable layout concepts instead of creating a new band for each new design.

Cataloging Components: Identifying a small set of flexible, visual components that could be mixed and matched within various layouts without additional code.

The Road Runner Rules: Establishing a set of design system rules to ensure consistency and cohesiveness, similar to guidelines used in the Road Runner cartoons.

Semantic Grids: Implementing common grid patterns that could be applied to layouts via data attributes, allowing for flexibility without additional CSS or classes.

In essence, the author's story illustrates the transition from a rigid, tightly-coupled design to a modular system with reusable components and layouts. This new approach enabled easier updates, better testability, and broader reuse across the organization's web properties.
