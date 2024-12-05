import { useEffect, useState, useRef } from 'react'
import './style.css'
import api from '../../services/api.js'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Trash from '../../assets/trash.png'

function Donations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [needs, setNeeds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [filters, setFilters] = useState({
    type: ''
  });

  useEffect(() => {
    fetchNeeds();
    console.log('needs useEffects', needs)
  }, [searchTerm, currentPage, filters]);


  async function fetchNeeds() {
    try {
      const response = await api.get(`/api/v1/necessidades?search=${searchTerm}&page=${currentPage}&limit=${itemsPerPage}`)
      setNeeds(response.data)
      console.log('response fetchNeeds', response)
    } catch (error) {
      console.error('Erro ao buscar necessidades:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reinicia para a primeira página ao buscar
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      < Header />
      <div className="search-page">
        {/* Campo de Busca */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar necessidades..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {/* Layout com Filtros e Listagem */}
        <div className="content">
          <aside className="filters">
            <h3>Filtros</h3>
            <ul>Categoria
              <li>
                <input
                  type="checkbox"
                  value="produto"
                  onChange={(e) => setFilters([...filters, e.target.value])}
                />
                Produtos
              </li>
              <li>
                <input
                  type="checkbox"
                  value="serviço"
                  onChange={(e) => setFilters([...filters, e.target.value])}
                />
                Serviços
              </li>
            </ul>
          </aside>

          <section className="cards">
            {needs.map((need) => (
              <div className="card" key={need.id}>
                <img src={Trash} alt={need.title} />
                <h4>{need.title}</h4>
                <p>{need.type}</p>
                <p>{need.description}</p>
              </div>
            ))}
          </section>
        </div>

        {/* Paginação */}
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <span>Página {currentPage}</span>
          <button onClick={() => handlePageChange(currentPage + 1)}>
            Próxima
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Donations

