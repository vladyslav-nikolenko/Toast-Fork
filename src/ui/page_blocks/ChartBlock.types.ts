export type ChartData = { message: string; status: string; data?: { datasetOne: number[]; datasetTwo: number[] } };

export type Datasets =
  | {
      datasetOne: (number | null)[];
      datasetTwo: (number | null)[];
    }
  | undefined;

export type UseGetFilteredDatasetsProps = {
  chartData: ChartData | undefined;
  filter: {
    min: string;
    max: string;
  };
};
