import { useState, useEffect } from "react";
import { BusFront, UserPlus, Users, Trash2, X } from "lucide-react";
import { StudentCard } from "./components/StudentCard";
import "./index.css";

interface Student {
  id: string;
  name: string;
  status: "cinza" | "verde" | "vermelho";
}

export default function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [newName, setNewName] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const totalStudents = students.length;
  const returningStudents = students.filter(s => s.status === "verde").length;
  const notReturningStudents = students.filter(s => s.status === "vermelho").length;

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
        setStudents((prev) =>
          prev.map((student) => ({ ...student, status: "cinza" }))
        );
        setSelectedIds([]); 
        setIsDeleteMode(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function handleAddStudent(e: React.FormEvent) {
    e.preventDefault();
    const trimmedName = newName.trim();
    
    if (!trimmedName) {
      alert("O nome do estudante não pode estar em branco.");
      return;
    }
    
    if (students.length >= 60) {
      alert("Limite diário de 60 estudantes atingido.");
      return;
    }

    const newStudent: Student = {
      id: crypto.randomUUID(),
      name: trimmedName,
      status: "cinza",
    };

    setStudents([...students, newStudent]);
    setNewName("");
  }

  function handleToggleStatus(id: string) {
    if (isDeleteMode) return; 
    
    setStudents(
      students.map((student) => {
        if (student.id === id) {
          let nextStatus: "cinza" | "verde" | "vermelho" = "verde";
          if (student.status === "verde") nextStatus = "vermelho";
          if (student.status === "vermelho") nextStatus = "cinza";
          return { ...student, status: nextStatus };
        }
        return student;
      })
    );
  }

  function handleStartDeleteMode(id: string, e: React.MouseEvent) {
    e.stopPropagation();
    setIsDeleteMode(true);
    setSelectedIds([id]);
  }

  function handleToggleSelect(id: string) {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(sId => sId !== id) : [...prev, id]
    );
  }

  function cancelDeleteMode() {
    setIsDeleteMode(false);
    setSelectedIds([]);
  }

  function handleBulkDelete() {
    if (selectedIds.length === 0) return;
    
    const password = prompt(`Digite a senha de administrador para excluir ${selectedIds.length} aluno(s):`);
    
    if (password === "281022") {
      setStudents(students.filter(student => !selectedIds.includes(student.id)));
      setSelectedIds([]);
      setIsDeleteMode(false);
    } else if (password !== null) {
      alert("Senha incorreta!");
    }
  }

  return (
    <div className="dashboard-container">
      <header className="header">
        <BusFront size={40} className="header-icon" />
        <h1>Painel de Controle: Retorno de Ônibus</h1>
      </header>

      <div className="stats-container">
        <div className="stat-card">
          <span className="stat-title">Total Registrados</span>
          <span className="stat-value">{totalStudents} / 60</span>
        </div>
        <div className="stat-card verde">
          <span className="stat-title">Voltam de Ônibus</span>
          <span className="stat-value">{returningStudents}</span>
        </div>
        <div className="stat-card vermelho">
          <span className="stat-title">Não Voltam</span>
          <span className="stat-value">{notReturningStudents}</span>
        </div>
      </div>

      <div className="controls-section">
        <form className="form-group" onSubmit={handleAddStudent}>
          <input
            type="text"
            placeholder="Digite o nome do estudante..."
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            disabled={isDeleteMode}
          />
          <button type="submit" className="btn-add" disabled={isDeleteMode}>
            <UserPlus size={20} />
            Adicionar
          </button>
        </form>

        <div className="legend-container">
          <div className="legend-item">
            <div className="color-box status-cinza"></div>
            <span>Pendente / Ausente</span>
          </div>
          <div className="legend-item">
            <div className="color-box status-verde"></div>
            <span>Volta de Ônibus</span>
          </div>
          <div className="legend-item">
            <div className="color-box status-vermelho"></div>
            <span>Não Volta</span>
          </div>
        </div>
      </div>

      {isDeleteMode && (
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <button 
            type="button" 
            className="btn-add" 
            style={{ backgroundColor: '#64748b' }} 
            onClick={cancelDeleteMode}
          >
            <X size={20} />
            Cancelar
          </button>

          <button 
            type="button" 
            className="btn-delete-bulk" 
            onClick={handleBulkDelete}
            disabled={selectedIds.length === 0}
          >
            <Trash2 size={20} />
            Confirmar Exclusão ({selectedIds.length})
          </button>
        </div>
      )}

      <div className="grid">
        {students.length === 0 ? (
          <div className="empty-state">
            <Users size={64} />
            <h2>Nenhum estudante registrado hoje</h2>
            <p>Adicione alunos no campo acima para começar o controle.</p>
          </div>
        ) : (
          students.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              status={student.status}
              isSelected={selectedIds.includes(student.id)}
              isDeleteMode={isDeleteMode}
              onToggleStatus={handleToggleStatus}
              onToggleSelect={handleToggleSelect}
              onStartDeleteMode={handleStartDeleteMode}
            />
          ))
        )}
      </div>
    </div>
  );
}