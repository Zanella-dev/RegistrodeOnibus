import { Trash2 } from "lucide-react";

interface StudentProps {
  id: string;
  name: string;
  status: "cinza" | "verde" | "vermelho";
  isSelected: boolean;
  isDeleteMode: boolean;
  onToggleStatus: (id: string) => void;
  onToggleSelect: (id: string) => void;
  onStartDeleteMode: (id: string, e: React.MouseEvent) => void;
}

export function StudentCard({ id, name, status, isSelected, isDeleteMode, onToggleStatus, onToggleSelect, onStartDeleteMode }: StudentProps) {
  return (
    <div
      className={`student-card status-${status}`}
      onClick={() => onToggleStatus(id)}
    >
      {isDeleteMode && (
        <input
          type="checkbox"
          className="checkbox-select"
          checked={isSelected}
          onChange={() => onToggleSelect(id)}
          onClick={(e) => e.stopPropagation()} 
        />
      )}
      
      {name}
      
      {!isDeleteMode && (
        <button
          className="btn-delete"
          onClick={(e) => onStartDeleteMode(id, e)}
          title="Excluir estudante"
        >
          <Trash2 size={18} />
        </button>
      )}
    </div>
  );
}