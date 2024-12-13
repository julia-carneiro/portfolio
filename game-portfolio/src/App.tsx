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
  software: {
    soft: string;
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
    software: {
      soft: "Software usado",
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
      text: "Aspiring 3D artist, I am still learning, but it is an area I am very interested in!",
    },
    software: {
      soft: "Software used",
    },
  },
};

// Interfaces for Projects
interface GameProject {
  id: number;
  title: {
    pt: string;
    en: string;
  };
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
    title: { pt: "Mooh", en: "Mooh" },
    description: {
      pt: "Trabalhei como Game Designer e GameDev em Mooh, um jogo de plataforma 2D em Pixel Art, single-player, dos gêneros ação e puzzle. Em cinco planetas, criei o GDD geral do jogo e individual de cada planeta, além de desenvolver as mecânicas no GameMaker. A gameplay é baseado em uma plataforma 360º, onde a personagem se movimenta ao redor de planetas, com a câmera acompanhando o seu ângulo pelo relevo. Contemplado pela Lei Paulo Gustavo, o jogo terá seu vertical slice lançado na Steam em 2025 e já conta com uma demo disponível.",
      en: "I worked as a Game Designer and Game Developer on Mooh, a 2D Pixel Art platformer, single-player game in the action and puzzle genres. Set across five planets, I created the overall and individual GDDs for each planet, as well as developing the mechanics in GameMaker. The gameplay is based on a 360º platform, where the character moves around planets, with the camera following their angular position along the terrain. Supported by the Paulo Gustavo Law, the game will release its vertical slice on Steam in 2025 and already has a demo available.",
    },
    cargo: ["GameDev", "Game Designer"],
    images: [
      "/images/mooh/24-06_Mooh_CapaSteam.jpg",
      "/images/mooh/mooh.png",
      "/images/mooh/24_07_Mooh_Print_005.jpg",
      "/images/mooh/24_07_Mooh_Print_006.jpg",
      "/images/mooh/plataforma_180.gif",
    ],
    link: "https://store.steampowered.com/app/3030950/Mooh/",
    plataformas: ["PC"],
  },
  {
    id: 2,
    title: { pt: "Colorful Ghosts", en: "Colorful Ghosts" },
    description: {
      pt: "Contribuí como Game Developer, desenvolvendo as mecânicas, e como Game Designer, elaborando o GDD e criando cerca de 50 níveis únicos em Colorful Ghosts, um jogo de lógica baseado em cores. O objetivo é posicionar os fantasmas nos espaços correspondentes às suas cores finais. O jogador utiliza doces para alterar as cores dos fantasmas, levando em conta seus tamanhos e como eles se encaixam nos espaços corretos.",
      en: "I contributed as a Game Developer, developing the mechanics, and as a Game Designer, creating the GDD and around 50 unique levels for Colorful Ghosts, a logic game based on colors. The objective is to position the ghosts in spaces corresponding to their final colors. The player uses candies to change the colors of the ghosts, taking into account their sizes and how they fit into the correct spaces.",
    },
    cargo: ["GameDev", "Game Designer"],
    images: [
      "/images/cg/cg1.png",
      "/images/cg/print1.png",
      "/images/cg/print2.png",
      "/images/cg/print3.png",
      "/images/cg/print5.png",
    ],
    link: "https://store.steampowered.com/app/2976190/Colorful_Ghost/?l=portuguese",
    plataformas: ["PC", "HTML5"],
  },
  {
    id: 3,
    title: { pt: "Wood Cutter", en: "Wood Cutter" },
    description: {
      pt: "Trabalhei na fase final do desenvolvimento de Wood Cutter, contribuindo com a criação e implementação de novos níveis para o jogo. Wood Cutter é um jogo de puzzle onde o objetivo é cortar madeira em formatos específicos, utilizando o mínimo de cortes possível.",
      en: "I worked on the final stage of Wood Cutter development, contributing to the creation and implementation of new levels for the game. Wood Cutter is a puzzle game where the goal is to cut wood into specific shapes using the fewest cuts possible.",
    },
    cargo: ["Level Designer"],
    images: [
      "/images/woodcutter/Banner2.png",
      "/images/woodcutter/corte.png",
      "/images/woodcutter/print1_wood.png",
      "/images/woodcutter/corte2.png",
    ],
    link: "https://bragiestudios.itch.io/wood-cutter",
    plataformas: ["Mobile", "HTML5"],
  },
  {
    id: 4,
    title: { pt: "Midas Touch", en: "Midas Touch" },
    description: {
      pt: "Em Midas Touch, um jogo para HTML5, fui responsável por criar o GDD e desenvolver as mecânicas principais do jogo. Midas Touch é um puzzle com visão isométrica, onde o objetivo é juntar elementos iguais. Os blocos de frutas se movem apenas em uma direção, e o jogador deve descobrir como agrupá-los com outros blocos iguais.",
      en: "In Midas Touch, an HTML5 game, I was responsible for creating the GDD and developing the core mechanics. Midas Touch is an isometric puzzle game where the goal is to match identical elements. The fruit blocks only move in one direction, and the player must figure out how to group them with other matching blocks.",
    },
    cargo: ["GameDev", "Game Designer"],
    images: [
      "/images/midas/midas.png",
      "/images/midas/print1.png",
      "/images/midas/print2.png",
      "/images/midas/gif1.gif",
    ],
    link: "https://bragiestudios.com/HTML5GAMES/MidasTouch_BETA/",
    plataformas: ["HTML5"],
  },
  {
    id: 5,
    title: { pt: "AstroCatch", en: "AstroCatch" },
    description: {
      pt: "Trabalhei como Game Designer, idealizando como seria a mecânica e elementos do AstroCatch. Também participei no desenvolvimento inicial do jogo. O AstroCatch envolve um gato astronauta lançado no espaço, onde o jogador o controla com o mouse para coletar planetas flutuantes enquanto desvia de inimigos que causam dano ao colidir.",
      en: "I worked as Game Designer, conceptualizing the mechanics and elements of AstroCatch. I also contributed to the initial development of the game. AstroCatch involves an astronaut cat launched into space, where the player controls them with the mouse to collect floating planets while dodging enemies that deal damage upon collision.",
    },
    cargo: ["Game Designer", "GameDev"],
    images: [
      "/images/astrocatch/capa.png",
      "/images/astrocatch/cat1.png",
      "/images/astrocatch/cat2.png",
      "/images/astrocatch/cat3.png",
    ],
    link: "https://bragiestudios.com/HTML5GAMES/AstroCatch_BETA/v000_000_302/",
    plataformas: ["HTML5"],
  },
  {
    id: 6,
    title: {
      pt: "O seu jogo!",
      en: "Your game!",
    },
    description: {
      pt: "Meu próximo projeto pode ser o jogo que você idealiza! Tenho experiência em desenvolver jogos para Web, mobile e PC, abrangendo desde jogos educativos e casuais até plataforma e ação. ",
      en: "My next project could be the game you envision! I have experience developing games for Web, mobile, and PC, ranging from educational and casual games to platform and action titles.",
    },
    cargo: ["Game Designer", "GameDev"],
    images: ["/images/Prancheta 1.png"],
    link: "mailto:juliacgsouza@gmail.com",
    plataformas: ["GameMaker", "C++"],
  },
];

