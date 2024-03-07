import { Calculator } from "./components/calculator";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 bg-white min-h-screen">
      <Calculator />
    </main>
  );
}
