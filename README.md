# Vymo Dynamic Lead Form

A config-driven dynamic lead capture form built using React and TypeScript.

The project includes a small reusable design system with tokens, atoms, and a field molecule. The lead form is rendered dynamically from a typed configuration and uses a centralized validation module.

## Tech Stack

- React
- TypeScript
- Vite
- CSS Modules
- CSS Variables

## Features

- Config-driven dynamic form
- Reusable design system
- Responsive desktop and mobile layout
- Field validation on blur
- Full form validation on submit
- Conditional Company Name field
- Email validation
- 10-digit phone validation
- Notes maximum length validation
- Required checkbox validation
- Submitted values displayed on the page
- No third-party form library

## Installation

Clone the repository:

```bash
git clone https://github.com/MdAdnan21/vymo_dynamic_Form.git
Navigate to the project:

cd vymo_dynamic_Form

Install dependencies:

npm install

Or, if using pnpm:

pnpm install
Run the Project

Start the development server:

npm run dev

Or:

pnpm dev

Open the local URL shown in the terminal.

Production Build

To create a production build:

npm run build

Or:

pnpm build
Project Structure
src/
├── design-system/
│   ├── tokens/
│   │   └── tokens.css
│   │
│   ├── atoms/
│   │   ├── TextInput/
│   │   │   ├── TextInput.tsx
│   │   │   └── TextInput.module.css
│   │   │
│   │   ├── Select/
│   │   │   ├── Select.tsx
│   │   │   └── Select.module.css
│   │   │
│   │   ├── Textarea/
│   │   │   ├── Textarea.tsx
│   │   │   └── Textarea.module.css
│   │   │
│   │   ├── Checkbox/
│   │   │   ├── Checkbox.tsx
│   │   │   └── Checkbox.module.css
│   │   │
│   │   └── Button/
│   │       ├── Button.tsx
│   │       └── Button.module.css
│   │
│   └── molecules/
│       └── FormField/
│           ├── FormField.tsx
│           └── FormField.module.css
│
├── features/
│   └── lead/
│       ├── config/
│       │   └── leadFormConfig.ts
│       │
│       ├── types/
│       │   └── leadForm.types.ts
│       │
│       ├── validation/
│       │   └── validateLeadForm.ts
│       │
│       ├── LeadForm.tsx
│       ├── LeadForm.module.css
│       └── LeadPage.tsx
│
├── App.tsx
├── main.tsx
└── index.css
Design System
Design Tokens

Design tokens are located in:

src/design-system/tokens/tokens.css

The tokens include:

Colors
Spacing
Typography
Breakpoints
Atoms

Reusable controls are located in:

src/design-system/atoms/

The form uses the following atoms:

TextInput
Select
Textarea
Checkbox
Button

The atoms are reusable and do not contain lead-specific business rules or validation logic.

Field Molecule

The field molecule is located in:

src/design-system/molecules/FormField/

FormField combines:

Label
Control
Hint
Error
Dynamic Form

The lead form is located in:

src/features/lead/LeadForm.tsx

The form is rendered from a typed configuration instead of hardcoding each field.

The configuration is located in:

src/features/lead/config/leadFormConfig.ts

Each field configuration contains properties such as:

name
type
label
validations
condition
layout

Adding a new field can be done by adding a new configuration entry.

Validation

Validation rules are centralized in:

src/features/lead/validation/validateLeadForm.ts

The validation function receives:

form config + current form values

and returns:

form errors

Validation is performed:

On field blur
On form submit

The validation supports:

Required fields
Valid email format
10-digit phone number
Maximum character length

Hidden conditional fields are not validated.

Responsive Layout

The responsive layout is handled by:

src/features/lead/LeadForm.module.css
Desktop

For screens above 1024px:

Two-column layout
Full Name and Email appear on the same row
Notes spans the full width
Consent spans the full width
Submit button aligns with the form
Tablet

Tablet uses the single-column layout.

Mobile

For screens below 768px:

Single-column layout
Inputs use the full available width
Submit button remains reachable at the bottom
Labels and validation errors remain readable
Content does not overflow horizontally
Form Fields

The form contains:

Full Name
Email
Lead Type
Company Name
Phone
Notes
Consent

Company Name is displayed only when Lead Type is set to Company.

Submission

When the form is valid:

The form is submitted successfully
Submitted values are displayed on the page
The submit button changes to Submitted ✓
The submit button becomes disabled

No backend integration is included because backend functionality is outside the scope of this assignment.

Out of Scope

The following are intentionally not included:

Backend
Authentication
Third-party form libraries
Component libraries
Storybook
Additional unnecessary field types

### Bas ek cheez change karna

Is line:

```bash
git clone https://github.com/MdAdnan21/vymo_dynamic_Form.git

And:

cd vymo_dynamic_Form


Then:

git add README.md
git commit -m "docs: add README"
git push

