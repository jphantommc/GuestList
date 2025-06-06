import useQuery from "./useQuery";

export default function GuestDetails({ guestId, setGuestId }) {
    const { data: guest,error } = useQuery(`/guests/${guestId}`);
    if (error) return <p>Sorry {error}</p>
    if (!guest) return <p>Loading...</p>;
    return (
        <article className="guest-details">
            <h1>{guest.name}</h1>
            <address>
                {guest.email}<br />
                {guest.phone}
            </address>
            <p>{guest.job}</p>
            <p>{guest.bio}</p>
            <button onClick={() => setGuestId(null)}>Back</button>
        </article>
    );
}