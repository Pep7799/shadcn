import { Button } from "@/components/ui/button"


export default function Nav() {
  return (
    <main className="m-20 ml-52">
      <section className="mb-10">
      <p>Click here to see how to win the bonuses</p>
      <Button variant="secondary">Button</Button>
      </section>
      <section className="mb-10">
      <p>New users click here</p>
      <Button size =  "default" variant="outline">Sign up</Button>
      </section>
      <p>Existing users, click here</p>
      <Button variant="destructive" size='default'>Log in</Button>
    </main>
  )
}
