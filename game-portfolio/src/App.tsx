import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Internationalization interfaces
interface LanguageContent {
  header: {
    name: string;
    role: string;
  };
  tabs: {
    games: string;
    art3d: string;
  };
  details: {
    roles: string;
    plataformas: string;
    playNow: string;
  };
  text3d: {
    text: string;
  };
}

const languageContent: Record<string, LanguageContent> = {
  pt: {
    header: {
      name: "Júlia Carneiro",
      role: "Desenvolvedora de Jogos & Game Designer",
    },
    tabs: {
      games: "Projetos de Jogos",
      art3d: "Arte 3D",
    },
    details: {
      roles: "Meus Papéis:",
      plataformas: "Plataformas:",
      playNow: "Jogar Agora",
    },
    text3d: {
      text: "Aspirante a artista 3d, ainda estou aprendendo porém é uma área que tenho muito interesse!",
    },
  },
  en: {
    header: {
      name: "Julia Carneiro",
      role: "Game Developer & Game Designer",
    },
    tabs: {
      games: "Game Projects",
      art3d: "3D Art",
    },
    details: {
      roles: "My Roles:",
      plataformas: "Plataforms:",
      playNow: "Play Now",
    },
    text3d: {
      text: "Aspirante a artista 3d, ainda estou aprendendo porém é uma área que tenho muito interesse!",
    },
  },
};

// Interfaces for Projects
interface GameProject {
  id: number;
  title: string;
  description: {
    pt: string;
    en: string;
  };
  cargo: string[];
  images: string[];
  link: string;
  plataformas?: string[];
}

interface Art3DProject {
  id: number;
  title: string;
  description: {
    pt: string;
    en: string;
  };
  images: string[];
  link: string;
  software?: string[];
}

// Project Data
const gameProjects: GameProject[] = [
  {
    id: 1,
    title: "Mooh",
    description: {
      pt: "Um RPG de aventura com mecânicas de combate únicas e um mundo expansivo para explorar. Desenvolvido com Unity, o jogo combina elementos de fantasia e mistério.",
      en: "An adventure RPG with unique combat mechanics and an expansive world to explore. Developed with Unity, the game combines fantasy and mystery elements.",
    },
    cargo: ["GameDev", "Game Designer"],
    images: [
      "/images/24-06_Mooh_Cabeçalho_460x215.png",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
    ],
    link: "https://store.steampowered.com/app/3030950/Mooh/",
    plataformas: ["Unity", "C#"],
  },
  {
    id: 2,
    title: "Colorful Ghosts",
    description: {
      pt: "Jogo de corrida espacial com mecânicas de física realistas e design de naves customizáveis. Criado usando Unreal Engine para proporcionar uma experiência de corrida futurista.",
      en: "Space racing game with realistic physics mechanics and customizable ship design. Created using Unreal Engine to provide a futuristic racing experience.",
    },
    cargo: ["GameDev", "Game Designer"],
    images: [
      "/images/cg1.png",
      "/images/print_lvl25.png",
      "/api/placeholder/800/600",
    ],
    link: "https://www.exemplo.com/colorful-ghosts",
    plataformas: ["Unreal Engine", "C++"],
  },
  {
    id: 3,
    title: "Wood Cutter",
    description: {
      pt: "Jogo de corrida espacial com mecânicas de física realistas e design de naves customizáveis. Criado usando Unreal Engine para proporcionar uma experiência de corrida futurista.",
      en: "Space racing game with realistic physics mechanics and customizable ship design. Created using Unreal Engine to provide a futuristic racing experience.",
    },
    cargo: ["Level Designer"],
    images: [
      "/images/Banner2.png",
      "/images/print_lvl25.png",
      "/api/placeholder/800/600",
    ],
    link: "https://bragiestudios.itch.io/wood-cutter",
    plataformas: ["Unreal Engine", "C++"],
  },
  {
    id: 4,
    title: "Midas Touch",
    description: {
      pt: "Jogo de corrida espacial com mecânicas de física realistas e design de naves customizáveis. Criado usando Unreal Engine para proporcionar uma experiência de corrida futurista.",
      en: "Space racing game with realistic physics mechanics and customizable ship design. Created using Unreal Engine to provide a futuristic racing experience.",
    },
    cargo: ["GameDev", "Game Designer"],
    images: [
      "/images/midas.png",
      "/images/print_lvl25.png",
      "/api/placeholder/800/600",
    ],
    link: "https://bragiestudios.com/HTML5GAMES/MidasTouch_BETA/",
    plataformas: ["Unreal Engine", "C++"],
  },
  {
    id: 5,
    title: "AstroCatch",
    description: {
      pt: "Jogo de corrida espacial com mecânicas de física realistas e design de naves customizáveis. Criado usando Unreal Engine para proporcionar uma experiência de corrida futurista.",
      en: "Space racing game with realistic physics mechanics and customizable ship design. Created using Unreal Engine to provide a futuristic racing experience.",
    },
    cargo: ["Game Designer", "GameDev"],
    images: [
      "/images/capa.png",
      "/images/print_lvl25.png",
      "/api/placeholder/800/600",
    ],
    link: "https://bragiestudios.com/HTML5GAMES/AstroCatch_BETA/v000_000_302/",
    plataformas: ["Unreal Engine", "C++"],
  },
];

