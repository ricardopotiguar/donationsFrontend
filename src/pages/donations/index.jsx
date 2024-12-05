import { useEffect, useState, useRef } from 'react'
import './style.css'
import api from '../../services/api.js'
import Header from '../../components/header'
import Footer from '../../components/footer'
import BannerAjuda from '../../assets/banner_ajuda.jpg'

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
  }, [searchTerm, currentPage, filters]);


  // Função para buscar dados da API
  const fetchNeeds = async () => {
    try {
      const queryParams = new URLSearchParams({
        search: searchTerm,
        page: currentPage,
        limit: itemsPerPage,
        ...filters, // Adiciona filtros dinamicamente
      }).toString();

      const response = await api.get(`/api/v1/necessidades?${queryParams}`);
      setNeeds(response.data);
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

  // Manipula a alteração de filtros
  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
    setCurrentPage(1); // Reinicia na página 1 após filtrar
  };

  return (
    <div>
      < Header />
      <div className="search-page">
        {/* Campo de Busca */}
        <div className="search-bar">
          <h1>Necessidades</h1>
          <input
            type="text"
            placeholder="Buscar necessidades..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {/* Layout com Filtros e Listagem */}
        <div className="content">
          <div className="content-filters"> 
            <label>Categoria</label>
            <select
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="">Todas</option>
              <option value="serviço">Serviços</option>
              <option value="produto">Produtos</option>
            </select>
          </div>

          <section className="cards">
            {needs.map((need) => (
              <div className="card" key={need.id}>
                <img src={BannerAjuda} alt={need.title} />
                <h4>{need.title}</h4>
                <p>{need.description}</p>
                <span className='card-categoria'>{need.type}</span>
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

