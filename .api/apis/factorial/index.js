import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';
class SDK {
    constructor() {
        this.spec = Oas.init(definition);
        this.core = new APICore(this.spec, 'factorial/2.0.0 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config) {
        this.core.setConfig(config);
    }
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
    auth(...values) {
        this.core.setAuth(...values);
        return this;
    }
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
    server(url, variables = {}) {
        this.core.setServer(url, variables);
    }
    /**
     * Reads all Credentials
     *
     * @summary Reads all Credentials
     */
    getApi20241001ResourcesApi_publicCredentials() {
        return this.core.fetch('/api/2024-10-01/resources/api_public/credentials', 'get');
    }
    /**
     * Reads all Webhook subscriptions
     *
     * @summary Reads all Webhook subscriptions
     */
    getApi20241001ResourcesApi_publicWebhook_subscriptions(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/api_public/webhook_subscriptions', 'get', metadata);
    }
    /**
     * Creates a Webhook subscription
     *
     * @summary Creates a Webhook subscription
     */
    postApi20241001ResourcesApi_publicWebhook_subscriptions(body) {
        return this.core.fetch('/api/2024-10-01/resources/api_public/webhook_subscriptions', 'post', body);
    }
    /**
     * Reads a single Webhook subscription
     *
     * @summary Reads a single Webhook subscription
     */
    getApi20241001ResourcesApi_publicWebhook_subscriptionsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/api_public/webhook_subscriptions/{id}', 'get', metadata);
    }
    /**
     * Updates a Webhook subscription
     *
     * @summary Updates a Webhook subscription
     */
    putApi20241001ResourcesApi_publicWebhook_subscriptionsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/api_public/webhook_subscriptions/{id}', 'put', body, metadata);
    }
    /**
     * Deletes a Webhook subscription
     *
     * @summary Deletes a Webhook subscription
     */
    deleteApi20241001ResourcesApi_publicWebhook_subscriptionsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/api_public/webhook_subscriptions/{id}', 'delete', metadata);
    }
    /**
     * Reads all Answers
     *
     * @summary Reads all Answers
     */
    getApi20241001ResourcesAtsAnswers(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/answers', 'get', metadata);
    }
    /**
     * Reads a single Answer
     *
     * @summary Reads a single Answer
     */
    getApi20241001ResourcesAtsAnswersId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/answers/{id}', 'get', metadata);
    }
    /**
     * Reads all Applications
     *
     * @summary Reads all Applications
     */
    getApi20241001ResourcesAtsApplications(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/applications', 'get', metadata);
    }
    /**
     * Creates an Application
     *
     * @summary Creates an Application
     */
    postApi20241001ResourcesAtsApplications(body) {
        return this.core.fetch('/api/2024-10-01/resources/ats/applications', 'post', body);
    }
    /**
     * Reads a single Application
     *
     * @summary Reads a single Application
     */
    getApi20241001ResourcesAtsApplicationsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/applications/{id}', 'get', metadata);
    }
    /**
     * Updates an Application
     *
     * @summary Updates an Application
     */
    putApi20241001ResourcesAtsApplicationsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/applications/{id}', 'put', body, metadata);
    }
    /**
     * Deletes an Application
     *
     * @summary Deletes an Application
     */
    deleteApi20241001ResourcesAtsApplicationsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/applications/{id}', 'delete', metadata);
    }
    /**
     * Reads all Application phases
     *
     * @summary Reads all Application phases
     */
    getApi20241001ResourcesAtsApplication_phases(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/application_phases', 'get', metadata);
    }
    /**
     * Reads a single Application phase
     *
     * @summary Reads a single Application phase
     */
    getApi20241001ResourcesAtsApplication_phasesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/application_phases/{id}', 'get', metadata);
    }
    /**
     * Fetches candidates data from Factorial. When using administrator-level API Credentials,
     * all candidates associated with a company will be returned. When using non-admin level
     * API credentials, only candidates that applied to a job for which the user is a hiring
     * manager will be returned.
     *
     * @summary Reads all Candidates
     */
    getApi20241001ResourcesAtsCandidates(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/candidates', 'get', metadata);
    }
    /**
     * Creates candidates related to a particular company in an ATS
     *
     * @summary Creates a Candidate
     */
    postApi20241001ResourcesAtsCandidates(body) {
        return this.core.fetch('/api/2024-10-01/resources/ats/candidates', 'post', body);
    }
    /**
     * Fetches candidates data from Factorial. When using administrator-level API Credentials,
     * all candidates associated with a company will be returned. When using non-admin level
     * API credentials, only candidates that applied to a job for which the user is a hiring
     * manager will be returned.
     *
     * @summary Reads a single Candidate
     */
    getApi20241001ResourcesAtsCandidatesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/candidates/{id}', 'get', metadata);
    }
    /**
     * Updates ATS Candidates data
     *
     * @summary Updates a Candidate
     */
    putApi20241001ResourcesAtsCandidatesId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/candidates/{id}', 'put', body, metadata);
    }
    /**
     * Deletes a candidate from the ATS
     *
     * @summary Deletes a Candidate
     */
    deleteApi20241001ResourcesAtsCandidatesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/candidates/{id}', 'delete', metadata);
    }
    /**
     * Reads all Candidate sources
     *
     * @summary Reads all Candidate sources
     */
    getApi20241001ResourcesAtsCandidate_sources(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/candidate_sources', 'get', metadata);
    }
    /**
     * Reads a single Candidate source
     *
     * @summary Reads a single Candidate source
     */
    getApi20241001ResourcesAtsCandidate_sourcesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/candidate_sources/{id}', 'get', metadata);
    }
    /**
     * Reads all Evaluation forms
     *
     * @summary Reads all Evaluation forms
     */
    getApi20241001ResourcesAtsEvaluation_forms(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/evaluation_forms', 'get', metadata);
    }
    /**
     * Reads a single Evaluation form
     *
     * @summary Reads a single Evaluation form
     */
    getApi20241001ResourcesAtsEvaluation_formsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/evaluation_forms/{id}', 'get', metadata);
    }
    /**
     * Save an evaluation form as a template.
     *
     * @summary Save as templates an Evaluation form
     */
    postApi20241001ResourcesAtsEvaluation_formsSave_as_template(body) {
        return this.core.fetch('/api/2024-10-01/resources/ats/evaluation_forms/save_as_template', 'post', body);
    }
    /**
     * This endpoint retrieves all feedbacks associated with a candidate's applications.
     *
     * @summary Reads all Feedbacks
     */
    getApi20241001ResourcesAtsFeedbacks(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/feedbacks', 'get', metadata);
    }
    /**
     * This endpoint allows to create new feedback entries for candidates.
     *
     * @summary Creates a Feedback
     */
    postApi20241001ResourcesAtsFeedbacks(body) {
        return this.core.fetch('/api/2024-10-01/resources/ats/feedbacks', 'post', body);
    }
    /**
     * This endpoint retrieves all feedbacks associated with a candidate's applications.
     *
     * @summary Reads a single Feedback
     */
    getApi20241001ResourcesAtsFeedbacksId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/feedbacks/{id}', 'get', metadata);
    }
    putApi20241001ResourcesAtsFeedbacksId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/feedbacks/{id}', 'put', body, metadata);
    }
    /**
     * This endpoint allows to delete a specific feedback entry associated with a candidate's
     * application.
     *
     * @summary Deletes a Feedback
     */
    deleteApi20241001ResourcesAtsFeedbacksId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/feedbacks/{id}', 'delete', metadata);
    }
    /**
     * Reads all Hiring stages
     *
     * @summary Reads all Hiring stages
     */
    getApi20241001ResourcesAtsHiring_stages(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/hiring_stages', 'get', metadata);
    }
    /**
     * Reads a single Hiring stage
     *
     * @summary Reads a single Hiring stage
     */
    getApi20241001ResourcesAtsHiring_stagesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/hiring_stages/{id}', 'get', metadata);
    }
    /**
     * Reads all Job postings
     *
     * @summary Reads all Job postings
     */
    getApi20241001ResourcesAtsJob_postings(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/job_postings', 'get', metadata);
    }
    /**
     * Create a new job posting.
     *
     * @summary Creates a Job posting
     */
    postApi20241001ResourcesAtsJob_postings(body) {
        return this.core.fetch('/api/2024-10-01/resources/ats/job_postings', 'post', body);
    }
    /**
     * Reads a single Job posting
     *
     * @summary Reads a single Job posting
     */
    getApi20241001ResourcesAtsJob_postingsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/job_postings/{id}', 'get', metadata);
    }
    /**
     * Update a job posting.
     *
     * @summary Updates a Job posting
     */
    putApi20241001ResourcesAtsJob_postingsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/job_postings/{id}', 'put', body, metadata);
    }
    /**
     * Delete a job posting.
     *
     * @summary Deletes a Job posting
     */
    deleteApi20241001ResourcesAtsJob_postingsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/job_postings/{id}', 'delete', metadata);
    }
    /**
     * Duplicate an existing job posting.
     *
     * @summary Duplicates a Job posting
     */
    postApi20241001ResourcesAtsJob_postingsDuplicate(body) {
        return this.core.fetch('/api/2024-10-01/resources/ats/job_postings/duplicate', 'post', body);
    }
    /**
     * Reads all Messages
     *
     * @summary Reads all Messages
     */
    getApi20241001ResourcesAtsMessages(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/messages', 'get', metadata);
    }
    /**
     * Creates a Message
     *
     * @summary Creates a Message
     */
    postApi20241001ResourcesAtsMessages(body) {
        return this.core.fetch('/api/2024-10-01/resources/ats/messages', 'post', body);
    }
    /**
     * Reads a single Message
     *
     * @summary Reads a single Message
     */
    getApi20241001ResourcesAtsMessagesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/messages/{id}', 'get', metadata);
    }
    /**
     * Reads all Rejection reasons
     *
     * @summary Reads all Rejection reasons
     */
    getApi20241001ResourcesAtsRejection_reasons(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/rejection_reasons', 'get', metadata);
    }
    /**
     * Reads a single Rejection reason
     *
     * @summary Reads a single Rejection reason
     */
    getApi20241001ResourcesAtsRejection_reasonsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/ats/rejection_reasons/{id}', 'get', metadata);
    }
    /**
     * Reads all Break configurations
     *
     * @summary Reads all Break configurations
     */
    getApi20241001ResourcesAttendanceBreak_configurations(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/break_configurations', 'get', metadata);
    }
    /**
     * Creates a Break configuration
     *
     * @summary Creates a Break configuration
     */
    postApi20241001ResourcesAttendanceBreak_configurations(body) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/break_configurations', 'post', body);
    }
    /**
     * Reads a single Break configuration
     *
     * @summary Reads a single Break configuration
     */
    getApi20241001ResourcesAttendanceBreak_configurationsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/break_configurations/{id}', 'get', metadata);
    }
    /**
     * Updates a Break configuration
     *
     * @summary Updates a Break configuration
     */
    putApi20241001ResourcesAttendanceBreak_configurationsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/break_configurations/{id}', 'put', body, metadata);
    }
    /**
     * Get information about estimated data for a given date range and a bunch of employees.
     *
     * @summary Reads all Estimated times
     */
    getApi20241001ResourcesAttendanceEstimated_times(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/estimated_times', 'get', metadata);
    }
    /**
     * Get information about estimated data for a given date range and a bunch of employees.
     *
     * @summary Reads a single Estimated time
     */
    getApi20241001ResourcesAttendanceEstimated_timesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/estimated_times/{id}', 'get', metadata);
    }
    /**
     * This endpoint retrieves the current open shifts for the specified employee_ids.
     *
     * @summary Reads all Open shifts
     */
    getApi20241001ResourcesAttendanceOpen_shifts(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/open_shifts', 'get', metadata);
    }
    /**
     * Reads all Overtime requests
     *
     * @summary Reads all Overtime requests
     */
    getApi20241001ResourcesAttendanceOvertime_requests(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/overtime_requests', 'get', metadata);
    }
    /**
     * Creates an Overtime request
     *
     * @summary Creates an Overtime request
     */
    postApi20241001ResourcesAttendanceOvertime_requests(body) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/overtime_requests', 'post', body);
    }
    /**
     * Reads a single Overtime request
     *
     * @summary Reads a single Overtime request
     */
    getApi20241001ResourcesAttendanceOvertime_requestsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/overtime_requests/{id}', 'get', metadata);
    }
    /**
     * Updates an Overtime request
     *
     * @summary Updates an Overtime request
     */
    putApi20241001ResourcesAttendanceOvertime_requestsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/overtime_requests/{id}', 'put', body, metadata);
    }
    /**
     * Deletes an Overtime request
     *
     * @summary Deletes an Overtime request
     */
    deleteApi20241001ResourcesAttendanceOvertime_requestsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/overtime_requests/{id}', 'delete', metadata);
    }
    /**
     * Approves an Overtime request
     *
     * @summary Approves an Overtime request
     */
    postApi20241001ResourcesAttendanceOvertime_requestsApprove(body) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/overtime_requests/approve', 'post', body);
    }
    /**
     * Rejects an Overtime request
     *
     * @summary Rejects an Overtime request
     */
    postApi20241001ResourcesAttendanceOvertime_requestsReject(body) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/overtime_requests/reject', 'post', body);
    }
    /**
     * Reads all Shifts
     *
     * @summary Reads all Shifts
     */
    getApi20241001ResourcesAttendanceShifts(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/shifts', 'get', metadata);
    }
    /**
     * Creates a Shift
     *
     * @summary Creates a Shift
     */
    postApi20241001ResourcesAttendanceShifts(body) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/shifts', 'post', body);
    }
    /**
     * Reads a single Shift
     *
     * @summary Reads a single Shift
     */
    getApi20241001ResourcesAttendanceShiftsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/shifts/{id}', 'get', metadata);
    }
    /**
     * Updates a Shift
     *
     * @summary Updates a Shift
     */
    putApi20241001ResourcesAttendanceShiftsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/shifts/{id}', 'put', body, metadata);
    }
    /**
     * Deletes a Shift
     *
     * @summary Deletes a Shift
     */
    deleteApi20241001ResourcesAttendanceShiftsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/shifts/{id}', 'delete', metadata);
    }
    /**
     * Autofills a Shift
     *
     * @summary Autofills a Shift
     */
    postApi20241001ResourcesAttendanceShiftsAutofill(body) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/shifts/autofill', 'post', body);
    }
    /**
     * Given that attendance breaks are enabled, this endpoint ends a break in an open shift.
     *
     * @summary Break ends a Shift
     */
    postApi20241001ResourcesAttendanceShiftsBreak_end(body) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/shifts/break_end', 'post', body);
    }
    /**
     * Given that attendance breaks are enabled, this endpoint starts a break in an open shift.
     *
     * @summary Break starts a Shift
     */
    postApi20241001ResourcesAttendanceShiftsBreak_start(body) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/shifts/break_start', 'post', body);
    }
    /**
     * Use this endpoint to clock in a shift
     *
     * @summary Clocks in a shift
     */
    postApi20241001ResourcesAttendanceShiftsClock_in(body) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/shifts/clock_in', 'post', body);
    }
    /**
     * Use this endpoint to clock out a shift
     *
     * @summary Clocks out a shift
     */
    postApi20241001ResourcesAttendanceShiftsClock_out(body) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/shifts/clock_out', 'post', body);
    }
    /**
     * Use this endpoint to toggle shift (it will clock in or out)
     *
     * @summary Clock in/out a shift
     */
    postApi20241001ResourcesAttendanceShiftsToggle_clock(body) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/shifts/toggle_clock', 'post', body);
    }
    /**
     * Reads all Worked times
     *
     * @summary Reads all Worked times
     */
    getApi20241001ResourcesAttendanceWorked_times(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/attendance/worked_times', 'get', metadata);
    }
    /**
     * Reads all Incidences
     *
     * @summary Reads all Incidences
     */
    getApi20241001ResourcesBookkeepers_managementIncidences(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/bookkeepers_management/incidences', 'get', metadata);
    }
    /**
     * Reads a single Incidence
     *
     * @summary Reads a single Incidence
     */
    getApi20241001ResourcesBookkeepers_managementIncidencesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/bookkeepers_management/incidences/{id}', 'get', metadata);
    }
    /**
     * Updates an Incidence
     *
     * @summary Updates an Incidence
     */
    putApi20241001ResourcesBookkeepers_managementIncidencesId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/bookkeepers_management/incidences/{id}', 'put', body, metadata);
    }
    /**
     * Reads all Legal entities
     *
     * @summary Reads all Legal entities
     */
    getApi20241001ResourcesCompaniesLegal_entities(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/companies/legal_entities', 'get', metadata);
    }
    /**
     * Reads a single Legal entity
     *
     * @summary Reads a single Legal entity
     */
    getApi20241001ResourcesCompaniesLegal_entitiesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/companies/legal_entities/{id}', 'get', metadata);
    }
    /**
     * Reads all Compensations
     *
     * @summary Reads all Compensations
     */
    getApi20241001ResourcesContractsCompensations(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/contracts/compensations', 'get', metadata);
    }
    /**
     * Creates a Compensation
     *
     * @summary Creates a Compensation
     */
    postApi20241001ResourcesContractsCompensations(body) {
        return this.core.fetch('/api/2024-10-01/resources/contracts/compensations', 'post', body);
    }
    /**
     * Reads a single Compensation
     *
     * @summary Reads a single Compensation
     */
    getApi20241001ResourcesContractsCompensationsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/contracts/compensations/{id}', 'get', metadata);
    }
    /**
     * Updates a Compensation
     *
     * @summary Updates a Compensation
     */
    putApi20241001ResourcesContractsCompensationsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/contracts/compensations/{id}', 'put', body, metadata);
    }
    /**
     * Deletes a Compensation
     *
     * @summary Deletes a Compensation
     */
    deleteApi20241001ResourcesContractsCompensationsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/contracts/compensations/{id}', 'delete', metadata);
    }
    /**
     * Reads all Contract versions
     *
     * @summary Reads all Contract versions
     */
    getApi20241001ResourcesContractsContract_versions(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/contracts/contract_versions', 'get', metadata);
    }
    /**
     * Creates a Contract version
     *
     * @summary Creates a Contract version
     */
    postApi20241001ResourcesContractsContract_versions(body) {
        return this.core.fetch('/api/2024-10-01/resources/contracts/contract_versions', 'post', body);
    }
    /**
     * Reads a single Contract version
     *
     * @summary Reads a single Contract version
     */
    getApi20241001ResourcesContractsContract_versionsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/contracts/contract_versions/{id}', 'get', metadata);
    }
    /**
     * Updates a Contract version
     *
     * @summary Updates a Contract version
     */
    putApi20241001ResourcesContractsContract_versionsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/contracts/contract_versions/{id}', 'put', body, metadata);
    }
    /**
     * Deletes a Contract version
     *
     * @summary Deletes a Contract version
     */
    deleteApi20241001ResourcesContractsContract_versionsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/contracts/contract_versions/{id}', 'delete', metadata);
    }
    /**
     * Reads all Reference Contracts. The reference contract is the contract that applies
     * today. If no contract applies today, we will return the nearest upcoming contract. If
     * there are no upcoming contracts, we will provide the most recent past contract.
     *
     * @summary Reads all Reference contracts
     */
    getApi20241001ResourcesContractsReference_contracts(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/contracts/reference_contracts', 'get', metadata);
    }
    /**
     * Reads all Taxonomies
     *
     * @summary Reads all Taxonomies
     */
    getApi20241001ResourcesContractsTaxonomies(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/contracts/taxonomies', 'get', metadata);
    }
    /**
     * Reads a single Taxonomy
     *
     * @summary Reads a single Taxonomy
     */
    getApi20241001ResourcesContractsTaxonomiesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/contracts/taxonomies/{id}', 'get', metadata);
    }
    /**
     * Reads all Fields
     *
     * @summary Reads all Fields
     */
    getApi20241001ResourcesCustom_fieldsFields(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/custom_fields/fields', 'get', metadata);
    }
    /**
     * Creates a Field
     *
     * @summary Creates a Field
     */
    postApi20241001ResourcesCustom_fieldsFields(body) {
        return this.core.fetch('/api/2024-10-01/resources/custom_fields/fields', 'post', body);
    }
    /**
     * Reads a single Field
     *
     * @summary Reads a single Field
     */
    getApi20241001ResourcesCustom_fieldsFieldsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/custom_fields/fields/{id}', 'get', metadata);
    }
    /**
     * Deletes a Field
     *
     * @summary Deletes a Field
     */
    deleteApi20241001ResourcesCustom_fieldsFieldsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/custom_fields/fields/{id}', 'delete', metadata);
    }
    /**
     * Reads all Options
     *
     * @summary Reads all Options
     */
    getApi20241001ResourcesCustom_fieldsOptions(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/custom_fields/options', 'get', metadata);
    }
    /**
     * Creates an Option
     *
     * @summary Creates an Option
     */
    postApi20241001ResourcesCustom_fieldsOptions(body) {
        return this.core.fetch('/api/2024-10-01/resources/custom_fields/options', 'post', body);
    }
    /**
     * Reads a single Option
     *
     * @summary Reads a single Option
     */
    getApi20241001ResourcesCustom_fieldsOptionsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/custom_fields/options/{id}', 'get', metadata);
    }
    /**
     * Reads schema custom fields
     *
     * @summary Reads all Resource fields
     */
    getApi20241001ResourcesCustom_fieldsResource_fields(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/custom_fields/resource_fields', 'get', metadata);
    }
    /**
     * Creates an schema custom field
     *
     * @summary Creates a Resource field
     */
    postApi20241001ResourcesCustom_fieldsResource_fields(body) {
        return this.core.fetch('/api/2024-10-01/resources/custom_fields/resource_fields', 'post', body);
    }
    /**
     * Reads schema custom fields
     *
     * @summary Reads a single Resource field
     */
    getApi20241001ResourcesCustom_fieldsResource_fieldsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/custom_fields/resource_fields/{id}', 'get', metadata);
    }
    /**
     * Reads all Values
     *
     * @summary Reads all Values
     */
    getApi20241001ResourcesCustom_fieldsValues(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/custom_fields/values', 'get', metadata);
    }
    /**
     * Creates a Value
     *
     * @summary Creates a Value
     */
    postApi20241001ResourcesCustom_fieldsValues(body) {
        return this.core.fetch('/api/2024-10-01/resources/custom_fields/values', 'post', body);
    }
    /**
     * Reads a single Value
     *
     * @summary Reads a single Value
     */
    getApi20241001ResourcesCustom_fieldsValuesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/custom_fields/values/{id}', 'get', metadata);
    }
    putApi20241001ResourcesCustom_fieldsValuesId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/custom_fields/values/{id}', 'put', body, metadata);
    }
    /**
     * Reads all Schemas
     *
     * @summary Reads all Schemas
     */
    getApi20241001ResourcesCustom_resourcesSchemas(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/custom_resources/schemas', 'get', metadata);
    }
    /**
     * Creates a Schema
     *
     * @summary Creates a Schema
     */
    postApi20241001ResourcesCustom_resourcesSchemas(body) {
        return this.core.fetch('/api/2024-10-01/resources/custom_resources/schemas', 'post', body);
    }
    /**
     * Reads a single Schema
     *
     * @summary Reads a single Schema
     */
    getApi20241001ResourcesCustom_resourcesSchemasId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/custom_resources/schemas/{id}', 'get', metadata);
    }
    /**
     * Reads all Values
     *
     * @summary Reads all Values
     */
    getApi20241001ResourcesCustom_resourcesValues(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/custom_resources/values', 'get', metadata);
    }
    /**
     * Creates a Value
     *
     * @summary Creates a Value
     */
    postApi20241001ResourcesCustom_resourcesValues(body) {
        return this.core.fetch('/api/2024-10-01/resources/custom_resources/values', 'post', body);
    }
    /**
     * Reads a single Value
     *
     * @summary Reads a single Value
     */
    getApi20241001ResourcesCustom_resourcesValuesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/custom_resources/values/{id}', 'get', metadata);
    }
    /**
     * Reads all Documents
     *
     * @summary Reads all Documents
     */
    getApi20241001ResourcesDocumentsDocuments(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/documents/documents', 'get', metadata);
    }
    /**
     * Creates a Document
     *
     * @summary Creates a Document
     */
    postApi20241001ResourcesDocumentsDocuments(body) {
        return this.core.fetch('/api/2024-10-01/resources/documents/documents', 'post', body);
    }
    /**
     * Reads a single Document
     *
     * @summary Reads a single Document
     */
    getApi20241001ResourcesDocumentsDocumentsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/documents/documents/{id}', 'get', metadata);
    }
    /**
     * Updates a Document
     *
     * @summary Updates a Document
     */
    putApi20241001ResourcesDocumentsDocumentsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/documents/documents/{id}', 'put', body, metadata);
    }
    /**
     * Deletes a Document
     *
     * @summary Deletes a Document
     */
    deleteApi20241001ResourcesDocumentsDocumentsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/documents/documents/{id}', 'delete', metadata);
    }
    /**
     * This endpoint moves the documents to the trash bin, after 30 days they will be deleted
     * from the system.
     *
     * @summary Move to trash bins a Document
     */
    postApi20241001ResourcesDocumentsDocumentsMove_to_trash_bin(body) {
        return this.core.fetch('/api/2024-10-01/resources/documents/documents/move_to_trash_bin', 'post', body);
    }
    /**
     * This endpoint restores the documents from the trash bin, remember that a document in the
     * trash bin will be deleted from the system after 30 days.
     *
     * @summary Restore from trash bins a Document
     */
    postApi20241001ResourcesDocumentsDocumentsRestore_from_trash_bin(body) {
        return this.core.fetch('/api/2024-10-01/resources/documents/documents/restore_from_trash_bin', 'post', body);
    }
    /**
     * Get all folders.
     *
     * @summary Reads all Folders
     */
    getApi20241001ResourcesDocumentsFolders(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/documents/folders', 'get', metadata);
    }
    /**
     * Create a folder.
     *
     * @summary Creates a Folder
     */
    postApi20241001ResourcesDocumentsFolders(body) {
        return this.core.fetch('/api/2024-10-01/resources/documents/folders', 'post', body);
    }
    /**
     * Get all folders.
     *
     * @summary Reads a single Folder
     */
    getApi20241001ResourcesDocumentsFoldersId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/documents/folders/{id}', 'get', metadata);
    }
    /**
     * Update a folder.
     *
     * @summary Updates a Folder
     */
    putApi20241001ResourcesDocumentsFoldersId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/documents/folders/{id}', 'put', body, metadata);
    }
    /**
     * Only admins can see all the employees' information, regular users will get a restricted
     * version of the payload as a response based on the permission set by the admin
     *
     * @summary Reads all Employees
     */
    getApi20241001ResourcesEmployeesEmployees(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/employees/employees', 'get', metadata);
    }
    /**
     * Only admins can see all the employees' information, regular users will get a restricted
     * version of the payload as a response based on the permission set by the admin
     *
     * @summary Reads a single Employee
     */
    getApi20241001ResourcesEmployeesEmployeesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/employees/employees/{id}', 'get', metadata);
    }
    /**
     * Updates an Employee
     *
     * @summary Updates an Employee
     */
    putApi20241001ResourcesEmployeesEmployeesId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/employees/employees/{id}', 'put', body, metadata);
    }
    /**
     * Create an employee with a contract
     *
     * @summary Create with contracts an Employee
     */
    postApi20241001ResourcesEmployeesEmployeesCreate_with_contract(body) {
        return this.core.fetch('/api/2024-10-01/resources/employees/employees/create_with_contract', 'post', body);
    }
    /**
     * Send an email invitation to an unconfirmed employee to join Factorial
     *
     * @summary Invites an Employee
     */
    postApi20241001ResourcesEmployeesEmployeesInvite(body) {
        return this.core.fetch('/api/2024-10-01/resources/employees/employees/invite', 'post', body);
    }
    /**
     * Terminates an Employee
     *
     * @summary Terminates an Employee
     */
    postApi20241001ResourcesEmployeesEmployeesTerminate(body) {
        return this.core.fetch('/api/2024-10-01/resources/employees/employees/terminate', 'post', body);
    }
    /**
     * Unterminates an Employee
     *
     * @summary Unterminates an Employee
     */
    postApi20241001ResourcesEmployeesEmployeesUnterminate(body) {
        return this.core.fetch('/api/2024-10-01/resources/employees/employees/unterminate', 'post', body);
    }
    /**
     * This endpoint can be used to retrieve a list of absence `employee updates`.
     *
     * @summary Reads all Absences
     */
    getApi20241001ResourcesEmployee_updatesAbsences(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/employee_updates/absences', 'get', metadata);
    }
    /**
     * This endpoint can be used to retrieve a list of absence `employee updates`.
     *
     * @summary Reads a single Absence
     */
    getApi20241001ResourcesEmployee_updatesAbsencesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/employee_updates/absences/{id}', 'get', metadata);
    }
    /**
     * This endpoint can be used to retrieve a list of contrat changes `employee updates`
     * details.
     *
     * @summary Reads all Contract changes
     */
    getApi20241001ResourcesEmployee_updatesContract_changes(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/employee_updates/contract_changes', 'get', metadata);
    }
    /**
     * This endpoint can be used to retrieve a list of contrat changes `employee updates`
     * details.
     *
     * @summary Reads a single Contract change
     */
    getApi20241001ResourcesEmployee_updatesContract_changesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/employee_updates/contract_changes/{id}', 'get', metadata);
    }
    /**
     * This endpoint can be used to retrieve a detail of new hire `employee updates`.
     *
     * @summary Reads all New hires
     */
    getApi20241001ResourcesEmployee_updatesNew_hires(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/employee_updates/new_hires', 'get', metadata);
    }
    /**
     * This endpoint can be used to retrieve a detail of new hire `employee updates`.
     *
     * @summary Reads a single New hire
     */
    getApi20241001ResourcesEmployee_updatesNew_hiresId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/employee_updates/new_hires/{id}', 'get', metadata);
    }
    /**
     * This endpoint can be used to retrieve a list of personal changes `employee updates`.
     *
     * @summary Reads all Personal changes
     */
    getApi20241001ResourcesEmployee_updatesPersonal_changes(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/employee_updates/personal_changes', 'get', metadata);
    }
    /**
     * This endpoint can be used to retrieve a list of personal changes `employee updates`.
     *
     * @summary Reads a single Personal change
     */
    getApi20241001ResourcesEmployee_updatesPersonal_changesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/employee_updates/personal_changes/{id}', 'get', metadata);
    }
    /**
     * This endpoint can be used to retrieve a list of `employee updates`.
     *
     * @summary Reads all Summaries
     */
    getApi20241001ResourcesEmployee_updatesSummaries(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/employee_updates/summaries', 'get', metadata);
    }
    /**
     * This endpoint can be used to retrieve a list of `employee updates`.
     *
     * @summary Reads a single Summary
     */
    getApi20241001ResourcesEmployee_updatesSummariesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/employee_updates/summaries/{id}', 'get', metadata);
    }
    /**
     * This endpoint can be used to retrieve a list of termination `employee updates`.
     *
     * @summary Reads all Terminations
     */
    getApi20241001ResourcesEmployee_updatesTerminations(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/employee_updates/terminations', 'get', metadata);
    }
    /**
     * This endpoint can be used to retrieve a list of termination `employee updates`.
     *
     * @summary Reads a single Termination
     */
    getApi20241001ResourcesEmployee_updatesTerminationsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/employee_updates/terminations/{id}', 'get', metadata);
    }
    /**
     * Reads all Expensables
     *
     * @summary Reads all Expensables
     */
    getApi20241001ResourcesExpensesExpensables(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/expenses/expensables', 'get', metadata);
    }
    /**
     * Reads a single Expensable
     *
     * @summary Reads a single Expensable
     */
    getApi20241001ResourcesExpensesExpensablesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/expenses/expensables/{id}', 'get', metadata);
    }
    /**
     * Reads all Expenses
     *
     * @summary Reads all Expenses
     */
    getApi20241001ResourcesExpensesExpenses(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/expenses/expenses', 'get', metadata);
    }
    /**
     * Reads a single Expense
     *
     * @summary Reads a single Expense
     */
    getApi20241001ResourcesExpensesExpensesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/expenses/expenses/{id}', 'get', metadata);
    }
    /**
     * Reads all Mileages
     *
     * @summary Reads all Mileages
     */
    getApi20241001ResourcesExpensesMileages(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/expenses/mileages', 'get', metadata);
    }
    /**
     * Reads a single Mileage
     *
     * @summary Reads a single Mileage
     */
    getApi20241001ResourcesExpensesMileagesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/expenses/mileages/{id}', 'get', metadata);
    }
    /**
     * Fetch one or all ledger accounts for the company legal_entities.
     *
     * @summary Reads all Accounts
     */
    getApi20241001ResourcesFinanceAccounts(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/finance/accounts', 'get', metadata);
    }
    /**
     * Create a ledger account for the company legal_entity. To avoid duplicates use the
     * external_id field to set the ID of the ledger account in the external system.
     *
     * @summary Creates an Account
     */
    postApi20241001ResourcesFinanceAccounts(body) {
        return this.core.fetch('/api/2024-10-01/resources/finance/accounts', 'post', body);
    }
    /**
     * Fetch one or all ledger accounts for the company legal_entities.
     *
     * @summary Reads a single Account
     */
    getApi20241001ResourcesFinanceAccountsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/finance/accounts/{id}', 'get', metadata);
    }
    /**
     * Reads all Cost centers
     *
     * @summary Reads all Cost centers
     */
    getApi20241001ResourcesFinanceCost_centers(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/finance/cost_centers', 'get', metadata);
    }
    /**
     * Creates a Cost center
     *
     * @summary Creates a Cost center
     */
    postApi20241001ResourcesFinanceCost_centers(body) {
        return this.core.fetch('/api/2024-10-01/resources/finance/cost_centers', 'post', body);
    }
    /**
     * Reads a single Cost center
     *
     * @summary Reads a single Cost center
     */
    getApi20241001ResourcesFinanceCost_centersId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/finance/cost_centers/{id}', 'get', metadata);
    }
    /**
     * Deletes a Cost center
     *
     * @summary Deletes a Cost center
     */
    deleteApi20241001ResourcesFinanceCost_centersId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/finance/cost_centers/{id}', 'delete', metadata);
    }
    /**
     * Edits a Cost center
     *
     * @summary Edits a Cost center
     */
    postApi20241001ResourcesFinanceCost_centersEdit(body) {
        return this.core.fetch('/api/2024-10-01/resources/finance/cost_centers/edit', 'post', body);
    }
    /**
     * Reads all Cost center memberships
     *
     * @summary Reads all Cost center memberships
     */
    getApi20241001ResourcesFinanceCost_center_memberships(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/finance/cost_center_memberships', 'get', metadata);
    }
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
    postApi20241001ResourcesFinanceCost_center_membershipsBulk_create_update(body) {
        return this.core.fetch('/api/2024-10-01/resources/finance/cost_center_memberships/bulk_create_update', 'post', body);
    }
    /**
     * Retrieves company holidays
     *
     * @summary Reads all Company holidays
     */
    getApi20241001ResourcesHolidaysCompany_holidays(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/holidays/company_holidays', 'get', metadata);
    }
    /**
     * Retrieves company holidays
     *
     * @summary Reads a single Company holiday
     */
    getApi20241001ResourcesHolidaysCompany_holidaysId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/holidays/company_holidays/{id}', 'get', metadata);
    }
    /**
     * Reads all Locations
     *
     * @summary Reads all Locations
     */
    getApi20241001ResourcesLocationsLocations(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/locations/locations', 'get', metadata);
    }
    /**
     * Creates a Location
     *
     * @summary Creates a Location
     */
    postApi20241001ResourcesLocationsLocations(body) {
        return this.core.fetch('/api/2024-10-01/resources/locations/locations', 'post', body);
    }
    /**
     * Reads a single Location
     *
     * @summary Reads a single Location
     */
    getApi20241001ResourcesLocationsLocationsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/locations/locations/{id}', 'get', metadata);
    }
    /**
     * Updates a Location
     *
     * @summary Updates a Location
     */
    putApi20241001ResourcesLocationsLocationsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/locations/locations/{id}', 'put', body, metadata);
    }
    /**
     * Deletes a Location
     *
     * @summary Deletes a Location
     */
    deleteApi20241001ResourcesLocationsLocationsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/locations/locations/{id}', 'delete', metadata);
    }
    /**
     * Reads all Work areas
     *
     * @summary Reads all Work areas
     */
    getApi20241001ResourcesLocationsWork_areas(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/locations/work_areas', 'get', metadata);
    }
    /**
     * Creates a Work area
     *
     * @summary Creates a Work area
     */
    postApi20241001ResourcesLocationsWork_areas(body) {
        return this.core.fetch('/api/2024-10-01/resources/locations/work_areas', 'post', body);
    }
    /**
     * Reads a single Work area
     *
     * @summary Reads a single Work area
     */
    getApi20241001ResourcesLocationsWork_areasId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/locations/work_areas/{id}', 'get', metadata);
    }
    /**
     * Updates a Work area
     *
     * @summary Updates a Work area
     */
    putApi20241001ResourcesLocationsWork_areasId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/locations/work_areas/{id}', 'put', body, metadata);
    }
    /**
     * Archives a Work area
     *
     * @summary Archives a Work area
     */
    postApi20241001ResourcesLocationsWork_areasArchive(body) {
        return this.core.fetch('/api/2024-10-01/resources/locations/work_areas/archive', 'post', body);
    }
    /**
     * Unarchives a Work area
     *
     * @summary Unarchives a Work area
     */
    postApi20241001ResourcesLocationsWork_areasUnarchive(body) {
        return this.core.fetch('/api/2024-10-01/resources/locations/work_areas/unarchive', 'post', body);
    }
    /**
     * Reads all Installation settings
     *
     * @summary Reads all Installation settings
     */
    getApi20241001ResourcesMarketplaceInstallation_settings(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/marketplace/installation_settings', 'get', metadata);
    }
    /**
     * Reads all Settings
     *
     * @summary Reads all Settings
     */
    getApi20241001ResourcesMarketplaceSettings(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/marketplace/settings', 'get', metadata);
    }
    /**
     * Get all family situations.
     *
     * @summary Reads all Family situations
     */
    getApi20241001ResourcesPayrollFamily_situations(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/payroll/family_situations', 'get', metadata);
    }
    /**
     * Create a family situation.
     *
     * @summary Creates a Family situation
     */
    postApi20241001ResourcesPayrollFamily_situations(body) {
        return this.core.fetch('/api/2024-10-01/resources/payroll/family_situations', 'post', body);
    }
    /**
     * Update a family situation.
     *
     * @summary Updates a Family situation
     */
    putApi20241001ResourcesPayrollFamily_situationsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/payroll/family_situations/{id}', 'put', body, metadata);
    }
    /**
     * Change statuses a Policy period
     *
     * @summary Change statuses a Policy period
     */
    postApi20241001ResourcesPayrollPolicy_periodsChange_status(body) {
        return this.core.fetch('/api/2024-10-01/resources/payroll/policy_periods/change_status', 'post', body);
    }
    /**
     * Reads all Supplements
     *
     * @summary Reads all Supplements
     */
    getApi20241001ResourcesPayrollSupplements(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/payroll/supplements', 'get', metadata);
    }
    /**
     * Creates a Supplement
     *
     * @summary Creates a Supplement
     */
    postApi20241001ResourcesPayrollSupplements(body) {
        return this.core.fetch('/api/2024-10-01/resources/payroll/supplements', 'post', body);
    }
    /**
     * Reads a single Supplement
     *
     * @summary Reads a single Supplement
     */
    getApi20241001ResourcesPayrollSupplementsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/payroll/supplements/{id}', 'get', metadata);
    }
    /**
     * Updates a Supplement
     *
     * @summary Updates a Supplement
     */
    putApi20241001ResourcesPayrollSupplementsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/payroll/supplements/{id}', 'put', body, metadata);
    }
    /**
     * Deletes a Supplement
     *
     * @summary Deletes a Supplement
     */
    deleteApi20241001ResourcesPayrollSupplementsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/payroll/supplements/{id}', 'delete', metadata);
    }
    /**
     * Reads Payroll employee identifier codes, current countries supported are Portugal, Italy
     * and Germany
     *
     * @summary Reads all Identifiers
     */
    getApi20241001ResourcesPayroll_employeesIdentifiers(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/payroll_employees/identifiers', 'get', metadata);
    }
    /**
     * Reads Payroll employee identifier codes, current countries supported are Portugal, Italy
     * and Germany
     *
     * @summary Creates an Identifier
     */
    postApi20241001ResourcesPayroll_employeesIdentifiers(body) {
        return this.core.fetch('/api/2024-10-01/resources/payroll_employees/identifiers', 'post', body);
    }
    /**
     * Reads Payroll employee identifier codes, current countries supported are Portugal, Italy
     * and Germany
     *
     * @summary Reads a single Identifier
     */
    getApi20241001ResourcesPayroll_employeesIdentifiersId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/payroll_employees/identifiers/{id}', 'get', metadata);
    }
    /**
     * Reads Payroll employee identifier codes, current countries supported are Portugal, Italy
     * and Germany
     *
     * @summary Updates an Identifier
     */
    putApi20241001ResourcesPayroll_employeesIdentifiersId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/payroll_employees/identifiers/{id}', 'put', body, metadata);
    }
    /**
     * Reads Payroll employee identifier codes, current countries supported are Portugal, Italy
     * and Germany
     *
     * @summary Deletes an Identifier
     */
    deleteApi20241001ResourcesPayroll_employeesIdentifiersId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/payroll_employees/identifiers/{id}', 'delete', metadata);
    }
    /**
     * Reads all Codes
     *
     * @summary Reads all Codes
     */
    getApi20241001ResourcesPayroll_integrations_baseCodes(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/payroll_integrations_base/codes', 'get', metadata);
    }
    /**
     * Creates a Code
     *
     * @summary Creates a Code
     */
    postApi20241001ResourcesPayroll_integrations_baseCodes(body) {
        return this.core.fetch('/api/2024-10-01/resources/payroll_integrations_base/codes', 'post', body);
    }
    /**
     * Updates a Code
     *
     * @summary Updates a Code
     */
    putApi20241001ResourcesPayroll_integrations_baseCodesId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/payroll_integrations_base/codes/{id}', 'put', body, metadata);
    }
    /**
     * Deletes a Code
     *
     * @summary Deletes a Code
     */
    deleteApi20241001ResourcesPayroll_integrations_baseCodesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/payroll_integrations_base/codes/{id}', 'delete', metadata);
    }
    /**
     * Retrieves the action plans of review processes.
     *
     * @summary Reads all Agreements
     */
    getApi20241001ResourcesPerformanceAgreements(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/agreements', 'get', metadata);
    }
    /**
     * Retrieves the action plans of review processes.
     *
     * @summary Reads a single Agreement
     */
    getApi20241001ResourcesPerformanceAgreementsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/agreements/{id}', 'get', metadata);
    }
    /**
     * Initiate the action plan for all your direct reports in a review process. If you are
     * acting as a company, the action plan from all employees in the review process will be
     * initiated.
     *
     * @summary Bulk initiates an Agreement
     */
    postApi20241001ResourcesPerformanceAgreementsBulk_initiate(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/agreements/bulk_initiate', 'post', body);
    }
    /**
     * Initiate the action plan for a review process target ID in a review process.
     *
     * @summary Initiates an Agreement
     */
    postApi20241001ResourcesPerformanceAgreementsInitiate(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/agreements/initiate', 'post', body);
    }
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
    getApi20241001ResourcesPerformanceReview_evaluations(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_evaluations', 'get', metadata);
    }
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
    getApi20241001ResourcesPerformanceReview_evaluationsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_evaluations/{id}', 'get', metadata);
    }
    /**
     * Define a new reviewer for the evaluation that will only be able to leave feedback about
     * the employee. This can only be done if the process is active, the evaluation is not
     * published and the evaluation type is not "self".
     *
     * @summary Replace reviewers a Review evaluation
     */
    postApi20241001ResourcesPerformanceReview_evaluationsReplace_reviewer(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_evaluations/replace_reviewer', 'post', body);
    }
    /**
     * Retrieves the questions and answers of review evaluations.
     *
     * @summary Reads all Review evaluation answers
     */
    getApi20241001ResourcesPerformanceReview_evaluation_answers(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_evaluation_answers', 'get', metadata);
    }
    /**
     * Retrieves the review owners of review processes (each process has at least one owner).
     * The owners can edit the review process and access its results.
     *
     * @summary Reads all Review owners
     */
    getApi20241001ResourcesPerformanceReview_owners(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_owners', 'get', metadata);
    }
    /**
     * Remove an owner from a review process. The review process must have at least one owner.
     *
     * @summary Deletes a Review owner
     */
    deleteApi20241001ResourcesPerformanceReview_ownersId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_owners/{id}', 'delete', metadata);
    }
    /**
     * Add multiple owners to a review process.
     *
     * @summary Bulk creates a Review owner
     */
    postApi20241001ResourcesPerformanceReview_ownersBulk_create(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_owners/bulk_create', 'post', body);
    }
    /**
     * Reads all Review processes
     *
     * @summary Reads all Review processes
     */
    getApi20241001ResourcesPerformanceReview_processes(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_processes', 'get', metadata);
    }
    /**
     * Create a new review process.
     *
     * @summary Creates a Review process
     */
    postApi20241001ResourcesPerformanceReview_processes(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_processes', 'post', body);
    }
    /**
     * Reads a single Review process
     *
     * @summary Reads a single Review process
     */
    getApi20241001ResourcesPerformanceReview_processesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_processes/{id}', 'get', metadata);
    }
    /**
     * Delete an existing review process. This cannot be done if the process has been finished.
     *
     * @summary Deletes a Review process
     */
    deleteApi20241001ResourcesPerformanceReview_processesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_processes/{id}', 'delete', metadata);
    }
    /**
     * Duplicate an existing review process
     *
     * @summary Duplicates a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesDuplicate(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_processes/duplicate', 'post', body);
    }
    /**
     * Send bulk reminders to the reviewers that haven't answered their evaluations in a review
     * process.
     *
     * @summary Remind in bulks a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesRemind_in_bulk(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_processes/remind_in_bulk', 'post', body);
    }
    /**
     * Reopen a finished review process.
     *
     * @summary Reopens a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesReopen(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_processes/reopen', 'post', body);
    }
    /**
     * Start a review process. This is only allowed if the process is in draft or scheduled.
     *
     * @summary Starts a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesStart(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_processes/start', 'post', body);
    }
    /**
     * Stop a review process.
     *
     * @summary Stops a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesStop(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_processes/stop', 'post', body);
    }
    /**
     * Archive or unarchive a review process
     *
     * @summary Toggle archives a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesToggle_archive(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_processes/toggle_archive', 'post', body);
    }
    /**
     * Enable or disable the action plan feature of a review process.
     *
     * @summary Update agreements configurations a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesUpdate_agreements_configuration(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_processes/update_agreements_configuration', 'post', body);
    }
    /**
     * Update the basic information of an existing review process.
     *
     * @summary Update basic infos a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesUpdate_basic_info(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_processes/update_basic_info', 'post', body);
    }
    /**
     * Update the deadline of a review process.
     *
     * @summary Update deadlines a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesUpdate_deadline(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_processes/update_deadline', 'post', body);
    }
    /**
     * Update the review types of a review process. This is only allowed while the process is
     * in draft.
     *
     * @summary Update reviewer strategies a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesUpdate_reviewer_strategies(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_processes/update_reviewer_strategies', 'post', body);
    }
    /**
     * Update the starting date of a scheduled review process. This is only allowed if the
     * process is scheduled.
     *
     * @summary Update schedules a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesUpdate_schedule(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_processes/update_schedule', 'post', body);
    }
    /**
     * Update the criteria for calculating the participants of a review process. This is only
     * allowed while the process is in draft.
     *
     * @summary Update target strategies a Review process
     */
    postApi20241001ResourcesPerformanceReview_processesUpdate_target_strategy(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_processes/update_target_strategy', 'post', body);
    }
    /**
     * Reads all Review process estimated targets
     *
     * @summary Reads all Review process estimated targets
     */
    getApi20241001ResourcesPerformanceReview_process_estimated_targets(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_process_estimated_targets', 'get', metadata);
    }
    /**
     * Retrieves the participants of active review processes.
     *
     * @summary Reads all Review process targets
     */
    getApi20241001ResourcesPerformanceReview_process_targets(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_process_targets', 'get', metadata);
    }
    /**
     * Retrieves the participants of active review processes.
     *
     * @summary Reads a single Review process target
     */
    getApi20241001ResourcesPerformanceReview_process_targetsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_process_targets/{id}', 'get', metadata);
    }
    /**
     * Delete a participant from the active review process. This will also remove all
     * previously submitted evaluations about the participant.
     *
     * @summary Deletes a Review process target
     */
    deleteApi20241001ResourcesPerformanceReview_process_targetsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_process_targets/{id}', 'delete', metadata);
    }
    /**
     * Assign peers to evaluate a specific participant.
     *
     * @summary Add peers a Review process target
     */
    postApi20241001ResourcesPerformanceReview_process_targetsAdd_peers(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_process_targets/add_peers', 'post', body);
    }
    /**
     * Add multiple participants to the active review process and create the evaluations for
     * them.
     *
     * @summary Bulk creates a Review process target
     */
    postApi20241001ResourcesPerformanceReview_process_targetsBulk_create(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_process_targets/bulk_create', 'post', body);
    }
    /**
     * Remove peers and their evaluations from a specific participant.
     *
     * @summary Remove peer evaluations a Review process target
     */
    postApi20241001ResourcesPerformanceReview_process_targetsRemove_peer_evaluations(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_process_targets/remove_peer_evaluations', 'post', body);
    }
    /**
     * Retrieves the questionnaires by reviewer strategy for review processes.
     *
     * @summary Reads all Review questionnaire by strategies
     */
    getApi20241001ResourcesPerformanceReview_questionnaire_by_strategies(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_questionnaire_by_strategies', 'get', metadata);
    }
    /**
     * Retrieves the questionnaires by reviewer strategy for review processes.
     *
     * @summary Reads a single Review questionnaire by strategy
     */
    getApi20241001ResourcesPerformanceReview_questionnaire_by_strategiesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_questionnaire_by_strategies/{id}', 'get', metadata);
    }
    /**
     * Update the scoring range used in rating questions for all reviewer strategies.
     *
     * @summary Update default rating scales a Review questionnaire by strategy
     */
    postApi20241001ResourcesPerformanceReview_questionnaire_by_strategiesUpdate_default_rating_scale(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_questionnaire_by_strategies/update_default_rating_scale', 'post', body);
    }
    /**
     * Update the review process questionnaire for a specific reviewer strategy (review type).
     * It can be used to add, edit or delete questions from a draft review process.
     *
     * @summary Update questionnaire for strategies a Review questionnaire by strategy
     */
    postApi20241001ResourcesPerformanceReview_questionnaire_by_strategiesUpdate_questionnaire_for_strategy(body) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_questionnaire_by_strategies/update_questionnaire_for_strategy', 'post', body);
    }
    /**
     * Retrieves the visibility settings of review processes.
     *
     * @summary Reads all Review visibility settings
     */
    getApi20241001ResourcesPerformanceReview_visibility_settings(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_visibility_settings', 'get', metadata);
    }
    /**
     * Modifiy the visibility settings of the review process.
     *
     * @summary Updates a Review visibility setting
     */
    putApi20241001ResourcesPerformanceReview_visibility_settingsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/review_visibility_settings/{id}', 'put', body, metadata);
    }
    /**
     * Retrieves the participants' managers of a review process.
     *
     * @summary Reads all Target managers
     */
    getApi20241001ResourcesPerformanceTarget_managers(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/target_managers', 'get', metadata);
    }
    /**
     * Retrieves the participants' managers of a review process.
     *
     * @summary Reads a single Target manager
     */
    getApi20241001ResourcesPerformanceTarget_managersId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/performance/target_managers/{id}', 'get', metadata);
    }
    /**
     * Reads all Comments
     *
     * @summary Reads all Comments
     */
    getApi20241001ResourcesPostsComments(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/posts/comments', 'get', metadata);
    }
    /**
     * Creates a Comment
     *
     * @summary Creates a Comment
     */
    postApi20241001ResourcesPostsComments(body) {
        return this.core.fetch('/api/2024-10-01/resources/posts/comments', 'post', body);
    }
    /**
     * Reads a single Comment
     *
     * @summary Reads a single Comment
     */
    getApi20241001ResourcesPostsCommentsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/posts/comments/{id}', 'get', metadata);
    }
    /**
     * Updates a Comment
     *
     * @summary Updates a Comment
     */
    putApi20241001ResourcesPostsCommentsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/posts/comments/{id}', 'put', body, metadata);
    }
    /**
     * Deletes a Comment
     *
     * @summary Deletes a Comment
     */
    deleteApi20241001ResourcesPostsCommentsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/posts/comments/{id}', 'delete', metadata);
    }
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
    getApi20241001ResourcesPostsGroups(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/posts/groups', 'get', metadata);
    }
    /**
     * Creates a Group
     *
     * @summary Creates a Group
     */
    postApi20241001ResourcesPostsGroups(body) {
        return this.core.fetch('/api/2024-10-01/resources/posts/groups', 'post', body);
    }
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
    getApi20241001ResourcesPostsGroupsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/posts/groups/{id}', 'get', metadata);
    }
    /**
     * Updates a Group
     *
     * @summary Updates a Group
     */
    putApi20241001ResourcesPostsGroupsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/posts/groups/{id}', 'put', body, metadata);
    }
    /**
     * Deletes a Group
     *
     * @summary Deletes a Group
     */
    deleteApi20241001ResourcesPostsGroupsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/posts/groups/{id}', 'delete', metadata);
    }
    /**
     * Archives a group but keeps the data.
     *
     * @summary Archives a Group
     */
    postApi20241001ResourcesPostsGroupsArchive(body) {
        return this.core.fetch('/api/2024-10-01/resources/posts/groups/archive', 'post', body);
    }
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
    getApi20241001ResourcesPostsPosts(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/posts/posts', 'get', metadata);
    }
    /**
     * Creates a Post
     *
     * @summary Creates a Post
     */
    postApi20241001ResourcesPostsPosts(body) {
        return this.core.fetch('/api/2024-10-01/resources/posts/posts', 'post', body);
    }
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
    getApi20241001ResourcesPostsPostsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/posts/posts/{id}', 'get', metadata);
    }
    /**
     * Updates a Post
     *
     * @summary Updates a Post
     */
    putApi20241001ResourcesPostsPostsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/posts/posts/{id}', 'put', body, metadata);
    }
    /**
     * Deletes a Post
     *
     * @summary Deletes a Post
     */
    deleteApi20241001ResourcesPostsPostsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/posts/posts/{id}', 'delete', metadata);
    }
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
    getApi20241001ResourcesProject_managementExpense_records(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/expense_records', 'get', metadata);
    }
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
    getApi20241001ResourcesProject_managementExpense_recordsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/expense_records/{id}', 'get', metadata);
    }
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
    getApi20241001ResourcesProject_managementExportable_expenses(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/exportable_expenses', 'get', metadata);
    }
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
    getApi20241001ResourcesProject_managementExportable_projects(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/exportable_projects', 'get', metadata);
    }
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
    getApi20241001ResourcesProject_managementFlexible_time_records(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/flexible_time_records', 'get', metadata);
    }
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
    postApi20241001ResourcesProject_managementFlexible_time_records(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/flexible_time_records', 'post', body);
    }
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
    getApi20241001ResourcesProject_managementFlexible_time_recordsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/flexible_time_records/{id}', 'get', metadata);
    }
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
    putApi20241001ResourcesProject_managementFlexible_time_recordsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/flexible_time_records/{id}', 'put', body, metadata);
    }
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
    deleteApi20241001ResourcesProject_managementFlexible_time_recordsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/flexible_time_records/{id}', 'delete', metadata);
    }
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
    getApi20241001ResourcesProject_managementFlexible_time_record_comments(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/flexible_time_record_comments', 'get', metadata);
    }
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
    postApi20241001ResourcesProject_managementFlexible_time_record_comments(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/flexible_time_record_comments', 'post', body);
    }
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
    getApi20241001ResourcesProject_managementFlexible_time_record_commentsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/flexible_time_record_comments/{id}', 'get', metadata);
    }
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
    postApi20241001ResourcesProject_managementFlexible_time_record_commentsDelete_by_flexible_time_record(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/flexible_time_record_comments/delete_by_flexible_time_record', 'post', body);
    }
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
    postApi20241001ResourcesProject_managementFlexible_time_record_commentsUpdate_by_flexible_time_record(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/flexible_time_record_comments/update_by_flexible_time_record', 'post', body);
    }
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
    getApi20241001ResourcesProject_managementProjects(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/projects', 'get', metadata);
    }
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
    postApi20241001ResourcesProject_managementProjects(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/projects', 'post', body);
    }
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
    getApi20241001ResourcesProject_managementProjectsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/projects/{id}', 'get', metadata);
    }
    /**
     * ###### **What does it do?**
     * This updates a project with the given params.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with a role
     * in the project.
     *
     * @summary Updates a Project
     */
    putApi20241001ResourcesProject_managementProjectsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/projects/{id}', 'put', body, metadata);
    }
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
    postApi20241001ResourcesProject_managementProjectsActivate(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/projects/activate', 'post', body);
    }
    /**
     * ###### **What does it do?** **DEPRECATED**; this endpoint will be removed soon.
     * This changes assignment type to a project.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with the
     * permission of assign employees.
     *
     * @summary Change assignments a Project
     */
    postApi20241001ResourcesProject_managementProjectsChange_assignment(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/projects/change_assignment', 'post', body);
    }
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
    postApi20241001ResourcesProject_managementProjectsClose(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/projects/close', 'post', body);
    }
    /**
     * ###### **What does it do?**
     * This soft deletes a project.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_management` feature and users with the
     * permission of delete projects.
     *
     * @summary Soft deletes a Project
     */
    postApi20241001ResourcesProject_managementProjectsSoft_delete(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/projects/soft_delete', 'post', body);
    }
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
    getApi20241001ResourcesProject_managementProject_tasks(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/project_tasks', 'get', metadata);
    }
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
    postApi20241001ResourcesProject_managementProject_tasks(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/project_tasks', 'post', body);
    }
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
    getApi20241001ResourcesProject_managementProject_tasksId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/project_tasks/{id}', 'get', metadata);
    }
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
    putApi20241001ResourcesProject_managementProject_tasksId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/project_tasks/{id}', 'put', body, metadata);
    }
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
    postApi20241001ResourcesProject_managementProject_tasksBulk_destroy(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/project_tasks/bulk_destroy', 'post', body);
    }
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
    postApi20241001ResourcesProject_managementProject_tasksBulk_duplicate(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/project_tasks/bulk_duplicate', 'post', body);
    }
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
    getApi20241001ResourcesProject_managementProject_workers(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/project_workers', 'get', metadata);
    }
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
    postApi20241001ResourcesProject_managementProject_workers(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/project_workers', 'post', body);
    }
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
    getApi20241001ResourcesProject_managementProject_workersId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/project_workers/{id}', 'get', metadata);
    }
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
    postApi20241001ResourcesProject_managementProject_workersBulk_assign(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/project_workers/bulk_assign', 'post', body);
    }
    /**
     * Bulk creates a Project worker
     *
     * @summary Bulk creates a Project worker
     */
    postApi20241001ResourcesProject_managementProject_workersBulk_create(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/project_workers/bulk_create', 'post', body);
    }
    /**
     * Unassigns a Project worker
     *
     * @summary Unassigns a Project worker
     */
    postApi20241001ResourcesProject_managementProject_workersUnassign(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/project_workers/unassign', 'post', body);
    }
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
    getApi20241001ResourcesProject_managementSubprojects(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/subprojects', 'get', metadata);
    }
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
    postApi20241001ResourcesProject_managementSubprojects(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/subprojects', 'post', body);
    }
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
    getApi20241001ResourcesProject_managementSubprojectsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/subprojects/{id}', 'get', metadata);
    }
    /**
     * ###### **What does it do?**
     * This deletes a subproject.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_with_subprojects` feature and users with a
     * role in the project owning the subproject.
     *
     * @summary Deletes a Subproject
     */
    deleteApi20241001ResourcesProject_managementSubprojectsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/subprojects/{id}', 'delete', metadata);
    }
    /**
     * ###### **What does it do?**
     * This renames a subproject.
     * ###### **Who can use it?**
     * Only companies who have enabled the `projects_with_subprojects` feature and users with a
     * role in the project owning the subproject.
     *
     * @summary Renames a Subproject
     */
    postApi20241001ResourcesProject_managementSubprojectsRename(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/subprojects/rename', 'post', body);
    }
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
    getApi20241001ResourcesProject_managementTime_records(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/time_records', 'get', metadata);
    }
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
    postApi20241001ResourcesProject_managementTime_records(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/time_records', 'post', body);
    }
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
    getApi20241001ResourcesProject_managementTime_recordsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/time_records/{id}', 'get', metadata);
    }
    /**
     * Deletes a Time record
     *
     * @summary Deletes a Time record
     */
    deleteApi20241001ResourcesProject_managementTime_recordsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/time_records/{id}', 'delete', metadata);
    }
    /**
     * ###### **What does it do?**
     * This endpoint is used to bulk delete all the time records in a particular `date` for a
     * specific `project_worker_id`.
     *
     * @summary Bulk deletes a Time record
     */
    postApi20241001ResourcesProject_managementTime_recordsBulk_delete(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/time_records/bulk_delete', 'post', body);
    }
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
    postApi20241001ResourcesProject_managementTime_recordsBulk_process(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/time_records/bulk_process', 'post', body);
    }
    /**
     * ###### **What does it do?**
     * This endpoint is used to change the project that an employee (`project_worker`) has
     * assigned to an `attendance_shift`.
     *
     * @summary Update project workers a Time record
     */
    postApi20241001ResourcesProject_managementTime_recordsUpdate_project_worker(body) {
        return this.core.fetch('/api/2024-10-01/resources/project_management/time_records/update_project_worker', 'post', body);
    }
    /**
     * Reads all Shifts
     *
     * @summary Reads all Shifts
     */
    getApi20241001ResourcesShift_managementShifts(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/shift_management/shifts', 'get', metadata);
    }
    /**
     * Creates a Shift
     *
     * @summary Creates a Shift
     */
    postApi20241001ResourcesShift_managementShifts(body) {
        return this.core.fetch('/api/2024-10-01/resources/shift_management/shifts', 'post', body);
    }
    /**
     * Reads a single Shift
     *
     * @summary Reads a single Shift
     */
    getApi20241001ResourcesShift_managementShiftsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/shift_management/shifts/{id}', 'get', metadata);
    }
    /**
     * Deletes a Shift
     *
     * @summary Deletes a Shift
     */
    deleteApi20241001ResourcesShift_managementShiftsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/shift_management/shifts/{id}', 'delete', metadata);
    }
    /**
     * Bulk deletes a Shift
     *
     * @summary Bulk deletes a Shift
     */
    postApi20241001ResourcesShift_managementShiftsBulk_delete(body) {
        return this.core.fetch('/api/2024-10-01/resources/shift_management/shifts/bulk_delete', 'post', body);
    }
    /**
     * This endpoint retrieves all tasks created.
     *
     * @summary Reads all Tasks
     */
    getApi20241001ResourcesTasksTasks(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/tasks/tasks', 'get', metadata);
    }
    /**
     * This endpoint creates a new task.
     *
     * @summary Creates a Task
     */
    postApi20241001ResourcesTasksTasks(body) {
        return this.core.fetch('/api/2024-10-01/resources/tasks/tasks', 'post', body);
    }
    /**
     * This endpoint retrieves all tasks created.
     *
     * @summary Reads a single Task
     */
    getApi20241001ResourcesTasksTasksId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/tasks/tasks/{id}', 'get', metadata);
    }
    /**
     * This endpoint updates an existing task.
     *
     * @summary Updates a Task
     */
    putApi20241001ResourcesTasksTasksId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/tasks/tasks/{id}', 'put', body, metadata);
    }
    /**
     * This endpoint deletes a task.
     *
     * @summary Deletes a Task
     */
    deleteApi20241001ResourcesTasksTasksId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/tasks/tasks/{id}', 'delete', metadata);
    }
    /**
     * This endpoint allows to set update the status of a list of tasks given the ids.
     *
     * @summary Bulk change statuses a Task
     */
    postApi20241001ResourcesTasksTasksBulk_change_status(body) {
        return this.core.fetch('/api/2024-10-01/resources/tasks/tasks/bulk_change_status', 'post', body);
    }
    /**
     * This endpoint allows to delete a list of tasks given the ids.
     *
     * @summary Bulk deletes a Task
     */
    postApi20241001ResourcesTasksTasksBulk_delete(body) {
        return this.core.fetch('/api/2024-10-01/resources/tasks/tasks/bulk_delete', 'post', body);
    }
    /**
     * This endpoint duplicates a task.
     *
     * @summary Copies a Task
     */
    postApi20241001ResourcesTasksTasksCopy(body) {
        return this.core.fetch('/api/2024-10-01/resources/tasks/tasks/copy', 'post', body);
    }
    /**
     * Create comments a Task
     *
     * @summary Create comments a Task
     */
    postApi20241001ResourcesTasksTasksCreate_comment(body) {
        return this.core.fetch('/api/2024-10-01/resources/tasks/tasks/create_comment', 'post', body);
    }
    /**
     * This endpoint allows to update the status of a task.
     *
     * @summary Resolves a Task
     */
    postApi20241001ResourcesTasksTasksResolve(body) {
        return this.core.fetch('/api/2024-10-01/resources/tasks/tasks/resolve', 'post', body);
    }
    /**
     * Reads all Task files
     *
     * @summary Reads all Task files
     */
    getApi20241001ResourcesTasksTask_files(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/tasks/task_files', 'get', metadata);
    }
    /**
     * Creates a Task file
     *
     * @summary Creates a Task file
     */
    postApi20241001ResourcesTasksTask_files(body) {
        return this.core.fetch('/api/2024-10-01/resources/tasks/task_files', 'post', body);
    }
    /**
     * Reads a single Task file
     *
     * @summary Reads a single Task file
     */
    getApi20241001ResourcesTasksTask_filesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/tasks/task_files/{id}', 'get', metadata);
    }
    /**
     * Deletes a Task file
     *
     * @summary Deletes a Task file
     */
    deleteApi20241001ResourcesTasksTask_filesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/tasks/task_files/{id}', 'delete', metadata);
    }
    /**
     * Get all memberships.
     *
     * @summary Reads all Memberships
     */
    getApi20241001ResourcesTeamsMemberships(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/teams/memberships', 'get', metadata);
    }
    /**
     * Assign an employee to a team, meaning create a membership.
     *
     * @summary Creates a Membership
     */
    postApi20241001ResourcesTeamsMemberships(body) {
        return this.core.fetch('/api/2024-10-01/resources/teams/memberships', 'post', body);
    }
    /**
     * Get all memberships.
     *
     * @summary Reads a single Membership
     */
    getApi20241001ResourcesTeamsMembershipsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/teams/memberships/{id}', 'get', metadata);
    }
    putApi20241001ResourcesTeamsMembershipsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/teams/memberships/{id}', 'put', body, metadata);
    }
    /**
     * Delete the membership to remove the employee from the team.
     *
     * @summary Deletes a Membership
     */
    deleteApi20241001ResourcesTeamsMembershipsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/teams/memberships/{id}', 'delete', metadata);
    }
    /**
     * Gets all the teams
     *
     * @summary Reads all Teams
     */
    getApi20241001ResourcesTeamsTeams() {
        return this.core.fetch('/api/2024-10-01/resources/teams/teams', 'get');
    }
    /**
     * Create a team with a given name
     *
     * @summary Creates a Team
     */
    postApi20241001ResourcesTeamsTeams(body) {
        return this.core.fetch('/api/2024-10-01/resources/teams/teams', 'post', body);
    }
    /**
     * Gets all the teams
     *
     * @summary Reads a single Team
     */
    getApi20241001ResourcesTeamsTeamsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/teams/teams/{id}', 'get', metadata);
    }
    /**
     * Update a team
     *
     * @summary Updates a Team
     */
    putApi20241001ResourcesTeamsTeamsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/teams/teams/{id}', 'put', body, metadata);
    }
    /**
     * Delete a team
     *
     * @summary Deletes a Team
     */
    deleteApi20241001ResourcesTeamsTeamsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/teams/teams/{id}', 'delete', metadata);
    }
    /**
     * Retrieves allowances
     *
     * @summary Reads all Allowances
     */
    getApi20241001ResourcesTimeoffAllowances(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/allowances', 'get', metadata);
    }
    /**
     * Creates a new Time off allowance
     *
     * @summary Creates an Allowance
     */
    postApi20241001ResourcesTimeoffAllowances(body) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/allowances', 'post', body);
    }
    /**
     * Retrieves allowances
     *
     * @summary Reads a single Allowance
     */
    getApi20241001ResourcesTimeoffAllowancesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/allowances/{id}', 'get', metadata);
    }
    /**
     * Updates an existing Time Off Allowance
     *
     * @summary Updates an Allowance
     */
    putApi20241001ResourcesTimeoffAllowancesId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/allowances/{id}', 'put', body, metadata);
    }
    /**
     * Deletes an allowance
     *
     * @summary Deletes an Allowance
     */
    deleteApi20241001ResourcesTimeoffAllowancesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/allowances/{id}', 'delete', metadata);
    }
    /**
     * Deletes an allowance and migrate the existing incidences in the alternative allowance
     *
     * @summary Delete with alt allowances an Allowance
     */
    postApi20241001ResourcesTimeoffAllowancesDelete_with_alt_allowance(body) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/allowances/delete_with_alt_allowance', 'post', body);
    }
    /**
     * Reads all Allowance incidences
     *
     * @summary Reads all Allowance incidences
     */
    getApi20241001ResourcesTimeoffAllowance_incidences(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/allowance_incidences', 'get', metadata);
    }
    /**
     * Creates an allowance incidence, also known as an Allowance Adjustment in the Employee
     * Time off Page. They are hours or days added or subtracted from the time off allowance
     *
     * @summary Creates an Allowance incidence
     */
    postApi20241001ResourcesTimeoffAllowance_incidences(body) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/allowance_incidences', 'post', body);
    }
    /**
     * Reads a single Allowance incidence
     *
     * @summary Reads a single Allowance incidence
     */
    getApi20241001ResourcesTimeoffAllowance_incidencesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/allowance_incidences/{id}', 'get', metadata);
    }
    /**
     * Updates an allowance incidence
     *
     * @summary Updates an Allowance incidence
     */
    putApi20241001ResourcesTimeoffAllowance_incidencesId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/allowance_incidences/{id}', 'put', body, metadata);
    }
    /**
     * Deletes an allowance incidence
     *
     * @summary Deletes an Allowance incidence
     */
    deleteApi20241001ResourcesTimeoffAllowance_incidencesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/allowance_incidences/{id}', 'delete', metadata);
    }
    /**
     * ###### **What does it do?**
     * This endpoint retrieves the employee time off counters for a specific allowance with a
     * reference date
     *
     * @summary Reads all Allowance stats
     */
    getApi20241001ResourcesTimeoffAllowance_stats(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/allowance_stats', 'get', metadata);
    }
    /**
     * ###### **What does it do?**
     * This endpoint retrieves the employee time off counters for a specific allowance with a
     * reference date
     *
     * @summary Reads a single Allowance stat
     */
    getApi20241001ResourcesTimeoffAllowance_statsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/allowance_stats/{id}', 'get', metadata);
    }
    /**
     * Retrieves blocked periods
     *
     * @summary Reads all Blocked periods
     */
    getApi20241001ResourcesTimeoffBlocked_periods() {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/blocked_periods', 'get');
    }
    /**
     * Creates a blocked period is add a range of dates during which employees cannot submit
     * time off requests. This allows to better plan your team's work throughout the year and
     * ensure that time off requests are in line with the company's needs
     *
     * @summary Creates a Blocked period
     */
    postApi20241001ResourcesTimeoffBlocked_periods(body) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/blocked_periods', 'post', body);
    }
    /**
     * Updates a blocked period
     *
     * @summary Updates a Blocked period
     */
    putApi20241001ResourcesTimeoffBlocked_periodsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/blocked_periods/{id}', 'put', body, metadata);
    }
    /**
     * Deletes a blocked period
     *
     * @summary Deletes a Blocked period
     */
    deleteApi20241001ResourcesTimeoffBlocked_periodsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/blocked_periods/{id}', 'delete', metadata);
    }
    /**
     * Reads all Leaves
     *
     * @summary Reads all Leaves
     */
    getApi20241001ResourcesTimeoffLeaves(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/leaves', 'get', metadata);
    }
    /**
     * Creates a Leave
     *
     * @summary Creates a Leave
     */
    postApi20241001ResourcesTimeoffLeaves(body) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/leaves', 'post', body);
    }
    /**
     * Reads a single Leave
     *
     * @summary Reads a single Leave
     */
    getApi20241001ResourcesTimeoffLeavesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/leaves/{id}', 'get', metadata);
    }
    /**
     * Updates a Leave
     *
     * @summary Updates a Leave
     */
    putApi20241001ResourcesTimeoffLeavesId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/leaves/{id}', 'put', body, metadata);
    }
    /**
     * Deletes a Leave
     *
     * @summary Deletes a Leave
     */
    deleteApi20241001ResourcesTimeoffLeavesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/leaves/{id}', 'delete', metadata);
    }
    /**
     * Allows authorized users to approve employee time-off requests
     *
     * @summary Approves a Leave
     */
    postApi20241001ResourcesTimeoffLeavesApprove(body) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/leaves/approve', 'post', body);
    }
    /**
     * Allows authorized users to reject employee time-off requests
     *
     * @summary Rejects a Leave
     */
    postApi20241001ResourcesTimeoffLeavesReject(body) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/leaves/reject', 'post', body);
    }
    /**
     * Reads all Leave types
     *
     * @summary Reads all Leave types
     */
    getApi20241001ResourcesTimeoffLeave_types(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/leave_types', 'get', metadata);
    }
    /**
     * Creates a Leave type
     *
     * @summary Creates a Leave type
     */
    postApi20241001ResourcesTimeoffLeave_types(body) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/leave_types', 'post', body);
    }
    /**
     * Reads a single Leave type
     *
     * @summary Reads a single Leave type
     */
    getApi20241001ResourcesTimeoffLeave_typesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/leave_types/{id}', 'get', metadata);
    }
    /**
     * Updates a Leave type
     *
     * @summary Updates a Leave type
     */
    putApi20241001ResourcesTimeoffLeave_typesId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/leave_types/{id}', 'put', body, metadata);
    }
    /**
     * Reads all Policies
     *
     * @summary Reads all Policies
     */
    getApi20241001ResourcesTimeoffPolicies(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/policies', 'get', metadata);
    }
    /**
     * Creates a Policy
     *
     * @summary Creates a Policy
     */
    postApi20241001ResourcesTimeoffPolicies(body) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/policies', 'post', body);
    }
    /**
     * Reads a single Policy
     *
     * @summary Reads a single Policy
     */
    getApi20241001ResourcesTimeoffPoliciesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/policies/{id}', 'get', metadata);
    }
    /**
     * Updates a Policy
     *
     * @summary Updates a Policy
     */
    putApi20241001ResourcesTimeoffPoliciesId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/policies/{id}', 'put', body, metadata);
    }
    /**
     * Deletes a Policy
     *
     * @summary Deletes a Policy
     */
    deleteApi20241001ResourcesTimeoffPoliciesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/policies/{id}', 'delete', metadata);
    }
    /**
     * Reads all Policy timelines
     *
     * @summary Reads all Policy timelines
     */
    getApi20241001ResourcesTimeoffPolicy_timelines(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/timeoff/policy_timelines', 'get', metadata);
    }
    /**
     * Reads all Planning versions
     *
     * @summary Reads all Planning versions
     */
    getApi20241001ResourcesTime_planningPlanning_versions(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/time_planning/planning_versions', 'get', metadata);
    }
    /**
     * Creates a Planning version
     *
     * @summary Creates a Planning version
     */
    postApi20241001ResourcesTime_planningPlanning_versions(body) {
        return this.core.fetch('/api/2024-10-01/resources/time_planning/planning_versions', 'post', body);
    }
    /**
     * Updates a Planning version
     *
     * @summary Updates a Planning version
     */
    putApi20241001ResourcesTime_planningPlanning_versionsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/time_planning/planning_versions/{id}', 'put', body, metadata);
    }
    /**
     * Deletes a Planning version
     *
     * @summary Deletes a Planning version
     */
    deleteApi20241001ResourcesTime_planningPlanning_versionsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/time_planning/planning_versions/{id}', 'delete', metadata);
    }
    /**
     * Bulk creates a Planning version
     *
     * @summary Bulk creates a Planning version
     */
    postApi20241001ResourcesTime_planningPlanning_versionsBulk_create(body) {
        return this.core.fetch('/api/2024-10-01/resources/time_planning/planning_versions/bulk_create', 'post', body);
    }
    /**
     * Deactivates a Planning version
     *
     * @summary Deactivates a Planning version
     */
    postApi20241001ResourcesTime_planningPlanning_versionsDeactivate(body) {
        return this.core.fetch('/api/2024-10-01/resources/time_planning/planning_versions/deactivate', 'post', body);
    }
    /**
     * Reads all Break configurations
     *
     * @summary Reads all Break configurations
     */
    getApi20241001ResourcesTime_settingsBreak_configurations(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/time_settings/break_configurations', 'get', metadata);
    }
    /**
     * Creates a Break configuration
     *
     * @summary Creates a Break configuration
     */
    postApi20241001ResourcesTime_settingsBreak_configurations(body) {
        return this.core.fetch('/api/2024-10-01/resources/time_settings/break_configurations', 'post', body);
    }
    /**
     * Reads a single Break configuration
     *
     * @summary Reads a single Break configuration
     */
    getApi20241001ResourcesTime_settingsBreak_configurationsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/time_settings/break_configurations/{id}', 'get', metadata);
    }
    /**
     * Updates a Break configuration
     *
     * @summary Updates a Break configuration
     */
    putApi20241001ResourcesTime_settingsBreak_configurationsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/time_settings/break_configurations/{id}', 'put', body, metadata);
    }
    /**
     * Reads all Categories
     *
     * @summary Reads all Categories
     */
    getApi20241001ResourcesTrainingsCategories(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/categories', 'get', metadata);
    }
    /**
     * Creates a Category
     *
     * @summary Creates a Category
     */
    postApi20241001ResourcesTrainingsCategories(body) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/categories', 'post', body);
    }
    /**
     * Reads a single Category
     *
     * @summary Reads a single Category
     */
    getApi20241001ResourcesTrainingsCategoriesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/categories/{id}', 'get', metadata);
    }
    /**
     * Deletes a Category
     *
     * @summary Deletes a Category
     */
    deleteApi20241001ResourcesTrainingsCategoriesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/categories/{id}', 'delete', metadata);
    }
    /**
     * Reads all Sessions
     *
     * @summary Reads all Sessions
     */
    getApi20241001ResourcesTrainingsSessions(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/sessions', 'get', metadata);
    }
    /**
     * Creates a Session
     *
     * @summary Creates a Session
     */
    postApi20241001ResourcesTrainingsSessions(body) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/sessions', 'post', body);
    }
    /**
     * Reads a single Session
     *
     * @summary Reads a single Session
     */
    getApi20241001ResourcesTrainingsSessionsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/sessions/{id}', 'get', metadata);
    }
    /**
     * Updates a Session
     *
     * @summary Updates a Session
     */
    putApi20241001ResourcesTrainingsSessionsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/sessions/{id}', 'put', body, metadata);
    }
    /**
     * Deletes a Session
     *
     * @summary Deletes a Session
     */
    deleteApi20241001ResourcesTrainingsSessionsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/sessions/{id}', 'delete', metadata);
    }
    /**
     * Reads all Session access memberships
     *
     * @summary Reads all Session access memberships
     */
    getApi20241001ResourcesTrainingsSession_access_memberships(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/session_access_memberships', 'get', metadata);
    }
    /**
     * Reads a single Session access membership
     *
     * @summary Reads a single Session access membership
     */
    getApi20241001ResourcesTrainingsSession_access_membershipsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/session_access_memberships/{id}', 'get', metadata);
    }
    /**
     * Bulk creates a Session access membership
     *
     * @summary Bulk creates a Session access membership
     */
    postApi20241001ResourcesTrainingsSession_access_membershipsBulk_create(body) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/session_access_memberships/bulk_create', 'post', body);
    }
    /**
     * Bulk destroys a Session access membership
     *
     * @summary Bulk destroys a Session access membership
     */
    postApi20241001ResourcesTrainingsSession_access_membershipsBulk_destroy(body) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/session_access_memberships/bulk_destroy', 'post', body);
    }
    /**
     * Reads all Session attendances
     *
     * @summary Reads all Session attendances
     */
    getApi20241001ResourcesTrainingsSession_attendances(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/session_attendances', 'get', metadata);
    }
    /**
     * Reads a single Session attendance
     *
     * @summary Reads a single Session attendance
     */
    getApi20241001ResourcesTrainingsSession_attendancesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/session_attendances/{id}', 'get', metadata);
    }
    /**
     * Bulk updates a Session attendance
     *
     * @summary Bulk updates a Session attendance
     */
    postApi20241001ResourcesTrainingsSession_attendancesBulk_update(body) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/session_attendances/bulk_update', 'post', body);
    }
    /**
     * Reads all Trainings
     *
     * @summary Reads all Trainings
     */
    getApi20241001ResourcesTrainingsTrainings(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/trainings', 'get', metadata);
    }
    /**
     * Creates a Training
     *
     * @summary Creates a Training
     */
    postApi20241001ResourcesTrainingsTrainings(body) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/trainings', 'post', body);
    }
    /**
     * Reads a single Training
     *
     * @summary Reads a single Training
     */
    getApi20241001ResourcesTrainingsTrainingsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/trainings/{id}', 'get', metadata);
    }
    /**
     * Updates a Training
     *
     * @summary Updates a Training
     */
    putApi20241001ResourcesTrainingsTrainingsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/trainings/{id}', 'put', body, metadata);
    }
    /**
     * Deletes a Training
     *
     * @summary Deletes a Training
     */
    deleteApi20241001ResourcesTrainingsTrainingsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/trainings/{id}', 'delete', metadata);
    }
    /**
     * Bulk deletes a Training
     *
     * @summary Bulk deletes a Training
     */
    postApi20241001ResourcesTrainingsTrainingsBulk_delete(body) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/trainings/bulk_delete', 'post', body);
    }
    /**
     * Bulk update catalogs a Training
     *
     * @summary Bulk update catalogs a Training
     */
    postApi20241001ResourcesTrainingsTrainingsBulk_update_catalog(body) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/trainings/bulk_update_catalog', 'post', body);
    }
    /**
     * Update statuses a Training
     *
     * @summary Update statuses a Training
     */
    postApi20241001ResourcesTrainingsTrainingsUpdate_status(body) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/trainings/update_status', 'post', body);
    }
    /**
     * Reads all Training memberships
     *
     * @summary Reads all Training memberships
     */
    getApi20241001ResourcesTrainingsTraining_memberships(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/training_memberships', 'get', metadata);
    }
    /**
     * Reads a single Training membership
     *
     * @summary Reads a single Training membership
     */
    getApi20241001ResourcesTrainingsTraining_membershipsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/training_memberships/{id}', 'get', metadata);
    }
    /**
     * Update a training membership
     *
     * @summary Updates a Training membership
     */
    putApi20241001ResourcesTrainingsTraining_membershipsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/training_memberships/{id}', 'put', body, metadata);
    }
    /**
     * Bulk creates a Training membership
     *
     * @summary Bulk creates a Training membership
     */
    postApi20241001ResourcesTrainingsTraining_membershipsBulk_create(body) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/training_memberships/bulk_create', 'post', body);
    }
    /**
     * Bulk destroys a Training membership
     *
     * @summary Bulk destroys a Training membership
     */
    postApi20241001ResourcesTrainingsTraining_membershipsBulk_destroy(body) {
        return this.core.fetch('/api/2024-10-01/resources/trainings/training_memberships/bulk_destroy', 'post', body);
    }
    /**
     * Reads all Day configurations
     *
     * @summary Reads all Day configurations
     */
    getApi20241001ResourcesWork_scheduleDay_configurations(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/work_schedule/day_configurations', 'get', metadata);
    }
    /**
     * Reads a single Day configuration
     *
     * @summary Reads a single Day configuration
     */
    getApi20241001ResourcesWork_scheduleDay_configurationsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/work_schedule/day_configurations/{id}', 'get', metadata);
    }
    /**
     * Bulk cuds a Day configuration
     *
     * @summary Bulk cuds a Day configuration
     */
    postApi20241001ResourcesWork_scheduleDay_configurationsBulk_cud(body) {
        return this.core.fetch('/api/2024-10-01/resources/work_schedule/day_configurations/bulk_cud', 'post', body);
    }
    /**
     * Reads all Overlap periods
     *
     * @summary Reads all Overlap periods
     */
    getApi20241001ResourcesWork_scheduleOverlap_periods() {
        return this.core.fetch('/api/2024-10-01/resources/work_schedule/overlap_periods', 'get');
    }
    /**
     * Creates an Overlap period
     *
     * @summary Creates an Overlap period
     */
    postApi20241001ResourcesWork_scheduleOverlap_periods(body) {
        return this.core.fetch('/api/2024-10-01/resources/work_schedule/overlap_periods', 'post', body);
    }
    /**
     * Updates an Overlap period
     *
     * @summary Updates an Overlap period
     */
    putApi20241001ResourcesWork_scheduleOverlap_periodsId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/work_schedule/overlap_periods/{id}', 'put', body, metadata);
    }
    /**
     * Deletes an Overlap period
     *
     * @summary Deletes an Overlap period
     */
    deleteApi20241001ResourcesWork_scheduleOverlap_periodsId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/work_schedule/overlap_periods/{id}', 'delete', metadata);
    }
    /**
     * Reads all Schedules
     *
     * @summary Reads all Schedules
     */
    getApi20241001ResourcesWork_scheduleSchedules(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/work_schedule/schedules', 'get', metadata);
    }
    /**
     * Creates a Schedule
     *
     * @summary Creates a Schedule
     */
    postApi20241001ResourcesWork_scheduleSchedules(body) {
        return this.core.fetch('/api/2024-10-01/resources/work_schedule/schedules', 'post', body);
    }
    /**
     * Reads a single Schedule
     *
     * @summary Reads a single Schedule
     */
    getApi20241001ResourcesWork_scheduleSchedulesId(metadata) {
        return this.core.fetch('/api/2024-10-01/resources/work_schedule/schedules/{id}', 'get', metadata);
    }
    /**
     * Updates a Schedule
     *
     * @summary Updates a Schedule
     */
    putApi20241001ResourcesWork_scheduleSchedulesId(body, metadata) {
        return this.core.fetch('/api/2024-10-01/resources/work_schedule/schedules/{id}', 'put', body, metadata);
    }
    /**
     * Toggle archives a Schedule
     *
     * @summary Toggle archives a Schedule
     */
    postApi20241001ResourcesWork_scheduleSchedulesToggle_archive(body) {
        return this.core.fetch('/api/2024-10-01/resources/work_schedule/schedules/toggle_archive', 'post', body);
    }
}
const createSDK = (() => { return new SDK(); })();
export default createSDK;
