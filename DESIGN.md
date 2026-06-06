
## Design System Foundation

- This product is built on Material UI (MUI).
- Prefer MUI-native patterns, spacing, typography, elevation, and interaction behaviors unless explicitly overridden by design tokens or component rules.
- Avoid introducing non-MUI visual patterns unless required for brand accuracy.
- When incorporating reusable components, refer to the components.md


## Typography

- Use typography tokens from `tokens.css`.
- Semantic typography roles are defined in `styles/tokens.css` as `--type-*` 
- Do not hardcode font size. 


## Color Rules

- Semantic color tones are defined in `styles/tokens.css` as `--color-*`
- Do not hardcode hex values.
- Whenever assigning a color based on a health topic, try and associate any health topic with the available semantic color tokens. If an option does not exist or match closely enough, use the --color-default-health token. 


## Spacing Rules

- Base spacing is defined in `styles/tokens.css` as `--space-*`
- Semantic spacing is defined in `styles/tokens.css` as `--space-*`
- Use the base spacing for generic layout.
- Use semantic spacing tokens for recurring patterns.
- Do not hardcode arbitrary spacing values like `17px`, `23px`, or `37px`.
- Prefer `gap` for spacing between items in flex/grid layouts.
- Prefer `padding` for internal spacing inside cards, buttons, panels, and sections.
- Prefer `margin` only when controlling separation between unrelated layout blocks.
- If an exact screenshot match requires a custom value, create a named token instead of hardcoding it.


## Box shadows

- Box shadows are defined in `styles/tokens.css` as `--box-shadows-*`
- Semantic box shadows are defined in `styles/tokens.css` as `--shadow-*`
- Use the box shadows for generic elevation needs.
- Use semantic box shadows for recurring patterns.


## Layout
- Max width is provided under Layout in `tokens.css`.
- If a header uses an image, refer to the breakpoint mentioned under layout


## Do's and Don'ts

- Always reference a CSS custom property from tokens.css. If a token doesn't exist, flag it — don't invent a value.
- Whenever making UI changes, always perform a design review referencing the design-review.md in skills folder
