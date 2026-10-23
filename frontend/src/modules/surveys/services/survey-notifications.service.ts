import type { SurveyNotification } from "../types/survey-notification.types";
import { SAMPLE_SURVEY_NOTIFICATIONS } from "../constants/sample-survey-notifications.constants";

// Datos de demostración para esta rama visual.
export const surveyNotificationsService = {
  getNotifications: async (): Promise<SurveyNotification[]> => SAMPLE_SURVEY_NOTIFICATIONS,
};
