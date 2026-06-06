---

name: design-review
description: Review frontend UI for design quality, consistency, and alignment with project design rules.
------------------------------------------------------------------------------------------------------------------------

# Design Review Skill

## Purpose

Use this skill to review UI changes before considering the work complete.

The review should check whether the implementation aligns with the project’s design system, layout expectations, component patterns, and overall user experience.


## When to Use

Use this skill when:

* Building or modifying frontend UI
* Creating new pages, screens, layouts, or components
* Updating existing components
* Reviewing AI-generated UI before final output


## Reference Files

Before reviewing, check the following project files when available:

* `DESIGN.md` for design system guidance
* `styles/tokens.css` for design tokens
* `components/` for existing reusable components
* `rules/` for additional project-specific rules
* `AGENTS.md` for broader project instructions


## Review Criteria

### 1. Design System Alignment

Check that the UI:

* Uses existing design tokens instead of hardcoded values when possible
* Follows the typography, spacing, color, radius, and shadow rules in `styles/tokens.css`
* Matches the guidance in `DESIGN.md`
* Avoids introducing new visual styles without a clear reason

### 2. Component Consistency

Check that the UI:

* Reuses existing components from `components/` when appropriate
* Does not create duplicate components unnecessarily
* Uses components consistently with their intended behavior
* Keeps component APIs clear and simple

### 3. Accessibility

Check that the UI:

* Uses semantic HTML where appropriate
* Has accessible form labels, button names, and link text
* Supports keyboard navigation
* Maintains visible focus states
* Has sufficient color contrast
* Does not rely on color alone to communicate meaning
* Uses headings in a logical order


## Output Format

After reviewing, provide the response in this format:

### Design Review Summary

Briefly summarize the overall quality of the UI.

### What Looks Good

List the strongest parts of the design.

### Issues to Fix

List specific issues that should be addressed before the work is considered complete.

For each issue, include:

* What the issue is
* Why it matters
* Suggested fix

### Recommended Improvements

List optional improvements that would make the design stronger but are not required.

### Final Recommendation

Choose one:

* Approved
* Approved with minor changes
* Needs revisions

## Important Notes

Do not rewrite the entire UI unless asked.

Prioritize practical, high-impact feedback over nitpicks.

When possible, reference the relevant project file or rule that supports the recommendation.

If information is missing, make a reasonable best-effort review and call out any assumptions.
