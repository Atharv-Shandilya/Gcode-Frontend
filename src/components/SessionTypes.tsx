import SessionTypeCard from "./SessionTypeCard";

export default function SessionsType() {
  return (
    <article className="border p-6 max-w-[600px] border-black/10 rounded-xl">
      <h2 className="text-lg font-semibold ">Available Sessions</h2>
      <p className="mb-4 text-black/60">
        Book 1:1 sessions from the options based on your needs
      </p>
      <section>
        <SessionTypeCard />
        <SessionTypeCard />
        <SessionTypeCard />
      </section>
    </article>
  );
}
