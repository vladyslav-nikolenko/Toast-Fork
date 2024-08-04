import { useEffect, useState } from 'react';
import { BarChart } from '../components/Chart';
import { useToastContext } from '../providers/toast';
import { ChartData } from './ChartBlock.types';
import { fetchChart } from './ChartBlock.utils';
import { useGetBarChartData, useGetFilteredDatasets } from './ChartBlock.hooks';

export function ChartBlock() {
  const [chartData, setChartData] = useState<ChartData | undefined>();
  const [filter, setFilter] = useState<{ min: string; max: string }>({
    min: '',
    max: '',
  });

  const { renderToast } = useToastContext();

  const filteredDatasets = useGetFilteredDatasets({ chartData, filter });
  const barChartData = useGetBarChartData(filteredDatasets);

  useEffect(() => {
    fetchChart(setChartData, renderToast);
  }, [setChartData, renderToast]);

  const onReset = () =>
    setFilter({
      min: '',
      max: '',
    });

  return (
    <div>
      <form className='mb-12 flex items-center'>
        <div className='flex flex-col mx-4'>
          <span className='text-sm'>Min</span>
          <input
            onChange={e => setFilter(prevFilter => ({ ...prevFilter, min: e.target.value }))}
            type='number'
            className='w-24 h-8 text-sm'
          />
        </div>
        <div className='flex flex-col mx-4'>
          <span className='text-sm'>Max</span>
          <input
            onChange={e => setFilter(prevFilter => ({ ...prevFilter, max: e.target.value }))}
            type='number'
            className='w-24 h-8 text-sm'
          />
        </div>
        <div className='flex flex-col mx-4 pt-4 w-100'>
          <button
            className='bg-blue-600 flex justify-center items-center h-10 text-center text-white border focus:outline-none focus:ring-4 font-sm rounded-lg text-sm px-5 py-1.9'
            type='reset'
            onClick={onReset}>
            Reset
          </button>
        </div>
      </form>

      <div>
        <BarChart width={600} height={300} data={barChartData} />
      </div>
    </div>
  );
}
