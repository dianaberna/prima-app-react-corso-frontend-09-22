import data from "./data.json";
import Card from "./Card";

export default function ListCard() {
    return (
        <>
        <h3>Prima lista</h3>
        <ul>
            {data.map((e) => (
                <li key={e.titolo}>
                    <p>{e.titolo}</p>
                    <p>{e.testo}</p>
                </li>
            ))}
            
        </ul>
        <h3>Seconda lista</h3>
        <List />
        </>
    );
}

export function List() {
    let volte = 10;
    let array = [];
    for (let i = 1; i < volte; i++) {
        array.push(
            <li>
                <Card />
            </li>
        );
    }
    return <ul>{array}</ul>;
}
