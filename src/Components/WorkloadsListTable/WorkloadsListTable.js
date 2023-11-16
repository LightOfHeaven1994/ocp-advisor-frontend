import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PrimaryToolbar from '@redhat-cloud-services/frontend-components/PrimaryToolbar';
import {
  Table,
  TableBody,
  TableHeader,
  TableVariant,
} from '@patternfly/react-table';
import { PaginationVariant } from '@patternfly/react-core/dist/js/components/Pagination/Pagination';
import {
  WORKLOADS_LIST_COLUMNS,
  WORKLOADS_TABLE_CELL_LAST_SEEN,
  WORKLOADS_TABLE_CELL_NAME,
  WORKLOADS_TABLE_CELL_OBJECTS,
  WORKLOADS_TABLE_CELL_RECOMMENDATIONS,
  WORKLOADS_TABLE_FILTER_CATEGORIES,
  WORKLOADS_TABLE_SEVERITY,
} from '../../AppConstants';
import DateFormat from '@redhat-cloud-services/frontend-components/DateFormat';
import { Link } from 'react-router-dom';
import { BASE_PATH } from '../../Routes';
import { Pagination } from '@patternfly/react-core';
import { conditionalFilterType } from '@redhat-cloud-services/frontend-components/ConditionalFilter/conditionalFilterConstants';
import { useDispatch, useSelector } from 'react-redux';
import {
  WORKLOADS_TABLE_INITIAL_STATE,
  resetFilters,
  updateWorkloadsListFilters,
} from '../../Services/Filters';
import isEqual from 'lodash/isEqual';
import {
  addFilterParam,
  buildFilterChips,
  passFilterWorkloads,
  removeFilterParam as _removeFilterParam,
} from '../Common/Tables';
import { ErrorState, NoMatchingClusters } from '../MessageState/EmptyStates';
import Loading from '../Loading/Loading';
import ShieldSet from '../ShieldSet';
import { noFiltersApplied } from '../../Utilities/Workloads';
import mockdata from '../../../cypress/fixtures/api/insights-results-aggregator/v2/workloads.json';

