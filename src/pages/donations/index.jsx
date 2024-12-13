import { useEffect, useState, useRef } from 'react'
import './style.css'
import api from '../../services/api.js'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function Donations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [needs, setNeeds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [filters, setFilters] = useState({
    type: ''
  });
  const [totalItems, setTotalItems] = useState(0); // Total de itens no banco
  const [isModalConfirmationOpen, setIsModalConfirmationOpen] = useState(false);
  const [userNeedIdForDonation, setUserNeedIdForDonation] = useState('');
  const [userNeedQuantityForDonation, setUserNeedQuantityForDonation] = useState(''); 

  const navigate = useNavigate()

  useEffect(() => {
    fetchNeeds();
  }, [searchTerm, currentPage, filters]);


  // Função para buscar dados da API com relação das necessidades
  const fetchNeeds = async () => {
    try {
      filters.state = 'pending'
      const queryParams = new URLSearchParams({
        search: searchTerm,
        page: currentPage,
        limit: itemsPerPage,
        ...filters, // Adiciona filtros dinamicamente
      }).toString();

      const response = await api.get(`/api/v1/necessidades?${queryParams}`);
      setNeeds(response.data.data);
      setTotalItems(response.data.totalItems);
    } catch (error) {
      console.error('Erro ao buscar necessidades:', error);
    }
  };

  // Função para executar a programação de doação
  async function createDonation(UserNeedId, UserNeedQuantity) {
    try {
      const token = localStorage.getItem('donations-token');
      let decoded = null
      if (token) {
        // Decodifica o token
        decoded = jwtDecode(token)
        console.log(decoded)
      }

      await api.post('/api/v1/doacao', {
        "donorId": decoded.userId,
        "userNeedsId": UserNeedId,
        "quantity": UserNeedQuantity
      })

      navigate('/donation-success')

    } catch (error) {
      console.error('Erro ao realizar programação de doação:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reinicia para a primeira página ao buscar
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(totalItems / itemsPerPage)) {
      setCurrentPage(newPage);
    }
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

  const handleOpenConfirmationModal = (id, quantity) => {
    setIsModalConfirmationOpen(true);
    setUserNeedIdForDonation(id);
    setUserNeedQuantityForDonation(quantity);
  };

  const handleCloseConfirmationModal = () => {
    setIsModalConfirmationOpen(false);
  };

  const handleConfirmDonation = () => {
    console.log('Ação confirmada!');
    console.log('UserNeedIdForDonation', userNeedIdForDonation)
    console.log('UserNeedQuantityForDonation', userNeedQuantityForDonation)
    createDonation(userNeedIdForDonation, userNeedQuantityForDonation)
    setIsModalConfirmationOpen(false);
  };

  //adicionar dados de contato ao realizar doação
  //trecho adicionado 2
  //trecho adicionado 3

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

          <div className='contente-cards-pagination'>
            <section className="cards">
              {needs.map((need) => (
                <div className="card" key={need.id}>
                  <img src={need.imageUrl} alt={need.title} />
                  <h4>{need.title}</h4>
                  <p>{need.description}</p>
                  <p>Quantidade:  {need.quantity}</p> 
                  <div className='container-card-ultima-linha'>
                    <span className='card-categoria'>{need.type}</span>
                    <button onClick={() => handleOpenConfirmationModal(need.id, need.quantity)}>Fazer Doação</button>
                  </div>
                </div>
              ))}
            </section>
            {/* Paginação */}
            <div className="pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Anterior
              </button>
              <span>Página {currentPage}</span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}>
                Próxima
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalConfirmationOpen && (
        <div id='modalOverlayStyle'>
          <div id='modalStyle'>
            <h2>Confirmar Doação</h2>
            <br />
            <h3>Você tem certeza que deseja realizar esta ação?</h3>
            <br />
            <p>Ao confirmar você receberá um e-mail com as informações de contato da pessoa que possui esta necessidade. Da mesma forma, ela também receberá suas informações de contato, permitindo que vocês combinem a melhor forma de realizar a entrega do produto ou a prestação do serviço doado.</p>
            <div id='modalActionsStyle'>
              <button onClick={handleCloseConfirmationModal} id='cancelButtonStyle'>
                Cancelar
              </button>
              <button onClick={handleConfirmDonation} id='confirmButtonStyle'>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Donations

