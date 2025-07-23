import { useEffect, useMemo, useState } from "react";
import { Search } from "react-feather";
import { debounce, size } from "lodash";
import axios from "axios";
import SingleCharacter from "./SingleCharacter";
import AppModal from "../helpers/UI/AppModal";
import AppSpinner from "../helpers/UI/AppSpinner";
import Skelton from "../helpers/UI/Skelton";
import Card from "../helpers/UI/Card";
import Pagination from "../helpers/UI/Pagination";
import NotFound from "../helpers/UI/NotFound";

const StarWarCharacters = () => {
  const baseUrl = import.meta.env.VITE_SERVER_URL;

  // states
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSingleCharacter, setIsSingleCharacter] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);

  const fetchCharacters = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${baseUrl}/api/characters`, {
        params: {
          search: searchTerm,
          page: currentPage,
        },
      });
      if (res.status === 200) {
        setCharacters(res.data.characters);
        setTotalPages(res.data.pages);
      }
    } catch (error) {
      console.error("Failed to fetch characters", error);
    }
    setIsLoading(false);
  };

  const fetchCharacterDetails = async (id) => {
    setIsSingleCharacter(true);
    try {
      const res = await axios.get(`${baseUrl}/api/characters/${id}`);
      if (res.status === 200) {
        setSelectedCharacter(res.data);
        setIsModalOpen(true);
        setIsSingleCharacter(false);
      }
    } catch (error) {
      setIsSingleCharacter(false);
      setIsModalOpen(false);
      console.error("Failed to fetch character details", error);
    }
  };

  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        setSearchTerm(value);
        setCurrentPage(1);
      }, 500),
    []
  );

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    debouncedSearch(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  useEffect(() => {
    fetchCharacters();
  }, [searchTerm, currentPage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="py-2 mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-end items-center">
            <div className="relative w-full md:w-1/3 rounded-md shadow-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="search"
                placeholder="Search characters..."
                value={searchInput}
                onChange={handleSearchChange}
                className="w-full pl-10 h-10 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {isLoading ? (
            <Skelton />
          ) : size(characters) === 0 ? (
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <NotFound />
            </div>
          ) : (
            characters?.map((item, index) => (
              <Card
                key={index}
                data={item}
                fetchCharacterDetails={fetchCharacterDetails}
              />
            ))
          )}
        </div>

        {totalPages > 1 && (
          <Pagination
            handlePageChange={handlePageChange}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        )}
      </div>

      {isModalOpen && (
        <AppModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          className="bg-purple-100 border-2 border-purple-200"
        >
          {isSingleCharacter ? (
            <div className="flex justify-center items-center h-40">
              <AppSpinner />
            </div>
          ) : (
            <SingleCharacter
              data={selectedCharacter}
              handleCloseModal={handleCloseModal}
              isSingleCharacter={isSingleCharacter}
            />
          )}
        </AppModal>
      )}
    </div>
  );
};

export default StarWarCharacters;
