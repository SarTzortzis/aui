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
