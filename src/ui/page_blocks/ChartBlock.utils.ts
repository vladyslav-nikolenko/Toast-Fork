import { RenderToast } from '@/providers/toast/types';
import { type Dispatch, type SetStateAction } from 'react';
import { ChartData } from './ChartBlock.types';

export const fetchChart = (setChartData: Dispatch<SetStateAction<ChartData | undefined>>, renderToast: RenderToast) => {
  fetch('http://localhost:3001/api/data/chart-data')
    .then(response => response.json())
    .then(data => {
      setChartData(data);
      renderToast(data?.status, data?.message);
    })
    .catch(error => console.log('error', error));
};

export const applyFilter = (dataset: number[], min?: number, max?: number) =>
  dataset.map(chartValue =>
    (min !== undefined && chartValue < min) || (max !== undefined && chartValue > max) ? null : chartValue,
  );
