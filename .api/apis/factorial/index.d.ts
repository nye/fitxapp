import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Reads all Credentials
     *
     * @summary Reads all Credentials
     */
    getApi20241001ResourcesApi_publicCredentials(): Promise<FetchResponse<200, types.GetApi20241001ResourcesApiPublicCredentialsResponse200>>;
    /**
     * Reads all Webhook subscriptions
     *
     * @summary Reads all Webhook subscriptions
     */
    getApi20241001ResourcesApi_publicWebhook_subscriptions(metadata: types.GetApi20241001ResourcesApiPublicWebhookSubscriptionsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesApiPublicWebhookSubscriptionsResponse200>>;
    /**
     * Creates a Webhook subscription
     *
     * @summary Creates a Webhook subscription
     */
    postApi20241001ResourcesApi_publicWebhook_subscriptions(body: types.PostApi20241001ResourcesApiPublicWebhookSubscriptionsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesApiPublicWebhookSubscriptionsResponse201>>;
    /**
     * Reads a single Webhook subscription
     *
     * @summary Reads a single Webhook subscription
     */
    getApi20241001ResourcesApi_publicWebhook_subscriptionsId(metadata: types.GetApi20241001ResourcesApiPublicWebhookSubscriptionsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesApiPublicWebhookSubscriptionsIdResponse200>>;
    /**
     * Updates a Webhook subscription
     *
     * @summary Updates a Webhook subscription
     */
    putApi20241001ResourcesApi_publicWebhook_subscriptionsId(body: types.PutApi20241001ResourcesApiPublicWebhookSubscriptionsIdBodyParam, metadata: types.PutApi20241001ResourcesApiPublicWebhookSubscriptionsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesApiPublicWebhookSubscriptionsIdResponse200>>;
    /**
     * Deletes a Webhook subscription
     *
     * @summary Deletes a Webhook subscription
     */
    deleteApi20241001ResourcesApi_publicWebhook_subscriptionsId(metadata: types.DeleteApi20241001ResourcesApiPublicWebhookSubscriptionsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesApiPublicWebhookSubscriptionsIdResponse200>>;
    /**
     * Reads all Answers
     *
     * @summary Reads all Answers
     */
    getApi20241001ResourcesAtsAnswers(metadata?: types.GetApi20241001ResourcesAtsAnswersMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsAnswersResponse200>>;
    /**
     * Reads a single Answer
     *
     * @summary Reads a single Answer
     */
    getApi20241001ResourcesAtsAnswersId(metadata: types.GetApi20241001ResourcesAtsAnswersIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsAnswersIdResponse200>>;
    /**
     * Reads all Applications
     *
     * @summary Reads all Applications
     */
    getApi20241001ResourcesAtsApplications(metadata?: types.GetApi20241001ResourcesAtsApplicationsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsApplicationsResponse200>>;
    /**
     * Creates an Application
     *
     * @summary Creates an Application
     */
    postApi20241001ResourcesAtsApplications(body: types.PostApi20241001ResourcesAtsApplicationsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesAtsApplicationsResponse201>>;
    /**
     * Reads a single Application
     *
     * @summary Reads a single Application
     */
    getApi20241001ResourcesAtsApplicationsId(metadata: types.GetApi20241001ResourcesAtsApplicationsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsApplicationsIdResponse200>>;
    /**
     * Updates an Application
     *
     * @summary Updates an Application
     */
    putApi20241001ResourcesAtsApplicationsId(body: types.PutApi20241001ResourcesAtsApplicationsIdBodyParam, metadata: types.PutApi20241001ResourcesAtsApplicationsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesAtsApplicationsIdResponse200>>;
    /**
     * Deletes an Application
     *
     * @summary Deletes an Application
     */
    deleteApi20241001ResourcesAtsApplicationsId(metadata: types.DeleteApi20241001ResourcesAtsApplicationsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesAtsApplicationsIdResponse200>>;
    /**
     * Reads all Application phases
     *
     * @summary Reads all Application phases
     */
    getApi20241001ResourcesAtsApplication_phases(metadata?: types.GetApi20241001ResourcesAtsApplicationPhasesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsApplicationPhasesResponse200>>;
    /**
     * Reads a single Application phase
     *
     * @summary Reads a single Application phase
     */
    getApi20241001ResourcesAtsApplication_phasesId(metadata: types.GetApi20241001ResourcesAtsApplicationPhasesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsApplicationPhasesIdResponse200>>;
    /**
     * Fetches candidates data from Factorial. When using administrator-level API Credentials,
     * all candidates associated with a company will be returned. When using non-admin level
     * API credentials, only candidates that applied to a job for which the user is a hiring
     * manager will be returned.
     *
     * @summary Reads all Candidates
     */
    getApi20241001ResourcesAtsCandidates(metadata?: types.GetApi20241001ResourcesAtsCandidatesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsCandidatesResponse200>>;
    /**
     * Creates candidates related to a particular company in an ATS
     *
     * @summary Creates a Candidate
     */
    postApi20241001ResourcesAtsCandidates(body: types.PostApi20241001ResourcesAtsCandidatesBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesAtsCandidatesResponse201>>;
    /**
     * Fetches candidates data from Factorial. When using administrator-level API Credentials,
     * all candidates associated with a company will be returned. When using non-admin level
     * API credentials, only candidates that applied to a job for which the user is a hiring
     * manager will be returned.
     *
     * @summary Reads a single Candidate
     */
    getApi20241001ResourcesAtsCandidatesId(metadata: types.GetApi20241001ResourcesAtsCandidatesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsCandidatesIdResponse200>>;
    /**
     * Updates ATS Candidates data
     *
     * @summary Updates a Candidate
     */
    putApi20241001ResourcesAtsCandidatesId(body: types.PutApi20241001ResourcesAtsCandidatesIdBodyParam, metadata: types.PutApi20241001ResourcesAtsCandidatesIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesAtsCandidatesIdResponse200>>;
    /**
     * Deletes a candidate from the ATS
     *
     * @summary Deletes a Candidate
     */
    deleteApi20241001ResourcesAtsCandidatesId(metadata: types.DeleteApi20241001ResourcesAtsCandidatesIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesAtsCandidatesIdResponse200>>;
    /**
     * Reads all Candidate sources
     *
     * @summary Reads all Candidate sources
     */
    getApi20241001ResourcesAtsCandidate_sources(metadata?: types.GetApi20241001ResourcesAtsCandidateSourcesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsCandidateSourcesResponse200>>;
    /**
     * Reads a single Candidate source
     *
     * @summary Reads a single Candidate source
     */
    getApi20241001ResourcesAtsCandidate_sourcesId(metadata: types.GetApi20241001ResourcesAtsCandidateSourcesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsCandidateSourcesIdResponse200>>;
    /**
     * Reads all Evaluation forms
     *
     * @summary Reads all Evaluation forms
     */
    getApi20241001ResourcesAtsEvaluation_forms(metadata?: types.GetApi20241001ResourcesAtsEvaluationFormsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsEvaluationFormsResponse200>>;
    /**
     * Reads a single Evaluation form
     *
     * @summary Reads a single Evaluation form
     */
    getApi20241001ResourcesAtsEvaluation_formsId(metadata: types.GetApi20241001ResourcesAtsEvaluationFormsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsEvaluationFormsIdResponse200>>;
    /**
     * Save an evaluation form as a template.
     *
     * @summary Save as templates an Evaluation form
     */
    postApi20241001ResourcesAtsEvaluation_formsSave_as_template(body: types.PostApi20241001ResourcesAtsEvaluationFormsSaveAsTemplateBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesAtsEvaluationFormsSaveAsTemplateResponse200>>;
    /**
     * This endpoint retrieves all feedbacks associated with a candidate's applications.
     *
     * @summary Reads all Feedbacks
     */
    getApi20241001ResourcesAtsFeedbacks(metadata?: types.GetApi20241001ResourcesAtsFeedbacksMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsFeedbacksResponse200>>;
    /**
     * This endpoint allows to create new feedback entries for candidates.
     *
     * @summary Creates a Feedback
     */
    postApi20241001ResourcesAtsFeedbacks(body: types.PostApi20241001ResourcesAtsFeedbacksBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesAtsFeedbacksResponse201>>;
    /**
     * This endpoint retrieves all feedbacks associated with a candidate's applications.
     *
     * @summary Reads a single Feedback
     */
    getApi20241001ResourcesAtsFeedbacksId(metadata: types.GetApi20241001ResourcesAtsFeedbacksIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsFeedbacksIdResponse200>>;
    /**
     * This endpoint allows to update existing feedback entries associated with candidates'
     * applications.
     *
     * @summary Updates a Feedback
     */
    putApi20241001ResourcesAtsFeedbacksId(body: types.PutApi20241001ResourcesAtsFeedbacksIdBodyParam, metadata: types.PutApi20241001ResourcesAtsFeedbacksIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesAtsFeedbacksIdResponse200>>;
    putApi20241001ResourcesAtsFeedbacksId(metadata: types.PutApi20241001ResourcesAtsFeedbacksIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesAtsFeedbacksIdResponse200>>;
    /**
     * This endpoint allows to delete a specific feedback entry associated with a candidate's
     * application.
     *
     * @summary Deletes a Feedback
     */
    deleteApi20241001ResourcesAtsFeedbacksId(metadata: types.DeleteApi20241001ResourcesAtsFeedbacksIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesAtsFeedbacksIdResponse200>>;
    /**
     * Reads all Hiring stages
     *
     * @summary Reads all Hiring stages
     */
    getApi20241001ResourcesAtsHiring_stages(metadata?: types.GetApi20241001ResourcesAtsHiringStagesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsHiringStagesResponse200>>;
    /**
     * Reads a single Hiring stage
     *
     * @summary Reads a single Hiring stage
     */
    getApi20241001ResourcesAtsHiring_stagesId(metadata: types.GetApi20241001ResourcesAtsHiringStagesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsHiringStagesIdResponse200>>;
    /**
     * Reads all Job postings
     *
     * @summary Reads all Job postings
     */
    getApi20241001ResourcesAtsJob_postings(metadata?: types.GetApi20241001ResourcesAtsJobPostingsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsJobPostingsResponse200>>;
    /**
     * Create a new job posting.
     *
     * @summary Creates a Job posting
     */
    postApi20241001ResourcesAtsJob_postings(body: types.PostApi20241001ResourcesAtsJobPostingsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesAtsJobPostingsResponse201>>;
    /**
     * Reads a single Job posting
     *
     * @summary Reads a single Job posting
     */
    getApi20241001ResourcesAtsJob_postingsId(metadata: types.GetApi20241001ResourcesAtsJobPostingsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsJobPostingsIdResponse200>>;
    /**
     * Update a job posting.
     *
     * @summary Updates a Job posting
     */
    putApi20241001ResourcesAtsJob_postingsId(body: types.PutApi20241001ResourcesAtsJobPostingsIdBodyParam, metadata: types.PutApi20241001ResourcesAtsJobPostingsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesAtsJobPostingsIdResponse200>>;
    /**
     * Delete a job posting.
     *
     * @summary Deletes a Job posting
     */
    deleteApi20241001ResourcesAtsJob_postingsId(metadata: types.DeleteApi20241001ResourcesAtsJobPostingsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesAtsJobPostingsIdResponse200>>;
    /**
     * Duplicate an existing job posting.
     *
     * @summary Duplicates a Job posting
     */
    postApi20241001ResourcesAtsJob_postingsDuplicate(body: types.PostApi20241001ResourcesAtsJobPostingsDuplicateBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesAtsJobPostingsDuplicateResponse200>>;
    /**
     * Reads all Messages
     *
     * @summary Reads all Messages
     */
    getApi20241001ResourcesAtsMessages(metadata: types.GetApi20241001ResourcesAtsMessagesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsMessagesResponse200>>;
    /**
     * Creates a Message
     *
     * @summary Creates a Message
     */
    postApi20241001ResourcesAtsMessages(body: types.PostApi20241001ResourcesAtsMessagesBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesAtsMessagesResponse201>>;
    /**
     * Reads a single Message
     *
     * @summary Reads a single Message
     */
    getApi20241001ResourcesAtsMessagesId(metadata: types.GetApi20241001ResourcesAtsMessagesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsMessagesIdResponse200>>;
    /**
     * Reads all Rejection reasons
     *
     * @summary Reads all Rejection reasons
     */
    getApi20241001ResourcesAtsRejection_reasons(metadata?: types.GetApi20241001ResourcesAtsRejectionReasonsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsRejectionReasonsResponse200>>;
    /**
     * Reads a single Rejection reason
     *
     * @summary Reads a single Rejection reason
     */
    getApi20241001ResourcesAtsRejection_reasonsId(metadata: types.GetApi20241001ResourcesAtsRejectionReasonsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAtsRejectionReasonsIdResponse200>>;
    /**
     * Reads all Break configurations
     *
     * @summary Reads all Break configurations
     */
    getApi20241001ResourcesAttendanceBreak_configurations(metadata?: types.GetApi20241001ResourcesAttendanceBreakConfigurationsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAttendanceBreakConfigurationsResponse200>>;
    /**
     * Creates a Break configuration
     *
     * @summary Creates a Break configuration
     */
    postApi20241001ResourcesAttendanceBreak_configurations(body: types.PostApi20241001ResourcesAttendanceBreakConfigurationsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesAttendanceBreakConfigurationsResponse201>>;
    /**
     * Reads a single Break configuration
     *
     * @summary Reads a single Break configuration
     */
    getApi20241001ResourcesAttendanceBreak_configurationsId(metadata: types.GetApi20241001ResourcesAttendanceBreakConfigurationsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAttendanceBreakConfigurationsIdResponse200>>;
    /**
     * Updates a Break configuration
     *
     * @summary Updates a Break configuration
     */
    putApi20241001ResourcesAttendanceBreak_configurationsId(body: types.PutApi20241001ResourcesAttendanceBreakConfigurationsIdBodyParam, metadata: types.PutApi20241001ResourcesAttendanceBreakConfigurationsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesAttendanceBreakConfigurationsIdResponse200>>;
    /**
     * Get information about estimated data for a given date range and a bunch of employees.
     *
     * @summary Reads all Estimated times
     */
    getApi20241001ResourcesAttendanceEstimated_times(metadata: types.GetApi20241001ResourcesAttendanceEstimatedTimesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAttendanceEstimatedTimesResponse200>>;
    /**
     * Get information about estimated data for a given date range and a bunch of employees.
     *
     * @summary Reads a single Estimated time
     */
    getApi20241001ResourcesAttendanceEstimated_timesId(metadata: types.GetApi20241001ResourcesAttendanceEstimatedTimesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAttendanceEstimatedTimesIdResponse200>>;
    /**
     * This endpoint retrieves the current open shifts for the specified employee_ids.
     *
     * @summary Reads all Open shifts
     */
    getApi20241001ResourcesAttendanceOpen_shifts(metadata?: types.GetApi20241001ResourcesAttendanceOpenShiftsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAttendanceOpenShiftsResponse200>>;
    /**
     * Reads all Overtime requests
     *
     * @summary Reads all Overtime requests
     */
    getApi20241001ResourcesAttendanceOvertime_requests(metadata: types.GetApi20241001ResourcesAttendanceOvertimeRequestsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAttendanceOvertimeRequestsResponse200>>;
    /**
     * Creates an Overtime request
     *
     * @summary Creates an Overtime request
     */
    postApi20241001ResourcesAttendanceOvertime_requests(body: types.PostApi20241001ResourcesAttendanceOvertimeRequestsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesAttendanceOvertimeRequestsResponse201>>;
    /**
     * Reads a single Overtime request
     *
     * @summary Reads a single Overtime request
     */
    getApi20241001ResourcesAttendanceOvertime_requestsId(metadata: types.GetApi20241001ResourcesAttendanceOvertimeRequestsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAttendanceOvertimeRequestsIdResponse200>>;
    /**
     * Updates an Overtime request
     *
     * @summary Updates an Overtime request
     */
    putApi20241001ResourcesAttendanceOvertime_requestsId(body: types.PutApi20241001ResourcesAttendanceOvertimeRequestsIdBodyParam, metadata: types.PutApi20241001ResourcesAttendanceOvertimeRequestsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesAttendanceOvertimeRequestsIdResponse200>>;
    /**
     * Deletes an Overtime request
     *
     * @summary Deletes an Overtime request
     */
    deleteApi20241001ResourcesAttendanceOvertime_requestsId(metadata: types.DeleteApi20241001ResourcesAttendanceOvertimeRequestsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesAttendanceOvertimeRequestsIdResponse200>>;
    /**
     * Approves an Overtime request
     *
     * @summary Approves an Overtime request
     */
    postApi20241001ResourcesAttendanceOvertime_requestsApprove(body: types.PostApi20241001ResourcesAttendanceOvertimeRequestsApproveBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesAttendanceOvertimeRequestsApproveResponse200>>;
    /**
     * Rejects an Overtime request
     *
     * @summary Rejects an Overtime request
     */
    postApi20241001ResourcesAttendanceOvertime_requestsReject(body: types.PostApi20241001ResourcesAttendanceOvertimeRequestsRejectBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesAttendanceOvertimeRequestsRejectResponse200>>;
    /**
     * Reads all Shifts
     *
     * @summary Reads all Shifts
     */
    getApi20241001ResourcesAttendanceShifts(metadata: types.GetApi20241001ResourcesAttendanceShiftsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAttendanceShiftsResponse200>>;
    /**
     * Creates a Shift
     *
     * @summary Creates a Shift
     */
    postApi20241001ResourcesAttendanceShifts(body: types.PostApi20241001ResourcesAttendanceShiftsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesAttendanceShiftsResponse201>>;
    /**
     * Reads a single Shift
     *
     * @summary Reads a single Shift
     */
    getApi20241001ResourcesAttendanceShiftsId(metadata: types.GetApi20241001ResourcesAttendanceShiftsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAttendanceShiftsIdResponse200>>;
    /**
     * Updates a Shift
     *
     * @summary Updates a Shift
     */
    putApi20241001ResourcesAttendanceShiftsId(body: types.PutApi20241001ResourcesAttendanceShiftsIdBodyParam, metadata: types.PutApi20241001ResourcesAttendanceShiftsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesAttendanceShiftsIdResponse200>>;
    /**
     * Deletes a Shift
     *
     * @summary Deletes a Shift
     */
    deleteApi20241001ResourcesAttendanceShiftsId(metadata: types.DeleteApi20241001ResourcesAttendanceShiftsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesAttendanceShiftsIdResponse200>>;
    /**
     * Autofills a Shift
     *
     * @summary Autofills a Shift
     */
    postApi20241001ResourcesAttendanceShiftsAutofill(body: types.PostApi20241001ResourcesAttendanceShiftsAutofillBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesAttendanceShiftsAutofillResponse200>>;
    /**
     * Given that attendance breaks are enabled, this endpoint ends a break in an open shift.
     *
     * @summary Break ends a Shift
     */
    postApi20241001ResourcesAttendanceShiftsBreak_end(body: types.PostApi20241001ResourcesAttendanceShiftsBreakEndBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesAttendanceShiftsBreakEndResponse200>>;
    /**
     * Given that attendance breaks are enabled, this endpoint starts a break in an open shift.
     *
     * @summary Break starts a Shift
     */
    postApi20241001ResourcesAttendanceShiftsBreak_start(body: types.PostApi20241001ResourcesAttendanceShiftsBreakStartBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesAttendanceShiftsBreakStartResponse200>>;
    /**
     * Use this endpoint to clock in a shift
     *
     * @summary Clocks in a shift
     */
    postApi20241001ResourcesAttendanceShiftsClock_in(body: types.PostApi20241001ResourcesAttendanceShiftsClockInBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesAttendanceShiftsClockInResponse200>>;
    /**
     * Use this endpoint to clock out a shift
     *
     * @summary Clocks out a shift
     */
    postApi20241001ResourcesAttendanceShiftsClock_out(body: types.PostApi20241001ResourcesAttendanceShiftsClockOutBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesAttendanceShiftsClockOutResponse200>>;
    /**
     * Use this endpoint to toggle shift (it will clock in or out)
     *
     * @summary Clock in/out a shift
     */
    postApi20241001ResourcesAttendanceShiftsToggle_clock(body: types.PostApi20241001ResourcesAttendanceShiftsToggleClockBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesAttendanceShiftsToggleClockResponse200>>;
    /**
     * Reads all Worked times
     *
     * @summary Reads all Worked times
     */
    getApi20241001ResourcesAttendanceWorked_times(metadata: types.GetApi20241001ResourcesAttendanceWorkedTimesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesAttendanceWorkedTimesResponse200>>;
    /**
     * Reads all Incidences
     *
     * @summary Reads all Incidences
     */
    getApi20241001ResourcesBookkeepers_managementIncidences(metadata?: types.GetApi20241001ResourcesBookkeepersManagementIncidencesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesBookkeepersManagementIncidencesResponse200>>;
    /**
     * Reads a single Incidence
     *
     * @summary Reads a single Incidence
     */
    getApi20241001ResourcesBookkeepers_managementIncidencesId(metadata: types.GetApi20241001ResourcesBookkeepersManagementIncidencesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesBookkeepersManagementIncidencesIdResponse200>>;
    /**
     * Updates an Incidence
     *
     * @summary Updates an Incidence
     */
    putApi20241001ResourcesBookkeepers_managementIncidencesId(body: types.PutApi20241001ResourcesBookkeepersManagementIncidencesIdBodyParam, metadata: types.PutApi20241001ResourcesBookkeepersManagementIncidencesIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesBookkeepersManagementIncidencesIdResponse200>>;
    /**
     * Reads all Legal entities
     *
     * @summary Reads all Legal entities
     */
    getApi20241001ResourcesCompaniesLegal_entities(metadata?: types.GetApi20241001ResourcesCompaniesLegalEntitiesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesCompaniesLegalEntitiesResponse200>>;
    /**
     * Reads a single Legal entity
     *
     * @summary Reads a single Legal entity
     */
    getApi20241001ResourcesCompaniesLegal_entitiesId(metadata: types.GetApi20241001ResourcesCompaniesLegalEntitiesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesCompaniesLegalEntitiesIdResponse200>>;
    /**
     * Reads all Compensations
     *
     * @summary Reads all Compensations
     */
    getApi20241001ResourcesContractsCompensations(metadata?: types.GetApi20241001ResourcesContractsCompensationsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesContractsCompensationsResponse200>>;
    /**
     * Creates a Compensation
     *
     * @summary Creates a Compensation
     */
    postApi20241001ResourcesContractsCompensations(body: types.PostApi20241001ResourcesContractsCompensationsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesContractsCompensationsResponse201>>;
    /**
     * Reads a single Compensation
     *
     * @summary Reads a single Compensation
     */
    getApi20241001ResourcesContractsCompensationsId(metadata: types.GetApi20241001ResourcesContractsCompensationsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesContractsCompensationsIdResponse200>>;
    /**
     * Updates a Compensation
     *
     * @summary Updates a Compensation
     */
    putApi20241001ResourcesContractsCompensationsId(body: types.PutApi20241001ResourcesContractsCompensationsIdBodyParam, metadata: types.PutApi20241001ResourcesContractsCompensationsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesContractsCompensationsIdResponse200>>;
    /**
     * Deletes a Compensation
     *
     * @summary Deletes a Compensation
     */
    deleteApi20241001ResourcesContractsCompensationsId(metadata: types.DeleteApi20241001ResourcesContractsCompensationsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesContractsCompensationsIdResponse200>>;
    /**
     * Reads all Contract versions
     *
     * @summary Reads all Contract versions
     */
    getApi20241001ResourcesContractsContract_versions(metadata?: types.GetApi20241001ResourcesContractsContractVersionsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesContractsContractVersionsResponse200>>;
    /**
     * Creates a Contract version
     *
     * @summary Creates a Contract version
     */
    postApi20241001ResourcesContractsContract_versions(body: types.PostApi20241001ResourcesContractsContractVersionsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesContractsContractVersionsResponse201>>;
    /**
     * Reads a single Contract version
     *
     * @summary Reads a single Contract version
     */
    getApi20241001ResourcesContractsContract_versionsId(metadata: types.GetApi20241001ResourcesContractsContractVersionsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesContractsContractVersionsIdResponse200>>;
    /**
     * Updates a Contract version
     *
     * @summary Updates a Contract version
     */
    putApi20241001ResourcesContractsContract_versionsId(body: types.PutApi20241001ResourcesContractsContractVersionsIdBodyParam, metadata: types.PutApi20241001ResourcesContractsContractVersionsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesContractsContractVersionsIdResponse200>>;
    /**
     * Deletes a Contract version
     *
     * @summary Deletes a Contract version
     */
    deleteApi20241001ResourcesContractsContract_versionsId(metadata: types.DeleteApi20241001ResourcesContractsContractVersionsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesContractsContractVersionsIdResponse200>>;
    /**
     * Reads all Reference Contracts. The reference contract is the contract that applies
     * today. If no contract applies today, we will return the nearest upcoming contract. If
     * there are no upcoming contracts, we will provide the most recent past contract.
     *
     * @summary Reads all Reference contracts
     */
    getApi20241001ResourcesContractsReference_contracts(metadata?: types.GetApi20241001ResourcesContractsReferenceContractsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesContractsReferenceContractsResponse200>>;
    /**
     * Reads all Taxonomies
     *
     * @summary Reads all Taxonomies
     */
    getApi20241001ResourcesContractsTaxonomies(metadata?: types.GetApi20241001ResourcesContractsTaxonomiesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesContractsTaxonomiesResponse200>>;
    /**
     * Reads a single Taxonomy
     *
     * @summary Reads a single Taxonomy
     */
    getApi20241001ResourcesContractsTaxonomiesId(metadata: types.GetApi20241001ResourcesContractsTaxonomiesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesContractsTaxonomiesIdResponse200>>;
    /**
     * Reads all Fields
     *
     * @summary Reads all Fields
     */
    getApi20241001ResourcesCustom_fieldsFields(metadata?: types.GetApi20241001ResourcesCustomFieldsFieldsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesCustomFieldsFieldsResponse200>>;
    /**
     * Creates a Field
     *
     * @summary Creates a Field
     */
    postApi20241001ResourcesCustom_fieldsFields(body: types.PostApi20241001ResourcesCustomFieldsFieldsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesCustomFieldsFieldsResponse201>>;
    /**
     * Reads a single Field
     *
     * @summary Reads a single Field
     */
    getApi20241001ResourcesCustom_fieldsFieldsId(metadata: types.GetApi20241001ResourcesCustomFieldsFieldsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesCustomFieldsFieldsIdResponse200>>;
    /**
     * Deletes a Field
     *
     * @summary Deletes a Field
     */
    deleteApi20241001ResourcesCustom_fieldsFieldsId(metadata: types.DeleteApi20241001ResourcesCustomFieldsFieldsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesCustomFieldsFieldsIdResponse200>>;
    /**
     * Reads all Options
     *
     * @summary Reads all Options
     */
    getApi20241001ResourcesCustom_fieldsOptions(metadata?: types.GetApi20241001ResourcesCustomFieldsOptionsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesCustomFieldsOptionsResponse200>>;
    /**
     * Creates an Option
     *
     * @summary Creates an Option
     */
    postApi20241001ResourcesCustom_fieldsOptions(body: types.PostApi20241001ResourcesCustomFieldsOptionsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesCustomFieldsOptionsResponse201>>;
    /**
     * Reads a single Option
     *
     * @summary Reads a single Option
     */
    getApi20241001ResourcesCustom_fieldsOptionsId(metadata: types.GetApi20241001ResourcesCustomFieldsOptionsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesCustomFieldsOptionsIdResponse200>>;
    /**
     * Reads schema custom fields
     *
     * @summary Reads all Resource fields
     */
    getApi20241001ResourcesCustom_fieldsResource_fields(metadata?: types.GetApi20241001ResourcesCustomFieldsResourceFieldsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesCustomFieldsResourceFieldsResponse200>>;
    /**
     * Creates an schema custom field
     *
     * @summary Creates a Resource field
     */
    postApi20241001ResourcesCustom_fieldsResource_fields(body: types.PostApi20241001ResourcesCustomFieldsResourceFieldsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesCustomFieldsResourceFieldsResponse201>>;
    /**
     * Reads schema custom fields
     *
     * @summary Reads a single Resource field
     */
    getApi20241001ResourcesCustom_fieldsResource_fieldsId(metadata: types.GetApi20241001ResourcesCustomFieldsResourceFieldsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesCustomFieldsResourceFieldsIdResponse200>>;
    /**
     * Reads all Values
     *
     * @summary Reads all Values
     */
    getApi20241001ResourcesCustom_fieldsValues(metadata?: types.GetApi20241001ResourcesCustomFieldsValuesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesCustomFieldsValuesResponse200>>;
    /**
     * Creates a Value
     *
     * @summary Creates a Value
     */
    postApi20241001ResourcesCustom_fieldsValues(body: types.PostApi20241001ResourcesCustomFieldsValuesBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesCustomFieldsValuesResponse201>>;
    /**
     * Reads a single Value
     *
     * @summary Reads a single Value
     */
    getApi20241001ResourcesCustom_fieldsValuesId(metadata: types.GetApi20241001ResourcesCustomFieldsValuesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesCustomFieldsValuesIdResponse200>>;
    /**
     * Updates a Value
     *
     * @summary Updates a Value
     */
    putApi20241001ResourcesCustom_fieldsValuesId(body: types.PutApi20241001ResourcesCustomFieldsValuesIdBodyParam, metadata: types.PutApi20241001ResourcesCustomFieldsValuesIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesCustomFieldsValuesIdResponse200>>;
    putApi20241001ResourcesCustom_fieldsValuesId(metadata: types.PutApi20241001ResourcesCustomFieldsValuesIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesCustomFieldsValuesIdResponse200>>;
    /**
     * Reads all Schemas
     *
     * @summary Reads all Schemas
     */
    getApi20241001ResourcesCustom_resourcesSchemas(metadata: types.GetApi20241001ResourcesCustomResourcesSchemasMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesCustomResourcesSchemasResponse200>>;
    /**
     * Creates a Schema
     *
     * @summary Creates a Schema
     */
    postApi20241001ResourcesCustom_resourcesSchemas(body: types.PostApi20241001ResourcesCustomResourcesSchemasBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesCustomResourcesSchemasResponse201>>;
    /**
     * Reads a single Schema
     *
     * @summary Reads a single Schema
     */
    getApi20241001ResourcesCustom_resourcesSchemasId(metadata: types.GetApi20241001ResourcesCustomResourcesSchemasIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesCustomResourcesSchemasIdResponse200>>;
    /**
     * Reads all Values
     *
     * @summary Reads all Values
     */
    getApi20241001ResourcesCustom_resourcesValues(metadata?: types.GetApi20241001ResourcesCustomResourcesValuesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesCustomResourcesValuesResponse200>>;
    /**
     * Creates a Value
     *
     * @summary Creates a Value
     */
    postApi20241001ResourcesCustom_resourcesValues(body: types.PostApi20241001ResourcesCustomResourcesValuesBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesCustomResourcesValuesResponse201>>;
    /**
     * Reads a single Value
     *
     * @summary Reads a single Value
     */
    getApi20241001ResourcesCustom_resourcesValuesId(metadata: types.GetApi20241001ResourcesCustomResourcesValuesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesCustomResourcesValuesIdResponse200>>;
    /**
     * Reads all Documents
     *
     * @summary Reads all Documents
     */
    getApi20241001ResourcesDocumentsDocuments(metadata: types.GetApi20241001ResourcesDocumentsDocumentsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesDocumentsDocumentsResponse200>>;
    /**
     * Creates a Document
     *
     * @summary Creates a Document
     */
    postApi20241001ResourcesDocumentsDocuments(body: types.PostApi20241001ResourcesDocumentsDocumentsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesDocumentsDocumentsResponse201>>;
    /**
     * Reads a single Document
     *
     * @summary Reads a single Document
     */
    getApi20241001ResourcesDocumentsDocumentsId(metadata: types.GetApi20241001ResourcesDocumentsDocumentsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesDocumentsDocumentsIdResponse200>>;
    /**
     * Updates a Document
     *
     * @summary Updates a Document
     */
    putApi20241001ResourcesDocumentsDocumentsId(body: types.PutApi20241001ResourcesDocumentsDocumentsIdBodyParam, metadata: types.PutApi20241001ResourcesDocumentsDocumentsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesDocumentsDocumentsIdResponse200>>;
    /**
     * Deletes a Document
     *
     * @summary Deletes a Document
     */
    deleteApi20241001ResourcesDocumentsDocumentsId(metadata: types.DeleteApi20241001ResourcesDocumentsDocumentsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesDocumentsDocumentsIdResponse200>>;
    /**
     * This endpoint moves the documents to the trash bin, after 30 days they will be deleted
     * from the system.
     *
     * @summary Move to trash bins a Document
     */
    postApi20241001ResourcesDocumentsDocumentsMove_to_trash_bin(body: types.PostApi20241001ResourcesDocumentsDocumentsMoveToTrashBinBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesDocumentsDocumentsMoveToTrashBinResponse200>>;
    /**
     * This endpoint restores the documents from the trash bin, remember that a document in the
     * trash bin will be deleted from the system after 30 days.
     *
     * @summary Restore from trash bins a Document
     */
    postApi20241001ResourcesDocumentsDocumentsRestore_from_trash_bin(body: types.PostApi20241001ResourcesDocumentsDocumentsRestoreFromTrashBinBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesDocumentsDocumentsRestoreFromTrashBinResponse200>>;
    /**
     * Get all folders.
     *
     * @summary Reads all Folders
     */
    getApi20241001ResourcesDocumentsFolders(metadata?: types.GetApi20241001ResourcesDocumentsFoldersMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesDocumentsFoldersResponse200>>;
    /**
     * Create a folder.
     *
     * @summary Creates a Folder
     */
    postApi20241001ResourcesDocumentsFolders(body: types.PostApi20241001ResourcesDocumentsFoldersBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesDocumentsFoldersResponse201>>;
    /**
     * Get all folders.
     *
     * @summary Reads a single Folder
     */
    getApi20241001ResourcesDocumentsFoldersId(metadata: types.GetApi20241001ResourcesDocumentsFoldersIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesDocumentsFoldersIdResponse200>>;
    /**
     * Update a folder.
     *
     * @summary Updates a Folder
     */
    putApi20241001ResourcesDocumentsFoldersId(body: types.PutApi20241001ResourcesDocumentsFoldersIdBodyParam, metadata: types.PutApi20241001ResourcesDocumentsFoldersIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesDocumentsFoldersIdResponse200>>;
    /**
     * Only admins can see all the employees' information, regular users will get a restricted
     * version of the payload as a response based on the permission set by the admin
     *
     * @summary Reads all Employees
     */
    getApi20241001ResourcesEmployeesEmployees(metadata: types.GetApi20241001ResourcesEmployeesEmployeesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesEmployeesEmployeesResponse200>>;
    /**
     * Only admins can see all the employees' information, regular users will get a restricted
     * version of the payload as a response based on the permission set by the admin
     *
     * @summary Reads a single Employee
     */
    getApi20241001ResourcesEmployeesEmployeesId(metadata: types.GetApi20241001ResourcesEmployeesEmployeesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesEmployeesEmployeesIdResponse200>>;
    /**
     * Updates an Employee
     *
     * @summary Updates an Employee
     */
    putApi20241001ResourcesEmployeesEmployeesId(body: types.PutApi20241001ResourcesEmployeesEmployeesIdBodyParam, metadata: types.PutApi20241001ResourcesEmployeesEmployeesIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesEmployeesEmployeesIdResponse200>>;
    /**
     * Create an employee with a contract
     *
     * @summary Create with contracts an Employee
     */
    postApi20241001ResourcesEmployeesEmployeesCreate_with_contract(body: types.PostApi20241001ResourcesEmployeesEmployeesCreateWithContractBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesEmployeesEmployeesCreateWithContractResponse200>>;
    /**
     * Send an email invitation to an unconfirmed employee to join Factorial
     *
     * @summary Invites an Employee
     */
    postApi20241001ResourcesEmployeesEmployeesInvite(body: types.PostApi20241001ResourcesEmployeesEmployeesInviteBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesEmployeesEmployeesInviteResponse200>>;
    /**
     * Terminates an Employee
     *
     * @summary Terminates an Employee
     */
    postApi20241001ResourcesEmployeesEmployeesTerminate(body: types.PostApi20241001ResourcesEmployeesEmployeesTerminateBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesEmployeesEmployeesTerminateResponse200>>;
    /**
     * Unterminates an Employee
     *
     * @summary Unterminates an Employee
     */
    postApi20241001ResourcesEmployeesEmployeesUnterminate(body: types.PostApi20241001ResourcesEmployeesEmployeesUnterminateBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesEmployeesEmployeesUnterminateResponse200>>;
    /**
     * This endpoint can be used to retrieve a list of absence `employee updates`.
     *
     * @summary Reads all Absences
     */
    getApi20241001ResourcesEmployee_updatesAbsences(metadata?: types.GetApi20241001ResourcesEmployeeUpdatesAbsencesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesEmployeeUpdatesAbsencesResponse200>>;
    /**
     * This endpoint can be used to retrieve a list of absence `employee updates`.
     *
     * @summary Reads a single Absence
     */
    getApi20241001ResourcesEmployee_updatesAbsencesId(metadata: types.GetApi20241001ResourcesEmployeeUpdatesAbsencesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesEmployeeUpdatesAbsencesIdResponse200>>;
    /**
     * This endpoint can be used to retrieve a list of contrat changes `employee updates`
     * details.
     *
     * @summary Reads all Contract changes
     */
    getApi20241001ResourcesEmployee_updatesContract_changes(metadata?: types.GetApi20241001ResourcesEmployeeUpdatesContractChangesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesEmployeeUpdatesContractChangesResponse200>>;
    /**
     * This endpoint can be used to retrieve a list of contrat changes `employee updates`
     * details.
     *
     * @summary Reads a single Contract change
     */
    getApi20241001ResourcesEmployee_updatesContract_changesId(metadata: types.GetApi20241001ResourcesEmployeeUpdatesContractChangesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesEmployeeUpdatesContractChangesIdResponse200>>;
    /**
     * This endpoint can be used to retrieve a detail of new hire `employee updates`.
     *
     * @summary Reads all New hires
     */
    getApi20241001ResourcesEmployee_updatesNew_hires(metadata?: types.GetApi20241001ResourcesEmployeeUpdatesNewHiresMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesEmployeeUpdatesNewHiresResponse200>>;
    /**
     * This endpoint can be used to retrieve a detail of new hire `employee updates`.
     *
     * @summary Reads a single New hire
     */
    getApi20241001ResourcesEmployee_updatesNew_hiresId(metadata: types.GetApi20241001ResourcesEmployeeUpdatesNewHiresIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesEmployeeUpdatesNewHiresIdResponse200>>;
    /**
     * This endpoint can be used to retrieve a list of personal changes `employee updates`.
     *
     * @summary Reads all Personal changes
     */
    getApi20241001ResourcesEmployee_updatesPersonal_changes(metadata?: types.GetApi20241001ResourcesEmployeeUpdatesPersonalChangesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesEmployeeUpdatesPersonalChangesResponse200>>;
    /**
     * This endpoint can be used to retrieve a list of personal changes `employee updates`.
     *
     * @summary Reads a single Personal change
     */
    getApi20241001ResourcesEmployee_updatesPersonal_changesId(metadata: types.GetApi20241001ResourcesEmployeeUpdatesPersonalChangesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesEmployeeUpdatesPersonalChangesIdResponse200>>;
    /**
     * This endpoint can be used to retrieve a list of `employee updates`.
     *
     * @summary Reads all Summaries
     */
    getApi20241001ResourcesEmployee_updatesSummaries(metadata?: types.GetApi20241001ResourcesEmployeeUpdatesSummariesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesEmployeeUpdatesSummariesResponse200>>;
    /**
     * This endpoint can be used to retrieve a list of `employee updates`.
     *
     * @summary Reads a single Summary
     */
    getApi20241001ResourcesEmployee_updatesSummariesId(metadata: types.GetApi20241001ResourcesEmployeeUpdatesSummariesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesEmployeeUpdatesSummariesIdResponse200>>;
    /**
     * This endpoint can be used to retrieve a list of termination `employee updates`.
     *
     * @summary Reads all Terminations
     */
    getApi20241001ResourcesEmployee_updatesTerminations(metadata?: types.GetApi20241001ResourcesEmployeeUpdatesTerminationsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesEmployeeUpdatesTerminationsResponse200>>;
    /**
     * This endpoint can be used to retrieve a list of termination `employee updates`.
     *
     * @summary Reads a single Termination
     */
    getApi20241001ResourcesEmployee_updatesTerminationsId(metadata: types.GetApi20241001ResourcesEmployeeUpdatesTerminationsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesEmployeeUpdatesTerminationsIdResponse200>>;
    /**
     * Reads all Expensables
     *
     * @summary Reads all Expensables
     */
    getApi20241001ResourcesExpensesExpensables(metadata: types.GetApi20241001ResourcesExpensesExpensablesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesExpensesExpensablesResponse200>>;
    /**
     * Reads a single Expensable
     *
     * @summary Reads a single Expensable
     */
    getApi20241001ResourcesExpensesExpensablesId(metadata: types.GetApi20241001ResourcesExpensesExpensablesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesExpensesExpensablesIdResponse200>>;
    /**
     * Reads all Expenses
     *
     * @summary Reads all Expenses
     */
    getApi20241001ResourcesExpensesExpenses(metadata: types.GetApi20241001ResourcesExpensesExpensesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesExpensesExpensesResponse200>>;
    /**
     * Reads a single Expense
     *
     * @summary Reads a single Expense
     */
    getApi20241001ResourcesExpensesExpensesId(metadata: types.GetApi20241001ResourcesExpensesExpensesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesExpensesExpensesIdResponse200>>;
    /**
     * Reads all Mileages
     *
     * @summary Reads all Mileages
     */
    getApi20241001ResourcesExpensesMileages(metadata: types.GetApi20241001ResourcesExpensesMileagesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesExpensesMileagesResponse200>>;
    /**
     * Reads a single Mileage
     *
     * @summary Reads a single Mileage
     */
    getApi20241001ResourcesExpensesMileagesId(metadata: types.GetApi20241001ResourcesExpensesMileagesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesExpensesMileagesIdResponse200>>;
    /**
     * Fetch one or all ledger accounts for the company legal_entities.
     *
     * @summary Reads all Accounts
     */
    getApi20241001ResourcesFinanceAccounts(metadata?: types.GetApi20241001ResourcesFinanceAccountsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesFinanceAccountsResponse200>>;
    /**
     * Create a ledger account for the company legal_entity. To avoid duplicates use the
     * external_id field to set the ID of the ledger account in the external system.
     *
     * @summary Creates an Account
     */
    postApi20241001ResourcesFinanceAccounts(body: types.PostApi20241001ResourcesFinanceAccountsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesFinanceAccountsResponse201>>;
    /**
     * Fetch one or all ledger accounts for the company legal_entities.
     *
     * @summary Reads a single Account
     */
    getApi20241001ResourcesFinanceAccountsId(metadata: types.GetApi20241001ResourcesFinanceAccountsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesFinanceAccountsIdResponse200>>;
    /**
     * Reads all Cost centers
     *
     * @summary Reads all Cost centers
     */
    getApi20241001ResourcesFinanceCost_centers(metadata?: types.GetApi20241001ResourcesFinanceCostCentersMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesFinanceCostCentersResponse200>>;
    /**
     * Creates a Cost center
     *
     * @summary Creates a Cost center
     */
    postApi20241001ResourcesFinanceCost_centers(body: types.PostApi20241001ResourcesFinanceCostCentersBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesFinanceCostCentersResponse201>>;
    /**
     * Reads a single Cost center
     *
     * @summary Reads a single Cost center
     */
    getApi20241001ResourcesFinanceCost_centersId(metadata: types.GetApi20241001ResourcesFinanceCostCentersIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesFinanceCostCentersIdResponse200>>;
    /**
     * Deletes a Cost center
     *
     * @summary Deletes a Cost center
     */
    deleteApi20241001ResourcesFinanceCost_centersId(metadata: types.DeleteApi20241001ResourcesFinanceCostCentersIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesFinanceCostCentersIdResponse200>>;
    /**
     * Edits a Cost center
     *
     * @summary Edits a Cost center
     */
    postApi20241001ResourcesFinanceCost_centersEdit(body: types.PostApi20241001ResourcesFinanceCostCentersEditBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesFinanceCostCentersEditResponse200>>;
    /**
     * Reads all Cost center memberships
     *
     * @summary Reads all Cost center memberships
     */
    getApi20241001ResourcesFinanceCost_center_memberships(metadata?: types.GetApi20241001ResourcesFinanceCostCenterMembershipsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesFinanceCostCenterMembershipsResponse200>>;
    /**
     * ###### **What does it do?** Performs an update of cost center memberships for an
     * employee.
     * The action creates new memberships starting from today, terminating any pre-existing
     * memberships for the employee.
     * This ensures a history of cost center memberships is preserved.
     * ###### **What does the `memberships` array look like?**
     * An array of objects with these properties:
     * - `cost_center_id`
     * - `percentage`: A float between 0 and 1 representing the percentage that the employee is
     * assigned to the cost center. For multiple assignments, the sum of percentages must equal
     * 1.0.
     * For example, for an employee assigned to cost center 1 during 30% of their time and cost
     * center 2 during 70% of their time, the request parameters would look like:
     * `memberships[][cost_center_id]=1&memberships[][percentage]=0.3&memberships[][cost_center_id]=2&memberships[][percentage]=0.7`
     *
     * @summary Bulk create updates a Cost center membership
     */
    postApi20241001ResourcesFinanceCost_center_membershipsBulk_create_update(body: types.PostApi20241001ResourcesFinanceCostCenterMembershipsBulkCreateUpdateBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesFinanceCostCenterMembershipsBulkCreateUpdateResponse200>>;
    /**
     * Retrieves company holidays
     *
     * @summary Reads all Company holidays
     */
    getApi20241001ResourcesHolidaysCompany_holidays(metadata?: types.GetApi20241001ResourcesHolidaysCompanyHolidaysMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesHolidaysCompanyHolidaysResponse200>>;
    /**
     * Retrieves company holidays
     *
     * @summary Reads a single Company holiday
     */
    getApi20241001ResourcesHolidaysCompany_holidaysId(metadata: types.GetApi20241001ResourcesHolidaysCompanyHolidaysIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesHolidaysCompanyHolidaysIdResponse200>>;
    /**
     * Reads all Locations
     *
     * @summary Reads all Locations
     */
    getApi20241001ResourcesLocationsLocations(metadata?: types.GetApi20241001ResourcesLocationsLocationsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesLocationsLocationsResponse200>>;
    /**
     * Creates a Location
     *
     * @summary Creates a Location
     */
    postApi20241001ResourcesLocationsLocations(body: types.PostApi20241001ResourcesLocationsLocationsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesLocationsLocationsResponse201>>;
    /**
     * Reads a single Location
     *
     * @summary Reads a single Location
     */
    getApi20241001ResourcesLocationsLocationsId(metadata: types.GetApi20241001ResourcesLocationsLocationsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesLocationsLocationsIdResponse200>>;
    /**
     * Updates a Location
     *
     * @summary Updates a Location
     */
    putApi20241001ResourcesLocationsLocationsId(body: types.PutApi20241001ResourcesLocationsLocationsIdBodyParam, metadata: types.PutApi20241001ResourcesLocationsLocationsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesLocationsLocationsIdResponse200>>;
    /**
     * Deletes a Location
     *
     * @summary Deletes a Location
     */
    deleteApi20241001ResourcesLocationsLocationsId(metadata: types.DeleteApi20241001ResourcesLocationsLocationsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesLocationsLocationsIdResponse200>>;
    /**
     * Reads all Work areas
     *
     * @summary Reads all Work areas
     */
    getApi20241001ResourcesLocationsWork_areas(metadata: types.GetApi20241001ResourcesLocationsWorkAreasMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesLocationsWorkAreasResponse200>>;
    /**
     * Creates a Work area
     *
     * @summary Creates a Work area
     */
    postApi20241001ResourcesLocationsWork_areas(body: types.PostApi20241001ResourcesLocationsWorkAreasBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesLocationsWorkAreasResponse201>>;
    /**
     * Reads a single Work area
     *
     * @summary Reads a single Work area
     */
    getApi20241001ResourcesLocationsWork_areasId(metadata: types.GetApi20241001ResourcesLocationsWorkAreasIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesLocationsWorkAreasIdResponse200>>;
    /**
     * Updates a Work area
     *
     * @summary Updates a Work area
     */
    putApi20241001ResourcesLocationsWork_areasId(body: types.PutApi20241001ResourcesLocationsWorkAreasIdBodyParam, metadata: types.PutApi20241001ResourcesLocationsWorkAreasIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesLocationsWorkAreasIdResponse200>>;
    /**
     * Archives a Work area
     *
     * @summary Archives a Work area
     */
    postApi20241001ResourcesLocationsWork_areasArchive(body: types.PostApi20241001ResourcesLocationsWorkAreasArchiveBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesLocationsWorkAreasArchiveResponse200>>;
    /**
     * Unarchives a Work area
     *
     * @summary Unarchives a Work area
     */
    postApi20241001ResourcesLocationsWork_areasUnarchive(body: types.PostApi20241001ResourcesLocationsWorkAreasUnarchiveBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesLocationsWorkAreasUnarchiveResponse200>>;
    /**
     * Reads all Installation settings
     *
     * @summary Reads all Installation settings
     */
    getApi20241001ResourcesMarketplaceInstallation_settings(metadata: types.GetApi20241001ResourcesMarketplaceInstallationSettingsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesMarketplaceInstallationSettingsResponse200>>;
    /**
     * Reads all Settings
     *
     * @summary Reads all Settings
     */
    getApi20241001ResourcesMarketplaceSettings(metadata: types.GetApi20241001ResourcesMarketplaceSettingsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesMarketplaceSettingsResponse200>>;
    /**
     * Get all family situations.
     *
     * @summary Reads all Family situations
     */
    getApi20241001ResourcesPayrollFamily_situations(metadata?: types.GetApi20241001ResourcesPayrollFamilySituationsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPayrollFamilySituationsResponse200>>;
    /**
     * Create a family situation.
     *
     * @summary Creates a Family situation
     */
    postApi20241001ResourcesPayrollFamily_situations(body: types.PostApi20241001ResourcesPayrollFamilySituationsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesPayrollFamilySituationsResponse201>>;
    /**
     * Update a family situation.
     *
     * @summary Updates a Family situation
     */
    putApi20241001ResourcesPayrollFamily_situationsId(body: types.PutApi20241001ResourcesPayrollFamilySituationsIdBodyParam, metadata: types.PutApi20241001ResourcesPayrollFamilySituationsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesPayrollFamilySituationsIdResponse200>>;
    /**
     * Change statuses a Policy period
     *
     * @summary Change statuses a Policy period
     */
    postApi20241001ResourcesPayrollPolicy_periodsChange_status(body: types.PostApi20241001ResourcesPayrollPolicyPeriodsChangeStatusBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPayrollPolicyPeriodsChangeStatusResponse200>>;
    /**
     * Reads all Supplements
     *
     * @summary Reads all Supplements
     */
    getApi20241001ResourcesPayrollSupplements(metadata: types.GetApi20241001ResourcesPayrollSupplementsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPayrollSupplementsResponse200>>;
    /**
     * Creates a Supplement
     *
     * @summary Creates a Supplement
     */
    postApi20241001ResourcesPayrollSupplements(body: types.PostApi20241001ResourcesPayrollSupplementsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesPayrollSupplementsResponse201>>;
    /**
     * Reads a single Supplement
     *
     * @summary Reads a single Supplement
     */
    getApi20241001ResourcesPayrollSupplementsId(metadata: types.GetApi20241001ResourcesPayrollSupplementsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPayrollSupplementsIdResponse200>>;
    /**
     * Updates a Supplement
     *
     * @summary Updates a Supplement
     */
    putApi20241001ResourcesPayrollSupplementsId(body: types.PutApi20241001ResourcesPayrollSupplementsIdBodyParam, metadata: types.PutApi20241001ResourcesPayrollSupplementsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesPayrollSupplementsIdResponse200>>;
    /**
     * Deletes a Supplement
     *
     * @summary Deletes a Supplement
     */
    deleteApi20241001ResourcesPayrollSupplementsId(metadata: types.DeleteApi20241001ResourcesPayrollSupplementsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesPayrollSupplementsIdResponse200>>;
    /**
     * Reads Payroll employee identifier codes, current countries supported are Portugal, Italy
     * and Germany
     *
     * @summary Reads all Identifiers
     */
    getApi20241001ResourcesPayroll_employeesIdentifiers(metadata: types.GetApi20241001ResourcesPayrollEmployeesIdentifiersMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPayrollEmployeesIdentifiersResponse200>>;
    /**
     * Reads Payroll employee identifier codes, current countries supported are Portugal, Italy
     * and Germany
     *
     * @summary Creates an Identifier
     */
    postApi20241001ResourcesPayroll_employeesIdentifiers(body: types.PostApi20241001ResourcesPayrollEmployeesIdentifiersBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesPayrollEmployeesIdentifiersResponse201>>;
    /**
     * Reads Payroll employee identifier codes, current countries supported are Portugal, Italy
     * and Germany
     *
     * @summary Reads a single Identifier
     */
    getApi20241001ResourcesPayroll_employeesIdentifiersId(metadata: types.GetApi20241001ResourcesPayrollEmployeesIdentifiersIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPayrollEmployeesIdentifiersIdResponse200>>;
    /**
     * Reads Payroll employee identifier codes, current countries supported are Portugal, Italy
     * and Germany
     *
     * @summary Updates an Identifier
     */
    putApi20241001ResourcesPayroll_employeesIdentifiersId(body: types.PutApi20241001ResourcesPayrollEmployeesIdentifiersIdBodyParam, metadata: types.PutApi20241001ResourcesPayrollEmployeesIdentifiersIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesPayrollEmployeesIdentifiersIdResponse200>>;
    /**
     * Reads Payroll employee identifier codes, current countries supported are Portugal, Italy
     * and Germany
     *
     * @summary Deletes an Identifier
     */
    deleteApi20241001ResourcesPayroll_employeesIdentifiersId(metadata: types.DeleteApi20241001ResourcesPayrollEmployeesIdentifiersIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesPayrollEmployeesIdentifiersIdResponse200>>;
    /**
     * Reads all Codes
     *
     * @summary Reads all Codes
     */
    getApi20241001ResourcesPayroll_integrations_baseCodes(metadata: types.GetApi20241001ResourcesPayrollIntegrationsBaseCodesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPayrollIntegrationsBaseCodesResponse200>>;
    /**
     * Creates a Code
     *
     * @summary Creates a Code
     */
    postApi20241001ResourcesPayroll_integrations_baseCodes(body: types.PostApi20241001ResourcesPayrollIntegrationsBaseCodesBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesPayrollIntegrationsBaseCodesResponse201>>;
    /**
     * Updates a Code
     *
     * @summary Updates a Code
     */
    putApi20241001ResourcesPayroll_integrations_baseCodesId(body: types.PutApi20241001ResourcesPayrollIntegrationsBaseCodesIdBodyParam, metadata: types.PutApi20241001ResourcesPayrollIntegrationsBaseCodesIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesPayrollIntegrationsBaseCodesIdResponse200>>;
    /**
     * Deletes a Code
     *
     * @summary Deletes a Code
     */
    deleteApi20241001ResourcesPayroll_integrations_baseCodesId(metadata: types.DeleteApi20241001ResourcesPayrollIntegrationsBaseCodesIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesPayrollIntegrationsBaseCodesIdResponse200>>;
    /**
     * Retrieves the action plans of review processes.
     *
     * @summary Reads all Agreements
     */
    getApi20241001ResourcesPerformanceAgreements(metadata?: types.GetApi20241001ResourcesPerformanceAgreementsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPerformanceAgreementsResponse200>>;
    /**
     * Retrieves the action plans of review processes.
     *
     * @summary Reads a single Agreement
     */
    getApi20241001ResourcesPerformanceAgreementsId(metadata: types.GetApi20241001ResourcesPerformanceAgreementsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPerformanceAgreementsIdResponse200>>;
    /**
     * Initiate the action plan for all your direct reports in a review process. If you are
     * acting as a company, the action plan from all employees in the review process will be
     * initiated.
     *
     * @summary Bulk initiates an Agreement
     */
    postApi20241001ResourcesPerformanceAgreementsBulk_initiate(body: types.PostApi20241001ResourcesPerformanceAgreementsBulkInitiateBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceAgreementsBulkInitiateResponse200>>;
    /**
     * Initiate the action plan for a review process target ID in a review process.
     *
     * @summary Initiates an Agreement
     */
    postApi20241001ResourcesPerformanceAgreementsInitiate(body: types.PostApi20241001ResourcesPerformanceAgreementsInitiateBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceAgreementsInitiateResponse200>>;
    /**
     * Retrieves the pending and published review evaluations. The evaluations are created
     * based on the participants and the review types when the review process is started.
     *
     * For example, if the defined review types are "self-review" and "manager", two
     * evaluations will be created for each participant when the review process starts. One for
     * the self-review containing the participant as target and the manager as reviewer, and
     * another for the manager review containing the participant as target and the participant
     * as reviewer.
     *
     * @summary Reads all Review evaluations
     */
    getApi20241001ResourcesPerformanceReview_evaluations(metadata?: types.GetApi20241001ResourcesPerformanceReviewEvaluationsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPerformanceReviewEvaluationsResponse200>>;
    /**
     * Retrieves the pending and published review evaluations. The evaluations are created
     * based on the participants and the review types when the review process is started.
     *
     * For example, if the defined review types are "self-review" and "manager", two
     * evaluations will be created for each participant when the review process starts. One for
     * the self-review containing the participant as target and the manager as reviewer, and
     * another for the manager review containing the participant as target and the participant
     * as reviewer.
     *
     * @summary Reads a single Review evaluation
     */
    getApi20241001ResourcesPerformanceReview_evaluationsId(metadata: types.GetApi20241001ResourcesPerformanceReviewEvaluationsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPerformanceReviewEvaluationsIdResponse200>>;
    /**
     * Define a new reviewer for the evaluation that will only be able to leave feedback about
     * the employee. This can only be done if the process is active, the evaluation is not
     * published and the evaluation type is not "self".
     *
     * @summary Replace reviewers a Review evaluation
     */
    postApi20241001ResourcesPerformanceReview_evaluationsReplace_reviewer(body: types.PostApi20241001ResourcesPerformanceReviewEvaluationsReplaceReviewerBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceReviewEvaluationsReplaceReviewerResponse200>>;
    /**
     * Retrieves the questions and answers of review evaluations.
     *
     * @summary Reads all Review evaluation answers
     */
    getApi20241001ResourcesPerformanceReview_evaluation_answers(metadata: types.GetApi20241001ResourcesPerformanceReviewEvaluationAnswersMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPerformanceReviewEvaluationAnswersResponse200>>;
    /**
     * Retrieves the review owners of review processes (each process has at least one owner).
     * The owners can edit the review process and access its results.
     *
     * @summary Reads all Review owners
     */
    getApi20241001ResourcesPerformanceReview_owners(metadata?: types.GetApi20241001ResourcesPerformanceReviewOwnersMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPerformanceReviewOwnersResponse200>>;
    /**
     * Remove an owner from a review process. The review process must have at least one owner.
     *
     * @summary Deletes a Review owner
     */
    deleteApi20241001ResourcesPerformanceReview_ownersId(metadata: types.DeleteApi20241001ResourcesPerformanceReviewOwnersIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesPerformanceReviewOwnersIdResponse200>>;
    /**
     * Add multiple owners to a review process.
     *
     * @summary Bulk creates a Review owner
     */
    postApi20241001ResourcesPerformanceReview_ownersBulk_create(body: types.PostApi20241001ResourcesPerformanceReviewOwnersBulkCreateBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceReviewOwnersBulkCreateResponse200>>;
    /**
     * Reads all Review processes
     *
     * @summary Reads all Review processes
     */
    getApi20241001ResourcesPerformanceReview_processes(metadata?: types.GetApi20241001ResourcesPerformanceReviewProcessesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPerformanceReviewProcessesResponse200>>;
    /**
     * Create a new review process.
     *
     * @summary Creates a Review process
     */
    postApi20241001ResourcesPerformanceReview_processes(body: types.PostApi20241001ResourcesPerformanceReviewProcessesBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesPerformanceReviewProcessesResponse201>>;
    /**
     * Reads a single Review process
     *
     * @summary Reads a single Review process
     */
    getApi20241001ResourcesPerformanceReview_processesId(metadata: types.GetApi20241001ResourcesPerformanceReviewProcessesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPerformanceReviewProcessesIdResponse200>>;
    /**
     * Delete an existing review process. This cannot be done if the process has been finished.
     *
     * @summary Deletes a Review process
     */
    deleteApi20241001ResourcesPerformanceReview_processesId(metadata: types.DeleteApi20241001ResourcesPerformanceReviewProcessesIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesPerformanceReviewProcessesIdResponse200>>;
    /**
     * Duplicate an existing review process
     *
     * @summary Duplicates a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesDuplicate(body: types.PostApi20241001ResourcesPerformanceReviewProcessesDuplicateBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceReviewProcessesDuplicateResponse200>>;
    /**
     * Send bulk reminders to the reviewers that haven't answered their evaluations in a review
     * process.
     *
     * @summary Remind in bulks a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesRemind_in_bulk(body: types.PostApi20241001ResourcesPerformanceReviewProcessesRemindInBulkBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceReviewProcessesRemindInBulkResponse200>>;
    /**
     * Reopen a finished review process.
     *
     * @summary Reopens a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesReopen(body: types.PostApi20241001ResourcesPerformanceReviewProcessesReopenBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceReviewProcessesReopenResponse200>>;
    /**
     * Start a review process. This is only allowed if the process is in draft or scheduled.
     *
     * @summary Starts a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesStart(body: types.PostApi20241001ResourcesPerformanceReviewProcessesStartBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceReviewProcessesStartResponse200>>;
    /**
     * Stop a review process.
     *
     * @summary Stops a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesStop(body: types.PostApi20241001ResourcesPerformanceReviewProcessesStopBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceReviewProcessesStopResponse200>>;
    /**
     * Archive or unarchive a review process
     *
     * @summary Toggle archives a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesToggle_archive(body: types.PostApi20241001ResourcesPerformanceReviewProcessesToggleArchiveBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceReviewProcessesToggleArchiveResponse200>>;
    /**
     * Enable or disable the action plan feature of a review process.
     *
     * @summary Update agreements configurations a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesUpdate_agreements_configuration(body: types.PostApi20241001ResourcesPerformanceReviewProcessesUpdateAgreementsConfigurationBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceReviewProcessesUpdateAgreementsConfigurationResponse200>>;
    /**
     * Update the basic information of an existing review process.
     *
     * @summary Update basic infos a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesUpdate_basic_info(body: types.PostApi20241001ResourcesPerformanceReviewProcessesUpdateBasicInfoBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceReviewProcessesUpdateBasicInfoResponse200>>;
    /**
     * Update the deadline of a review process.
     *
     * @summary Update deadlines a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesUpdate_deadline(body: types.PostApi20241001ResourcesPerformanceReviewProcessesUpdateDeadlineBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceReviewProcessesUpdateDeadlineResponse200>>;
    /**
     * Update the review types of a review process. This is only allowed while the process is
     * in draft.
     *
     * @summary Update reviewer strategies a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesUpdate_reviewer_strategies(body: types.PostApi20241001ResourcesPerformanceReviewProcessesUpdateReviewerStrategiesBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceReviewProcessesUpdateReviewerStrategiesResponse200>>;
    /**
     * Update the starting date of a scheduled review process. This is only allowed if the
     * process is scheduled.
     *
     * @summary Update schedules a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesUpdate_schedule(body: types.PostApi20241001ResourcesPerformanceReviewProcessesUpdateScheduleBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceReviewProcessesUpdateScheduleResponse200>>;
    /**
     * Update the criteria for calculating the participants of a review process. This is only
     * allowed while the process is in draft.
     *
     * @summary Update target strategies a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesUpdate_target_strategy(body: types.PostApi20241001ResourcesPerformanceReviewProcessesUpdateTargetStrategyBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceReviewProcessesUpdateTargetStrategyResponse200>>;
    /**
     * Reads all Review process estimated targets
     *
     * @summary Reads all Review process estimated targets
     */
    getApi20241001ResourcesPerformanceReview_process_estimated_targets(metadata?: types.GetApi20241001ResourcesPerformanceReviewProcessEstimatedTargetsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPerformanceReviewProcessEstimatedTargetsResponse200>>;
    /**
     * Retrieves the participants of active review processes.
     *
     * @summary Reads all Review process targets
     */
    getApi20241001ResourcesPerformanceReview_process_targets(metadata?: types.GetApi20241001ResourcesPerformanceReviewProcessTargetsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPerformanceReviewProcessTargetsResponse200>>;
    /**
     * Retrieves the participants of active review processes.
     *
     * @summary Reads a single Review process target
     */
    getApi20241001ResourcesPerformanceReview_process_targetsId(metadata: types.GetApi20241001ResourcesPerformanceReviewProcessTargetsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPerformanceReviewProcessTargetsIdResponse200>>;
    /**
     * Delete a participant from the active review process. This will also remove all
     * previously submitted evaluations about the participant.
     *
     * @summary Deletes a Review process target
     */
    deleteApi20241001ResourcesPerformanceReview_process_targetsId(metadata: types.DeleteApi20241001ResourcesPerformanceReviewProcessTargetsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesPerformanceReviewProcessTargetsIdResponse200>>;
    /**
     * Assign peers to evaluate a specific participant.
     *
     * @summary Add peers a Review process target
     */
    postApi20241001ResourcesPerformanceReview_process_targetsAdd_peers(body: types.PostApi20241001ResourcesPerformanceReviewProcessTargetsAddPeersBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceReviewProcessTargetsAddPeersResponse200>>;
    /**
     * Add multiple participants to the active review process and create the evaluations for
     * them.
     *
     * @summary Bulk creates a Review process target
     */
    postApi20241001ResourcesPerformanceReview_process_targetsBulk_create(body: types.PostApi20241001ResourcesPerformanceReviewProcessTargetsBulkCreateBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceReviewProcessTargetsBulkCreateResponse200>>;
    /**
     * Remove peers and their evaluations from a specific participant.
     *
     * @summary Remove peer evaluations a Review process target
     */
    postApi20241001ResourcesPerformanceReview_process_targetsRemove_peer_evaluations(body: types.PostApi20241001ResourcesPerformanceReviewProcessTargetsRemovePeerEvaluationsBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceReviewProcessTargetsRemovePeerEvaluationsResponse200>>;
    /**
     * Retrieves the questionnaires by reviewer strategy for review processes.
     *
     * @summary Reads all Review questionnaire by strategies
     */
    getApi20241001ResourcesPerformanceReview_questionnaire_by_strategies(metadata?: types.GetApi20241001ResourcesPerformanceReviewQuestionnaireByStrategiesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPerformanceReviewQuestionnaireByStrategiesResponse200>>;
    /**
     * Retrieves the questionnaires by reviewer strategy for review processes.
     *
     * @summary Reads a single Review questionnaire by strategy
     */
    getApi20241001ResourcesPerformanceReview_questionnaire_by_strategiesId(metadata: types.GetApi20241001ResourcesPerformanceReviewQuestionnaireByStrategiesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPerformanceReviewQuestionnaireByStrategiesIdResponse200>>;
    /**
     * Update the scoring range used in rating questions for all reviewer strategies.
     *
     * @summary Update default rating scales a Review questionnaire by strategy
     */
    postApi20241001ResourcesPerformanceReview_questionnaire_by_strategiesUpdate_default_rating_scale(body: types.PostApi20241001ResourcesPerformanceReviewQuestionnaireByStrategiesUpdateDefaultRatingScaleBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceReviewQuestionnaireByStrategiesUpdateDefaultRatingScaleResponse200>>;
    /**
     * Update the review process questionnaire for a specific reviewer strategy (review type).
     * It can be used to add, edit or delete questions from a draft review process.
     *
     * @summary Update questionnaire for strategies a Review questionnaire by strategy
     */
    postApi20241001ResourcesPerformanceReview_questionnaire_by_strategiesUpdate_questionnaire_for_strategy(body: types.PostApi20241001ResourcesPerformanceReviewQuestionnaireByStrategiesUpdateQuestionnaireForStrategyBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPerformanceReviewQuestionnaireByStrategiesUpdateQuestionnaireForStrategyResponse200>>;
    /**
     * Retrieves the visibility settings of review processes.
     *
     * @summary Reads all Review visibility settings
     */
    getApi20241001ResourcesPerformanceReview_visibility_settings(metadata?: types.GetApi20241001ResourcesPerformanceReviewVisibilitySettingsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPerformanceReviewVisibilitySettingsResponse200>>;
    /**
     * Modifiy the visibility settings of the review process.
     *
     * @summary Updates a Review visibility setting
     */
    putApi20241001ResourcesPerformanceReview_visibility_settingsId(body: types.PutApi20241001ResourcesPerformanceReviewVisibilitySettingsIdBodyParam, metadata: types.PutApi20241001ResourcesPerformanceReviewVisibilitySettingsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesPerformanceReviewVisibilitySettingsIdResponse200>>;
    /**
     * Retrieves the participants' managers of a review process.
     *
     * @summary Reads all Target managers
     */
    getApi20241001ResourcesPerformanceTarget_managers(metadata: types.GetApi20241001ResourcesPerformanceTargetManagersMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPerformanceTargetManagersResponse200>>;
    /**
     * Retrieves the participants' managers of a review process.
     *
     * @summary Reads a single Target manager
     */
    getApi20241001ResourcesPerformanceTarget_managersId(metadata: types.GetApi20241001ResourcesPerformanceTargetManagersIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPerformanceTargetManagersIdResponse200>>;
    /**
     * Reads all Comments
     *
     * @summary Reads all Comments
     */
    getApi20241001ResourcesPostsComments(metadata: types.GetApi20241001ResourcesPostsCommentsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPostsCommentsResponse200>>;
    /**
     * Creates a Comment
     *
     * @summary Creates a Comment
     */
    postApi20241001ResourcesPostsComments(body: types.PostApi20241001ResourcesPostsCommentsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesPostsCommentsResponse201>>;
    /**
     * Reads a single Comment
     *
     * @summary Reads a single Comment
     */
    getApi20241001ResourcesPostsCommentsId(metadata: types.GetApi20241001ResourcesPostsCommentsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPostsCommentsIdResponse200>>;
    /**
     * Updates a Comment
     *
     * @summary Updates a Comment
     */
    putApi20241001ResourcesPostsCommentsId(body: types.PutApi20241001ResourcesPostsCommentsIdBodyParam, metadata: types.PutApi20241001ResourcesPostsCommentsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesPostsCommentsIdResponse200>>;
    /**
     * Deletes a Comment
     *
     * @summary Deletes a Comment
     */
    deleteApi20241001ResourcesPostsCommentsId(metadata: types.DeleteApi20241001ResourcesPostsCommentsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesPostsCommentsIdResponse200>>;
    /**
     * > ###### **What does it do?**
     * > These endpoints will allow you to retrieve groups
     * > ###### **What can you do with groups?**
     * > Increase visibility and communication within the company by creating events and
     * announcements. You can create groups for different departments, teams, or projects.
     * > ###### **Who can use it?**
     * > For having this funcionality available, you need to have Communities V2 feature
     * enabled.
     *
     * @summary Reads all Groups
     */
    getApi20241001ResourcesPostsGroups(metadata: types.GetApi20241001ResourcesPostsGroupsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPostsGroupsResponse200>>;
    /**
     * Creates a Group
     *
     * @summary Creates a Group
     */
    postApi20241001ResourcesPostsGroups(body: types.PostApi20241001ResourcesPostsGroupsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesPostsGroupsResponse201>>;
    /**
     * > ###### **What does it do?**
     * > These endpoints will allow you to retrieve groups
     * > ###### **What can you do with groups?**
     * > Increase visibility and communication within the company by creating events and
     * announcements. You can create groups for different departments, teams, or projects.
     * > ###### **Who can use it?**
     * > For having this funcionality available, you need to have Communities V2 feature
     * enabled.
     *
     * @summary Reads a single Group
     */
    getApi20241001ResourcesPostsGroupsId(metadata: types.GetApi20241001ResourcesPostsGroupsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPostsGroupsIdResponse200>>;
    /**
     * Updates a Group
     *
     * @summary Updates a Group
     */
    putApi20241001ResourcesPostsGroupsId(body: types.PutApi20241001ResourcesPostsGroupsIdBodyParam, metadata: types.PutApi20241001ResourcesPostsGroupsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesPostsGroupsIdResponse200>>;
    /**
     * Deletes a Group
     *
     * @summary Deletes a Group
     */
    deleteApi20241001ResourcesPostsGroupsId(metadata: types.DeleteApi20241001ResourcesPostsGroupsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesPostsGroupsIdResponse200>>;
    /**
     * Archives a group but keeps the data.
     *
     * @summary Archives a Group
     */
    postApi20241001ResourcesPostsGroupsArchive(body: types.PostApi20241001ResourcesPostsGroupsArchiveBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesPostsGroupsArchiveResponse200>>;
    /**
     * ###### **What does it do?**
     * These endpoints allow you to retrieve posts of a community
     * ###### **What can you do with groups?**
     * Increase visibility and communication within the company by creating interaction and
     * community within your company.
     * ###### **Who can use it?**
     * For having this funcionality available, you need to have Communities V2 feature
     * available
     *
     * @summary Reads all Posts
     */
    getApi20241001ResourcesPostsPosts(metadata?: types.GetApi20241001ResourcesPostsPostsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPostsPostsResponse200>>;
    /**
     * Creates a Post
     *
     * @summary Creates a Post
     */
    postApi20241001ResourcesPostsPosts(body: types.PostApi20241001ResourcesPostsPostsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesPostsPostsResponse201>>;
    /**
     * ###### **What does it do?**
     * These endpoints allow you to retrieve posts of a community
     * ###### **What can you do with groups?**
     * Increase visibility and communication within the company by creating interaction and
     * community within your company.
     * ###### **Who can use it?**
     * For having this funcionality available, you need to have Communities V2 feature
     * available
     *
     * @summary Reads a single Post
     */
    getApi20241001ResourcesPostsPostsId(metadata: types.GetApi20241001ResourcesPostsPostsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesPostsPostsIdResponse200>>;
    /**
     * Updates a Post
     *
     * @summary Updates a Post
     */
    putApi20241001ResourcesPostsPostsId(body: types.PutApi20241001ResourcesPostsPostsIdBodyParam, metadata: types.PutApi20241001ResourcesPostsPostsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesPostsPostsIdResponse200>>;
    /**
     * Deletes a Post
     *
     * @summary Deletes a Post
     */
    deleteApi20241001ResourcesPostsPostsId(metadata: types.DeleteApi20241001ResourcesPostsPostsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesPostsPostsIdResponse200>>;
    /**
     * ###### **What does it do?**
     * This endpoint reads and retrieves a list of expense records. You can utilize URL
     * parameters to filter the results.
     * ###### **What params does it accept?**
     *
     *   - `ids`: retrieve only the expenses records that matches the `ids` passed in the
     * request.
     *   - `project_ids`: Retrieve only the expenses records related to any `project_ids`
     * passed in the request.
     *   - `subproject_ids`: retrieve only the expenses records related with any
     * `subproject_ids` passed in the request.
     *   - `expense_ids`: retrieve only the expenses records related with any `expense_ids`
     * passed in the request.
     *   - `start_date` and `end_date`: this parameter is needed to filter expenses records
     * created in a particular time range.
     *   - `updated_after`: this parameter is needed to filter expense records updated after
     * the given date.
     *
     * ###### **Is it related to other entities?**
     * A `expense_record` is related to a `project_worker` and a `expense`. Optionally, it can
     * be related to a `subproject`.
     * ###### **Who can use it?**
     * Only companies who have enabled `projects_management` feature, `expenses` bundle and
     * users with the permission to read `expense_record`.
     *
     * @summary Reads all Expense records
     */
    getApi20241001ResourcesProject_managementExpense_records(metadata?: types.GetApi20241001ResourcesProjectManagementExpenseRecordsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesProjectManagementExpenseRecordsResponse200>>;
    /**
     * ###### **What does it do?**
     * This endpoint reads and retrieves a list of expense records. You can utilize URL
     * parameters to filter the results.
     * ###### **What params does it accept?**
     *
     *   - `ids`: retrieve only the expenses records that matches the `ids` passed in the
     * request.
     *   - `project_ids`: Retrieve only the expenses records related to any `project_ids`
     * passed in the request.
     *   - `subproject_ids`: retrieve only the expenses records related with any
     * `subproject_ids` passed in the request.
     *   - `expense_ids`: retrieve only the expenses records related with any `expense_ids`
     * passed in the request.
     *   - `start_date` and `end_date`: this parameter is needed to filter expenses records
     * created in a particular time range.
     *   - `updated_after`: this parameter is needed to filter expense records updated after
     * the given date.
     *
     * ###### **Is it related to other entities?**
     * A `expense_record` is related to a `project_worker` and a `expense`. Optionally, it can
     * be related to a `subproject`.
     * ###### **Who can use it?**
     * Only companies who have enabled `projects_management` feature, `expenses` bundle and
     * users with the permission to read `expense_record`.
     *
     * @summary Reads a single Expense record
     */
    getApi20241001ResourcesProject_managementExpense_recordsId(metadata: types.GetApi20241001ResourcesProjectManagementExpenseRecordsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesProjectManagementExpenseRecordsIdResponse200>>;
    /**
     * ###### **What does it do?**
     *
     *   This will generate an export of the type **"Project's expenses"**. You will have to
     * pass the start and end date to determine the range for which htis information will be
     * exported; as well as the projects ids to get the information of specifically given
     * projects.
     *
     * ###### **What params does it accept?**
     *   - `start_date`: It's mandatory to pass this data, being start date to delimit the
     * range of information exported.
     *   - `end_date`: It's mandatory to pass this data, corresponding to an end date for the
     * date range of data to be exported.
     *   - `project_ids`: Mandatory data to pass to the export, specifying the projects to be
     * exported from.
     *
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with the
     * permission of read projects.
     *
     * @summary Reads all Exportable expenses
     */
    getApi20241001ResourcesProject_managementExportable_expenses(metadata: types.GetApi20241001ResourcesProjectManagementExportableExpensesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesProjectManagementExportableExpensesResponse200>>;
    /**
     * ###### **What does it do?**
     *
     *   This generates the exports type **"Project's total time tracked"** or the **"Project's
     * total time tracked by date"** depending on the params passed in the request. You can can
     * select which projects' info to export or to export all the projects, also you will be
     * able to select in which `time_format` you want to present the minutes worked on
     * projects. Take into account that It's mandatory to pass `start_date` and `end_date` to
     * defined a date range from which the information will be exported.
     *
     * ###### **What params does it accept?**
     *   - `start_date`: is mandatory to pass a start date to generate export.
     *   - `end_date`: is mandatory to pass an end date to generate export.
     *   - `project_ids`: optional. It will generate an export only with the info of the
     * projects required.
     *   - `time_format`: optional, we can pass the format of time the export will be showing.
     * The values accepted have to be:
     *     - `'minutes'`: The export will be generated in `CSV`, and the hours will be render
     * in **minutes**. Example: **10.5667** (mm).
     *     - `'hours and minutes'`: The export will be generated in `Excel`, and the hours will
     * be render **hours with decimals**. Example: **14:35:00** (hh:mm:ss).
     *     - `'hours'`: The export will be generated in `Excel`, and the hours will be render
     * in **hours with decimals**. Example: **8.17**
     *   - `include_date`: optional.
     *     - If `true`: Will be equal to choose: **Project's total time tracked by date**
     * export type in the UI. Which means that the information exported will include every date
     * which is contained in the date range passed in the request.
     *     - If `false`: Will be equal to choose: **Project's total time tracked** export type
     * in the UI.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with the
     * permission of read projects.
     *
     * @summary Reads all Exportable projects
     */
    getApi20241001ResourcesProject_managementExportable_projects(metadata: types.GetApi20241001ResourcesProjectManagementExportableProjectsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesProjectManagementExportableProjectsResponse200>>;
    /**
     * ###### **What does it do?**
     * This endpoint can be used to retrieve a list of `flexible time records`. To fetch
     * *flexible time record comments*, you have to use this
     * [endpoint](https://apidoc.factorialhr.com/v2.0/reference/get_api-v2-resources-project-management-flexible-time-record-comments)
     * and pass the `flexible_time_record_id` as a param.
     * ###### **What params does it accept?**
     *
     *   - `ids`: retrieve only the `flexible time records` that matches the `ids` passed in
     * the request.
     *   - `project_worker_ids`: retrieve only the `flexible time records` assigned to any
     * `project_worker` specified in the request.
     *   - `starts_on`: filter `flexible time records` that started **later** the given param.
     *   - `ends_on`: filter `flexible time records` that started **before** the given param.
     *   - `updated_after`: this parameter is needed to filter flexible time records created or
     * updated after a date.
     *
     * ###### **Is it related to other entities?**
     * A `flexible time record` is always related to a `project worker` and can optionally be
     * related to a `subproject`.
     * ###### **Who can use it?**
     * Only companies who have enabled `projects_flexible_tracking` feature and users with the
     * permission to read flexible time records.
     *
     * @summary Reads all Flexible time records
     */
    getApi20241001ResourcesProject_managementFlexible_time_records(metadata: types.GetApi20241001ResourcesProjectManagementFlexibleTimeRecordsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesProjectManagementFlexibleTimeRecordsResponse200>>;
    /**
     * ###### **What does it do?**
     * This endpoint allows the creation of a new `flexible time record` with the given params.
     * A flexible time record is used to impute time to a project, without having an strict
     * relation with an attendance's shift. For a successful creation; the given `project` must
     * be `active` and the given `project worker` must be `assigned`.
     * ###### **What params does it accept?**
     *
     *   - `project_worker_id`: the `project worker` that will be related to the `flexible time
     * record`.
     *   - `date`: the date that occured the `flexible time record`.
     *   - `imputed minutes`: the amount of time that has to be imputed, in minutes.
     *   - `subproject_id`: optionally, the id of the `subproject` worked on.
     *
     * ###### **Who can use it?**
     * Only companies who have enabled `projects_flexible_tracking` feature and users with the
     * permission to create flexible time records.
     *
     * @summary Creates a Flexible time record
     */
    postApi20241001ResourcesProject_managementFlexible_time_records(body: types.PostApi20241001ResourcesProjectManagementFlexibleTimeRecordsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesProjectManagementFlexibleTimeRecordsResponse201>>;
    /**
     * ###### **What does it do?**
     * This endpoint can be used to retrieve a list of `flexible time records`. To fetch
     * *flexible time record comments*, you have to use this
     * [endpoint](https://apidoc.factorialhr.com/v2.0/reference/get_api-v2-resources-project-management-flexible-time-record-comments)
     * and pass the `flexible_time_record_id` as a param.
     * ###### **What params does it accept?**
     *
     *   - `ids`: retrieve only the `flexible time records` that matches the `ids` passed in
     * the request.
     *   - `project_worker_ids`: retrieve only the `flexible time records` assigned to any
     * `project_worker` specified in the request.
     *   - `starts_on`: filter `flexible time records` that started **later** the given param.
     *   - `ends_on`: filter `flexible time records` that started **before** the given param.
     *   - `updated_after`: this parameter is needed to filter flexible time records created or
     * updated after a date.
     *
     * ###### **Is it related to other entities?**
     * A `flexible time record` is always related to a `project worker` and can optionally be
     * related to a `subproject`.
     * ###### **Who can use it?**
     * Only companies who have enabled `projects_flexible_tracking` feature and users with the
     * permission to read flexible time records.
     *
     * @summary Reads a single Flexible time record
     */
    getApi20241001ResourcesProject_managementFlexible_time_recordsId(metadata: types.GetApi20241001ResourcesProjectManagementFlexibleTimeRecordsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesProjectManagementFlexibleTimeRecordsIdResponse200>>;
    /**
     * ###### **What does it do?**
     * This endpoint is used to update the amount of time that has been imputed for the
     * `flexible time record`.
     * ###### **What params does it accept?**
     *
     *   - `imputed minutes`: the new amount of time that has to be imputed, in minutes.
     *
     * ###### **Who can use it?**
     * Only companies who have enabled `projects_flexible_tracking` feature and users with the
     * permission to update flexible time records.
     *
     * @summary Updates a Flexible time record
     */
    putApi20241001ResourcesProject_managementFlexible_time_recordsId(body: types.PutApi20241001ResourcesProjectManagementFlexibleTimeRecordsIdBodyParam, metadata: types.PutApi20241001ResourcesProjectManagementFlexibleTimeRecordsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesProjectManagementFlexibleTimeRecordsIdResponse200>>;
    /**
     * ###### **What does it do?**
     * This endpoint is used to delete a `flexible time record`.
     * ###### **What params does it accept?**
     *
     *   - `id`: the id of the `flexible time record` willing to be deleted.
     *
     * ###### **Who can use it?**
     * Only companies who have enabled `projects_flexible_tracking` feature and users with the
     * permission to delete flexible time records.
     *
     * @summary Deletes a Flexible time record
     */
    deleteApi20241001ResourcesProject_managementFlexible_time_recordsId(metadata: types.DeleteApi20241001ResourcesProjectManagementFlexibleTimeRecordsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesProjectManagementFlexibleTimeRecordsIdResponse200>>;
    /**
     * ###### **What does it do?**
     * This endpoint can be used to read a 'flexible time record comment'
     * ###### **What params does it accept?**
     *
     *   - 'flexible_time_record_id':  the `flexible time record` to which the comment to be
     * read is associated. Must be an integer.
     *   - 'ids': the comment id to be fetched. Has to be an array of integers.
     * ###### **Who can use it?**
     * Only companies who have enabled `projects_flexible_tracking` feature.
     *
     * @summary Reads all Flexible time record comments
     */
    getApi20241001ResourcesProject_managementFlexible_time_record_comments(metadata?: types.GetApi20241001ResourcesProjectManagementFlexibleTimeRecordCommentsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesProjectManagementFlexibleTimeRecordCommentsResponse200>>;
    /**
     * ###### **What does it do?**
     * This endpoint can be used to create a comment for an already existing `flexible time
     * record`. In order to retrieve the comment, you can use the `read` endpoint for `flexible
     * time records`.
     * ###### **What params does it accept?**
     *
     *   - `content`: the content itself for the comment to be created.
     *   - `flexible_time_record_id`: the `flexible time record` to which the comment should be
     * associated.
     *
     * ###### **Is it related to other entities?**
     * A `flexible time record comment` is always related to a `flexible time record`.
     * ###### **Who can use it?**
     * Only companies who have enabled `projects_flexible_tracking` feature.
     *
     * @summary Creates a Flexible time record comment
     */
    postApi20241001ResourcesProject_managementFlexible_time_record_comments(body: types.PostApi20241001ResourcesProjectManagementFlexibleTimeRecordCommentsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesProjectManagementFlexibleTimeRecordCommentsResponse201>>;
    /**
     * ###### **What does it do?**
     * This endpoint can be used to read a 'flexible time record comment'
     * ###### **What params does it accept?**
     *
     *   - 'flexible_time_record_id':  the `flexible time record` to which the comment to be
     * read is associated. Must be an integer.
     *   - 'ids': the comment id to be fetched. Has to be an array of integers.
     * ###### **Who can use it?**
     * Only companies who have enabled `projects_flexible_tracking` feature.
     *
     * @summary Reads a single Flexible time record comment
     */
    getApi20241001ResourcesProject_managementFlexible_time_record_commentsId(metadata: types.GetApi20241001ResourcesProjectManagementFlexibleTimeRecordCommentsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesProjectManagementFlexibleTimeRecordCommentsIdResponse200>>;
    /**
     * ###### **What does it do?**
     * This endpoint can be used to delete a `flexible time record comment`.
     * ###### **What params does it accept?**
     *
     *   - `flexible_time_record_id`: the `flexible time record` to which the comment to be
     * deleted is associated.
     *
     * ###### **Who can use it?**
     * Only companies who have enabled `projects_flexible_tracking` feature.
     *
     * @summary Delete by flexible time records a Flexible time record comment
     */
    postApi20241001ResourcesProject_managementFlexible_time_record_commentsDelete_by_flexible_time_record(body: types.PostApi20241001ResourcesProjectManagementFlexibleTimeRecordCommentsDeleteByFlexibleTimeRecordBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesProjectManagementFlexibleTimeRecordCommentsDeleteByFlexibleTimeRecordResponse200>>;
    /**
     * ###### **What does it do?**
     * This endpoint can be used to update the content for a `flexible time record comment`.
     * ###### **What params does it accept?**
     *
     *   - `content`: the new content for the comment.
     *   - `flexible_time_record_id`: the `flexible time record` to which the comment to be
     * updated is associated.
     *
     * ###### **Who can use it?**
     * Only companies who have enabled `projects_flexible_tracking` feature.
     *
     * @summary Update by flexible time records a Flexible time record comment
     */
    postApi20241001ResourcesProject_managementFlexible_time_record_commentsUpdate_by_flexible_time_record(body: types.PostApi20241001ResourcesProjectManagementFlexibleTimeRecordCommentsUpdateByFlexibleTimeRecordBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesProjectManagementFlexibleTimeRecordCommentsUpdateByFlexibleTimeRecordResponse200>>;
    /**
     * ###### **What does it do?** This reads the data of projects, and retrieves the
     * information based on the permissions:
     *
     *   - If the user has the `team_leader` permission, he will only be able to read the
     * projects that he is the team leader.
     *   - If the user has the `reportees` permission, he will only be able to read the
     * projects that he is the team leader or the projects that he is a team member.
     *   - If the user has `everyone` permission, he will be able to read all projects.
     *   - If the user has the `owned` permission, he will only be able to read the projects
     * that he is the assigned.
     *
     * ###### **Is it related to other entities?** A project is always related to a company, so
     * you can use the query params to list only the projects that are related to a specific
     * company. ###### **Who can use it?** Only companies who have enabled the
     * `projects_management` feature and users with the permission of read projects.
     *
     * @summary Reads all Projects
     */
    getApi20241001ResourcesProject_managementProjects(metadata: types.GetApi20241001ResourcesProjectManagementProjectsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesProjectManagementProjectsResponse200>>;
    /**
     * ###### **What does it do?**
     * This creates a new project. By default, the project will be created with the status
     * `active`.
     * ###### **What body params do you need?**
     *
     *   - `name`: is mandatory to pass a name of the project.
     *   - `code`: optional unique code for the project to be identifiable and searchable.
     *   - `start_date`: optional start date for the project. If given must be in iso-8601
     * format (YYYY-MM-DD).
     *   - `due_date`: optional due date for the project. If given must be in iso-8601 format
     * (YYYY-MM-DD).
     *   - `status`: a project can have the status `active` or `closed`. By default, the
     * project will be created with the status `active`.
     *   - `employees_assignment`: optional param to define the kind of assignation the project
     * has. Its possible values are: [`manual`, `company`]. A project can have `manual`
     * assignation or can be defined to be assigned to the whole `company`. Defaults to
     * `manual`.
     *
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with the
     * permission of create projects.
     *
     * @summary Creates a Project
     */
    postApi20241001ResourcesProject_managementProjects(body: types.PostApi20241001ResourcesProjectManagementProjectsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesProjectManagementProjectsResponse201>>;
    /**
     * ###### **What does it do?** This reads the data of projects, and retrieves the
     * information based on the permissions:
     *
     *   - If the user has the `team_leader` permission, he will only be able to read the
     * projects that he is the team leader.
     *   - If the user has the `reportees` permission, he will only be able to read the
     * projects that he is the team leader or the projects that he is a team member.
     *   - If the user has `everyone` permission, he will be able to read all projects.
     *   - If the user has the `owned` permission, he will only be able to read the projects
     * that he is the assigned.
     *
     * ###### **Is it related to other entities?** A project is always related to a company, so
     * you can use the query params to list only the projects that are related to a specific
     * company. ###### **Who can use it?** Only companies who have enabled the
     * `projects_management` feature and users with the permission of read projects.
     *
     * @summary Reads a single Project
     */
    getApi20241001ResourcesProject_managementProjectsId(metadata: types.GetApi20241001ResourcesProjectManagementProjectsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesProjectManagementProjectsIdResponse200>>;
    /**
     * ###### **What does it do?**
     * This updates a project with the given params.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with a role
     * in the project.
     *
     * @summary Updates a Project
     */
    putApi20241001ResourcesProject_managementProjectsId(body: types.PutApi20241001ResourcesProjectManagementProjectsIdBodyParam, metadata: types.PutApi20241001ResourcesProjectManagementProjectsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesProjectManagementProjectsIdResponse200>>;
    /**
     * ###### **What does it do?**
     * This endpoint can be used to set a project as `Active`.
     * ###### **What body params do you need?**
     *   - `id`: mandatory. The id of the project aimed to be activated.
     *
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with a role
     * in the project.
     *
     * @summary Activates a Project
     */
    postApi20241001ResourcesProject_managementProjectsActivate(body: types.PostApi20241001ResourcesProjectManagementProjectsActivateBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesProjectManagementProjectsActivateResponse200>>;
    /**
     * ###### **What does it do?** **DEPRECATED**; this endpoint will be removed soon.
     * This changes assignment type to a project.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with the
     * permission of assign employees.
     *
     * @summary Change assignments a Project
     */
    postApi20241001ResourcesProject_managementProjectsChange_assignment(body: types.PostApi20241001ResourcesProjectManagementProjectsChangeAssignmentBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesProjectManagementProjectsChangeAssignmentResponse200>>;
    /**
     * ###### **What does it do?**
     * This endpoint can be used to set a project as `Closed`.
     * ###### **What body params do you need?**
     *   - `id`: mandatory. The id of the project aimed to be closed.
     *
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with a role
     * in the project.
     *
     * @summary Closes a Project
     */
    postApi20241001ResourcesProject_managementProjectsClose(body: types.PostApi20241001ResourcesProjectManagementProjectsCloseBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesProjectManagementProjectsCloseResponse200>>;
    /**
     * ###### **What does it do?**
     * This soft deletes a project.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with the
     * permission of delete projects.
     *
     * @summary Soft deletes a Project
     */
    postApi20241001ResourcesProject_managementProjectsSoft_delete(body: types.PostApi20241001ResourcesProjectManagementProjectsSoftDeleteBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesProjectManagementProjectsSoftDeleteResponse200>>;
    /**
     * ###### **What does it do?**
     * This reads the data of projects tasks, and retrieves the information based on
     * permissions:
     *
     *   - If the user can see all company projects for everybody, the endpoint will return a
     * list with the tasks from the related projects.
     *   - If the user can create projects for everybody, the endpoint will return a list with
     * the tasks from the related projects.
     *   - If the user has any role (editor or owner) on the project, the endpoint will return
     * a list with the tasks from the related projects where the user has that role.
     *   - If those conditions are not matched, the endpoint will return an empty list.
     *
     * ###### **What params does it accept?**
     *
     *   - `ids`: retrieve only the projects tasks that matches the ids passed in the request.
     *   - `project_ids`: retrieve only the projects tasks from the projects that matched the
     * ids passed in the request.
     *   - `subproject_ids`: retrieve only the projects tasks from the subprojects that matched
     * the ids passed in the request.
     *   - `completed`: boolean - retrieve only the projects tasks with the status completed.
     *   - `overdue`: boolean - retrieve only the projects tasks that are overdue.
     *   - `search`:  retrieve only the projects tasks that their name match with the content
     * passed as argument.
     *
     * ###### **Who can use it?**
     *
     *   Only companies who have enabled the `projects_management` feature and users with the
     * permission of read projects.
     *
     * @summary Reads all Project tasks
     */
    getApi20241001ResourcesProject_managementProject_tasks(metadata?: types.GetApi20241001ResourcesProjectManagementProjectTasksMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesProjectManagementProjectTasksResponse200>>;
    /**
     * ###### **What does it do?**
     * This creates a new project task. It will also create a new normal task in the system
     * linked with the project task.
     * ###### **What body params do you need?**
     *
     *   - `name`: is mandatory to pass a name of the project task.
     *   - `project_id`: is mandatory to pass the project_id where the task belongs.
     *   - `status`: project task status. 'To do' by default.
     *   - `content`: (optional) content of the project task.
     *   - `starts_on`: (optional) date when starts the project task.
     *   - `follow_up`: (optional) boolean - if true, status changes related to the project
     * will notify the author.
     *   - `due_on`: (optional) the date when the project task will be due.
     *   - `assignee_ids`: (optional) array of ids of the assignees to the project task.
     *   - `subproject_id`: (optional) the id from the subproject where the project task
     * belongs.
     *   - `files`: (optional) array of files that will be attached to the project task
     *
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with the
     * permission of create projects.
     *
     * @summary Creates a Project task
     */
    postApi20241001ResourcesProject_managementProject_tasks(body: types.PostApi20241001ResourcesProjectManagementProjectTasksBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesProjectManagementProjectTasksResponse201>>;
    /**
     * ###### **What does it do?**
     * This reads the data of projects tasks, and retrieves the information based on
     * permissions:
     *
     *   - If the user can see all company projects for everybody, the endpoint will return a
     * list with the tasks from the related projects.
     *   - If the user can create projects for everybody, the endpoint will return a list with
     * the tasks from the related projects.
     *   - If the user has any role (editor or owner) on the project, the endpoint will return
     * a list with the tasks from the related projects where the user has that role.
     *   - If those conditions are not matched, the endpoint will return an empty list.
     *
     * ###### **What params does it accept?**
     *
     *   - `ids`: retrieve only the projects tasks that matches the ids passed in the request.
     *   - `project_ids`: retrieve only the projects tasks from the projects that matched the
     * ids passed in the request.
     *   - `subproject_ids`: retrieve only the projects tasks from the subprojects that matched
     * the ids passed in the request.
     *   - `completed`: boolean - retrieve only the projects tasks with the status completed.
     *   - `overdue`: boolean - retrieve only the projects tasks that are overdue.
     *   - `search`:  retrieve only the projects tasks that their name match with the content
     * passed as argument.
     *
     * ###### **Who can use it?**
     *
     *   Only companies who have enabled the `projects_management` feature and users with the
     * permission of read projects.
     *
     * @summary Reads a single Project task
     */
    getApi20241001ResourcesProject_managementProject_tasksId(metadata: types.GetApi20241001ResourcesProjectManagementProjectTasksIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesProjectManagementProjectTasksIdResponse200>>;
    /**
     * ###### **What does it do?**
     * This update a project task.
     * ###### **What body params do you need?**
     *   - `id`: is mandatory to pass the id from the project task.
     *   - `name`: is mandatory to pass a name of the project task.
     *   - `project_id`: is mandatory to pass the project_id where the task belongs.
     *   - `content`: (optional) content of the project task.
     *   - `starts_on`: (optional) date when starts the project task.
     *   - `follow_up`: (optional) boolean - if true, status changes related to the project
     * will notify the author.
     *   - `due_on`: (optional) the date when the project task will be due.
     *   - `assignee_ids`: (optional) array of ids of the assignees to the project task.
     *   - `subproject_id`: (optional) the id from the subproject where the project task
     * belongs.
     *   - `files`: (optional) array of files that will be attached to the project task
     *   - `status`: (optional) project task status. 'To do' by default.
     *
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with the
     * permission of create projects.
     *
     * @summary Updates a Project task
     */
    putApi20241001ResourcesProject_managementProject_tasksId(body: types.PutApi20241001ResourcesProjectManagementProjectTasksIdBodyParam, metadata: types.PutApi20241001ResourcesProjectManagementProjectTasksIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesProjectManagementProjectTasksIdResponse200>>;
    /**
     * ###### **What does it do?**
     * This will delete the project tasks with the ids passed as an argument.
     * ###### **What params does it accept?**
     *
     *   - `ids`: Project task ids
     *
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with the
     * permission of read projects.
     *
     * @summary Bulk destroys a Project task
     */
    postApi20241001ResourcesProject_managementProject_tasksBulk_destroy(body: types.PostApi20241001ResourcesProjectManagementProjectTasksBulkDestroyBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesProjectManagementProjectTasksBulkDestroyResponse200>>;
    /**
     * ###### **What does it do?**
     * This will create new project tasks with the same attributes as the project task ids
     * passed as an argument.
     * ###### **What params does it accept?**
     *
     *   - `ids`: Project task ids
     *
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with the
     * permission of read projects.
     *
     * @summary Bulk duplicates a Project task
     */
    postApi20241001ResourcesProject_managementProject_tasksBulk_duplicate(body: types.PostApi20241001ResourcesProjectManagementProjectTasksBulkDuplicateBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesProjectManagementProjectTasksBulkDuplicateResponse200>>;
    /**
     * ###### **What does it do?**
     * This endpoint reads and retrieves a list of project workers. You can utilize URL
     * parameters to filter the results.
     * ###### **Is it related to other entities?**
     * A project_worker is always related to a project and a employee. Only a `project worker`
     * is able to add time to a project using the `time_record` entity.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with the
     * permission to read project workers.
     *
     * @summary Reads all Project workers
     */
    getApi20241001ResourcesProject_managementProject_workers(metadata?: types.GetApi20241001ResourcesProjectManagementProjectWorkersMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesProjectManagementProjectWorkersResponse200>>;
    /**
     * ###### **What does it do?**
     * This creates a new project worker. By default, the project worker will be created with
     * the status `assigned`.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with a role
     * in the given project.
     *
     * @summary Creates a Project worker
     */
    postApi20241001ResourcesProject_managementProject_workers(body: types.PostApi20241001ResourcesProjectManagementProjectWorkersBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesProjectManagementProjectWorkersResponse201>>;
    /**
     * ###### **What does it do?**
     * This endpoint reads and retrieves a list of project workers. You can utilize URL
     * parameters to filter the results.
     * ###### **Is it related to other entities?**
     * A project_worker is always related to a project and a employee. Only a `project worker`
     * is able to add time to a project using the `time_record` entity.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with the
     * permission to read project workers.
     *
     * @summary Reads a single Project worker
     */
    getApi20241001ResourcesProject_managementProject_workersId(metadata: types.GetApi20241001ResourcesProjectManagementProjectWorkersIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesProjectManagementProjectWorkersIdResponse200>>;
    /**
     * ###### **What does it do?**
     * This method is used to specify a set of employees that should be assigned as a result of
     * the execution. All the employees in the list will be assigned and all others will be
     * unassigned.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with a role
     * in the given project.
     *
     * @summary Bulk assigns a Project worker
     */
    postApi20241001ResourcesProject_managementProject_workersBulk_assign(body: types.PostApi20241001ResourcesProjectManagementProjectWorkersBulkAssignBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesProjectManagementProjectWorkersBulkAssignResponse200>>;
    /**
     * Bulk creates a Project worker
     *
     * @summary Bulk creates a Project worker
     */
    postApi20241001ResourcesProject_managementProject_workersBulk_create(body: types.PostApi20241001ResourcesProjectManagementProjectWorkersBulkCreateBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesProjectManagementProjectWorkersBulkCreateResponse200>>;
    /**
     * Unassigns a Project worker
     *
     * @summary Unassigns a Project worker
     */
    postApi20241001ResourcesProject_managementProject_workersUnassign(body: types.PostApi20241001ResourcesProjectManagementProjectWorkersUnassignBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesProjectManagementProjectWorkersUnassignResponse200>>;
    /**
     * ###### **What does it do?**
     * This reads all subprojects created
     * ###### **What params does it accept?**
     *
     *   - `ids`: retrieve only the subprojects that matches the ids passed in the request.\n
     *   - `include_inputed_minutes`: if `true` we will perform the minutes calculations and
     * will be return the total `inputed_minutes`. If the param is not passed in the request,
     * its default value is `FALSE` so it will return `inputed_minutes: 0` and no minutes
     * calculations will be performed.
     *   - `updated_after`: this parameter is needed to filter subprojects created or updated
     * after a date.
     *
     * ###### **Is it related to other entities?**
     * A subproject is always related to a project, so you can use the query params to list
     * only the subprojects that are related to a specific project.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_with_subprojects` feature and users with
     * the permission of read subprojects.
     *
     * @summary Reads all Subprojects
     */
    getApi20241001ResourcesProject_managementSubprojects(metadata?: types.GetApi20241001ResourcesProjectManagementSubprojectsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesProjectManagementSubprojectsResponse200>>;
    /**
     * ###### **What does it do?**
     * This creates a new subproject.
     * ###### **Is it related to other entities?**
     * A subproject is always related to a project.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_with_subprojects` feature and users with a
     * role in the project owning the subproject.
     *
     * @summary Creates a Subproject
     */
    postApi20241001ResourcesProject_managementSubprojects(body: types.PostApi20241001ResourcesProjectManagementSubprojectsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesProjectManagementSubprojectsResponse201>>;
    /**
     * ###### **What does it do?**
     * This reads all subprojects created
     * ###### **What params does it accept?**
     *
     *   - `ids`: retrieve only the subprojects that matches the ids passed in the request.\n
     *   - `include_inputed_minutes`: if `true` we will perform the minutes calculations and
     * will be return the total `inputed_minutes`. If the param is not passed in the request,
     * its default value is `FALSE` so it will return `inputed_minutes: 0` and no minutes
     * calculations will be performed.
     *   - `updated_after`: this parameter is needed to filter subprojects created or updated
     * after a date.
     *
     * ###### **Is it related to other entities?**
     * A subproject is always related to a project, so you can use the query params to list
     * only the subprojects that are related to a specific project.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_with_subprojects` feature and users with
     * the permission of read subprojects.
     *
     * @summary Reads a single Subproject
     */
    getApi20241001ResourcesProject_managementSubprojectsId(metadata: types.GetApi20241001ResourcesProjectManagementSubprojectsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesProjectManagementSubprojectsIdResponse200>>;
    /**
     * ###### **What does it do?**
     * This deletes a subproject.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_with_subprojects` feature and users with a
     * role in the project owning the subproject.
     *
     * @summary Deletes a Subproject
     */
    deleteApi20241001ResourcesProject_managementSubprojectsId(metadata: types.DeleteApi20241001ResourcesProjectManagementSubprojectsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesProjectManagementSubprojectsIdResponse200>>;
    /**
     * ###### **What does it do?**
     * This renames a subproject.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_with_subprojects` feature and users with a
     * role in the project owning the subproject.
     *
     * @summary Renames a Subproject
     */
    postApi20241001ResourcesProject_managementSubprojectsRename(body: types.PostApi20241001ResourcesProjectManagementSubprojectsRenameBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesProjectManagementSubprojectsRenameResponse200>>;
    /**
     * ###### **What does it do?**
     * This endpoint reads and retrieves a list of time records. You can utilize URL parameters
     * to filter the results.
     * ###### **What params does it accept?**
     *
     *   - `ids`: retrieve only the time records that matches the `ids` passed in the request.
     *   - `project_workers_ids`: Retrieve only the time records assigned to any
     * `project_workers_ids` passed in the request.
     *   - `subproject_ids`: retrieve only the time records related with any `subproject_ids`
     * passed in the request.
     *   - `attendance_shift_ids`: retrieve only the time records related with any
     * `attendance_shift_ids` passed in the request.
     *   - `employee_ids`: ⚠️ This param, will be deprecated soon. **Please use
     * `project_worker_ids` param instead.**
     *   - `month`: Filter time records created in a specific month of the year.
     *   - `year`: To be used with the `month` parameter to filter time records created in a
     * particular period.
     *   - `updated_after`: this parameter is needed to filter time records created or updated
     * after a date.
     *
     * ###### **Is it related to other entities?**
     * A `time_record` is mandatory related to a `project_worker_id` and an
     * `attendance_shift_id`. Optionally, it can be related to a subproject.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with the
     * permission to read time_records.
     *
     * @summary Reads all Time records
     */
    getApi20241001ResourcesProject_managementTime_records(metadata?: types.GetApi20241001ResourcesProjectManagementTimeRecordsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesProjectManagementTimeRecordsResponse200>>;
    /**
     * ###### **What does it do?**
     * "This endpoint is used to create time records. A time record is an entity that
     * establishes a mandatory relationship between `project_worker` and `attendance_shift_id`,
     * and optionally with `subproject`. For a successful creation of a `time_record`, the
     * `project_worker` must be **assigned**, and the associated `project` must be **active**."
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with the
     * permission to create `time_records`.
     *
     * @summary Creates a Time record
     */
    postApi20241001ResourcesProject_managementTime_records(body: types.PostApi20241001ResourcesProjectManagementTimeRecordsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesProjectManagementTimeRecordsResponse201>>;
    /**
     * ###### **What does it do?**
     * This endpoint reads and retrieves a list of time records. You can utilize URL parameters
     * to filter the results.
     * ###### **What params does it accept?**
     *
     *   - `ids`: retrieve only the time records that matches the `ids` passed in the request.
     *   - `project_workers_ids`: Retrieve only the time records assigned to any
     * `project_workers_ids` passed in the request.
     *   - `subproject_ids`: retrieve only the time records related with any `subproject_ids`
     * passed in the request.
     *   - `attendance_shift_ids`: retrieve only the time records related with any
     * `attendance_shift_ids` passed in the request.
     *   - `employee_ids`: ⚠️ This param, will be deprecated soon. **Please use
     * `project_worker_ids` param instead.**
     *   - `month`: Filter time records created in a specific month of the year.
     *   - `year`: To be used with the `month` parameter to filter time records created in a
     * particular period.
     *   - `updated_after`: this parameter is needed to filter time records created or updated
     * after a date.
     *
     * ###### **Is it related to other entities?**
     * A `time_record` is mandatory related to a `project_worker_id` and an
     * `attendance_shift_id`. Optionally, it can be related to a subproject.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with the
     * permission to read time_records.
     *
     * @summary Reads a single Time record
     */
    getApi20241001ResourcesProject_managementTime_recordsId(metadata: types.GetApi20241001ResourcesProjectManagementTimeRecordsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesProjectManagementTimeRecordsIdResponse200>>;
    /**
     * Deletes a Time record
     *
     * @summary Deletes a Time record
     */
    deleteApi20241001ResourcesProject_managementTime_recordsId(metadata: types.DeleteApi20241001ResourcesProjectManagementTimeRecordsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesProjectManagementTimeRecordsIdResponse200>>;
    /**
     * ###### **What does it do?**
     * This endpoint is used to bulk delete all the time records in a particular `date` for a
     * specific `project_worker_id`.
     *
     * @summary Bulk deletes a Time record
     */
    postApi20241001ResourcesProject_managementTime_recordsBulk_delete(body: types.PostApi20241001ResourcesProjectManagementTimeRecordsBulkDeleteBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesProjectManagementTimeRecordsBulkDeleteResponse200>>;
    /**
     * ###### **What does it do?**
     * This versatile endpoint allows for the creation, update, or deletion of a time record
     * associated with an `attendance_shift_id`. To achieve this, provide an array of items
     * with the following structure:
     *
     *   ```json
     *     [{
     *       "time_record_id": number | null,
     *       "attendance_shift_id": number | null,
     *       "project_worker_id": number | null,
     *       "subproject_id": number | null
     *     }]
     *   ```
     *
     *   - If no `time_record_id` provided, a created will be performed with the other data
     * that will be required (except for `subproject_id`, that is always optional).
     *   - If `time_record_id but no other data provided, then the action will be a **delete**.
     *   - If `time_record_id` and more data, then it's an **update**.
     *
     * Please note: The relationship between `time_record` and `attendance_shift` is unique. In
     * the provided array of items, if two items have exactly the same `attendance_shift_id`,
     * only the last action specified will be executed, **unless the first action is a delete
     * and the second one an update**.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature.
     *
     * @summary Bulk processes a Time record
     */
    postApi20241001ResourcesProject_managementTime_recordsBulk_process(body: types.PostApi20241001ResourcesProjectManagementTimeRecordsBulkProcessBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesProjectManagementTimeRecordsBulkProcessResponse200>>;
    /**
     * ###### **What does it do?**
     * This endpoint is used to change the project that an employee (`project_worker`) has
     * assigned to an `attendance_shift`.
     *
     * @summary Update project workers a Time record
     */
    postApi20241001ResourcesProject_managementTime_recordsUpdate_project_worker(body: types.PostApi20241001ResourcesProjectManagementTimeRecordsUpdateProjectWorkerBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesProjectManagementTimeRecordsUpdateProjectWorkerResponse200>>;
    /**
     * Reads all Shifts
     *
     * @summary Reads all Shifts
     */
    getApi20241001ResourcesShift_managementShifts(metadata?: types.GetApi20241001ResourcesShiftManagementShiftsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesShiftManagementShiftsResponse200>>;
    /**
     * Creates a Shift
     *
     * @summary Creates a Shift
     */
    postApi20241001ResourcesShift_managementShifts(body: types.PostApi20241001ResourcesShiftManagementShiftsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesShiftManagementShiftsResponse201>>;
    /**
     * Reads a single Shift
     *
     * @summary Reads a single Shift
     */
    getApi20241001ResourcesShift_managementShiftsId(metadata: types.GetApi20241001ResourcesShiftManagementShiftsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesShiftManagementShiftsIdResponse200>>;
    /**
     * Deletes a Shift
     *
     * @summary Deletes a Shift
     */
    deleteApi20241001ResourcesShift_managementShiftsId(metadata: types.DeleteApi20241001ResourcesShiftManagementShiftsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesShiftManagementShiftsIdResponse200>>;
    /**
     * Bulk deletes a Shift
     *
     * @summary Bulk deletes a Shift
     */
    postApi20241001ResourcesShift_managementShiftsBulk_delete(body: types.PostApi20241001ResourcesShiftManagementShiftsBulkDeleteBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesShiftManagementShiftsBulkDeleteResponse200>>;
    /**
     * This endpoint retrieves all tasks created.
     *
     * @summary Reads all Tasks
     */
    getApi20241001ResourcesTasksTasks(metadata?: types.GetApi20241001ResourcesTasksTasksMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTasksTasksResponse200>>;
    /**
     * This endpoint creates a new task.
     *
     * @summary Creates a Task
     */
    postApi20241001ResourcesTasksTasks(body: types.PostApi20241001ResourcesTasksTasksBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesTasksTasksResponse201>>;
    /**
     * This endpoint retrieves all tasks created.
     *
     * @summary Reads a single Task
     */
    getApi20241001ResourcesTasksTasksId(metadata: types.GetApi20241001ResourcesTasksTasksIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTasksTasksIdResponse200>>;
    /**
     * This endpoint updates an existing task.
     *
     * @summary Updates a Task
     */
    putApi20241001ResourcesTasksTasksId(body: types.PutApi20241001ResourcesTasksTasksIdBodyParam, metadata: types.PutApi20241001ResourcesTasksTasksIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesTasksTasksIdResponse200>>;
    /**
     * This endpoint deletes a task.
     *
     * @summary Deletes a Task
     */
    deleteApi20241001ResourcesTasksTasksId(metadata: types.DeleteApi20241001ResourcesTasksTasksIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesTasksTasksIdResponse200>>;
    /**
     * This endpoint allows to set update the status of a list of tasks given the ids.
     *
     * @summary Bulk change statuses a Task
     */
    postApi20241001ResourcesTasksTasksBulk_change_status(body: types.PostApi20241001ResourcesTasksTasksBulkChangeStatusBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesTasksTasksBulkChangeStatusResponse200>>;
    /**
     * This endpoint allows to delete a list of tasks given the ids.
     *
     * @summary Bulk deletes a Task
     */
    postApi20241001ResourcesTasksTasksBulk_delete(body: types.PostApi20241001ResourcesTasksTasksBulkDeleteBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesTasksTasksBulkDeleteResponse200>>;
    /**
     * This endpoint duplicates a task.
     *
     * @summary Copies a Task
     */
    postApi20241001ResourcesTasksTasksCopy(body: types.PostApi20241001ResourcesTasksTasksCopyBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesTasksTasksCopyResponse200>>;
    /**
     * Create comments a Task
     *
     * @summary Create comments a Task
     */
    postApi20241001ResourcesTasksTasksCreate_comment(body: types.PostApi20241001ResourcesTasksTasksCreateCommentBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesTasksTasksCreateCommentResponse200>>;
    /**
     * This endpoint allows to update the status of a task.
     *
     * @summary Resolves a Task
     */
    postApi20241001ResourcesTasksTasksResolve(body: types.PostApi20241001ResourcesTasksTasksResolveBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesTasksTasksResolveResponse200>>;
    /**
     * Reads all Task files
     *
     * @summary Reads all Task files
     */
    getApi20241001ResourcesTasksTask_files(metadata: types.GetApi20241001ResourcesTasksTaskFilesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTasksTaskFilesResponse200>>;
    /**
     * Creates a Task file
     *
     * @summary Creates a Task file
     */
    postApi20241001ResourcesTasksTask_files(body: types.PostApi20241001ResourcesTasksTaskFilesBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesTasksTaskFilesResponse201>>;
    /**
     * Reads a single Task file
     *
     * @summary Reads a single Task file
     */
    getApi20241001ResourcesTasksTask_filesId(metadata: types.GetApi20241001ResourcesTasksTaskFilesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTasksTaskFilesIdResponse200>>;
    /**
     * Deletes a Task file
     *
     * @summary Deletes a Task file
     */
    deleteApi20241001ResourcesTasksTask_filesId(metadata: types.DeleteApi20241001ResourcesTasksTaskFilesIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesTasksTaskFilesIdResponse200>>;
    /**
     * Get all memberships.
     *
     * @summary Reads all Memberships
     */
    getApi20241001ResourcesTeamsMemberships(metadata?: types.GetApi20241001ResourcesTeamsMembershipsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTeamsMembershipsResponse200>>;
    /**
     * Assign an employee to a team, meaning create a membership.
     *
     * @summary Creates a Membership
     */
    postApi20241001ResourcesTeamsMemberships(body: types.PostApi20241001ResourcesTeamsMembershipsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesTeamsMembershipsResponse201>>;
    /**
     * Get all memberships.
     *
     * @summary Reads a single Membership
     */
    getApi20241001ResourcesTeamsMembershipsId(metadata: types.GetApi20241001ResourcesTeamsMembershipsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTeamsMembershipsIdResponse200>>;
    /**
     * Update the membership to either make the employee a lead of the team or remove them as a
     * lead.
     *
     * @summary Updates a Membership
     */
    putApi20241001ResourcesTeamsMembershipsId(body: types.PutApi20241001ResourcesTeamsMembershipsIdBodyParam, metadata: types.PutApi20241001ResourcesTeamsMembershipsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesTeamsMembershipsIdResponse200>>;
    putApi20241001ResourcesTeamsMembershipsId(metadata: types.PutApi20241001ResourcesTeamsMembershipsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesTeamsMembershipsIdResponse200>>;
    /**
     * Delete the membership to remove the employee from the team.
     *
     * @summary Deletes a Membership
     */
    deleteApi20241001ResourcesTeamsMembershipsId(metadata: types.DeleteApi20241001ResourcesTeamsMembershipsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesTeamsMembershipsIdResponse200>>;
    /**
     * Gets all the teams
     *
     * @summary Reads all Teams
     */
    getApi20241001ResourcesTeamsTeams(): Promise<FetchResponse<200, types.GetApi20241001ResourcesTeamsTeamsResponse200>>;
    /**
     * Create a team with a given name
     *
     * @summary Creates a Team
     */
    postApi20241001ResourcesTeamsTeams(body: types.PostApi20241001ResourcesTeamsTeamsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesTeamsTeamsResponse201>>;
    /**
     * Gets all the teams
     *
     * @summary Reads a single Team
     */
    getApi20241001ResourcesTeamsTeamsId(metadata: types.GetApi20241001ResourcesTeamsTeamsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTeamsTeamsIdResponse200>>;
    /**
     * Update a team
     *
     * @summary Updates a Team
     */
    putApi20241001ResourcesTeamsTeamsId(body: types.PutApi20241001ResourcesTeamsTeamsIdBodyParam, metadata: types.PutApi20241001ResourcesTeamsTeamsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesTeamsTeamsIdResponse200>>;
    /**
     * Delete a team
     *
     * @summary Deletes a Team
     */
    deleteApi20241001ResourcesTeamsTeamsId(metadata: types.DeleteApi20241001ResourcesTeamsTeamsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesTeamsTeamsIdResponse200>>;
    /**
     * Retrieves allowances
     *
     * @summary Reads all Allowances
     */
    getApi20241001ResourcesTimeoffAllowances(metadata?: types.GetApi20241001ResourcesTimeoffAllowancesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTimeoffAllowancesResponse200>>;
    /**
     * Creates a new Time off allowance
     *
     * @summary Creates an Allowance
     */
    postApi20241001ResourcesTimeoffAllowances(body: types.PostApi20241001ResourcesTimeoffAllowancesBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesTimeoffAllowancesResponse201>>;
    /**
     * Retrieves allowances
     *
     * @summary Reads a single Allowance
     */
    getApi20241001ResourcesTimeoffAllowancesId(metadata: types.GetApi20241001ResourcesTimeoffAllowancesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTimeoffAllowancesIdResponse200>>;
    /**
     * Updates an existing Time Off Allowance
     *
     * @summary Updates an Allowance
     */
    putApi20241001ResourcesTimeoffAllowancesId(body: types.PutApi20241001ResourcesTimeoffAllowancesIdBodyParam, metadata: types.PutApi20241001ResourcesTimeoffAllowancesIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesTimeoffAllowancesIdResponse200>>;
    /**
     * Deletes an allowance
     *
     * @summary Deletes an Allowance
     */
    deleteApi20241001ResourcesTimeoffAllowancesId(metadata: types.DeleteApi20241001ResourcesTimeoffAllowancesIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesTimeoffAllowancesIdResponse200>>;
    /**
     * Deletes an allowance and migrate the existing incidences in the alternative allowance
     *
     * @summary Delete with alt allowances an Allowance
     */
    postApi20241001ResourcesTimeoffAllowancesDelete_with_alt_allowance(body: types.PostApi20241001ResourcesTimeoffAllowancesDeleteWithAltAllowanceBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesTimeoffAllowancesDeleteWithAltAllowanceResponse200>>;
    /**
     * Reads all Allowance incidences
     *
     * @summary Reads all Allowance incidences
     */
    getApi20241001ResourcesTimeoffAllowance_incidences(metadata?: types.GetApi20241001ResourcesTimeoffAllowanceIncidencesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTimeoffAllowanceIncidencesResponse200>>;
    /**
     * Creates an allowance incidence, also known as an Allowance Adjustment in the Employee
     * Time off Page. They are hours or days added or subtracted from the time off allowance
     *
     * @summary Creates an Allowance incidence
     */
    postApi20241001ResourcesTimeoffAllowance_incidences(body: types.PostApi20241001ResourcesTimeoffAllowanceIncidencesBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesTimeoffAllowanceIncidencesResponse201>>;
    /**
     * Reads a single Allowance incidence
     *
     * @summary Reads a single Allowance incidence
     */
    getApi20241001ResourcesTimeoffAllowance_incidencesId(metadata: types.GetApi20241001ResourcesTimeoffAllowanceIncidencesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTimeoffAllowanceIncidencesIdResponse200>>;
    /**
     * Updates an allowance incidence
     *
     * @summary Updates an Allowance incidence
     */
    putApi20241001ResourcesTimeoffAllowance_incidencesId(body: types.PutApi20241001ResourcesTimeoffAllowanceIncidencesIdBodyParam, metadata: types.PutApi20241001ResourcesTimeoffAllowanceIncidencesIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesTimeoffAllowanceIncidencesIdResponse200>>;
    /**
     * Deletes an allowance incidence
     *
     * @summary Deletes an Allowance incidence
     */
    deleteApi20241001ResourcesTimeoffAllowance_incidencesId(metadata: types.DeleteApi20241001ResourcesTimeoffAllowanceIncidencesIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesTimeoffAllowanceIncidencesIdResponse200>>;
    /**
     * ###### **What does it do?**
     * This endpoint retrieves the employee time off counters for a specific allowance with a
     * reference date
     *
     * @summary Reads all Allowance stats
     */
    getApi20241001ResourcesTimeoffAllowance_stats(metadata: types.GetApi20241001ResourcesTimeoffAllowanceStatsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTimeoffAllowanceStatsResponse200>>;
    /**
     * ###### **What does it do?**
     * This endpoint retrieves the employee time off counters for a specific allowance with a
     * reference date
     *
     * @summary Reads a single Allowance stat
     */
    getApi20241001ResourcesTimeoffAllowance_statsId(metadata: types.GetApi20241001ResourcesTimeoffAllowanceStatsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTimeoffAllowanceStatsIdResponse200>>;
    /**
     * Retrieves blocked periods
     *
     * @summary Reads all Blocked periods
     */
    getApi20241001ResourcesTimeoffBlocked_periods(): Promise<FetchResponse<200, types.GetApi20241001ResourcesTimeoffBlockedPeriodsResponse200>>;
    /**
     * Creates a blocked period is add a range of dates during which employees cannot submit
     * time off requests. This allows to better plan your team's work throughout the year and
     * ensure that time off requests are in line with the company's needs
     *
     * @summary Creates a Blocked period
     */
    postApi20241001ResourcesTimeoffBlocked_periods(body: types.PostApi20241001ResourcesTimeoffBlockedPeriodsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesTimeoffBlockedPeriodsResponse201>>;
    /**
     * Updates a blocked period
     *
     * @summary Updates a Blocked period
     */
    putApi20241001ResourcesTimeoffBlocked_periodsId(body: types.PutApi20241001ResourcesTimeoffBlockedPeriodsIdBodyParam, metadata: types.PutApi20241001ResourcesTimeoffBlockedPeriodsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesTimeoffBlockedPeriodsIdResponse200>>;
    /**
     * Deletes a blocked period
     *
     * @summary Deletes a Blocked period
     */
    deleteApi20241001ResourcesTimeoffBlocked_periodsId(metadata: types.DeleteApi20241001ResourcesTimeoffBlockedPeriodsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesTimeoffBlockedPeriodsIdResponse200>>;
    /**
     * Reads all Leaves
     *
     * @summary Reads all Leaves
     */
    getApi20241001ResourcesTimeoffLeaves(metadata: types.GetApi20241001ResourcesTimeoffLeavesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTimeoffLeavesResponse200>>;
    /**
     * Creates a Leave
     *
     * @summary Creates a Leave
     */
    postApi20241001ResourcesTimeoffLeaves(body: types.PostApi20241001ResourcesTimeoffLeavesBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesTimeoffLeavesResponse201>>;
    /**
     * Reads a single Leave
     *
     * @summary Reads a single Leave
     */
    getApi20241001ResourcesTimeoffLeavesId(metadata: types.GetApi20241001ResourcesTimeoffLeavesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTimeoffLeavesIdResponse200>>;
    /**
     * Updates a Leave
     *
     * @summary Updates a Leave
     */
    putApi20241001ResourcesTimeoffLeavesId(body: types.PutApi20241001ResourcesTimeoffLeavesIdBodyParam, metadata: types.PutApi20241001ResourcesTimeoffLeavesIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesTimeoffLeavesIdResponse200>>;
    /**
     * Deletes a Leave
     *
     * @summary Deletes a Leave
     */
    deleteApi20241001ResourcesTimeoffLeavesId(metadata: types.DeleteApi20241001ResourcesTimeoffLeavesIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesTimeoffLeavesIdResponse200>>;
    /**
     * Allows authorized users to approve employee time-off requests
     *
     * @summary Approves a Leave
     */
    postApi20241001ResourcesTimeoffLeavesApprove(body: types.PostApi20241001ResourcesTimeoffLeavesApproveBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesTimeoffLeavesApproveResponse200>>;
    /**
     * Allows authorized users to reject employee time-off requests
     *
     * @summary Rejects a Leave
     */
    postApi20241001ResourcesTimeoffLeavesReject(body: types.PostApi20241001ResourcesTimeoffLeavesRejectBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesTimeoffLeavesRejectResponse200>>;
    /**
     * Reads all Leave types
     *
     * @summary Reads all Leave types
     */
    getApi20241001ResourcesTimeoffLeave_types(metadata?: types.GetApi20241001ResourcesTimeoffLeaveTypesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTimeoffLeaveTypesResponse200>>;
    /**
     * Creates a Leave type
     *
     * @summary Creates a Leave type
     */
    postApi20241001ResourcesTimeoffLeave_types(body: types.PostApi20241001ResourcesTimeoffLeaveTypesBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesTimeoffLeaveTypesResponse201>>;
    /**
     * Reads a single Leave type
     *
     * @summary Reads a single Leave type
     */
    getApi20241001ResourcesTimeoffLeave_typesId(metadata: types.GetApi20241001ResourcesTimeoffLeaveTypesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTimeoffLeaveTypesIdResponse200>>;
    /**
     * Updates a Leave type
     *
     * @summary Updates a Leave type
     */
    putApi20241001ResourcesTimeoffLeave_typesId(body: types.PutApi20241001ResourcesTimeoffLeaveTypesIdBodyParam, metadata: types.PutApi20241001ResourcesTimeoffLeaveTypesIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesTimeoffLeaveTypesIdResponse200>>;
    /**
     * Reads all Policies
     *
     * @summary Reads all Policies
     */
    getApi20241001ResourcesTimeoffPolicies(metadata?: types.GetApi20241001ResourcesTimeoffPoliciesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTimeoffPoliciesResponse200>>;
    /**
     * Creates a Policy
     *
     * @summary Creates a Policy
     */
    postApi20241001ResourcesTimeoffPolicies(body: types.PostApi20241001ResourcesTimeoffPoliciesBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesTimeoffPoliciesResponse201>>;
    /**
     * Reads a single Policy
     *
     * @summary Reads a single Policy
     */
    getApi20241001ResourcesTimeoffPoliciesId(metadata: types.GetApi20241001ResourcesTimeoffPoliciesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTimeoffPoliciesIdResponse200>>;
    /**
     * Updates a Policy
     *
     * @summary Updates a Policy
     */
    putApi20241001ResourcesTimeoffPoliciesId(body: types.PutApi20241001ResourcesTimeoffPoliciesIdBodyParam, metadata: types.PutApi20241001ResourcesTimeoffPoliciesIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesTimeoffPoliciesIdResponse200>>;
    /**
     * Deletes a Policy
     *
     * @summary Deletes a Policy
     */
    deleteApi20241001ResourcesTimeoffPoliciesId(metadata: types.DeleteApi20241001ResourcesTimeoffPoliciesIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesTimeoffPoliciesIdResponse200>>;
    /**
     * Reads all Policy timelines
     *
     * @summary Reads all Policy timelines
     */
    getApi20241001ResourcesTimeoffPolicy_timelines(metadata: types.GetApi20241001ResourcesTimeoffPolicyTimelinesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTimeoffPolicyTimelinesResponse200>>;
    /**
     * Reads all Planning versions
     *
     * @summary Reads all Planning versions
     */
    getApi20241001ResourcesTime_planningPlanning_versions(metadata: types.GetApi20241001ResourcesTimePlanningPlanningVersionsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTimePlanningPlanningVersionsResponse200>>;
    /**
     * Creates a Planning version
     *
     * @summary Creates a Planning version
     */
    postApi20241001ResourcesTime_planningPlanning_versions(body: types.PostApi20241001ResourcesTimePlanningPlanningVersionsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesTimePlanningPlanningVersionsResponse201>>;
    /**
     * Updates a Planning version
     *
     * @summary Updates a Planning version
     */
    putApi20241001ResourcesTime_planningPlanning_versionsId(body: types.PutApi20241001ResourcesTimePlanningPlanningVersionsIdBodyParam, metadata: types.PutApi20241001ResourcesTimePlanningPlanningVersionsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesTimePlanningPlanningVersionsIdResponse200>>;
    /**
     * Deletes a Planning version
     *
     * @summary Deletes a Planning version
     */
    deleteApi20241001ResourcesTime_planningPlanning_versionsId(metadata: types.DeleteApi20241001ResourcesTimePlanningPlanningVersionsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesTimePlanningPlanningVersionsIdResponse200>>;
    /**
     * Bulk creates a Planning version
     *
     * @summary Bulk creates a Planning version
     */
    postApi20241001ResourcesTime_planningPlanning_versionsBulk_create(body: types.PostApi20241001ResourcesTimePlanningPlanningVersionsBulkCreateBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesTimePlanningPlanningVersionsBulkCreateResponse200>>;
    /**
     * Deactivates a Planning version
     *
     * @summary Deactivates a Planning version
     */
    postApi20241001ResourcesTime_planningPlanning_versionsDeactivate(body: types.PostApi20241001ResourcesTimePlanningPlanningVersionsDeactivateBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesTimePlanningPlanningVersionsDeactivateResponse200>>;
    /**
     * Reads all Break configurations
     *
     * @summary Reads all Break configurations
     */
    getApi20241001ResourcesTime_settingsBreak_configurations(metadata: types.GetApi20241001ResourcesTimeSettingsBreakConfigurationsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTimeSettingsBreakConfigurationsResponse200>>;
    /**
     * Creates a Break configuration
     *
     * @summary Creates a Break configuration
     */
    postApi20241001ResourcesTime_settingsBreak_configurations(body: types.PostApi20241001ResourcesTimeSettingsBreakConfigurationsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesTimeSettingsBreakConfigurationsResponse201>>;
    /**
     * Reads a single Break configuration
     *
     * @summary Reads a single Break configuration
     */
    getApi20241001ResourcesTime_settingsBreak_configurationsId(metadata: types.GetApi20241001ResourcesTimeSettingsBreakConfigurationsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTimeSettingsBreakConfigurationsIdResponse200>>;
    /**
     * Updates a Break configuration
     *
     * @summary Updates a Break configuration
     */
    putApi20241001ResourcesTime_settingsBreak_configurationsId(body: types.PutApi20241001ResourcesTimeSettingsBreakConfigurationsIdBodyParam, metadata: types.PutApi20241001ResourcesTimeSettingsBreakConfigurationsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesTimeSettingsBreakConfigurationsIdResponse200>>;
    /**
     * Reads all Categories
     *
     * @summary Reads all Categories
     */
    getApi20241001ResourcesTrainingsCategories(metadata?: types.GetApi20241001ResourcesTrainingsCategoriesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTrainingsCategoriesResponse200>>;
    /**
     * Creates a Category
     *
     * @summary Creates a Category
     */
    postApi20241001ResourcesTrainingsCategories(body: types.PostApi20241001ResourcesTrainingsCategoriesBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesTrainingsCategoriesResponse201>>;
    /**
     * Reads a single Category
     *
     * @summary Reads a single Category
     */
    getApi20241001ResourcesTrainingsCategoriesId(metadata: types.GetApi20241001ResourcesTrainingsCategoriesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTrainingsCategoriesIdResponse200>>;
    /**
     * Deletes a Category
     *
     * @summary Deletes a Category
     */
    deleteApi20241001ResourcesTrainingsCategoriesId(metadata: types.DeleteApi20241001ResourcesTrainingsCategoriesIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesTrainingsCategoriesIdResponse200>>;
    /**
     * Reads all Sessions
     *
     * @summary Reads all Sessions
     */
    getApi20241001ResourcesTrainingsSessions(metadata?: types.GetApi20241001ResourcesTrainingsSessionsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTrainingsSessionsResponse200>>;
    /**
     * Creates a Session
     *
     * @summary Creates a Session
     */
    postApi20241001ResourcesTrainingsSessions(body: types.PostApi20241001ResourcesTrainingsSessionsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesTrainingsSessionsResponse201>>;
    /**
     * Reads a single Session
     *
     * @summary Reads a single Session
     */
    getApi20241001ResourcesTrainingsSessionsId(metadata: types.GetApi20241001ResourcesTrainingsSessionsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTrainingsSessionsIdResponse200>>;
    /**
     * Updates a Session
     *
     * @summary Updates a Session
     */
    putApi20241001ResourcesTrainingsSessionsId(body: types.PutApi20241001ResourcesTrainingsSessionsIdBodyParam, metadata: types.PutApi20241001ResourcesTrainingsSessionsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesTrainingsSessionsIdResponse200>>;
    /**
     * Deletes a Session
     *
     * @summary Deletes a Session
     */
    deleteApi20241001ResourcesTrainingsSessionsId(metadata: types.DeleteApi20241001ResourcesTrainingsSessionsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesTrainingsSessionsIdResponse200>>;
    /**
     * Reads all Session access memberships
     *
     * @summary Reads all Session access memberships
     */
    getApi20241001ResourcesTrainingsSession_access_memberships(metadata: types.GetApi20241001ResourcesTrainingsSessionAccessMembershipsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTrainingsSessionAccessMembershipsResponse200>>;
    /**
     * Reads a single Session access membership
     *
     * @summary Reads a single Session access membership
     */
    getApi20241001ResourcesTrainingsSession_access_membershipsId(metadata: types.GetApi20241001ResourcesTrainingsSessionAccessMembershipsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTrainingsSessionAccessMembershipsIdResponse200>>;
    /**
     * Bulk creates a Session access membership
     *
     * @summary Bulk creates a Session access membership
     */
    postApi20241001ResourcesTrainingsSession_access_membershipsBulk_create(body: types.PostApi20241001ResourcesTrainingsSessionAccessMembershipsBulkCreateBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesTrainingsSessionAccessMembershipsBulkCreateResponse200>>;
    /**
     * Bulk destroys a Session access membership
     *
     * @summary Bulk destroys a Session access membership
     */
    postApi20241001ResourcesTrainingsSession_access_membershipsBulk_destroy(body: types.PostApi20241001ResourcesTrainingsSessionAccessMembershipsBulkDestroyBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesTrainingsSessionAccessMembershipsBulkDestroyResponse200>>;
    /**
     * Reads all Session attendances
     *
     * @summary Reads all Session attendances
     */
    getApi20241001ResourcesTrainingsSession_attendances(metadata?: types.GetApi20241001ResourcesTrainingsSessionAttendancesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTrainingsSessionAttendancesResponse200>>;
    /**
     * Reads a single Session attendance
     *
     * @summary Reads a single Session attendance
     */
    getApi20241001ResourcesTrainingsSession_attendancesId(metadata: types.GetApi20241001ResourcesTrainingsSessionAttendancesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTrainingsSessionAttendancesIdResponse200>>;
    /**
     * Bulk updates a Session attendance
     *
     * @summary Bulk updates a Session attendance
     */
    postApi20241001ResourcesTrainingsSession_attendancesBulk_update(body: types.PostApi20241001ResourcesTrainingsSessionAttendancesBulkUpdateBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesTrainingsSessionAttendancesBulkUpdateResponse200>>;
    /**
     * Reads all Trainings
     *
     * @summary Reads all Trainings
     */
    getApi20241001ResourcesTrainingsTrainings(metadata?: types.GetApi20241001ResourcesTrainingsTrainingsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTrainingsTrainingsResponse200>>;
    /**
     * Creates a Training
     *
     * @summary Creates a Training
     */
    postApi20241001ResourcesTrainingsTrainings(body: types.PostApi20241001ResourcesTrainingsTrainingsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesTrainingsTrainingsResponse201>>;
    /**
     * Reads a single Training
     *
     * @summary Reads a single Training
     */
    getApi20241001ResourcesTrainingsTrainingsId(metadata: types.GetApi20241001ResourcesTrainingsTrainingsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTrainingsTrainingsIdResponse200>>;
    /**
     * Updates a Training
     *
     * @summary Updates a Training
     */
    putApi20241001ResourcesTrainingsTrainingsId(body: types.PutApi20241001ResourcesTrainingsTrainingsIdBodyParam, metadata: types.PutApi20241001ResourcesTrainingsTrainingsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesTrainingsTrainingsIdResponse200>>;
    /**
     * Deletes a Training
     *
     * @summary Deletes a Training
     */
    deleteApi20241001ResourcesTrainingsTrainingsId(metadata: types.DeleteApi20241001ResourcesTrainingsTrainingsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesTrainingsTrainingsIdResponse200>>;
    /**
     * Bulk deletes a Training
     *
     * @summary Bulk deletes a Training
     */
    postApi20241001ResourcesTrainingsTrainingsBulk_delete(body: types.PostApi20241001ResourcesTrainingsTrainingsBulkDeleteBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesTrainingsTrainingsBulkDeleteResponse200>>;
    /**
     * Bulk update catalogs a Training
     *
     * @summary Bulk update catalogs a Training
     */
    postApi20241001ResourcesTrainingsTrainingsBulk_update_catalog(body: types.PostApi20241001ResourcesTrainingsTrainingsBulkUpdateCatalogBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesTrainingsTrainingsBulkUpdateCatalogResponse200>>;
    /**
     * Update statuses a Training
     *
     * @summary Update statuses a Training
     */
    postApi20241001ResourcesTrainingsTrainingsUpdate_status(body: types.PostApi20241001ResourcesTrainingsTrainingsUpdateStatusBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesTrainingsTrainingsUpdateStatusResponse200>>;
    /**
     * Reads all Training memberships
     *
     * @summary Reads all Training memberships
     */
    getApi20241001ResourcesTrainingsTraining_memberships(metadata: types.GetApi20241001ResourcesTrainingsTrainingMembershipsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTrainingsTrainingMembershipsResponse200>>;
    /**
     * Reads a single Training membership
     *
     * @summary Reads a single Training membership
     */
    getApi20241001ResourcesTrainingsTraining_membershipsId(metadata: types.GetApi20241001ResourcesTrainingsTrainingMembershipsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesTrainingsTrainingMembershipsIdResponse200>>;
    /**
     * Update a training membership
     *
     * @summary Updates a Training membership
     */
    putApi20241001ResourcesTrainingsTraining_membershipsId(body: types.PutApi20241001ResourcesTrainingsTrainingMembershipsIdBodyParam, metadata: types.PutApi20241001ResourcesTrainingsTrainingMembershipsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesTrainingsTrainingMembershipsIdResponse200>>;
    /**
     * Bulk creates a Training membership
     *
     * @summary Bulk creates a Training membership
     */
    postApi20241001ResourcesTrainingsTraining_membershipsBulk_create(body: types.PostApi20241001ResourcesTrainingsTrainingMembershipsBulkCreateBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesTrainingsTrainingMembershipsBulkCreateResponse200>>;
    /**
     * Bulk destroys a Training membership
     *
     * @summary Bulk destroys a Training membership
     */
    postApi20241001ResourcesTrainingsTraining_membershipsBulk_destroy(body: types.PostApi20241001ResourcesTrainingsTrainingMembershipsBulkDestroyBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesTrainingsTrainingMembershipsBulkDestroyResponse200>>;
    /**
     * Reads all Day configurations
     *
     * @summary Reads all Day configurations
     */
    getApi20241001ResourcesWork_scheduleDay_configurations(metadata?: types.GetApi20241001ResourcesWorkScheduleDayConfigurationsMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesWorkScheduleDayConfigurationsResponse200>>;
    /**
     * Reads a single Day configuration
     *
     * @summary Reads a single Day configuration
     */
    getApi20241001ResourcesWork_scheduleDay_configurationsId(metadata: types.GetApi20241001ResourcesWorkScheduleDayConfigurationsIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesWorkScheduleDayConfigurationsIdResponse200>>;
    /**
     * Bulk cuds a Day configuration
     *
     * @summary Bulk cuds a Day configuration
     */
    postApi20241001ResourcesWork_scheduleDay_configurationsBulk_cud(body: types.PostApi20241001ResourcesWorkScheduleDayConfigurationsBulkCudBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesWorkScheduleDayConfigurationsBulkCudResponse200>>;
    /**
     * Reads all Overlap periods
     *
     * @summary Reads all Overlap periods
     */
    getApi20241001ResourcesWork_scheduleOverlap_periods(): Promise<FetchResponse<200, types.GetApi20241001ResourcesWorkScheduleOverlapPeriodsResponse200>>;
    /**
     * Creates an Overlap period
     *
     * @summary Creates an Overlap period
     */
    postApi20241001ResourcesWork_scheduleOverlap_periods(body: types.PostApi20241001ResourcesWorkScheduleOverlapPeriodsBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesWorkScheduleOverlapPeriodsResponse201>>;
    /**
     * Updates an Overlap period
     *
     * @summary Updates an Overlap period
     */
    putApi20241001ResourcesWork_scheduleOverlap_periodsId(body: types.PutApi20241001ResourcesWorkScheduleOverlapPeriodsIdBodyParam, metadata: types.PutApi20241001ResourcesWorkScheduleOverlapPeriodsIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesWorkScheduleOverlapPeriodsIdResponse200>>;
    /**
     * Deletes an Overlap period
     *
     * @summary Deletes an Overlap period
     */
    deleteApi20241001ResourcesWork_scheduleOverlap_periodsId(metadata: types.DeleteApi20241001ResourcesWorkScheduleOverlapPeriodsIdMetadataParam): Promise<FetchResponse<200, types.DeleteApi20241001ResourcesWorkScheduleOverlapPeriodsIdResponse200>>;
    /**
     * Reads all Schedules
     *
     * @summary Reads all Schedules
     */
    getApi20241001ResourcesWork_scheduleSchedules(metadata: types.GetApi20241001ResourcesWorkScheduleSchedulesMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesWorkScheduleSchedulesResponse200>>;
    /**
     * Creates a Schedule
     *
     * @summary Creates a Schedule
     */
    postApi20241001ResourcesWork_scheduleSchedules(body: types.PostApi20241001ResourcesWorkScheduleSchedulesBodyParam): Promise<FetchResponse<201, types.PostApi20241001ResourcesWorkScheduleSchedulesResponse201>>;
    /**
     * Reads a single Schedule
     *
     * @summary Reads a single Schedule
     */
    getApi20241001ResourcesWork_scheduleSchedulesId(metadata: types.GetApi20241001ResourcesWorkScheduleSchedulesIdMetadataParam): Promise<FetchResponse<200, types.GetApi20241001ResourcesWorkScheduleSchedulesIdResponse200>>;
    /**
     * Updates a Schedule
     *
     * @summary Updates a Schedule
     */
    putApi20241001ResourcesWork_scheduleSchedulesId(body: types.PutApi20241001ResourcesWorkScheduleSchedulesIdBodyParam, metadata: types.PutApi20241001ResourcesWorkScheduleSchedulesIdMetadataParam): Promise<FetchResponse<200, types.PutApi20241001ResourcesWorkScheduleSchedulesIdResponse200>>;
    /**
     * Toggle archives a Schedule
     *
     * @summary Toggle archives a Schedule
     */
    postApi20241001ResourcesWork_scheduleSchedulesToggle_archive(body: types.PostApi20241001ResourcesWorkScheduleSchedulesToggleArchiveBodyParam): Promise<FetchResponse<200, types.PostApi20241001ResourcesWorkScheduleSchedulesToggleArchiveResponse200>>;
}
declare const createSDK: SDK;
export default createSDK;
