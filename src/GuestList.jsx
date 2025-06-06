import useQuery from "./useQuery";

export default function GuestList({ setGuestId }) {
    const { data: guests,error } = useQuery("/guests");
    if (error) return <p>Sorry {error}</p>
    if (!guests) return <p>Loading...</p>;
    return (
        <>
        <h1>Guest List</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {guests.map((guest) => ( 
                    <tr key={guest.id} onClick={() => setGuestId(guest.id)}>
                        <td>{guest.name}</td>
                        <td>{guest.email}</td>
                        <td>{guest.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <p>Learn more about me!</p>
        </>
    );

}