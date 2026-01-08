import { Table, Search } from "lucide-react";
import Image from "next/image";
import imgPerfil from "../../../public/perfil.jpg";

export const Header = () => {
  return (
    <header className="col-start-2 col-end-3 bg-[#1d1d2f] text-white">
      <div className="flex justify-between m-4">
        <div className="flex gap-4 justify-center items-center">
          <Table />
          <label>Tabela de bord</label>
          <input
            placeholder="Pesquisar"
            className="border-1 border-white-400 rounded-md pl-2"
            type="text"
            name="Pesquisa"
            id=""
          />
          <Search />
        </div>

        <div className="flex items-center gap-4">
          <Image
            src={imgPerfil}
            alt="foto de perfil"
            className="object-contain h-8 w-8 rounded-full"
          />
          <p>João</p>
        </div>
      </div>
    </header>
  );
};