const WorkloadsListTable = ({
  query: { isError, isUninitialized, isFetching, isSuccess, data, refetch },
}) => {
  const dispatch = useDispatch();
  const filters = useSelector(({ filters }) => filters.workloadsListState);
  //const workloads = data?.workloads || [];
  //to check all types of filters use the mockdata json
  const workloads = mockdata;
  const perPage = filters.limit;
  const page = Math.floor(filters.offset / filters.limit) + 1;

  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [rowsFiltered, setRowsFiltered] = useState(false);
  const [filtersApplied, setFiltersApplied] = useState(false);
  const updateFilters = (payload) =>
    dispatch(updateWorkloadsListFilters(payload));
  const removeFilterParam = (param) =>
    _removeFilterParam(filters, updateFilters, param);

  const loadingState = isUninitialized || isFetching || !rowsFiltered;
  const errorState = isError;
  const noMatch = rows.length > 0 && filteredRows.length === 0;
  const successState = isSuccess;

  useEffect(() => {
    setFilteredRows(buildFilteredRows(workloads));
  }, [
    filters.namespace_name,
    filters.cluster_name,
    filters.general_severity,
    filters.highest_severity,
    filters.sortDirection,
    filters.sortIndex,
  ]);

  useEffect(() => {
    setRows(buildDisplayedRows(filteredRows));
    setRowsFiltered(true);
    setFiltersApplied(noFiltersApplied(filters).length > 0 ? true : false);
  }, [filteredRows, filters.limit, filters.offset]);

  const buildFilteredRows = (items) => {
    setRowsFiltered(false);
    const filtered = items
      .filter((workloadData) => {
        return passFilterWorkloads(workloadData, filters);
      })
      .sort((a, b) => {
        let fst, snd;
        const d = filters.sortDirection === 'asc' ? 1 : -1;
        switch (filters.sortIndex) {
          case WORKLOADS_TABLE_CELL_NAME:
            if (a?.cluster.display_name && b?.cluster.display_name) {
              return (
                d *
                a?.cluster.display_name.localeCompare(b?.cluster.display_name)
              );
            } else {
              return d * a?.cluster.uuid.localeCompare(b?.cluster.uuid);
            }
          case WORKLOADS_TABLE_CELL_RECOMMENDATIONS:
            fst = a.metadata.recommendations || 0;
            snd = b.metadata.recommendations || 0;
            return fst > snd ? d : snd > fst ? -d : 0;
          case WORKLOADS_TABLE_SEVERITY:
            fst = a.metadata.hits_by_severity || { 1: 0, 2: 0, 3: 0, 4: 0 };
            snd = b.metadata.hits_by_severity || { 1: 0, 2: 0, 3: 0, 4: 0 };
            for (let i = 4; i > 0; i--) {
              if (fst[i] > snd[i]) return d;
              if (fst[i] < snd[i]) return -d;
            }
            return 0;
          case WORKLOADS_TABLE_CELL_OBJECTS:
            fst = a.metadata.objects || 0;
            snd = b.metadata.objects || 0;
            return fst > snd ? d : snd > fst ? -d : 0;
          case WORKLOADS_TABLE_CELL_LAST_SEEN:
            fst = new Date(a.metadata.last_checked_at || 0);
            snd = new Date(b.metadata.last_checked_at || 0);
            return fst > snd ? d : snd > fst ? -d : 0;
        }
      });

    return filtered;
  };

  const buildDisplayedRows = (rows) => {
    return rows
      .slice(perPage * (page - 1), perPage * (page - 1) + perPage)
      .map((item, index) => ({
        entity: item,
        cells: [
          <span key={index}>
            <Link
              to={`${BASE_PATH}/workloads/${item.cluster.uuid}/${item.namespace.uuid}`}
            >
              <p key={`${index}-cluster`}>
                {item.cluster.display_name || item.cluster.uuid}
              </p>
              <p key={`${index}-namespace`}>
                {item.namespace.name || item.namespace.uuid}
              </p>
            </Link>
          </span>,
          item.metadata.recommendations,
          <span key={index}>
            <ShieldSet hits_by_severity={item.metadata.hits_by_severity} />
          </span>,
          item.metadata.objects,
          <span key={index}>
            <DateFormat
              extraTitle="Last seen: "
              date={item.metadata.last_checked_at}
              variant="relative"
            />
          </span>,
        ],
      }));
  };

  const filterConfigItems = [
    {
      label: 'Cluster name',
      filterValues: {
        key: 'cluster_name',
        onChange: (_event, value) =>
          updateFilters({ ...filters, offset: 0, cluster_name: value }),
        value: filters.cluster_name,
        placeholder: 'Filter by cluster name',
      },
    },
    {
      label: 'Namespace name',
      filterValues: {
        key: 'namespace_name',
        onChange: (_event, value) =>
          updateFilters({ ...filters, offset: 0, namespace_name: value }),
        value: filters.namespace_name,
        placeholder: 'Filter by namespace name',
      },
    },
    {
      label: 'Severity',
      type: conditionalFilterType.checkbox,
      id: WORKLOADS_TABLE_FILTER_CATEGORIES.general_severity.urlParam,
      value: `checkbox-${WORKLOADS_TABLE_FILTER_CATEGORIES.general_severity.urlParam}`,
      filterValues: {
        key: `${WORKLOADS_TABLE_FILTER_CATEGORIES.general_severity.urlParam}-filter`,
        onChange: (_event, value) =>
          addFilterParam(filters, updateFilters, 'general_severity', value),
        value: filters.general_severity,
        items: WORKLOADS_TABLE_FILTER_CATEGORIES.general_severity.values,
        placeholder: 'Filter by severity',
      },
    },
  ];

  const activeFiltersConfig = {
    showDeleteButton: filtersApplied ? true : false,
    deleteTitle: 'Reset filters',
    filters: buildFilterChips(filters, WORKLOADS_TABLE_FILTER_CATEGORIES),
    onDelete: (_event, itemsToRemove, isAll) => {
      if (isAll) {
        if (isEqual(filters, WORKLOADS_TABLE_INITIAL_STATE)) {
          refetch();
        } else {
          resetFilters(filters, WORKLOADS_TABLE_INITIAL_STATE, updateFilters);
        }
      } else {
        itemsToRemove.map((item) => {
          const newFilter = {
            [item.urlParam]: Array.isArray(filters[item.urlParam])
              ? filters[item.urlParam].filter(
                  (value) => String(value) !== String(item.chips[0].value)
                )
              : '',
          };
          newFilter[item.urlParam].length > 0
            ? updateFilters({ ...filters, ...newFilter })
            : removeFilterParam(item.urlParam);
        });
      }
    },
  };

  const onSetPage = (_e, pageNumber) => {
    setRowsFiltered(false);
    const newOffset = pageNumber * filters.limit - filters.limit;
    updateFilters({ ...filters, offset: newOffset });
  };

  const onSetPerPage = (_e, perPage) => {
    if (perPage !== filters.limit) {
      setRowsFiltered(false);
      updateFilters({ ...filters, limit: perPage, offset: 0 });
    }
  };

  const onSort = (_e, index, direction) => {
    setRowsFiltered(false);
    updateFilters({ ...filters, sortIndex: index, sortDirection: direction });
  };

  return (
    <div id="workloads-list-table">
      <PrimaryToolbar
        pagination={{
          itemCount: filteredRows.length,
          page,
          perPage,
          onSetPage,
          onPerPageSelect: onSetPerPage,
          isCompact: true,
          ouiaId: 'pager',
        }}
        filterConfig={{ items: filterConfigItems }}
        activeFiltersConfig={
          isError ? { showDeleteButton: false } : activeFiltersConfig
        }
      />
      <Table
        aria-label="Table of workloads"
        ouiaId="workloads"
        variant={TableVariant.compact}
        cells={WORKLOADS_LIST_COLUMNS}
        rows={
          errorState || loadingState || noMatch ? (
            [
              {
                fullWidth: true,
                cells: [
                  {
                    props: {
                      colSpan: WORKLOADS_LIST_COLUMNS.length + 1,
                    },
                    title: errorState ? (
                      <ErrorState />
                    ) : loadingState ? (
                      <Loading />
                    ) : (
                      <NoMatchingClusters />
                    ),
                  },
                ],
              },
            ]
          ) : successState ? (
            rows
          ) : (
            <ErrorState />
          )
        }
        isStickyHeader
        sortBy={{
          index: filters.sortIndex,
          direction: filters.sortDirection,
        }}
        onSort={onSort}
      >
        <TableHeader />
        <TableBody />
      </Table>
      <Pagination
        ouiaId="pager"
        itemCount={filteredRows.length}
        page={page}
        perPage={perPage}
        onSetPage={onSetPage}
        onPerPageSelect={onSetPerPage}
        onPageInput={onSetPage}
        widgetId={`pagination-options-menu-bottom`}
        variant={PaginationVariant.bottom}
      />
    </div>
  );
};

WorkloadsListTable.propTypes = {
  query: PropTypes.object.isRequired,
};

export { WorkloadsListTable };