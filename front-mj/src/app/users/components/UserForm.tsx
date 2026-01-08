import { Button } from "@/components/ui/Button";
import { InputField } from "@/components/ui/InputField";
import { apiFetch } from "@/services/apiFetch";
import { FormEvent } from "react";

export const UserForm = () => {
  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    const { data } = await apiFetch.post("/users", formJson);
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
      <InputField name="name" label="Nome" />
      <div className="grid grid-cols-2 gap-4">
        <InputField name="dateOfBirth" label="Data de Nascimento" />
        <InputField name="cpf" label="CPF" />
        <InputField name="rg" label="RG" />
      </div>
      <InputField label="Endereço" />
      <div className="flex gap-4 ">
        <Button type="reset">Cancelar</Button>
        <Button>Enviar</Button>
      </div>
    </form>
  );
};
