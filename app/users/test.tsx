"use client";

export default function UczestnicyPage() {
  const uczestnicy = [
    { id: 1, name: "Anna Kowalska", status: "Głosiciel", active: true },
    { id: 2, name: "Jan Nowak", status: "Pionier St.", active: false },
  ];

  const statusOptions = ["Głosiciel", "Pionier Pom.", "Pionier St."];

  return (
    <div className="p-4">
      {/* Formularz dodawania */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Nowy uczestnik"
          className="input input-bordered w-full"
        />
        <select className="select select-bordered w-full md:w-48">
          {statusOptions.map((status) => (
            <option key={status}>{status}</option>
          ))}
        </select>
        <button className="btn btn-primary w-full md:w-auto">Dodaj</button>
      </div>

      {/* Tabela uczestników */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>
                <button className="btn btn-ghost btn-xs">
                  Imię i nazwisko ↓
                </button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs">Status</button>
              </th>
              <th>Aktywny</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {uczestnicy.map((p) => (
              <tr key={p.id}>
                <td>
                  <input
                    type="text"
                    defaultValue={p.name}
                    className="input input-ghost w-full"
                  />
                </td>
                <td>
                  <select className="select select-sm w-full">
                    {statusOptions.map((status) => (
                      <option key={status} selected={status === p.status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="checkbox"
                    className="toggle toggle-success"
                    defaultChecked={p.active}
                  />
                </td>
                <td>
                  {/* Trigger dla modala */}
                  <label
                    htmlFor={`modal-${p.id}`}
                    className="btn btn-sm btn-error"
                  >
                    Usuń
                  </label>

                  {/* Modal */}
                  <input
                    type="checkbox"
                    id={`modal-${p.id}`}
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Potwierdzenie</h3>
                      <p className="py-4">Czy chcesz usunąć {p.name}?</p>
                      <div className="modal-action">
                        <label htmlFor={`modal-${p.id}`} className="btn">
                          Anuluj
                        </label>
                        <label
                          htmlFor={`modal-${p.id}`}
                          className="btn btn-error"
                        >
                          Usuń
                        </label>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
