import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import ContactSection from "./components/ContactSection";
import ProjectsSection from "./components/ProjectsSection";
import { getProjects } from "./services/projectService";
import { sendContactMessage } from "./services/contactService";

jest.mock("./services/projectService", () => ({
  getProjects: jest.fn(),
}));

jest.mock("./services/contactService", () => ({
  sendContactMessage: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
  getProjects.mockResolvedValue({ data: [] });
  sendContactMessage.mockResolvedValue({});
});

test("renders portfolio sections", async () => {
  render(<App />);

  expect(await screen.findByRole("heading", { level: 1, name: /Amar WADE/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /^Formations$/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /Certifications/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /Expériences/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /Compétences/i })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { level: 3, name: /Langages de programmation/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /Projets/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /Contacts/i })).toBeInTheDocument();
  expect(screen.getByText(/stage assistant ingénieur de 8 semaines/i)).toBeInTheDocument();
  expect(screen.getByText(/Juin – juillet 2025/)).toBeInTheDocument();
  expect(screen.getByText(/Machine Learning A-Z/)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /LinkedIn/i })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/amar-wade-dev"
  );
});

test("validates and submits the contact form", async () => {
  render(<ContactSection />);

  await userEvent.click(screen.getByRole("button", { name: /Envoyer le message/i }));

  expect(screen.getByText(/Le nom est requis/i)).toBeInTheDocument();
  expect(screen.getByText(/L'email est requis/i)).toBeInTheDocument();
  expect(screen.getByText(/Le sujet est requis/i)).toBeInTheDocument();
  expect(screen.getByText(/Le message est requis/i)).toBeInTheDocument();

  await userEvent.type(screen.getByLabelText(/Nom complet/i), "Amar Wade");
  await userEvent.type(screen.getByLabelText(/Adresse e-mail/i), "amar@example.com");
  await userEvent.type(screen.getByLabelText(/Sujet/i), "Projet de stage");
  await userEvent.type(screen.getByLabelText(/Message/i), "Bonjour, je souhaite discuter d'un projet.");

  await userEvent.click(screen.getByRole("button", { name: /Envoyer le message/i }));

  await waitFor(() => {
    expect(sendContactMessage).toHaveBeenCalledWith({
      name: "Amar Wade",
      email: "amar@example.com",
      subject: "Projet de stage",
      message: "Bonjour, je souhaite discuter d'un projet.",
    });
  });

  expect(await screen.findByText(/Message envoyé avec succès/i)).toBeInTheDocument();
});

test("loads projects and filters by technology", async () => {
  getProjects.mockResolvedValue({
    data: [
      { id: "proj-1", title: "Projet Java", description: "API Spring Boot", tech: "Java, Spring Boot" },
      { id: "proj-2", title: "Projet React", description: "Frontend React", tech: "React, JavaScript" },
    ],
  });

  render(<ProjectsSection />);

  expect(screen.getByText(/Chargement des projets/i)).toBeInTheDocument();
  expect(await screen.findByText(/Projet Java/i)).toBeInTheDocument();

  await userEvent.click(screen.getByRole("button", { name: /React/i }));

  await waitFor(() => {
    expect(screen.getByText(/Projet React/i)).toBeInTheDocument();
  });
  expect(screen.queryByText(/Projet Java/i)).not.toBeInTheDocument();
});

test("retries loading projects without reloading the page", async () => {
  getProjects
    .mockRejectedValueOnce(new Error("API unavailable"))
    .mockResolvedValueOnce({
      data: [
        { id: "proj-1", title: "Projet Java", description: "API Spring Boot", tech: "Java, Spring Boot" },
      ],
    });

  render(<ProjectsSection />);

  expect(await screen.findByText(/Impossible de récupérer les projets/i)).toBeInTheDocument();
  await userEvent.click(screen.getByRole("button", { name: /Réessayer/i }));

  expect(await screen.findByText(/Projet Java/i)).toBeInTheDocument();
  expect(getProjects).toHaveBeenCalledTimes(2);
});
