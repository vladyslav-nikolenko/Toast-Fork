import { useMemo } from 'react';
import { Datasets, UseGetFilteredDatasetsProps } from './ChartBlock.types';
import { applyFilter } from './ChartBlock.utils';

export const useGetFilteredDatasets = ({ chartData, filter }: UseGetFilteredDatasetsProps) =>
  useMemo(() => {
    const min = filter.min ? Number(filter.min) : undefined;
    const max = filter.max ? Number(filter.max) : undefined;

    if (!min && !max) return chartData?.data;

    const datasetOne = applyFilter(chartData?.data?.datasetOne ?? [], min, max);
    const datasetTwo = applyFilter(chartData?.data?.datasetTwo ?? [], min, max);

    return { datasetOne, datasetTwo };
  }, [chartData, filter]);

export const useGetBarChartData = (datasets?: Datasets) =>
  useMemo(
    () => ({
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Dataset 1',
          data: datasets?.datasetOne ?? [],
          backgroundColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'Dataset 2',
          data: datasets?.datasetTwo ?? [],
          backgroundColor: 'rgb(54, 162, 235)',
        },
      ],
    }),
    [datasets],
  );
