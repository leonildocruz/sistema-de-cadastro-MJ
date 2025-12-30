import { PropsWithChildren } from "react";
import Image from "next/image";
import { Search, Table, House } from "lucide-react";
import imgPerfil from "../../../public/perfil.jpg";

export const LayoutAdmin = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-[140px_1fr] grid-rows-[60px_1fr] h-full">
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
      <aside className="row-start-1 row-end-3 col-start-1 col-end-2 bg-[#1d1d2f] text-white">
        <div className="flex flex-col items-center justify-center gap-10 text-xs mt-10">
          <p className="flex flex-col items-center gap-1">
            <House /> ASIDE
          </p>
          <p className="flex flex-col items-center gap-1">
            <Table /> TABELA
          </p>
          <p className="flex flex-col items-center gap-1">
            <House /> CLAENDÁRIO
          </p>
          <p className="flex flex-col items-center gap-1">
            <Table /> PERFIL
          </p>
          <p className="flex flex-col items-center gap-1">
            <House /> CONFIGURAÇÃO
          </p>
          <p className="flex flex-col items-center gap-1">
            <Table /> AJUDA
          </p>
        </div>
      </aside>
      <main className="bg-[#191938] text-white">{children}</main>
    </div>
  );
};
