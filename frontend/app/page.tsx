"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";

type FreteResponse = {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  valor_frete: string;
};

const FormScrema = z.object({
  zipcode: z.string().min(8, {
    message: "CEP precisa ter 8 digitos"
  })
})

async function consultarFrete(cep: string): Promise<FreteResponse> {
  const response = await axios.get<FreteResponse>('http://localhost:5000/frete', {
    params: { cep }
  });
  return response.data;
}

export default function Home() {
  const form = useForm<z.infer<typeof FormScrema>>({
    resolver: zodResolver(FormScrema),
    defaultValues: {
      zipcode: "",
    }
  });

  const [frete, setFrete] = useState<string | null>(null);

  async function onSubmit(data: z.infer<typeof FormScrema>) {
    const cep = data.zipcode;

    try {
      const response = await axios.get<FreteResponse>('http://localhost:5000/frete', {
        params: { cep }
      });

      const frete = response.data.valor_frete;
      setFrete(frete);
      toast("CEP consultado com sucesso");
    } catch (error) {
      console.error("Erro ao consultar frete:", error);
      toast("Erro ao consultar frete", {
        description: "Verifique se o CEP está correto.",
      });
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
            <FormField
              control={form.control}
              name="zipcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Calcule o frete aqui</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={8} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={5} />
                        <InputOTPSlot index={6} />
                        <InputOTPSlot index={7} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormDescription>
                    Por favor digite seu CEP.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Calcular</Button>
          </form>
        </Form>

        {frete && (
          <div className="mt-4 text-green-600 font-semibold">
            Valor do frete: R$ {frete}
          </div>
        )}
      </main>
    </div>
  );
}
