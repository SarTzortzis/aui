import { column } from "ui-kit";

export const COUNTRIES = [
  { label: "Greece", value: "gr" },
  { label: "Germany", value: "de" },
  { label: "France", value: "fr" },
  { label: "Italy", value: "it" },
  { label: "Spain", value: "es" },
];

export const STATUS_OPTIONS = [
  { label: "Draft", value: "draft" },
  { label: "Published", value: "published" },
  { label: "Archived", value: "archived" },
];

export const USERS = [
  {
    id: 1,
    name: "John Doe",
    email: "john@test.com",
    role: "Administrator",
    department: "IT",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@test.com",
    role: "Manager",
    department: "Sales",
    status: "Active",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@test.com",
    role: "Developer",
    department: "Engineering",
    status: "Vacation",
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily@test.com",
    role: "HR",
    department: "Human Resources",
    status: "Inactive",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david@test.com",
    role: "Developer",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 6,
    name: "Sarah Miller",
    email: "sarah@test.com",
    role: "Designer",
    department: "Design",
    status: "Active",
  },
  {
    id: 7,
    name: "Chris Taylor",
    email: "chris@test.com",
    role: "Developer",
    department: "Engineering",
    status: "Vacation",
  },
  {
    id: 8,
    name: "Laura Anderson",
    email: "laura@test.com",
    role: "QA Engineer",
    department: "Quality Assurance",
    status: "Active",
  },
  {
    id: 9,
    name: "James Thomas",
    email: "james@test.com",
    role: "Manager",
    department: "Operations",
    status: "Inactive",
  },
  {
    id: 10,
    name: "Sophia Jackson",
    email: "sophia@test.com",
    role: "Support",
    department: "Customer Support",
    status: "Active",
  },
  {
    id: 11,
    name: "Daniel White",
    email: "daniel@test.com",
    role: "Developer",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 12,
    name: "Olivia Harris",
    email: "olivia@test.com",
    role: "Business Analyst",
    department: "Business",
    status: "Vacation",
  },
  {
    id: 13,
    name: "Matthew Martin",
    email: "matthew@test.com",
    role: "Administrator",
    department: "IT",
    status: "Active",
  },
  {
    id: 14,
    name: "Emma Thompson",
    email: "emma@test.com",
    role: "Designer",
    department: "Design",
    status: "Inactive",
  },
  {
    id: 15,
    name: "Andrew Garcia",
    email: "andrew@test.com",
    role: "Developer",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 16,
    name: "Mia Martinez",
    email: "mia@test.com",
    role: "HR",
    department: "Human Resources",
    status: "Active",
  },
  {
    id: 17,
    name: "Joshua Robinson",
    email: "joshua@test.com",
    role: "QA Engineer",
    department: "Quality Assurance",
    status: "Vacation",
  },
  {
    id: 18,
    name: "Charlotte Clark",
    email: "charlotte@test.com",
    role: "Manager",
    department: "Finance",
    status: "Active",
  },
  {
    id: 19,
    name: "Benjamin Lewis",
    email: "ben@test.com",
    role: "Developer",
    department: "Engineering",
    status: "Inactive",
  },
  {
    id: 20,
    name: "Amelia Lee",
    email: "amelia@test.com",
    role: "Support",
    department: "Customer Support",
    status: "Active",
  },
  {
    id: 21,
    name: "Lucas Walker",
    email: "lucas@test.com",
    role: "Administrator",
    department: "IT",
    status: "Vacation",
  },
  {
    id: 22,
    name: "Harper Hall",
    email: "harper@test.com",
    role: "Business Analyst",
    department: "Business",
    status: "Active",
  },
  {
    id: 23,
    name: "Henry Allen",
    email: "henry@test.com",
    role: "Developer",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 24,
    name: "Evelyn Young",
    email: "evelyn@test.com",
    role: "Designer",
    department: "Design",
    status: "Inactive",
  },
  {
    id: 25,
    name: "Alexander King",
    email: "alex@test.com",
    role: "Manager",
    department: "Sales",
    status: "Active",
  },
  {
    id: 26,
    name: "Abigail Wright",
    email: "abigail@test.com",
    role: "Support",
    department: "Customer Support",
    status: "Vacation",
  },
  {
    id: 27,
    name: "Michael Scott",
    email: "michael@test.com",
    role: "Regional Manager",
    department: "Sales",
    status: "Active",
  },
  {
    id: 28,
    name: "Pam Beesly",
    email: "pam@test.com",
    role: "Receptionist",
    department: "Administration",
    status: "Active",
  },
  {
    id: 29,
    name: "Jim Halpert",
    email: "jim@test.com",
    role: "Sales Executive",
    department: "Sales",
    status: "Active",
  },
  {
    id: 30,
    name: "Dwight Schrute",
    email: "dwight@test.com",
    role: "Assistant Regional Manager",
    department: "Sales",
    status: "Active",
  },
];

export const USER_COLUMNS = [
  column("name", "Name", {
    sortable: true,
  }),

  column("email", "Email", {
    width: "280px",
    sortable: true,
  }),

  column("role", "Role", {
    sortable: true,
  }),

  column("department", "Department", {
    sortable: true,
  }),

  column("status", "Status", {
    sortable: true,
  }),
  column("status", "Status", {
    sortable: true,
    formatter: (value) => {
      switch (value) {
        case "Active":
          return "🟢 Active";

        case "Inactive":
          return "🔴 Inactive";

        case "Vacation":
          return "🏖️ Vacation";

        default:
          return value;
      }
    },
  }),
];
