"use client";
import { Drawer } from "@/components/Drawer";
import { LayoutAdmin } from "@/components/layouts/LayoutAdmin";
import { useDisclosure } from "@/hooks/useDisclosure";
import { UserForm } from "./components/UserForm";

export default function UsersPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <LayoutAdmin>
      <div className="flex justify-end p-4">
        <Drawer
          label="Novo Usuário"
          headerding="Cadastro de Usuários"
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        >
          <UserForm />
        </Drawer>
      </div>
    </LayoutAdmin>
  );
}
