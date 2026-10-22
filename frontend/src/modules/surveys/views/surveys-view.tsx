"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { PageBreadcrumb } from "@/shared/components/layout/page-breadcrumb";
import { WorkspacePage } from "@/shared/components/layout/workspace-page";
import { SurveysTable } from "../components/surveys-table";
import {
  CREATE_SURVEY_ACTION_LABEL,
  CREATE_SURVEY_PATH,
  SURVEYS_BREADCRUMB,
  SURVEYS_PAGE_DESCRIPTION,
  SURVEYS_PAGE_TITLE,
} from "../constants/survey-routes.constants";
import { useSurveys } from "../hooks/use-surveys";

export function SurveysView() {
  const { surveys, isLoading, hasError } = useSurveys();

  return (
    <div className="space-y-4">
      <PageBreadcrumb items={SURVEYS_BREADCRUMB} />
      <WorkspacePage
        title={SURVEYS_PAGE_TITLE}
        description={SURVEYS_PAGE_DESCRIPTION}
        actions={
          <Link href={CREATE_SURVEY_PATH} className={buttonVariants()}>
            <Plus aria-hidden="true" />
            {CREATE_SURVEY_ACTION_LABEL}
          </Link>
        }
      >
        <SurveysTable surveys={surveys} isLoading={isLoading} hasError={hasError} />
      </WorkspacePage>
    </div>
  );
}
