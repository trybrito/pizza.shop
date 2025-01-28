import "./global.css";

import { Button } from "@/components/ui/button";

export function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Button variant="outline">Botão</Button>
      <Button>Botão</Button>
      <Button>Botão</Button>
    </div>
  );
}
