import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">

      <nav className="absolute right-1 top-1">
        <ModeToggle />
      </nav>

      <aside className="h-screen hidden lg:block">
        <Image src="/login.png" alt="login" width={554} height={832} />
      </aside>

      <div>
        <div className="size-[75px] bg-rose-600 rounded-full"> </div>
        <h1 className="text-4xl font-extrabold uppercase">Sphere</h1>
        <Tabs defaultValue="entrar" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="entrar">entrar</TabsTrigger>
            <TabsTrigger value="registrar">registrar</TabsTrigger>
          </TabsList>

          <TabsContent value="entrar">
            <form action="">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
            </form>
            <form action="">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">password</Label>
                <Input type="password" id="password" placeholder="password" />
              </div>
            </form>
          </TabsContent>

          <TabsContent value="registrar">
            <h1>Form de registrar</h1>
          </TabsContent>
        </Tabs>

      </div>
    </main>
  );
}
