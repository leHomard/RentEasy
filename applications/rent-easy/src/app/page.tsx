import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form>
        <input placeholder="Lessor" name="lessor" />
        <Button type="submit">Add Lessor</Button>
      </form>
    </main>
  );
}
