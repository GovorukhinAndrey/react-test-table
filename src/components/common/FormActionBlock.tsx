import { Button } from "@/components/ui/Button";

interface IProps {
  onSubmit: () => void;
  onReset: () => void;
  isPending?: boolean;
}

export const FormActionBlock = ({ onSubmit, onReset, isPending }: IProps) => {
  return (
    <div className="modal-action flex gap-4">
      <div className="flex gap-2 grow justify-between">
        <Button
          className="btn-primary"
          onClick={onSubmit}
          isDisabled={isPending}
        >
          Save
        </Button>
        <Button
          className="btn-secondary"
          onClick={onReset}
          isDisabled={isPending}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};
