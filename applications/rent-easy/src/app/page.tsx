import { Button } from '@/components/ui/button';
import { SignIn } from '../components/sign-in';
import { SignOut } from '../components/sign-out';
import { auth } from '@/auth';

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? <SignOut /> : <SignIn />}
      <form>
        <input placeholder="Lessor" name="lessor" />
        <Button type="submit">Add Lessor</Button>
      </form>
    </main>
  );
}