// Updated Art3D Project Data with more details
const art3DProjects: Art3DProject[] = [
  {
    id: 1,
    title: "Mooh 3D ",
    description: {
      pt: "Modelagem 3D inspirada na personagem principal do jogo Mooh.",
      en: "3D Modeling inspired by the main character from the game Mooh.",
    },
    images: [
      "/images/mooh3d/m1.jpeg",
      "/images/mooh3d/m2.jpeg",
      "/images/mooh3d/m3.jpeg",
      "/images/mooh3d/m4.jpeg",
      "/images/mooh3d/m5.jpeg",
      "/images/mooh3d/m6.jpeg",
    ],
    link: "#",
    software: ["Nomad Sculpt"],
  },
  {
    id: 2,
    title: "Daughter of Hallownest",
    description: {
      pt: "Modelagem da Hornet do jogo Hollow Knight.",
      en: "3D Modeling og Hornet from the game Hollow Knight.",
    },
    images: [
      "/images/hollow/h2.PNG",
      "/images/hollow/h1.PNG",
      "/images/hollow/h4.GIF",
      "/images/hollow/h5.PNG",
      "/images/hollow/h6.GIF",
    ],
    link: "#",
    software: ["Nomad Sculpt"],
  },
  {
    id: 3,
    title: "Elf",
    description: {
      pt: "Modelagem de uma menina meio Elfa :)",
      en: "3D Modeling of an Elf girl",
    },
    images: [
      "/images/menina/m1.png",
      "/images/menina/m3.png",
      "/images/menina/m2.png",
      "/images/menina/m4.png",
    ],
    link: "#",
    software: ["Nomad Sculpt"],
  },
  {
    id: 4,
    title: "Gameboy",
    description: {
      pt: "Modelagem de um Gameboy",
      en: "3D Modeling of a Gameboy",
    },
    images: [
      "/images/gameboy/g2.PNG",
      "/images/gameboy/g1.PNG",
      "/images/gameboy/g3.GIF",
      "/images/gameboy/g4.GIF",
    ],
    link: "#",
    software: ["Nomad Sculpt"],
  },
  {
    id: 5,
    title: "Panquecas",
    description: {
      pt: "Modelagem de um prato de panquecas feito como estudo inicial de 3D",
      en: "Modeling of a pancake plate made as an initial 3D study",
    },
    images: [
      "/images/panquecas/p2.PNG",
      "/images/panquecas/p3.PNG",
      "/images/panquecas/p1.GIF",
    ],
    link: "#",
    software: ["Nomad Sculpt"],
  },
  {
    id: 6,
    title: "Monstrinha",
    description: {
      pt: "Modelagem de uma criatura fofinha, uma das primeiras que fiz.",
      en: "Modeling of a cute creature, one of the firsts 3Ds that a did.",
    },
    images: [
      "/images/monster/mo1.PNG",
      "/images/monster/mo2.PNG",
      "/images/monster/mo3.PNG",
      "/images/monster/mo4.PNG",
    ],
    link: "#",
    software: ["Nomad Sculpt"],
  },
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
                        alt={game.title[language]}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                    </div>
                    <CardContent className="p-4 flex-grow bg-rose-50">
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">
                        {game.title[language]}
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
              onClick={closeGameDetails}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-amber-50 rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
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
                      {selectedGame.title[language]}
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
              onClick={closeArtDetails}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-amber-50 rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
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
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 backdrop-blur-sm p-2 rounded-full hover:bg-white/75 transition"
                        >
                          <ChevronLeft className="text-gray-800" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Adicione esta linha
                            nextImage();
                          }}
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
                          {languageContent[language].software.soft}
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
