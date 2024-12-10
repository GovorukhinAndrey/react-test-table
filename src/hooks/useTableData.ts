interface IProps {
  isLoading: boolean;
}
export const useTableData = ({ isLoading }: IProps) => {
  return { isLoading };
};