// Updated Art3D Project Data with more details
const art3DProjects: Art3DProject[] = [
  {
    id: 1,
    title: "Mooh Character",
    description: {
      pt: "Modelagem 3D do personagem principal do jogo Mooh, capturando sua essência de aventureiro.",
      en: "3D Modeling of the main character from the Mooh game, capturing their adventurer essence.",
    },
    images: [
      "/images/24-06_Mooh_Cabeçalho_460x215.png",
      "/images/mooh-character-2.png",
      "/images/mooh-character-3.png",
    ],
    link: "#",
    software: ["Blender", "ZBrush"],
  },
  {
    id: 2,
    title: "Spaceship Design",
    description: {
      pt: "Design de nave espacial para o projeto Colorful Ghosts, focando em linhas futuristas e dinâmicas.",
      en: "Spaceship design for the Colorful Ghosts project, focusing on futuristic and dynamic lines.",
    },
    images: [
      "/images/cg1.png",
      "/images/spaceship-2.png",
      "/images/spaceship-3.png",
    ],
    link: "#",
    software: ["Maya", "Substance Painter"],
  },
  // ... (add more art projects similarly)
];

const GamePortfolio: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<GameProject | null>(null);
  const [selectedArt, setSelectedArt] = useState<Art3DProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  const openGameDetails = (game: GameProject): void => {
    setSelectedGame(game);
    setCurrentImageIndex(0);
  };

  const openArtDetails = (art: Art3DProject): void => {
    setSelectedArt(art);
    setCurrentImageIndex(0);
  };

  const closeGameDetails = (): void => {
    setSelectedGame(null);
  };

  const closeArtDetails = (): void => {
    setSelectedArt(null);
  };

  const nextImage = (): void => {
    if (selectedGame) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % selectedGame.images.length
      );
    } else if (selectedArt) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedArt.images.length - 1 : prevIndex - 1
      );
    }
  };

  const prevImage = (): void => {
    if (selectedGame) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedGame.images.length - 1 : prevIndex - 1
      );
    } else if (selectedArt) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedArt.images.length - 1 : prevIndex - 1
      );
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        {/* Language Toggle Button */}
        <button
          onClick={toggleLanguage}
          className="absolute top-4 right-4 bg-rose-100 shadow-md p-2 rounded-full hover:bg-rose-200 transition"
        >
          <Globe className="text-amber-800" />
          <span className="sr-only">Toggle Language</span>
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl font-extrabold text-amber-900 mb-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {languageContent[language].header.name}
          </motion.h1>
          <p className="text-xl text-amber-700 font-medium mb-4">
            {languageContent[language].header.role}
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://www.linkedin.com/in/julia-carneiroo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-800 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/julia-carneiro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-800 hover:text-gray-600 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={28} />
            </a>
            <a
              href="mailto:juliacgsouza@gmail.com"
              className="text-amber-800 hover:text-red-600 transition-colors"
              aria-label="Send Email"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="games" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-rose-100">
            <TabsTrigger
              value="games"
              className="data-[state=active]:bg-amber-900 data-[state=active]:text-white"
            >
              {languageContent[language].tabs.games}
            </TabsTrigger>
            <TabsTrigger
              value="art3d"
              className="data-[state=active]:bg-amber-900 data-[state=active]:text-white"
            >
              {languageContent[language].tabs.art3d}
            </TabsTrigger>
          </TabsList>
          {/* Games Tab Content */}
          <TabsContent value="games">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {gameProjects.map((game) => (
                <motion.div
                  key={game.id}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
                  }}
                  className="group"
                >
                  <Card
                    className="h-full flex flex-col overflow-hidden border-2 border-transparent group-hover:border-amber-500 transition-all duration-300"
                    onClick={() => openGameDetails(game)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={game.images[0]}
                        alt={game.title}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                    </div>
                    <CardContent className="p-4 flex-grow bg-rose-50">
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">
                        {game.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {game.cargo.map((role) => (
                          <span
                            key={role}
                            className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                      <p className="text-amber-700 text-sm line-clamp-3">
                        {game.description[language]}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Game Tab Content */}
          <TabsContent value="art3d">
            <h3 className="text-l font-semibold text-gray-800 mb-4 text-center">
              {languageContent[language].text3d.text}
            </h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {art3DProjects.map((art) => (
                <motion.div
                  key={art.id}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
                  }}
                  className="group"
                >
                  <Card
                    className="h-full flex flex-col overflow-hidden border-2 border-transparent group-hover:border-amber-500 transition-all duration-300"
                    onClick={() => openArtDetails(art)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={art.images[0]}
                        alt={art.title}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                    </div>
                    <CardContent className="p-4 flex-grow">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {art.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {art.description[language]}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Modal for Game Details */}
        <AnimatePresence>
          {selectedGame && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-amber-50 rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-auto"
              >
                <div className="grid md:grid-cols-2 gap-6 p-6 relative">
                  {/* Close Button */}
                  <button
                    onClick={closeGameDetails}
                    className="absolute top-4 right-4 text-rose-500 hover:text-rose-700 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>

                  {/* Image Carousel */}
                  <div className="relative">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={selectedGame.images[currentImageIndex]}
                        alt={`${selectedGame.title} screenshot`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                      />
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    {selectedGame.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-rose-100/50 backdrop-blur-sm p-2 rounded-full hover:bg-rose-100 transition"
                        >
                          <ChevronLeft className="text-amber-900" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-rose-100/50 backdrop-blur-sm p-2 rounded-full hover:bg-rose-100 transition"
                        >
                          <ChevronRight className="text-amber-900" />
                        </button>
                      </>
                    )}

                    {/* Image Indicators */}
                    <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
                      {selectedGame.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex
                              ? "bg-amber-900"
                              : "bg-rose-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Game Details */}
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-amber-900">
                      {selectedGame.title}
                    </h2>
                    <p className="text-amber-800">
                      {selectedGame.description[language]}
                    </p>

                    <div>
                      <h3 className="font-semibold text-amber-900 mb-2">
                        {languageContent[language].details.roles}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedGame.cargo.map((role) => (
                          <span
                            key={role}
                            className="px-3 py-1 bg-rose-100 text-amber-900 rounded-full text-sm"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Plataforms */}
                    {selectedGame.plataformas && (
                      <div>
                        <h3 className="font-semibold text-amber-900 mb-2">
                          {languageContent[language].details.plataformas}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedGame.plataformas.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Play Now Button */}
                    <a
                      href={selectedGame.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-amber-900 text-white rounded-lg hover:bg-amber-700 transition-colors group"
                    >
                      {languageContent[language].details.playNow}
                      <ExternalLink
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                        size={20}
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Art Details Modal */}
        <AnimatePresence>
          {selectedArt && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-amber-50 rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-auto"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8 relative">
                  {/* Close Button */}
                  <button
                    onClick={closeArtDetails}
                    className="absolute top-4 right-4 text-gray-500 hover:text-amber-500 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>

                  {/* Large Image Carousel */}
                  <div className="relative">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={selectedArt.images[currentImageIndex]}
                        alt={`${selectedArt.title} artwork`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                      />
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    {selectedArt.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 backdrop-blur-sm p-2 rounded-full hover:bg-white/75 transition"
                        >
                          <ChevronLeft className="text-gray-800" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 backdrop-blur-sm p-2 rounded-full hover:bg-white/75 transition"
                        >
                          <ChevronRight className="text-gray-800" />
                        </button>
                      </>
                    )}

                    {/* Image Indicators */}
                    <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
                      {selectedArt.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex
                              ? "bg-amber-600"
                              : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Art Details */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {selectedArt.title}
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {selectedArt.description[language]}
                    </p>

                    {/* Software Used */}
                    {selectedArt.software && (
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">
                          Software Used:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedArt.software.map((soft) => (
                            <span
                              key={soft}
                              className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                            >
                              {soft}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default GamePortfolio;
