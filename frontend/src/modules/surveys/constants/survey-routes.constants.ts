import type { BreadcrumbEntry } from "@/shared/types/breadcrumb-entry.types";

export const SURVEYS_HOME_PATH = "/backoffice";
export const SURVEYS_PATH = "/backoffice/reports/surveys";
export const CREATE_SURVEY_PATH = "/backoffice/reports/surveys/new";

export const SURVEYS_PAGE_TITLE = "Encuesta de empleabilidad";
export const SURVEYS_PAGE_DESCRIPTION =
  "Cree encuestas de preguntas cerradas para conocer la situación laboral de los titulados.";
export const CREATE_SURVEY_ACTION_LABEL = "Crear encuesta";

export const SURVEYS_TABLE_COLUMNS = ["Encuesta", "Carrera", "Gestión", "Vigencia", "Preguntas", "Estado"] as const;

export const SURVEYS_BREADCRUMB: BreadcrumbEntry[] = [
  { label: "Inicio", href: SURVEYS_HOME_PATH },
  { label: "Reportes Analíticos" },
  { label: SURVEYS_PAGE_TITLE },
];

export const CREATE_SURVEY_BREADCRUMB: BreadcrumbEntry[] = [
  { label: "Inicio", href: SURVEYS_HOME_PATH },
  { label: "Reportes Analíticos" },
  { label: SURVEYS_PAGE_TITLE, href: SURVEYS_PATH },
  { label: "Crear encuesta" },
];
