export const Menus = [
  {
    title: "Dashboard",
    icon: "material-symbols-light:dashboard-outline",
    href: "/",
  },
  { title: "Add Member", icon: "ic:round-person-add", href: "/add-member" },
  {
    title: "Add Staff",
    icon: "fluent:person-add-20-regular",
    href: "/add-staff",
  },
  {
    title: "Member List",
    icon: "fluent:text-bullet-list-square-person-32-filled",
    href: "/member-list",
  },
  {
    title: "Staff List",
    icon: "material-symbols-light:list-alt-check-outline",
    href: "/staff-list",
  },
  { title: "Batch", icon: "bi:people", href: "/batch" },
  { title: "Attendance", icon: "heroicons:newspaper", href: "/attendance" },
  { title: "Payments", icon: "codicon:credit-card", href: "/payments" },
  { title: "Plans", icon: "solar:clipboard-outline", href: "/plans" },
  { title: "SMS", icon: "subway:sms-5", href: "/sms" },
  { title: "Expenses", icon: "uil:bill", href: "/expenses" },
  { title: "Reports", icon: "carbon:report-data", href: "/reports" },
  {
    title: "Logout",
    icon: "material-symbols:logout",
    href: "/logout",
    gap: true,
  },
];

export const formFields = [
  {
    section: "Personal Information",
    fields: [
      {
        type: "text",
        placeholder: "Enter your full name",
        label: "Full Name*",
      },
      {
        type: "file",
        placeholder: "Upload a profile picture (maximum 2MB)",
        label: "Profile Picture*",
      },
      // {
      //   type: "radio",
      //   name: "gender",
      //   options: ["Male", "Female"],
      //   label: "Gender*",
      // },
      // {
      //   type: "radio",
      //   name: "status",
      //   options: ["Single", "Married"],
      //   label: "Status*",
      // },
    ],
  },
  {
    section: "Plan Details",
    fields: [
      { type: "select", placeholder: "Select Plan", label: "Select Plan" },
      { type: "text", placeholder: "Total Amount", label: "Plan Amount" },
      { type: "date", placeholder: "Select Date", label: "Start Date" },
      { type: "date", placeholder: "Plan End Date", label: "Expiry Date" },
      {
        type: "select",
        placeholder: "Select Your Payment Method",
        label: "Payment Method",
      },
      {
        type: "date",
        placeholder: "Select Date",
        label: "Due Amount Reminder",
      },
      {
        type: "text",
        placeholder: "2023-05-25",
        label: "Bill Date",
        readOnly: true,
      },
    ],
  },
];

export const rightFormFields = [
  {
    heading: "Contact Information",
    fields: [
      {
        label: "Contact",
        type: "text",
        placeholder: "Contact",
        required: true,
      },
      {
        label: "Address",
        type: "text",
        placeholder: "Address",
        required: true,
      },
      {
        type: "radio",
        name: "Batch",
        options: ["Morning", "Evening"],
        label: "Batch*",
        required: true,
      },
      {
        label: "Email Id*",
        type: "email",
        placeholder: "Enter Email Id",
        required: true,
      },
      {
        label: "Marriage Anniversary",
        type: "date",
        placeholder: "Select Date",
        required: false,
      },
    ],
  },
];
