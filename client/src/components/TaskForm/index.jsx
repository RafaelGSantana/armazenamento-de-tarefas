import './styles.scss';

export function TaskForm({
   title,
   setTitle,
   date,
   setDate,
   isUpdating,
   handleUpdateTask,
   handleCreateTask
}) {
   return (
      <form className="form">
         <div className="input-group">
            <label htmlFor="">Título da tarefa:</label>
            <input
               type="text"
               placeholder="Digite a tarefa a ser realizada:"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
         </div>
         <div className="input-group">
            <label htmlFor="">Selecione a data de conclusão:</label>

            <input
               type="date"
               value={date}
               min={new Date().toISOString().split('T')[0]}
               onChange={(e) => setDate(e.target.value)}
            />
         </div>
         {
            isUpdating ? (
               <button onClick={handleUpdateTask}>
                  Atualizar
               </button>
            ) : (
               <button onClick={handleCreateTask}>
                  Adicionar
               </button>
            )
         }
      </form>
   );
}