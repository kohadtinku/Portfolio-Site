// Example projects: edit freely. Leave github/live as "" until real URLs exist; no "live" claim is shown without a URL.
// status: "completed" | "in-progress"
export const projects = [
  {
    slug: "ecommerce-app", title: "E-commerce Application", category: "Full-stack", status: "completed",
    problem: "Shoppers need to find products quickly and check out smoothly, while admins need to manage catalogue and orders.",
    description: "A MERN storefront with product browsing, a cart and checkout flow, and an admin dashboard for managing products and orders.",
    features: ["Product listing and search", "Categories and filters", "Cart and checkout flow", "User authentication", "Order management", "Admin dashboard", "Database integration"],
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT"],
    architecture: [["Client", "React SPA with Redux Toolkit for cart and session state."], ["API", "Express REST API with JWT auth and role checks."], ["Data", "MongoDB collections via Mongoose: users, products, orders."]],
    image: "/images/ecommerce.svg", screenshots: ["/images/ecommerce-2.svg"], github: "", live: "",
  },
  {
    slug: "task-manager", title: "Task Management Application", category: "Full-stack", status: "completed",
    problem: "Individuals and small teams need a simple place to track work by status and priority.",
    description: "A task tracker with authentication, full CRUD, status and priority tagging, and a statistics dashboard.",
    features: ["Authentication", "Create, read, update and delete tasks", "Task status and priority", "Dashboard statistics", "Responsive interface"],
    tech: ["React", "Material UI", "Node.js", "Express", "MongoDB"],
    architecture: [["Client", "React with Material UI components and Context API."], ["API", "Express routes with JWT-protected task endpoints."], ["Data", "Mongoose models for users and tasks."]],
    image: "/images/task-manager.svg", screenshots: ["/images/task-manager-2.svg"], github: "", live: "",
  },
  {
    slug: "education-discovery", title: "Education Discovery Platform", category: "Frontend", status: "in-progress",
    problem: "Students struggle to compare colleges and courses across scattered sources.",
    description: "A discovery platform for searching and filtering colleges, with detail pages and course information.",
    features: ["College discovery", "Search and filtering", "College detail pages", "Course information", "Responsive UI"],
    tech: ["Next.js", "Material UI", "Node.js", "MongoDB"],
    architecture: [["Client", "Next.js App Router with server-rendered detail pages."], ["API", "REST endpoints for search and filters."], ["Data", "MongoDB collections for colleges and courses."]],
    image: "/images/education.svg", screenshots: ["/images/education-2.svg"], github: "", live: "",
  },
  {
    slug: "analytics-dashboard", title: "Business Analytics Dashboard", category: "Dashboard", status: "in-progress",
    problem: "Teams need sales and KPI data in one filterable view instead of spreadsheets.",
    description: "A dashboard with KPI summary cards, filters and interactive charts for sales data.",
    features: ["Sales and KPI visualizations", "Filters and summary cards", "Interactive charts"],
    tech: ["React", "Material UI", "Node.js", "Express", "MySQL", "Sequelize"],
    architecture: [["Client", "React dashboard with chart components."], ["API", "Express aggregation endpoints."], ["Data", "MySQL accessed through Sequelize."]],
    image: "/images/analytics.svg", screenshots: ["/images/analytics-2.svg"], github: "", live: "",
  },
];
export const getProject = (slug) => projects.find((p) => p.slug === slug);
