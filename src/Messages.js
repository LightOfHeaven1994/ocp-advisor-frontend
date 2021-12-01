/* eslint-disable max-len */
import { defineMessages } from 'react-intl';

export default defineMessages({
  documentTitle: {
    id: 'documentTitle',
    description: 'The title of the page as it appears in the browser tab',
    defaultMessage: '{subnav} - OCP Advisor | Red Hat Insights',
  },
  clusters: {
    id: 'clusters',
    description:
      'Clusters title used in recommendation table column and clusters tab header',
    defaultMessage: 'Clusters',
  },
  added: {
    id: 'added',
    description: 'Recommendation table column title',
    defaultMessage: 'Added',
  },
  loading: {
    id: 'loading',
    description: 'Loading text',
    defaultMessage: 'Loading',
  },
  lastSeen: {
    id: 'lastSeen',
    description:
      'Used in the cluster table title column, the last time a cluster has checked in',
    defaultMessage: 'Last seen',
  },
  actions: {
    id: 'actions',
    description: 'actions',
    defaultMessage: 'Actions',
  },
  name: {
    id: 'name',
    description:
      'Used in the cluster table title column, identifying display name of a cluster',
    defaultMessage: 'Name',
  },
  description: {
    id: 'description',
    description: 'Used in the hitting rules table for the single cluster view',
    defaultMessage: 'Description',
  },
  filterBy: {
    id: 'filterBy',
    description: 'Filter by name',
    defaultMessage: 'Filter by name',
  },
  totalRisk: {
    id: 'totalRisk',
    description:
      'Recommendation table column title, recommendationdetails label',
    defaultMessage: 'Total risk',
  },
  recommendation: {
    id: 'recommendation',
    description: 'Recommendation',
    defaultMessage: 'Recommendation',
  },
  recommendations: {
    id: 'recommendations',
    description: 'Used as a title',
    defaultMessage: 'Recommendations',
  },
  insightsHeader: {
    id: 'insightsHeader',
    description: 'Header for the application title',
    defaultMessage: 'Advisor',
  },
  unknown: {
    id: 'unknown',
    description: 'Unknown',
    defaultMessage: 'Unknown',
  },
  low: {
    id: 'low',
    description: 'Filter value',
    defaultMessage: 'Low',
  },
  moderate: {
    id: 'moderate',
    description: 'Filter value',
    defaultMessage: 'Moderate',
  },
  important: {
    id: 'important',
    description: 'Filter value',
    defaultMessage: 'Important',
  },
  critical: {
    id: 'critical',
    description: 'Filter value',
    defaultMessage: 'Critical',
  },
  veryLow: {
    id: 'veryLow',
    description: 'Filter value',
    defaultMessage: 'Very Low',
  },
  medium: {
    id: 'medium',
    description: 'Filter value',
    defaultMessage: 'Medium',
  },
  high: {
    id: 'high',
    description: 'Filter value',
    defaultMessage: 'High',
  },
  serviceAvailability: {
    id: 'serviceAvailability',
    description: 'Filter value',
    defaultMessage: 'Service Availability',
  },
  performance: {
    id: 'performance',
    description: 'Filter value',
    defaultMessage: 'Performance',
  },
  faultTolerance: {
    id: 'faultTolerance',
    description: 'Filter value',
    defaultMessage: 'Fault Tolerance',
  },
  security: {
    id: 'security',
    description: 'Filter value',
    defaultMessage: 'Security',
  },
  enabled: {
    id: 'enabled',
    description: 'Filter value',
    defaultMessage: 'Enabled',
  },
  impact: {
    id: 'impact',
    description: 'Filter title',
    defaultMessage: 'Impact',
  },
  impactLevel: {
    id: 'impactLevel',
    description: 'Describes the impact level of a rule',
    defaultMessage: '{level} impact',
  },
  impactDescription: {
    id: 'impactDescription',
    description:
      'Used in the SeverityLine tooltip to describe the impact of a rule',
    defaultMessage:
      'The impact of the problem would be {level} if it occurred.',
  },
  category: {
    id: 'category',
    description: 'Filter title',
    defaultMessage: 'Category',
  },
  likelihood: {
    id: 'likelihood',
    description: 'Filter title',
    defaultMessage: 'Likelihood',
  },
  likelihoodLevel: {
    id: 'likelihoodLevel',
    description: 'Describes the likelihood of a rule',
    defaultMessage: '{level} likelihood',
  },
  likelihoodDescription: {
    id: 'likelihoodDescription',
    description:
      'Used in the SeverityLine tooltip to describe the likelihood of a rule',
    defaultMessage: 'The likelihood that this will be a problem is {level}.',
  },
  all: {
    id: 'all',
    description: 'All',
    defaultMessage: 'All',
  },
  disabled: {
    id: 'disabled',
    description: 'Disabled',
    defaultMessage: 'Disabled',
  },
  resetFilters: {
    id: 'resetFilters',
    description: 'Filter action, reset all filter chips',
    defaultMessage: 'Reset filters',
  },
  noMatchingRecsTitle: {
    id: 'noMatchingRecommendationsTitle',
    defaultMessage: 'No matching recommendations found',
  },
  noMatchingRecsBody: {
    id: 'noMatchingRecommendationsDesc',
    defaultMessage: 'To continue, edit your filter settings and search again.',
  },
  noRecommendations: {
    id: 'noRecommendations',
    description:
      'Recommendation table, no recommendations message for any known rules, body',
    defaultMessage: 'The cluster is not affected by any known recommendations',
  },
  noRecommendationsDesc: {
    id: 'noRecommendationsDesc',
    defaultMessage: 'No known recommendations affect this cluster.',
  },
  ruleIsDisabledTooltip: {
    id: 'ruleIsDisabledTooltip',
    description:
      'Disabled badge tooltip explaining the meaning of a disabled recommendation',
    defaultMessage:
      'Indicates this recommendation will not be shown for the cluster.',
  },
  rulesDetailsPubishdate: {
    id: 'rulesdetails.publishdate',
    description: 'Recommendationsdetails, publish date',
    defaultMessage: 'Publish date: {date}',
  },
  knowledgebaseArticle: {
    id: 'knowledgebasearticle',
    description: 'Knowledgebase article',
    defaultMessage: 'Knowledgebase article',
  },
  viewAffectedClusters: {
    id: 'viewAffectedClusters',
    description:
      'Link text to view all clusters that are affected by a recommendation',
    defaultMessage:
      'View {clusters, plural, one {the affected cluster} other {# affected clusters}}',
  },
  ruleFetchError: {
    id: 'ruleFetchError',
    description: 'Recommendation table, fetch rules, error message',
    defaultMessage:
      'There was an error fetching recommendation. Refresh your page to try again.',
  },
  affectedClusters: {
    id: 'affectedClusters',
    description: 'Affected clusters',
    defaultMessage: 'Affected clusters',
  },
  noRecsError: {
    id: 'noRecsError',
    description: 'Recommendations table, cluster recommendations table',
    defaultMessage: 'No recommendations available.',
  },
  noRecsErrorDesc: {
    id: 'noRecsErrorDesc',
    description: 'Recommendations table, cluster recommendations table',
    defaultMessage:
      'There was an error fetching recommendations for this cluster. Refresh your page to try again.',
  },
  noRecsFoundError: {
    id: 'noRecsFoundError',
    description: 'Recommendations table, cluster recommendations table',
    defaultMessage: 'No recommendations to display',
  },
  noRecsFoundErrorDesc: {
    id: 'noRecsFoundErrorDesc',
    description: 'Recommendations table, cluster recommendations table',
    defaultMessage:
      'Insights identifies and prioritizes risks to security, performance, availability, and stability of your clusters. This feature uses the Remote Health functionality of OpenShift Container Platform. For further details about Insights, see the',
  },
  noClustersError: {
    id: 'noClustersError',
    description: 'Recommendation affected clusters table',
    defaultMessage: 'No data about affected clusters',
  },
  noClustersErrorDesc: {
    id: 'noClustersErrorDesc',
    description: 'Recommendation affected clusters table',
    defaultMessage:
      'There was an error fetching affected clusters for this recommendation.',
  },
  unableToConnect: {
    id: 'unableToConnect',
    description: 'The message shown when there was a fetch error',
    defaultMessage: 'Unable to connect',
  },
  unableToConnectDesc: {
    id: 'unableToConnectDesc',
    description: 'The message shown when there was a fetch error',
    defaultMessage:
      'There was an error retrieving data. Check your connection and try again.',
  },
  noAffectedClustersTitle: {
    id: 'noAffectedClustersTitle',
    description: 'Affected clusters table',
    defaultMessage: 'No clusters',
  },
  noAffectedClustersBody: {
    id: 'noAffectedClustersBody',
    description: 'Affected clusters table',
    defaultMessage: 'This recommendation does not affect any cluster.',
  },
  noMatchingClustersTitle: {
    id: 'noMatchingClustersTitle',
    description: 'No matching clusters message for clusters table',
    defaultMessage: 'No matching clusters found',
  },
  noMatchingClustersBody: {
    id: 'noMatchingClustersDesc',
    description: 'No matching clusters message for clusters table',
    defaultMessage: 'To continue, edit your filter settings and search again.',
  },
  errorStateTitle: {
    id: 'errorStateTitle',
    description: 'Generic message suitable for any network request error',
    defaultMessage: 'Something went wrong',
  },
  errorStateBody: {
    id: 'errorStateBody',
    description: 'Generic message suitable for any network request error',
    defaultMessage:
      'There was a problem processing the request. Please try again.',
  },
  riskOfChange: {
    id: 'riskOfChange',
    description: 'Used for the recommendations list',
    defaultMessage: 'Risk of change',
  },
  rulesDetailsTotalRiskBody: {
    id: 'rulesDetailsTotalRiskBody',
    description: 'Text explaining the total risk value of this recommendation',
    defaultMessage: `The total risk of this remediation is <strong>{risk}</strong>,
                        based on the combination of likelihood and impact to remediate.`,
  },
  ruleIsDisabledForClusters: {
    id: 'ruleIsDisabledForClusters',
    description: 'Exclaiming that the recommendation is disabled for clusters',
    defaultMessage: 'Recommendation is disabled for some clusters',
  },
  ruleIsDisabledForAllClusters: {
    id: 'ruleIsDisabledForAllClusters',
    description:
      'Exclaiming that the recommendation is disabled for all clusters',
    defaultMessage: 'Recommendation is disabled for all clusters',
  },
  ruleIsDisabledForClustersBody: {
    id: 'ruleIsDisabledForClustersBody',
    description:
      'Exclaiming that the recommendation is disabled for clusters (cluster count)',
    defaultMessage:
      'Recommendation is disabled for {clusters, plural, one {# cluster} other {# clusters}}',
  },
  oneOrMore: {
    id: 'oneOrMore',
    description: '1 or more',
    defaultMessage: '1 or more',
  },
  none: {
    id: 'none',
    description: 'None',
    defaultMessage: `None`,
  },
  undefined: {
    id: 'undefined',
    description: 'Undefined',
    defaultMessage: 'Undefined',
  },
  nA: {
    id: 'nA',
    description: 'Abreviated as N/A, text equivelent, not applicable',
    defaultMessage: 'N/A',
  },
  permsTitle: {
    id: 'permsTitle',
    description: 'You do not have access to Advisor',
    defaultMessage: 'You do not have access to Advisor',
  },
  permsBody: {
    id: 'permsBody',
    description: 'To view the content',
    defaultMessage:
      'To view the content of this page, you must be granted a minimum of Advisor permissions from your Organization Administrator.',
  },
  disableRule: {
    id: 'disableRule',
    description:
      'Recommendation table, action text for disabling reporting of a recommendation',
    defaultMessage: 'Disable recommendation',
  },
  enableRule: {
    id: 'enableRule',
    description:
      'Recommendation table, action text for enabling reporting of a recommendation',
    defaultMessage: 'Enable recommendation',
  },
  save: {
    id: 'save',
    description: 'Save',
    defaultMessage: `Save`,
  },
  cancel: {
    id: 'cancel',
    description: 'Cancel',
    defaultMessage: `Cancel`,
  },
  recSuccessfullyDisabled: {
    id: 'recSuccessfullyDisabled',
    description: 'Explaining that the rec was disabled successfully',
    defaultMessage: 'Recommendation successfully disabled',
  },
  recSuccessfullyEnabled: {
    id: 'recSuccessfullyEnabled',
    description: 'Explaining that the rule was enabled successfully',
    defaultMessage: 'Recommendation successfully enabled',
  },
  error: {
    id: 'error',
    description: 'Error',
    defaultMessage: 'Error',
  },
  disableRuleForSystems: {
    id: 'disableRuleForSystems',
    description:
      'Recommendationdetail system table, action text for disabling reporting of a recommendationfor a system',
    defaultMessage: 'Disable recommendation for selected systems',
  },
  disableRuleBody: {
    id: 'disableRuleBody',
    description: 'Explaining the action of disabling a recommendation',
    defaultMessage: `This recommendation will not be shown in reports and dashboards.`,
  },
  justificationNote: {
    id: 'justificationNote',
    description: 'Justification note',
    defaultMessage: 'Justification note',
  },
  rulesTableErrorEnabled: {
    id: 'rulesTableErrorEnabled',
    description:
      'Recommendation table, hide reports action, error for enabling reporting on a recommendation',
    defaultMessage: 'Enabling recommendations failed',
  },
  rulesTableErrorDisabled: {
    id: 'rulesTableErrorDisabled',
    description:
      'Recommendation table, hide reports action, error for disabling reporting on a recommendation',
    defaultMessage: 'Disabling recommendations failed',
  },
  comingSoonTitle: {
    id: 'comingSoonTitle',
    description: 'Temporary Message Title',
    defaultMessage: 'Coming soon',
  },
  comingSoonBody: {
    id: 'comingSoonBody',
    description: 'Temporary Message Body',
    defaultMessage:
      'We’re currently working on this page. In the meantime, you can visit the Insights Advisor recommendations page to view potential issues with your clusters.',
  },
});