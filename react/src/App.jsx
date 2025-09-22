import React from 'react'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold">FS</div>
            <div>
              <h1 className="text-lg font-semibold">Fila+ Saúde</h1>
              <p className="text-xs text-gray-500">Agenda + fila virtual + teleconsulta</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold">Dashboard (mock)</h2>
        <div className="mt-6 grid gap-4">
          <div className="p-4 bg-white rounded shadow">09:00 - Ana Silva — Em espera</div>
          <div className="p-4 bg-white rounded shadow">09:30 - João Pedro — Teleconsulta</div>
        </div>
      </main>
    </div>
  )
}
