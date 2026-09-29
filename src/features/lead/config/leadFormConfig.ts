import type { FormFieldConfig } from "../types/leadForm.types";

export const leadFormConfig: FormFieldConfig[] = [
  {
    name: "fullName",
    type: "text",
    label: "Full Name",
    validations: {
      required: true,
    },
  },

  {
    name: "email",
    type: "email",
    label: "Email",
    validations: {
      required: true,
      email: true,
    },
  },

  {
    name: "leadType",
    type: "select",
    label: "Lead Type",
    options: [
      {
        label: "Individual",
        value: "individual",
      },
      {
        label: "Company",
        value: "company",
      },
    ],
    validations: {
      required: true,
    },
  },

  {
    name: "companyName",
    type: "text",
    label: "Company Name",
    condition: {
      field: "leadType",
      value: "company",
    },
    validations: {
      required: true,
    },
  },

  {
    name: "phone",
    type: "text",
    label: "Phone",
    validations: {
      required: true,
      phone: true,
    },
  },

  {
    name: "notes",
    type: "textarea",
    label: "Notes",
    layout: "full",
    validations: {
      maxLength: 200,
    },
  },

  {
    name: "consent",
    type: "checkbox",
    label: "I agree to be contacted",
    layout: "full",
    validations: {
      required: true,
    },
  },
];