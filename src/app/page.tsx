
export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-gradient-to-r from-red-500 to-red-950">
       <form className="flex flex-col p-4 bg-gray-950 rounded-2xl shadow-lg">  
              <div className="flex items-center flex-col"> 
                 <h1 className="text-2xl font-bold m-4">Dados Gerais</h1>
                 <label>Nome:</label>
                 <input className="text-gray-200 bg-gray-600" type="text" id="name"minLength={3} placeholder="Carmem dos Santos" required></input>

                 <label>Data de Nascimento</label>
                 <input className="text-gray-200 bg-gray-600 " type="text" id="nascim" placeholder="07/02/05" pattern="\d{1,2}/\d{1,2}/\d{4}" required></input>

                 <label>CPF</label>
                 <input className="text-gray-200 bg-gray-600" type="text" id="cpf" pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" placeholder="000.000.000-00" required></input>

                 <label>Telefone</label>
                 <input className="text-gray-200 bg-gray-600" type="text" id="tel" pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" placeholder="00 90000-0000" required></input>

                 <button className="bg-gradient-to-r from-red-500 to-red-750 m-6 rounded-2xl p-4 text-gray-300">Enviar!</button>

              </div> 
       </form>
    </main>
  )
}
